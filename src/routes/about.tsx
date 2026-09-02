import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { fullAddress, site } from "@/lib/site";
import teamVan from "@/assets/team-van.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const title = "About Torvex Garage Door Repair | Phoenix, AZ";
const description =
  "Torvex is a small, locally run garage door repair company in Phoenix, AZ. Meet the crew, our promise on pricing, and how we work. Open 7am-7pm daily.";

const values = [
  {
    t: "One shop, one crew",
    d: "We deliberately stayed small and local. The person who answers the phone knows the tech who will be at your house.",
  },
  {
    t: "Price before wrench",
    d: "Written quote first, every time. If we find something else once the door is open, we stop and ask before touching it.",
  },
  {
    t: "Repair before replace",
    d: "A dead spring is not a reason to sell a new door. We replace whole doors only when the math actually says so.",
  },
  {
    t: "Clean exits",
    d: "Old parts leave with us, the driveway gets swept, and the door gets cycled and tested with you watching.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          mainEntity: {
            "@type": "LocalBusiness",
            name: site.name,
            telephone: site.phone,
            url: site.url,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.city,
              addressRegion: site.address.state,
              postalCode: site.address.zip,
              addressCountry: "US",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-ink py-20 text-ink-foreground sm:py-24">
        <div className="container-page">
          <p className="eyebrow">Our story</p>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl sm:text-6xl">
            A neighborhood garage door shop, not a franchise.
          </h1>
          <p className="mt-6 max-w-2xl text-ink-muted">
            Torvex started with one truck, one ladder rack, and a simple idea: quote the
            job honestly, fix it in one visit, and pick up the phone when someone calls at
            6:45 in the evening.
          </p>
        </div>
      </section>

      <section data-reveal className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={teamVan}
            alt="Torvex technicians in front of the service van"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-xl object-cover"
          />
          <div>
            <p className="eyebrow">Who you get</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Techs who do this all day, daily.</h2>
            <p className="mt-4 text-muted-foreground">
              Garage doors are heavy, spring-loaded machines. Our techs work on nothing
              else — no side plumbing, no handyman work — so a diagnosis takes minutes
              instead of an afternoon.
            </p>
            <p className="mt-4 text-muted-foreground">
              We keep springs, cables, rollers, hinges, brackets, seals and common opener
              boards stocked on the truck. That is why most calls end the same day they
              start, and why you rarely hear "we'll order the part."
            </p>
            <p className="mt-4 text-muted-foreground">
              We work out of one location at {fullAddress}, and we cover{" "}
              {site.serviceArea}.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal className="bg-paper py-20">
        <div className="container-page">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
            Four things we refuse to compromise on.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="card-surface p-8">
                <p className="font-display text-xl font-extrabold">{v.t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our hours</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Seven days, 7am to 7pm.</h2>
            <p className="mt-4 text-muted-foreground">
              A garage door does not break on a schedule. Saturday morning and Sunday
              evening are regular working hours for us — same rates, same crew, same
              stocked truck.
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex rounded-md bg-brand px-7 py-4 font-display font-extrabold text-brand-foreground"
            >
              Call {site.phone}
            </a>
          </div>
          <img
            src={gallery3}
            alt="Three-car garage with newly installed doors"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <CtaBand title="Want to talk to the person who'll do the work?" subtitle="That's usually who answers the phone." />
    </>
  );
}
