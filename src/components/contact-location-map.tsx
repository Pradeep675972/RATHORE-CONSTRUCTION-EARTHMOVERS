"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

type Point = { x: number; y: number };
type Transform = { x: number; y: number; scale: number };
type Position = { x: number; y: number };
type PolygonCoordinates = number[][][];
type MultiPolygonCoordinates = number[][][][];
type BoundaryFeature = {
  type: "Feature";
  properties: { name: string; level: "country" | "state" | "district"; state?: string };
  geometry: { type: "Polygon"; coordinates: PolygonCoordinates } | { type: "MultiPolygon"; coordinates: MultiPolygonCoordinates };
};
type RenderedBoundaryFeature = BoundaryFeature & { path: string };
type CountryBoundary = RenderedBoundaryFeature & { properties: { name: string; level: "country"; state?: string } };
type StateBoundary = RenderedBoundaryFeature & { properties: { name: string; level: "state"; state?: string } };
type DistrictBoundary = RenderedBoundaryFeature & { properties: { name: string; level: "district"; state?: string } };
type HoveredFeature = { name: string; level: "state" | "district"; state?: string };
type BoundaryPathsProps = {
  countries: CountryBoundary[];
  states: StateBoundary[];
  districts: DistrictBoundary[];
  hoveredFeature: HoveredFeature | null;
  onShowFeature: (event: React.PointerEvent<SVGPathElement>, feature: HoveredFeature) => void;
};

const MIN_SCALE = 1;
const MAX_SCALE = 8;
const INDIA_CENTER = { longitude: 82.5, latitude: 22 };
const LONGITUDE_SCALE = Math.cos((INDIA_CENTER.latitude * Math.PI) / 180);
const PROJECTION_SCALE = 12;

function distance(a: Point, b: Point) {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

function clampTransform(transform: Transform, width: number, height: number): Transform {
  return {
    ...transform,
    x: Math.min(0, Math.max(width * (1 - transform.scale), transform.x)),
    y: Math.min(0, Math.max(height * (1 - transform.scale), transform.y)),
  };
}

function project(longitude: number, latitude: number): Point {
  return {
    x: 400 + (longitude - INDIA_CENTER.longitude) * LONGITUDE_SCALE * PROJECTION_SCALE,
    y: 225 - (latitude - INDIA_CENTER.latitude) * PROJECTION_SCALE,
  };
}

function ringPath(ring: number[][]): string {
  if (ring.length < 3) return "";
  return `${ring.map(([longitude, latitude], index) => {
    const { x, y } = project(longitude, latitude);
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ")} Z`;
}

function geometryPath(feature: BoundaryFeature): string {
  const polygons = feature.geometry.type === "Polygon"
    ? [feature.geometry.coordinates]
    : feature.geometry.coordinates;
  return polygons.flatMap((polygon) => polygon.map(ringPath)).filter(Boolean).join(" ");
}

function featureLabel(feature: HoveredFeature): string {
  if (feature.level === "district" && feature.state) return `${feature.name} District · ${feature.state}`;
  return feature.level === "state" ? feature.name : `${feature.name} District`;
}

const BoundaryPaths = memo(function BoundaryPaths({
  countries,
  states,
  districts,
  hoveredFeature,
  onShowFeature,
}: BoundaryPathsProps) {
  const betulLocation = project(77.968109, 21.746226);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern id="india-map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#172332" strokeWidth="0.7" opacity="0.5" />
        </pattern>
        <filter id="india-map-cyan-glow" x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="800" height="450" fill="#05090f" />
      <rect width="800" height="450" fill="url(#india-map-grid)" />
      {states.map((feature, index) => {
        const isMadhyaPradesh = feature.properties.name === "Madhya Pradesh";
        const isHovered = hoveredFeature?.level === "state" && hoveredFeature.name === feature.properties.name;
        return (
          <path
            key={`state-${index}`}
            d={feature.path}
            fill={isMadhyaPradesh ? "#0e7490" : isHovered ? "#0e7490" : "#0a121c"}
            fillOpacity={isMadhyaPradesh ? 0.3 : isHovered ? 0.28 : 0.94}
            stroke={isMadhyaPradesh || isHovered ? "#22d3ee" : "#28516a"}
            strokeOpacity={isMadhyaPradesh || isHovered ? 0.96 : 0.8}
            strokeWidth={isMadhyaPradesh || isHovered ? 1.7 : 0.85}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter={isMadhyaPradesh || isHovered ? "url(#india-map-cyan-glow)" : undefined}
            onPointerEnter={(event) => onShowFeature(event, feature.properties)}
            className="transition-[fill,stroke,filter] duration-200"
          />
        );
      })}
      {districts.map((feature, index) => {
        const isBetul = feature.properties.name === "Betul" && feature.properties.state === "Madhya Pradesh";
        const isHovered = hoveredFeature?.level === "district"
          && hoveredFeature.name === feature.properties.name
          && hoveredFeature.state === feature.properties.state;
        return (
          <path
            key={`district-${index}`}
            d={feature.path}
            fill={isBetul ? "#0891b2" : isHovered ? "#0e7490" : "#06101a"}
            fillOpacity={isBetul ? 0.48 : isHovered ? 0.44 : 0.015}
            stroke={isBetul || isHovered ? "#67e8f9" : "#284255"}
            strokeOpacity={isBetul || isHovered ? 1 : 0.76}
            strokeWidth={isBetul || isHovered ? 1.35 : 0.5}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            filter={isBetul || isHovered ? "url(#india-map-cyan-glow)" : undefined}
            onPointerEnter={(event) => onShowFeature(event, feature.properties)}
            className="transition-[fill,stroke,filter] duration-200"
          />
        );
      })}
      {countries.map((feature, index) => (
        <path
          key={`country-${index}`}
          d={feature.path}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.35"
          strokeOpacity="0.9"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#india-map-cyan-glow)"
          pointerEvents="none"
        />
      ))}
      <g transform={`translate(${betulLocation.x} ${betulLocation.y})`} pointerEvents="none">
        <circle r="12" fill="#22d3ee" opacity="0.12" />
        <circle r="9" fill="none" stroke="#22d3ee" strokeWidth="1.3" opacity="0.72" className="animate-ping" />
        <circle r="4.5" fill="#22d3ee" opacity="0.38" />
        <circle r="2.6" fill="#67e8f9" />
        <circle r="1.1" fill="#ffffff" />
      </g>
    </svg>
  );
});

export function ContactLocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, Point>());
  const previousPointer = useRef<Point | null>(null);
  const pinchStart = useRef<{ distance: number; transform: Transform; center: Point } | null>(null);
  const [features, setFeatures] = useState<RenderedBoundaryFeature[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [transform, setTransform] = useState<Transform>({ x: 0, y: 0, scale: 1 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<HoveredFeature | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<Position | null>(null);

  useEffect(() => {
    let active = true;
    let observer: IntersectionObserver | undefined;
    const loadBoundaries = () => {
      fetch("/india-boundaries.geojson")
        .then((response) => {
          if (!response.ok) throw new Error(`India boundary data request failed (${response.status})`);
          return response.json() as Promise<{ features?: BoundaryFeature[] }>;
        })
        .then((data) => {
          if (!Array.isArray(data.features) || !data.features.length) throw new Error("India boundary data is empty");
          if (active) setFeatures(data.features.map((feature) => ({ ...feature, path: geometryPath(feature) })));
        })
        .catch((error: unknown) => {
          if (active) setLoadError(error instanceof Error ? error.message : "India boundary data could not be loaded");
        });
    };
    const element = mapRef.current;
    if (element && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer?.disconnect();
        loadBoundaries();
      }, { rootMargin: "300px" });
      observer.observe(element);
    } else {
      loadBoundaries();
    }
    return () => {
      active = false;
      observer?.disconnect();
    };
  }, []);

  const zoomAt = (point: Point, scaleFactor: number) => {
    setTransform((current) => {
      const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, current.scale * scaleFactor));
      const ratio = scale / current.scale;
      return clampTransform({
        scale,
        x: point.x - (point.x - current.x) * ratio,
        y: point.y - (point.y - current.y) * ratio,
      }, mapRef.current?.clientWidth ?? 0, mapRef.current?.clientHeight ?? 0);
    });
  };

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const bounds = element.getBoundingClientRect();
      zoomAt(
        { x: event.clientX - bounds.left, y: event.clientY - bounds.top },
        Math.exp(-event.deltaY * 0.002),
      );
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => element.removeEventListener("wheel", handleWheel);
  }, []);

  const updateTooltipPosition = useCallback((clientX: number, clientY: number) => {
    const bounds = mapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setTooltipPosition({
      x: Math.max(8, Math.min(bounds.width - 8, clientX - bounds.left + 14)),
      y: Math.max(8, Math.min(bounds.height - 8, clientY - bounds.top + 14)),
    });
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const bounds = event.currentTarget.getBoundingClientRect();
    const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    pointers.current.set(event.pointerId, point);
    setHoveredFeature(null);
    setTooltipPosition(null);
    setIsInteracting(true);

    if (pointers.current.size === 1) {
      previousPointer.current = point;
      return;
    }
    if (pointers.current.size === 2) {
      const [first, second] = Array.from(pointers.current.values());
      pinchStart.current = {
        distance: distance(first, second),
        transform,
        center: { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 },
      };
      previousPointer.current = null;
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointers.current.size === 0) {
      if (hoveredFeature && event.pointerType === "mouse") updateTooltipPosition(event.clientX, event.clientY);
      return;
    }
    if (!pointers.current.has(event.pointerId)) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    pointers.current.set(event.pointerId, point);

    if (pointers.current.size >= 2) {
      const [first, second] = Array.from(pointers.current.values());
      const pinch = pinchStart.current;
      if (!pinch) return;
      const center = { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 };
      const scale = Math.min(
        MAX_SCALE,
        Math.max(MIN_SCALE, pinch.transform.scale * (distance(first, second) / Math.max(1, pinch.distance))),
      );
      const ratio = scale / pinch.transform.scale;
      setTransform(clampTransform({
        scale,
        x: center.x - (pinch.center.x - pinch.transform.x) * ratio,
        y: center.y - (pinch.center.y - pinch.transform.y) * ratio,
      }, bounds.width, bounds.height));
      return;
    }

    const previous = previousPointer.current;
    if (!previous) return;
    setTransform((current) => clampTransform({
      ...current,
      x: current.x + point.x - previous.x,
      y: current.y + point.y - previous.y,
    }, bounds.width, bounds.height));
    previousPointer.current = point;
  };

  const finishPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    pinchStart.current = null;
    previousPointer.current = pointers.current.size === 1 ? Array.from(pointers.current.values())[0] : null;
    if (pointers.current.size === 0) setIsInteracting(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "+" && event.key !== "=" && event.key !== "-" && event.key !== "0") return;
    event.preventDefault();
    const bounds = event.currentTarget.getBoundingClientRect();
    const center = { x: bounds.width / 2, y: bounds.height / 2 };
    if (event.key === "0") {
      setTransform({ x: 0, y: 0, scale: 1 });
      return;
    }
    zoomAt(center, event.key === "-" ? 0.8 : 1.25);
  };

  const showFeature = useCallback((event: React.PointerEvent<SVGPathElement>, feature: HoveredFeature) => {
    if (event.pointerType !== "mouse" || pointers.current.size) return;
    setHoveredFeature(feature);
    updateTooltipPosition(event.clientX, event.clientY);
  }, [updateTooltipPosition]);

  const countryFeatures = useMemo(
    () => features.filter((feature): feature is CountryBoundary => feature.properties.level === "country"),
    [features],
  );
  const stateFeatures = useMemo(
    () => features.filter((feature): feature is StateBoundary => feature.properties.level === "state"),
    [features],
  );
  const districtFeatures = useMemo(
    () => features.filter((feature): feature is DistrictBoundary => feature.properties.level === "district"),
    [features],
  );

  return (
    <div
      ref={mapRef}
      role="application"
      aria-label="Interactive India map with state and district boundaries. Hover for names, drag to pan, use scroll or pinch to zoom. Selgaon, Betul, Madhya Pradesh is marked."
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointer}
      onPointerCancel={finishPointer}
      onPointerLeave={() => {
        setHoveredFeature(null);
        setTooltipPosition(null);
      }}
      onKeyDown={handleKeyDown}
      className="relative mt-6 aspect-video overflow-hidden rounded-[1.25rem] border border-slate-800/80 bg-[#05090f] touch-none cursor-grab focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 active:cursor-grabbing"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: "0 0",
          transition: isInteracting ? "none" : "transform 220ms ease-out",
          willChange: "transform",
        }}
      >
        <BoundaryPaths
          countries={countryFeatures}
          states={stateFeatures}
          districts={districtFeatures}
          hoveredFeature={hoveredFeature}
          onShowFeature={showFeature}
        />
      </div>

      <div className="pointer-events-none absolute right-2 top-2 rounded-md border border-cyan-400/20 bg-[#07111b]/90 px-2 py-1 shadow-lg shadow-cyan-950/30 backdrop-blur-sm sm:right-3 sm:top-3 sm:px-2.5 sm:py-1.5">
        <p className="whitespace-nowrap text-[0.48rem] font-semibold uppercase tracking-[0.08em] text-cyan-200 sm:text-[0.62rem] sm:tracking-[0.12em]">
          Selgaon, Betul, Madhya Pradesh
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-2 left-2 rounded-full border border-white/10 bg-[#05090f]/85 px-2.5 py-1 text-[0.48rem] font-medium uppercase tracking-[0.1em] text-slate-400 backdrop-blur sm:bottom-3 sm:left-3 sm:px-3 sm:py-1.5 sm:text-[0.62rem] sm:tracking-[0.16em]">
        India · State & district boundaries
      </div>
      <div className="pointer-events-none absolute bottom-2 right-2 text-[0.42rem] text-slate-500 sm:bottom-3 sm:right-3 sm:text-[0.5rem]">
        GeoBoundaries · DataMeet · Pathways Data
      </div>
      {loadError && (
        <p role="alert" className="absolute inset-x-3 bottom-12 rounded-lg border border-rose-400/30 bg-[#150c11]/95 p-2 text-xs text-rose-200">
          Map boundary data unavailable: {loadError}
        </p>
      )}
      {hoveredFeature && tooltipPosition && !isInteracting && (
        <div
          role="status"
          className="pointer-events-none absolute z-10 max-w-[calc(100%-1rem)] -translate-y-full rounded-md border border-cyan-400/30 bg-[#06111b]/95 px-2.5 py-1.5 text-[0.65rem] font-medium text-cyan-100 shadow-lg shadow-cyan-950/40 backdrop-blur"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {featureLabel(hoveredFeature)}
        </div>
      )}
    </div>
  );
}
