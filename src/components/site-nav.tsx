"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Equipment", href: "#equipment" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isAtHome, setIsAtHome] = useState(true);

  useEffect(() => {
    const updateActiveItem = () => setIsAtHome(pathname === "/" && window.scrollY < 80);

    updateActiveItem();
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveItem);
  }, [pathname]);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
      {navItems.map((item) => {
        const isActiveHome = item.label === "Home" && isAtHome;
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={item.label === "Home" ? handleHomeClick : undefined}
            aria-current={isActiveHome ? "page" : undefined}
            className={`relative transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d9b679] after:transition-transform after:duration-300 hover:after:scale-x-100${isActiveHome ? " text-white after:scale-x-100" : ""}`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
