import type { NavigationIconName } from "./navigation-icon";

type FooterLink = { label: string; href: string; icon: NavigationIconName };
type FooterGroup = { label: string; links: FooterLink[] };

export const footerGroups: FooterGroup[] = [
  { label: "Explore", links: [{ label: "About the room", href: "/about/", icon: "about" }, { label: "Frequently asked questions", href: "/faq/", icon: "faq" }, { label: "Invitation & tickets", href: "/tickets/", icon: "ticket" }] },
  { label: "Programme", links: [{ label: "Full agenda", href: "/agenda/", icon: "agenda" }, { label: "The hotel", href: "/hotel/", icon: "venue" }, { label: "Ephesus", href: "/ephesus/", icon: "landmark" }, { label: "Şirince village", href: "/sirince/", icon: "village" }] },
  { label: "Work & people", links: [{ label: "Holistic SEO agency", href: "/agency/", icon: "agency" }, { label: "Topical Authority course", href: "/course/", icon: "course" }, { label: "Koray Tuğberk Gübür", href: "/founder/", icon: "founder" }, { label: "Member directory", href: "/attendees/", icon: "members" }, { label: "Testimonials", href: "/testimonials/", icon: "members" }, { label: "James Dooley", href: "/attendees/james-dooley/", icon: "james" }, { label: "Mads Singers", href: "/attendees/mads-singers/", icon: "mads" }, { label: "Mira Doran", href: "/attendees/mira-doran/", icon: "mira" }, { label: "Vince Sanders", href: "/attendees/vince-sanders/", icon: "members" }] },
];
