import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { fullAddress, mapEmbedSrc, services, site } from "@/lib/site";
import hero from "@/assets/hero-garage.jpg";
import teamVan from "@/assets/team-van.jpg";
import svcSprings from "@/assets/svc-springs.jpg";
import svcOpener from "@/assets/svc-opener.jpg";
import svcTrack from "@/assets/svc-track.jpg";
import svcInstall from "@/assets/svc-install.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const title = "Garage Door Repair in Phoenix, AZ | Torvex Garage Door Repair";
const description =
  "Same-day garage door repair in Phoenix: broken springs, opener repair, off-track doors, panels and new installs. Open 7am-7pm every day. Call (602) 555-0184.";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  image: `${site.url}${hero}`,
  geo: { "@type": "GeoCoordinates", latitude: 33.5029, longitude: -112.0338 },
  areaServed: [
    "Phoenix, AZ",
    "Scottsdale, AZ",
    "Tempe, AZ",
    "Mesa, AZ",
    "Chandler, AZ",
    "Glendale, AZ",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Garage door services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
    })),
  },
};

const faqs = [
  {
    q: "How fast can you get here?",
    a: "Most repair calls placed before 4pm are handled the same day. We work 7am to 7pm, seven days a week, including weekends and most holidays.",
  },
  {
    q: "How much does a broken spring cost to fix?",
    a: "Spring replacement depends on door weight and whether it uses a single or double spring system. We quote the full price before any work starts, and the quote is what you pay.",
  },
  {
    q: "Can you repair a door instead of replacing it?",
    a: "Almost always. If the sections and frame are sound, we repair or swap the failing part. We only recommend a new door when repair costs approach replacement.",
  },
  {
    q: "Do you work on all opener brands?",
    a: "Yes. We service chain, belt, screw-drive, and wall-mount openers from all major brands, plus smart openers with Wi-Fi and app control.",
  },
  {
    q: "Which areas do you cover?",
    a: `We serve ${site.serviceArea} from our single Phoenix shop.`,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.url + "/" },
      { property: "og:image", content: `${site.url}${hero}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}${hero}` },
    ],
    links: [{ rel: "canonical", href: site.url + "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusiness) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Clock, value: "7am–7pm", label: "Open every single day" },
  { icon: Timer, value: "Same day", label: "On most repair calls" },
  { icon: Wrench, value: "18 yrs", label: "Working Valley doors" },
  { icon: BadgeCheck, value: "Upfront", label: "Pricing before we start" },
  { icon: MapPin, value: "Phoenix", label: "One local crew, one shop" },
];

const trustStrip = [
  { title: "Stocked service trucks", note: "Springs, rollers, cables on board" },
  { title: "Written quote first", note: "Approve the price before we start" },
  { title: "Workmanship warranty", note: "Parts and labor covered" },
  { title: "Seven days a week", note: "Weekends at weekday pricing" },
  { title: "Own crew, no subs", note: "The people you call show up" },
];

const serviceImages = [svcSprings, svcOpener, svcTrack, svcInstall, gallery1, gallery2];

const reasons = [
  {
    title: "Open 7am to 7pm, 7 days",
    body: "Evenings and weekends are normal hours here, not an emergency upcharge window.",
  },
  {
    title: "Stocked trucks",
    body: "Springs, rollers, cables, hinges, and common opener parts ride with the tech, so most jobs finish in one visit.",
  },
  {
    title: "Fixed quote first",
    body: "You approve a written price before a single tool comes out. No parts get added mid-job.",
  },
  {
    title: "Warrantied workmanship",
    body: "Parts and labor are covered. If something we touched fails, we come back and make it right.",
  },
  {
    title: "Same-day on most repairs",
    body: "Call before 4pm and a technician is usually in your driveway the same afternoon.",
  },
  {
    title: "Real updates",
    body: "You get a text before arrival, photos of the failed part, and a clean driveway when we leave.",
  },
];

const galleryProjects = [
  { src: gallery1, city: "Scottsdale, AZ", alt: "Modern glass and aluminum garage door installed at dusk" },
  { src: gallery2, city: "Tempe, AZ", alt: "Wood-look sectional garage door on a Phoenix ranch home" },
  { src: gallery3, city: "Chandler, AZ", alt: "Three matching white panel garage doors on a suburban home" },
];

const [featuredProject, ...otherProjects] = galleryProjects as [
  (typeof galleryProjects)[number],
  ...(typeof galleryProjects)[number][],
];

const areaCities = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Chandler",
  "Glendale",
  "Gilbert",
  "Peoria",
  "Paradise Valley",
  "Ahwatukee",
  "Sun City",
  "Avondale",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Technician servicing a modern bronze garage door on a Phoenix home"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/80" />

        <div className="container-page py-20 text-center sm:py-28">
          <div className="animate-fade-in mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-ink-foreground">
            {[
              { label: "Same-day repairs", note: "Most calls before 4pm" },
              { label: "7am – 7pm", note: "Every day of the week" },
              { label: "Upfront pricing", note: "Approved before we start" },
            ].map((item) => (
              <p key={item.label} className="flex items-center gap-2 text-left">
                <ShieldCheck className="size-5 shrink-0 text-brand" />
                <span>
                  <span className="block font-display text-sm font-extrabold">
                    {item.label}
                  </span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {item.note}
                  </span>
                </span>
              </p>
            ))}
          </div>

          <h1 className="animate-fade-up mx-auto mt-10 max-w-4xl text-4xl text-ink-foreground sm:text-6xl lg:text-7xl">
            Garage door repair done right, <span className="text-brand">the same day.</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base text-ink-muted sm:text-lg">
            Broken springs, dead openers, doors off the track, dented panels and new
            installs for homeowners across {site.serviceArea}.
          </p>

          <div className="animate-fade-up card-surface mx-auto mt-10 max-w-2xl p-6 text-center sm:p-8">
            <p className="font-display text-xl font-extrabold sm:text-2xl">
              Get a free quote. <span className="italic">Booked in 2 minutes.</span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="ZIP code"
                  aria-label="ZIP code"
                  className="w-full rounded-md border border-border bg-background py-4 pl-11 pr-4 text-sm outline-none transition-colors focus:border-brand"
                />
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-7 py-4 font-display font-extrabold text-brand-foreground transition-transform hover:scale-[1.02]"
              >
                Get a quote
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 font-display text-sm font-extrabold text-brand"
            >
              <Phone className="size-4" />
              Or call {site.phone} — we answer 7am to 7pm
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-10 bg-paper pb-10">
        <div className="container-page -mt-12">
          <div
            data-reveal-stagger
            className="card-surface grid divide-y divide-border sm:grid-cols-2 sm:divide-x lg:grid-cols-5 lg:divide-y-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-8 text-center">
                <s.icon className="mx-auto size-5 text-brand" />
                <p className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="overflow-hidden bg-paper pb-14">
        <div className="relative">
          <div className="flex w-max animate-marquee gap-14 pr-14">
            {[...trustStrip, ...trustStrip].map((item, i) => (
              <div key={`${item.title}-${i}`} className="flex items-center gap-3">
                <BadgeCheck className="size-8 shrink-0 text-brand" />
                <span>
                  <span className="block font-display text-sm font-extrabold">
                    {item.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">{item.note}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" data-reveal className="bg-background py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="mt-4 max-w-xl text-3xl sm:text-5xl">
                The garage door services we offer.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground lg:text-right">
              Springs, openers, tracks, panels and new doors. One Torvex crew for your
              whole door — no subcontractors sent to your driveway.
            </p>
          </div>

          <div
            data-reveal-stagger
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, i) => (
              <article
                key={service.slug}
                className="card-surface lift flex flex-col overflow-hidden"
              >
                <img
                  src={serviceImages[i]}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.blurb}</p>
                  <ul className="mt-4 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                    {service.points.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm font-extrabold text-brand"
                  >
                    Get a quote <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink text-ink-foreground">
        <div data-reveal className="grid lg:grid-cols-2">
          <img
            src={teamVan}
            alt="Torvex garage door technicians standing beside their service van"
            loading="lazy"
            width={1280}
            height={960}
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="px-6 py-16 sm:px-12 lg:py-24">
            <p className="eyebrow">Why us</p>
            <h2 className="mt-4 max-w-lg text-3xl sm:text-4xl">
              Why homeowners keep calling Torvex.
            </h2>
            <div className="mt-10">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4 border-t border-white/10 py-5">
                  <BadgeCheck className="mt-1 size-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-display text-lg font-extrabold">{r.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 font-display font-extrabold">
              Already know what you need?
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 font-display font-extrabold text-brand-foreground"
              >
                <Phone className="size-4" /> Call {site.phone}
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-ink-muted/40 px-6 py-4 font-display font-extrabold hover:border-brand hover:text-brand"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work gallery */}
      <section className="bg-paper py-20">
        <div data-reveal className="container-page text-center">
          <p className="eyebrow">Our work</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl sm:text-5xl">
            Examples of recent doors we finished.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Repairs, hardware rebuilds, and full door replacements for homeowners across
            the Valley.
          </p>
        </div>

        <div data-reveal-stagger className="container-page mt-12 grid gap-4 lg:grid-cols-2">
          <figure className="relative overflow-hidden rounded-xl">
            <img
              src={featuredProject.src}
              alt={featuredProject.alt}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-80 w-full object-cover lg:h-full"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-left font-display text-sm font-extrabold text-ink-foreground">
              {featuredProject.city}
            </figcaption>
          </figure>
          <div className="grid gap-4">
            {otherProjects.map((g) => (
              <figure key={g.city} className="relative overflow-hidden rounded-xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-56 w-full object-cover sm:h-64"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-left font-display text-sm font-extrabold text-ink-foreground">
                  {g.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="container-page mt-8 flex justify-end">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-4 font-display font-extrabold transition-colors hover:border-brand hover:text-brand"
          >
            See all our services <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-ink py-20 text-ink-foreground">
        <div data-reveal className="container-page">
          <p className="eyebrow">Our story</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-5xl">
            Eighteen years of <span className="italic text-brand">good work</span> in the
            Valley.
          </h2>
          <p className="mt-5 max-w-xl text-ink-muted">
            One shop, one crew, and a phone answered by the people who actually drive out
            to your driveway. Here is what a Torvex visit looks like.
          </p>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl">
            <img
              src={svcInstall}
              alt="Torvex technician installing a new insulated garage door"
              loading="lazy"
              width={1280}
              height={720}
              className="h-64 w-full object-cover sm:h-96"
            />
          </div>
          <p className="mt-5 text-center text-sm text-ink-muted">
            “Fix it once, fix it right.” How every Torvex job runs, start to finish.
          </p>
        </div>
      </section>

      {/* Service areas + map */}
      <section className="bg-background py-20">
        <div
          data-reveal-stagger
          className="container-page grid gap-10 lg:grid-cols-2 lg:items-start"
        >
          <div>
            <p className="eyebrow">Service areas</p>
            <h2 className="mt-4 text-3xl sm:text-5xl">Serving the whole Phoenix Valley.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              One shop in Phoenix and one local crew. Call us or find your town below —
              if you are in the Valley, we cover you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-md">
              <div className="relative flex-1">
                <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand" />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter your ZIP code"
                  aria-label="Enter your ZIP code"
                  className="w-full rounded-md border border-border bg-background py-4 pl-11 pr-4 text-sm outline-none transition-colors focus:border-brand"
                />
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-4 font-display font-extrabold text-brand-foreground"
              >
                Check my area
              </Link>
            </div>

            <p className="mt-10 font-display text-sm font-extrabold uppercase tracking-[0.16em]">
              Phoenix metro <span className="text-muted-foreground">service areas</span>
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-3">
              {areaCities.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand" />
                  {city}
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>{site.hours}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                <a href={site.phoneHref} className="font-semibold hover:text-brand">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div className="card-surface overflow-hidden p-0">
            <iframe
              title="Map showing the Torvex Garage Door Repair shop in Phoenix, AZ"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[520px] w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20">
        <div
          data-reveal-stagger
          className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Straight answers, no runaround.</h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure? Call us and describe the noise your door is making — that
              usually narrows it down in a minute.
            </p>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg font-extrabold transition-colors group-open:text-brand">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
