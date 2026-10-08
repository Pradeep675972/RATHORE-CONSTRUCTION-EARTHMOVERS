import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { ContactLocationMap } from "@/components/contact-location-map";
import { InteractiveProjectMap } from "@/components/interactive-project-map";
import { SectionHeading } from "@/components/section-heading";
import { SiteNav } from "@/components/site-nav";
import { ThreeHero } from "@/components/three-hero";
import {
  equipment,
  faqs,
  galleryImages,
  projects,
  reasons,
  stats,
  testimonials,
} from "@/lib/content";

const serviceCategories = [
  {
    title: "Equipment Rental",
    description: "Heavy equipment rentals for excavation, road and project work.",
    icon: Building2,
    services: [
      "JCB / Backhoe Loader Rental",
      "Hydraulic Excavator Rental",
      "Crawler Excavator Rental",
      "Hydra Crane Rental",
      "Bulldozer Rental",
      "Wheel Loader Rental",
      "Motor Grader Rental",
      "Dumper Rental",
    ],
  },
  {
    title: "Earthwork & Excavation",
    description: "Earth excavation and land-levelling services.",
    icon: ShieldCheck,
    services: ["Earth Excavation", "Land Levelling"],
  },
  {
    title: "Road & Infrastructure",
    description: "Support for road construction and road breaking work.",
    icon: MapPin,
    services: ["Road Construction Support", "Road Breaking"],
  },
  {
    title: "Breaking & Demolition",
    description: "Hydraulic breaker service for rock, concrete and foundation breaking.",
    icon: BadgeCheck,
    services: [
      "Hydraulic Breaker Service",
      "Rock Breaking",
      "Concrete Breaking",
      "Foundation Breaking",
    ],
  },
  {
    title: "Project & Industrial Support",
    description: "Support across mining, industrial and contract projects.",
    icon: Star,
    services: ["Mining Support", "Industrial Projects", "Government Projects", "Private Contract Work"],
  },
];

export default function Home() {
  return (
    <main className="site-shell min-h-screen bg-[#070707] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-[#d9b679]">RATHORE</p>
            <p className="text-sm text-slate-300">Construction & Earthmovers</p>
          </div>

          <SiteNav />

          <a
            href="tel:+919752264618"
            className="glass-button inline-flex items-center rounded-full bg-[#d9b679] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#e5c98a]"
          >
            Call Now
          </a>
        </div>
      </header>

      <section id="home" className="hero-section relative isolate overflow-hidden px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <ThreeHero />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9b679]/30 bg-[#d9b679]/10 px-4 py-2 text-sm font-medium text-[#f3d7a4]">
              <BadgeCheck className="h-4 w-4" /> HEAVY EQUIPMENT ON RENT
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-[4rem]">
              <span className="block">Heavy Equipment.</span>
              <span className="block text-[#d9b679]">Ready for Your Project.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Rent reliable JCB 3DX equipment for construction, earthmoving, roadwork, mining and infrastructure projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="gold-button inline-flex items-center rounded-full bg-[#d9b679] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#e5c98a]"
              >
                Rent Equipment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="glass-button inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Get Free Quote
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/55 p-4 backdrop-blur-[2px]">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0b]/80 p-4 text-white backdrop-blur lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#d9b679]">JCB 3DX AVAILABLE FOR RENT</p>
                <p className="mt-1 text-sm text-slate-200">
                  Reliable JCB 3DX for construction, excavation, roadwork &amp; earthmoving.
                </p>
              </div>
              <a href="#booking" className="inline-flex whitespace-nowrap rounded-full bg-[#d9b679] px-3 py-2 text-sm font-semibold text-[#111111]">
                Check Availability →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
            <div>
              <SectionHeading
                eyebrow="About Us"
                title="Built on experience, quality and trust"
                description="RATHORE CONSTRUCTION & EARTHMOVERS is a trusted heavy equipment and earthmoving company based in Selgaon, Betul, Madhya Pradesh."
                eyebrowClassName="!text-xs !tracking-[0.32em] !text-[#d9b679]"
                titleClassName="!text-[2rem] sm:!text-[2.25rem] !leading-[1.12] !tracking-[-0.04em]"
                descriptionClassName="!mt-3.5 !text-base !leading-[1.65] !text-[#c4c4c4]"
              />
            </div>

            <p className="mt-6 text-base leading-7 text-slate-300">
              We specialize in JCB excavation, Poclain excavation, DI pipeline laying, HDPE pipeline installation,
              trenching, earthwork and infrastructure support for government and private projects. Our experienced
              operators and well-maintained machinery ensure safe, efficient and timely project execution.
            </p>

            <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr] xl:items-center">
              <div className="relative aspect-[2/1] max-h-96 overflow-hidden rounded-2xl border border-white/10 bg-[#111] xl:mt-0 xl:aspect-video xl:max-h-40">
                <Image
                  src="/jcb-3dx-background.webp"
                  alt="JCB 3DX at an earthmoving site"
                  fill
                  sizes="(min-width: 1280px) 215px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 xl:gap-2">
                {[
                  "Experienced operators and site experts",
                  "Safety-first working standards",
                  "Premium fleet with regular maintenance",
                  "Client-first service with transparent pricing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/3 p-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#d9b679]" />
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-rows-2 lg:self-stretch">
            {[
              {
                title: "Mission",
                body: "To provide reliable excavation, earthmoving and pipeline construction services with quality, safety and on-time project delivery.",
              },
              {
                title: "Vision",
                body: "To become one of the most trusted earthmoving and infrastructure service providers across Madhya Pradesh.",
              },
              {
                title: "Safety Commitment",
                body: "Operator discipline, site safety practices and risk-aware operations.",
              },
              {
                title: "Customer Satisfaction",
                body: "Fast response, flexible services and seamless project coordination.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-white/10 bg-[#0b0b0b] p-5 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#d9b679]/35 hover:shadow-[0_14px_32px_rgba(217,182,121,0.08)] lg:flex lg:flex-col lg:justify-center"
              >
                <h3 className="text-lg font-semibold tracking-tight text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Equipment"
            title="Premium machinery for every phase of construction"
            description="Our fleet combines power, reliability and operator readiness for demanding civil and industrial workloads."
            center
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {equipment.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#d9b679]/35"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[#111]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    style={{ objectPosition: item.imagePosition }}
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="inline-flex rounded-full border border-[#d9b679]/25 bg-[#d9b679]/[0.08] px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.16em] text-[#e5c98a]">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{item.description}</p>

                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-white">Working / Applications</h4>
                    <ul className="mt-2 grid gap-x-4 gap-y-2 text-sm leading-5 text-slate-300 sm:grid-cols-2">
                      {item.applications.map((application) => (
                        <li key={application} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9b679]" />
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <h4 className="text-sm font-semibold text-white">Equipment Details</h4>
                    <dl className="mt-3 grid gap-x-5 gap-y-2.5 text-sm sm:grid-cols-2">
                      {item.details.map((detail) => (
                        <div key={detail.label}>
                          <dt className="text-xs font-medium uppercase tracking-wide text-[#d9b679]">{detail.label}</dt>
                          <dd className="mt-0.5 leading-5 text-slate-300">{detail.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <a href="#booking" className="inline-flex items-center rounded-full bg-[#d9b679] px-4 py-2.5 text-sm font-semibold text-[#111111] transition hover:bg-[#e5c98a]">
                      {item.cta}
                    </a>
                    <a href="tel:+919752264618" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#d9b679]/50 hover:text-[#e5c98a]">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <a href="https://wa.me/919752264618" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#d9b679]/50 hover:text-[#e5c98a]">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="SERVICES"
            title="End-to-end support for complex project demands"
            description="From excavation to road support and industrial mobilization, we tailor equipment and services to your site requirements."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
            {serviceCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              const isRentalCategory = index === 0;

              return (
                <article
                  key={category.title}
                  className={`group rounded-[1.6rem] border border-white/10 bg-[#0d0d0d] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#d9b679]/40 sm:p-6 ${isRentalCategory ? "sm:col-span-2 xl:col-span-6" : "xl:col-span-3"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d9b679]/20 bg-[#d9b679]/[0.08]">
                      <CategoryIcon className="h-5 w-5 text-[#d9b679]" />
                    </span>
                    {isRentalCategory ? (
                      <span className="rounded-full border border-[#d9b679]/30 bg-[#d9b679]/10 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-[#e5c98a]">
                        AVAILABLE ON RENT
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold uppercase tracking-wide text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{category.description}</p>
                  <ul
                    className={`mt-4 grid gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-sm text-slate-200 ${isRentalCategory ? "sm:grid-cols-2 xl:grid-cols-4" : ""}`}
                  >
                    {category.services.map((service) => (
                      <li key={service} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9b679]" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#e5c98a] transition hover:text-white"
                  >
                    {isRentalCategory ? "Check Availability" : "Enquire Now"}
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <InteractiveProjectMap />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.26)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b679]">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                A premium rental partner with proven field performance
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                What sets us apart is not just the fleet, but the discipline, speed and expertise behind every assignment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-[#d9b679]" />
                    <p className="font-medium text-slate-100">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work from demanding sites and complex infrastructure jobs"
            description="Our project experience spans road building, bridging, mining and large-scale industrial development."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#d9b679]/40"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d9b679]">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="A visual view of our fleet and project sites"
            description="Modern imagery and project visuals designed to reflect the scale and quality of our operations."
            center
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                <img
                  src={image}
                  alt={`Project gallery ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by project teams and contractors"
            description="Clients value our equipment reliability, operator capability and responsive field support."
            center
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[1.75rem] border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-center gap-1 text-[#d9b679]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b679]">Book Equipment</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Reserve the right machine for your next job</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Share your site requirements and we will recommend the most suitable fleet and support package.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+91 9752264618" },
                { icon: MessageCircle, label: "WhatsApp", value: "+91 9752264618" },
                { icon: MapPin, label: "Location", value: "Selgaon, Betul, MP" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4">
                  <item.icon className="h-5 w-5 text-[#d9b679]" />
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.2)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Ready to mobilize equipment for your site?"
                description="We are available for urgent support, long-term rentals and government project requirements."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Call", value: "+91 9752264618" },
                  { title: "WhatsApp", value: "+91 9752264618" },
                  { title: "Email", value: "pradeeprathore877@gmail.com" },
                  { title: "Hours", value: "Mon–Sun • 7:00 AM – 8:00 PM" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b679]">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 p-6">
              <h3 className="text-2xl font-semibold text-white">Office Address</h3>
              <p className="mt-3 text-slate-300">Selgaon, Betul, Madhya Pradesh, India</p>
              <ContactLocationMap />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9b679]">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Frequently asked questions</h2>
            </div>

            <a
              href="tel:+919752264618"
              className="inline-flex items-center rounded-full bg-[#d9b679] px-5 py-3 font-semibold text-[#111111] transition hover:bg-[#e5c98a]"
            >
              Need urgent support? <Phone className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/3 p-5">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070707] px-4 py-10 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">RATHORE CONSTRUCTION & EARTHMOVERS</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
              Trusted construction and heavy equipment solutions for civil, mining, industrial and government operations.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b679]">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#equipment" className="transition hover:text-white">Equipment</a></li>
                <li><a href="#services" className="transition hover:text-white">Services</a></li>
                <li><a href="#projects" className="transition hover:text-white">Projects</a></li>
                <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b679]">Contact</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>+91 9752264618</li>
                <li>pradeeprathore877@gmail.com</li>
                <li>Selgaon, Betul</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9b679]">Social</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>WhatsApp</li>
                <li>Call</li>
                <li>Google Maps</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
