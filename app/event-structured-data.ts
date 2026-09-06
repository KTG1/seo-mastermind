// Invitation-only events are not eligible for Google's event rich results.
// Keep the markup factual; do not imply public ticket availability.
// Sources: /agency/, /founder/, /attendees/ and each linked attendee biography.
// Mira Doran is explicitly fictional and must never be listed as a real attendee.
const site = "https://seoconference.digital";
const organizerId = "https://www.holisticseo.digital/#organization";

// Identity links published by the organizer's official homepage JSON-LD.
export const founderProfiles = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/koray-tugberk-gubur/" },
  { name: "X / Twitter", url: "https://twitter.com/KorayGubur" },
  { name: "YouTube", url: "https://www.youtube.com/@TopicalAuthority" },
  { name: "Medium", url: "https://medium.com/@ktgubur" },
  { name: "Quora", url: "https://www.quora.com/profile/Koray-Tuberk-Gbr" },
  { name: "Facebook", url: "https://www.facebook.com/koraytugberk.gubur.948/" },
  { name: "Pinterest", url: "https://tr.pinterest.com/koraytugberkgubur/" },
  { name: "Reddit", url: "https://www.reddit.com/user/KorayTugberk-g/" },
];

export const eventFounder = {
  "@type": "Person",
  "@id": `${site}/founder/#person`,
  name: "Koray Tuğberk Gübür",
  alternateName: "Koray Tugberk Gubur",
  url: `${site}/founder/`,
  mainEntityOfPage: `${site}/founder/`,
  jobTitle: "Founder of Holistic SEO & Digital; founder and host of Holistic SEO Mastermind",
  description: "Koray Tuğberk Gübür founded Holistic SEO & Digital and Holistic SEO Mastermind. His work connects semantic SEO, topical authority, technical foundations, information architecture, and brand reputation. He publishes search research, case studies, and the Topical Authority course, and hosts the mastermind as a working conversation around attendees' real business and search challenges.",
  knowsAbout: ["Semantic SEO", "Topical authority", "Technical SEO", "Information architecture", "Entity identity management", "Search engine research"],
  worksFor: { "@id": organizerId },
  sameAs: ["https://www.holisticseo.digital/author/koray-tugberk-gubur/", ...founderProfiles.map((profile) => profile.url)],
  image: `${site}/tickets-gallery/safari-joy.jpg`,
  subjectOf: [
    { "@type": "WebPage", name: "Decoding topical authority with Koray Tuğberk Gübür", url: "https://www.authorityhacker.com/podcasts/decoding-topical-authority-with-koray-tugberk-gubur/" },
    { "@type": "WebPage", name: "Bridging search engines and humans", url: "https://www.lumar.io/blog/qa/seo-interview-bridging-search-engines-and-humans/" },
  ],
};

export const eventOrganizer = {
  "@type": "Organization",
  "@id": organizerId,
  name: "Holistic SEO & Digital",
  alternateName: "Holistic SEO",
  url: "https://www.holisticseo.digital/",
  email: "ktgubur@holisticseo.digital",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Esentepe, Büyükderece Caddesi No:193",
    addressLocality: "Şişli",
    addressRegion: "İstanbul",
    postalCode: "34360",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90 506 157 8585",
    contactType: "technical support",
    url: "https://www.holisticseo.digital/",
  },
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.holisticseo.digital/#logo",
    url: "https://www.holisticseo.digital/wp-content/uploads/2022/05/holisticseo-digital-logo.png",
    contentUrl: "https://www.holisticseo.digital/wp-content/uploads/2022/05/holisticseo-digital-logo.png",
    width: 1000,
    height: 250,
    caption: "Holistic SEO & Digital",
  },
  description: "Holistic SEO & Digital is a search systems agency founded by Koray Tuğberk Gübür. Its work brings together semantic content systems, technical SEO, data analysis and experimentation, design, and conversion to build durable organic growth.",
  founder: eventFounder,
  knowsAbout: ["Semantic SEO", "Technical SEO", "Topical authority", "Content strategy", "Data analysis", "Search engine research", "Website design", "Conversion optimization"],
  subjectOf: { "@type": "WebPage", name: "Holistic SEO & Digital — the agency behind the mastermind", url: `${site}/agency/` },
  event: { "@id": `${site}/#event-2026` },
};

// These are the real people listed in the site's 2026 attendee directory.
// Preview profiles retain their published approval status in the description.
export const eventAttendees = [
  { slug: "james-dooley", name: "James Dooley", jobTitle: "SEO entrepreneur", description: "SEO entrepreneur focused on authority and organic growth. Listed in the 2026 member directory; his detailed biography and interview are pending approval.", knowsAbout: ["Authority", "Organic growth"] },
  { slug: "mads-singers", name: "Mads Singers", jobTitle: "Business operator", description: "Business operator focused on strategy and leadership. Listed in the 2026 member directory; his detailed biography and interview are pending approval.", knowsAbout: ["Business strategy", "Leadership"] },
  { slug: "vaibhav-kakkar", name: "Vaibhav Kakkar", jobTitle: "Founder & Group CEO, DWS Group", description: "Founder and Group CEO of DWS Group and co-founder of RankWatch, working across digital marketing, marketing technology, and agency growth.", knowsAbout: ["Agency growth", "Marketing technology", "SEO software"], worksFor: { "@type": "Organization", name: "DWS Group", url: "https://www.digitalwebsolutions.com/" } },
  { slug: "manick-bhan", name: "Manick Bhan", jobTitle: "Founder & CEO/CTO, Search Atlas", description: "Founder and CEO/CTO of Search Atlas and LinkGraph, combining software engineering, data science, search strategy, and agency operations.", knowsAbout: ["AI search", "SEO software", "Data science"], worksFor: { "@type": "Organization", name: "Search Atlas", url: "https://searchatlas.com/" }, sameAs: ["https://manickbhan.com/who-is-manick-bhan/"] },
  { slug: "pavel-klimakov", name: "Pavel Klimakov", jobTitle: "Founder, SERP.Science", description: "Founder of SERP.Science and semantic SEO specialist researching brand perception, entities, search systems, and generative visibility.", knowsAbout: ["Semantic SEO", "Search research", "Brand signals"], worksFor: { "@type": "Organization", name: "SERP.Science", url: "https://serp.science/" }, sameAs: ["https://ee.linkedin.com/in/pavel-klimakov"] },
  { slug: "luis-salazar-jurado", name: "Luis Salazar Jurado", jobTitle: "Technical & semantic SEO consultant", description: "Madrid-based SEO consultant with a web development background, working across technical auditing, crawling, indexation, analytics, semantic strategy, and international search.", knowsAbout: ["Technical SEO", "Semantic SEO", "International SEO"], sameAs: ["https://www.semrush.com/blog/user/147427569/"] },
  { slug: "vince-sanders", name: "Vince Sanders", jobTitle: "Founder, CBD American Shaman", description: "Kansas City entrepreneur and founder of CBD American Shaman, with experience building a consumer brand through wholesale distribution, franchising, and retail operations.", knowsAbout: ["Entrepreneurship", "Franchising", "Retail operations"], worksFor: { "@type": "Organization", name: "CBD American Shaman", url: "https://cbdamericanshaman.com/" } },
].map(({ slug, ...person }) => ({
  "@type": "Person",
  "@id": `${site}/attendees/${slug}/#person`,
  url: `${site}/attendees/${slug}/`,
  mainEntityOfPage: `${site}/attendees/${slug}/`,
  ...person,
}));

export const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://seoconference.digital/#event-2026",
  name: "Holistic SEO Mastermind 2026",
  url: "https://seoconference.digital/",
  description: "An invitation-only gathering for business owners, operators, and SEO professionals, with four mastermind sessions, a conference day, evening Q&As, and shared group experiences. Invitation and reference required.",
  startDate: "2026-09-25",
  endDate: "2026-10-02",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  isAccessibleForFree: false,
  maximumAttendeeCapacity: 60,
  audience: { "@type": "Audience", audienceType: "Business owners, operators, entrepreneurs, and SEO professionals; invitation and reference required" },
  about: ["SEO and topical authority", "AI and research systems", "Automation and operations", "Business strategy", "Investment and allocation", "Management and leadership"].map((name) => ({ "@type": "Thing", name })),
  image: [
    "https://seoconference.digital/mastermind-collective-toast.jpg",
    "https://seoconference.digital/mastermind-unscripted-night.jpg",
    "https://seoconference.digital/mastermind-night-ride.jpg",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${site}/#webpage`,
    url: `${site}/`,
    name: "Holistic SEO Mastermind 2026",
    inLanguage: "en",
    publisher: { "@id": organizerId },
    mainEntity: { "@id": `${site}/#event-2026` },
  },
  location: {
    "@type": "Place",
    name: "Infinity by Yelken Aquapark Hotel",
    url: "https://www.infinitybyyelken.com/en",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kadınlar Denizi Mahallesi, 9. Sk",
      addressLocality: "Kuşadası",
      addressRegion: "Aydın",
      postalCode: "09400",
      addressCountry: "TR",
    },
  },
  organizer: eventOrganizer,
  attendee: eventAttendees,
  // This describes the advertised fee, not unrestricted public ticket sales.
  // No inventory, sales dates, or performer lineup is asserted without evidence.
  offers: {
    "@type": "Offer",
    "@id": `${site}/tickets/#participation-offer`,
    name: "Holistic SEO Mastermind 2026 — invited attendee participation",
    url: `${site}/tickets/#application`,
    price: 5000,
    priceCurrency: "USD",
    description: "USD 5,000 per new invited attendee. Includes accommodation, food, drinks, VIP airport transfers, four masterminds, the conference, and the listed group experiences. Invitation and reference required; the participation fee and payment timing are confirmed with the invitation before payment.",
    seller: { "@id": organizerId },
    itemOffered: { "@id": `${site}/#event-2026` },
  },
};
