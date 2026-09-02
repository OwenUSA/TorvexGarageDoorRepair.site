export const site = {
  name: "Torvex Garage Door Repair",
  shortName: "Torvex",
  domain: "TorvexGarageDoorRepair.site",
  url: "https://torvexgaragedoorrepair.site",
  // Placeholder contact details for testing.
  phone: "(602) 555-0184",
  phoneHref: "tel:+16025550184",
  email: "service@torvexgaragedoorrepair.site",
  address: {
    street: "4820 N Torvex Way, Suite 12",
    city: "Phoenix",
    state: "AZ",
    zip: "85018",
  },
  hours: "Open 7:00 AM – 7:00 PM, every day",
  mapQuery: "4820 N Torvex Way Suite 12, Phoenix, AZ 85018",
  serviceArea:
    "Phoenix, Scottsdale, Tempe, Mesa, Chandler, Glendale and the surrounding Valley",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapQuery,
)}&output=embed`;

export const services = [
  {
    slug: "spring-repair",
    title: "Garage Door Spring Repair",
    blurb:
      "Broken torsion or extension springs replaced same day with correctly cycled, matched sets.",
    points: ["Torsion spring replacement", "Extension springs", "Cable & drum repair"],
  },
  {
    slug: "opener-repair",
    title: "Opener Repair & Install",
    blurb:
      "Chain, belt, and wall-mount openers diagnosed, repaired, or replaced — including smart openers.",
    points: ["Motor & gear repair", "Belt-drive upgrades", "Remotes, keypads, Wi-Fi setup"],
  },
  {
    slug: "off-track",
    title: "Off-Track & Roller Repair",
    blurb:
      "Doors off the track, bent tracks, and worn rollers realigned and rebuilt so the door runs quiet.",
    points: ["Track realignment", "Nylon roller upgrade", "Hinge & bracket replacement"],
  },
  {
    slug: "panel-repair",
    title: "Panel & Section Replacement",
    blurb:
      "Dented or cracked sections swapped without replacing the whole door when the frame is sound.",
    points: ["Single panel swaps", "Weather seal & bottom gasket", "Hardware refresh"],
  },
  {
    slug: "new-doors",
    title: "New Door Installation",
    blurb:
      "Steel, wood-look, and full-view glass doors measured, ordered, and installed by our own crew.",
    points: ["Insulated steel doors", "Modern glass & aluminum", "Custom sizes"],
  },
  {
    slug: "maintenance",
    title: "Tune-Ups & Safety Checks",
    blurb:
      "25-point inspection, balance test, lubrication, and safety-sensor alignment to prevent surprises.",
    points: ["25-point inspection", "Balance & force test", "Sensor alignment"],
  },
] as const;
