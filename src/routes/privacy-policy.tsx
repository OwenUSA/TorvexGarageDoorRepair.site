import { createFileRoute } from "@tanstack/react-router";
import { fullAddress, site } from "@/lib/site";
import hero from "@/assets/hero-garage.jpg";

const title = "Privacy Policy | Torvex Garage Door Repair";
const description =
  "How Torvex Garage Door Repair collects, uses, and protects the information you share when you request garage door service in Phoenix, AZ.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/privacy-policy` },
      { property: "og:image", content: `${site.url}${hero}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${site.url}${hero}` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/privacy-policy` }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: [
      "When you call, text, or submit a form on this site, we collect the details you give us: your name, phone number, email address, service address, and a description of the problem with your garage door.",
      "We also collect basic technical information automatically, such as your browser type, device type, approximate region, and the pages you viewed. This is used to keep the site working and to understand which pages are useful.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "To respond to your request, schedule a visit, quote the work, and follow up about a job we performed.",
      "To keep records of work performed at an address, including warranty coverage on parts and labor.",
      "To improve the website and our service. We do not sell your personal information to anyone.",
    ],
  },
  {
    h: "Text messages and calls",
    p: [
      "If you contact us by phone or text, or provide a mobile number in a form, you agree that we may call or text you about your service request. Message and data rates may apply. Reply STOP to any message to opt out of further texts.",
    ],
  },
  {
    h: "Cookies and analytics",
    p: [
      "This site may use cookies and similar technologies for basic functionality and anonymous traffic measurement. You can block or delete cookies in your browser settings; the site will still work.",
      "Embedded content, such as the map on our contact page, is served by a third party and may set its own cookies under its own privacy policy.",
    ],
  },
  {
    h: "Sharing your information",
    p: [
      "We share information only with service providers that help us operate — for example email hosting, scheduling, or payment processing — and only to the extent needed to do that work. We may also disclose information when required by law.",
    ],
  },
  {
    h: "Data retention and security",
    p: [
      "We keep service records for as long as needed to honor warranties and meet business and tax requirements, then delete them. We use reasonable administrative and technical safeguards to protect your information, though no method of transmission over the internet is completely secure.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You may ask us to access, correct, or delete the personal information we hold about you. Contact us using the details below and we will respond within a reasonable time.",
    ],
  },
  {
    h: "Children's privacy",
    p: [
      "This site is intended for adults arranging home services. We do not knowingly collect information from children under 13.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this policy as our practices change. The revision date at the top of the page will always reflect the current version.",
    ],
  },
];

function PrivacyPage() {
  return (
    <>
      <section className="bg-ink py-16 text-ink-foreground sm:py-20">
        <div className="container-page">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ink-muted">Last updated: January 2026</p>
        </div>
      </section>

      <section data-reveal className="bg-background py-16">
        <div className="container-page max-w-3xl">
          <p className="text-muted-foreground">
            This policy explains what {site.name} does with the information you share when
            you contact us or use this website.
          </p>

          {sections.map((s) => (
            <div key={s.h} className="mt-10">
              <h2 className="text-xl sm:text-2xl">{s.h}</h2>
              {s.p.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="card-surface mt-12 p-8">
            <h2 className="text-xl">Contact us about privacy</h2>
            <p className="mt-3 text-muted-foreground">
              {site.name}
              <br />
              {fullAddress}
              <br />
              <a href={site.phoneHref} className="hover:text-brand">
                {site.phone}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
