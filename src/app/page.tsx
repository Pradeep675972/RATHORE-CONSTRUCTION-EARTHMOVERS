import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, ChevronRight, MapPin, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";
import { equipment, faqs, galleryImages, projects, reasons, services, stats, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_34%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">RATHORE CONSTRUCTION & EARTHMOVERS</p>
            <p className="text-sm text-slate-300">Building the Future with Strength, Quality & Heavy Equipment Solutions</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#equipment" className="transition hover:text-white">Equipment</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="tel:+919752264618" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            Call Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-300">
              <BadgeCheck className="h-4 w-4" /> Premium Construction & Heavy Equipment Solutions Across India
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-gray-600 sm:text-5xl lg:text-7xl">
              India&apos;s Trusted Heavy Equipment Rental Company
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              Reliable heavy machinery for road construction, excavation, mining, industrial and government projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300">
                Hire Equipment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-white">
                Request Free Quote
              </a>
              <a href="tel:+919752264618" className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-500/20 dark:text-orange-300">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-slate-900/10 shadow-2xl shadow-slate-900/10 dark:border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1690719495572-bc42843eae29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Heavy equipment and earthmoving machinery"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <SectionHeading eyebrow="About Us" title="Built on experience, quality and trust" description="RATHORE CONSTRUCTION & EARTHMOVERS is a trusted heavy equipment and earthmoving company based in Selgaon, Betul, Madhya Pradesh." />
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              We specialize in JCB excavation, Poclain excavation, DI pipeline laying, HDPE pipeline installation, trenching, earthwork and infrastructure support for government and private projects. Our experienced operators and well-maintained machinery ensure safe, efficient and timely project execution.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced operators and site experts",
                "Safety-first working standards",
                "Premium fleet with regular maintenance",
                "Client-first service with transparent pricing",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
                  <ShieldCheck className="mt-1 h-5 w-5 text-orange-500" />
                  <p className="text-sm text-slate-700 dark:text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Mission", body: "To provide reliable excavation, earthmoving and pipeline construction services with quality, safety and on-time project delivery." },
              { title: "Vision", body: "To become one of the most trusted earthmoving and infrastructure service providers across Madhya Pradesh." },
              { title: "Safety Commitment", body: "Operator discipline, site safety practices and risk-aware operations." },
              { title: "Customer Satisfaction", body: "Fast response, flexible services and seamless project coordination." },
            ].map((card) => (
              <div key={card.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-lg">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Equipment" title="Premium machinery for every phase of construction" description="Our fleet combines power, reliability and operator readiness for demanding civil and industrial workloads." center />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {equipment.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-[#0b1f3a] via-[#111827] to-[#f97316]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_50%)]" />
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="relative h-full w-full object-cover opacity-95 brightness-90 contrast-110"
                    />
                  ) : (
                    <img src={item.image} alt={item.name} className="relative h-full w-full object-cover opacity-95 brightness-90 contrast-110" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <p><span className="font-semibold text-slate-950 dark:text-white">Capacity:</span> {item.capacity}</p>
                    <p><span className="font-semibold text-slate-950 dark:text-white">Operator:</span> {item.operator}</p>
                    <p><span className="font-semibold text-slate-950 dark:text-white">Maintenance:</span> {item.maintenance}</p>
                  </div>
                  {item.attachment ? (
                    <div className="mt-6 rounded-3xl border border-amber-200/40 bg-amber-50/80 p-4 text-sm text-slate-800 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-slate-100">
                      <p className="font-semibold text-slate-950 dark:text-white">✔ {item.attachment.title}</p>
                      <div className="mt-3 space-y-2">
                        {item.attachment.applications.map((application) => (
                          <p key={application} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-950 text-xs text-white">•</span>
                            {application}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a href="tel:+919752264618" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950">Call Now</a>
                    <a href="https://wa.me/919752264618" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100">WhatsApp</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title="End-to-end support for complex project demands" description="From excavation to road support and industrial mobilization, we tailor equipment to your site requirements." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="flex items-center justify-between rounded-[1.25rem] border border-slate-200 bg-white/80 px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <span className="font-medium text-slate-800 dark:text-slate-100">{service}</span>
                <ChevronRight className="h-4 w-4 text-orange-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A premium rental partner with proven field performance</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">What sets us apart is not just the fleet, but the discipline, speed and expertise behind every assignment.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Experienced Operators",
                "2 JCB Backhoe Loaders",
                "1 Hydraulic Excavator (Poclain)",
                "Well Maintained Equipment",
                "On-Time Project Completion",
                "Safety First",
                "Government & Private Project Experience",
                "24×7 Customer Support",
              ].map((reason) => (
                <div key={reason} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-amber-400" />
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
          <SectionHeading eyebrow="Projects" title="Selected work from demanding sites and complex infrastructure jobs" description="Our project experience spans road building, bridging, mining and large-scale industrial development." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-500">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Gallery" title="A visual view of our fleet and project sites" description="Modern imagery and project visuals designed to reflect the scale and quality of our operations." center />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={image} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <img src={image} alt={`Project gallery ${index + 1}`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Testimonials" title="Trusted by project teams and contractors" description="Clients value our equipment reliability, operator capability and responsive field support." center />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-4xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Book Equipment</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Reserve the right machine for your next job</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Share your site requirements and we will recommend the most suitable fleet and support package.</p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+91 9752264618" },
                { icon: MessageCircle, label: "WhatsApp", value: "+91 9752264618" },
                { icon: MapPin, label: "Location", value: "Selgaon, Betul, MP" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <item.icon className="h-5 w-5 text-amber-400" />
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
        <div className="mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionHeading eyebrow="Contact" title="Ready to mobilize equipment for your site?" description="We are available for urgent support, long-term rentals and government project requirements." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Call", value: "+91 9752264618" },
                  { title: "WhatsApp", value: "+91 9752264618" },
                  { title: "Email", value: "pradeeprathore877@gmail.com" },
                  { title: "Hours", value: "Mon–Sun • 7:00 AM – 8:00 PM" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Office Address</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Selgaon, Betul, Madhya Pradesh, India</p>
              <div className="mt-6 aspect-video overflow-hidden rounded-[1.25rem]">
                <iframe title="Location map" src="https://www.google.com/maps?q=Selgaon%20Betul%20Madhya%20Pradesh&z=12&output=embed" className="h-full w-full" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Frequently asked questions</h2>
            </div>
            <a href="tel:+919752264618" className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 dark:bg-amber-400 dark:text-slate-950">
              Need urgent support? <Phone className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/60">
                <h3 className="font-semibold text-slate-950 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-4 py-10 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">RATHORE CONSTRUCTION & EARTHMOVERS</p>
            <p className="mt-3 max-w-xl text-sm leading-7">Trusted construction and heavy equipment solutions for civil, mining, industrial and government operations.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#equipment" className="transition hover:text-white">Equipment</a></li>
                <li><a href="#services" className="transition hover:text-white">Services</a></li>
                <li><a href="#projects" className="transition hover:text-white">Projects</a></li>
                <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Contact</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>+91 9752264618</li>
                <li>pradeeprathore877@gmail.com</li>
                <li>Selgaon, Betul</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Social</p>
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
