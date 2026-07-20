import { type ReactNode, useId } from "react";

export type NavigationIconName = "about" | "agenda" | "venue" | "landmark" | "village" | "agency" | "course" | "founder" | "members" | "james" | "mads" | "mira" | "ticket" | "faq" | "arrow";

const iconDetails: Record<NavigationIconName, { title: string; description: string; paths: ReactNode }> = {
  about: { title: "About the mastermind", description: "An open doorway representing an introduction to the mastermind.", paths: <><path d="M5 3h10v18H5z" /><path d="M8 12h4M10 9v6" /></> },
  agenda: { title: "Seven-day agenda", description: "A calendar grid representing the event programme.", paths: <><rect x="3" y="5" width="14" height="12" rx="1" /><path d="M6 3v4M14 3v4M3 9h14M7 12h3M7 15h5" /></> },
  venue: { title: "Hotel venue", description: "A building and sun representing the gathering venue.", paths: <><path d="M3 17h14M5 17V8l5-4 5 4v9M8 10h1M11 10h1M8 13h1M11 13h1" /><path d="M16 4h2" /></> },
  landmark: { title: "Ephesus visit", description: "Ancient columns representing the Ephesus destination.", paths: <><path d="M3 17h14M5 15V8M10 15V8M15 15V8M4 7h12M3 5l7-3 7 3M7 8h6" /></> },
  village: { title: "Şirince village", description: "A hillside home representing Şirince village.", paths: <><path d="M3 16h14M5 16v-6l5-4 5 4v6M8 16v-3h4v3M3 9c2-2 4-3 6-3" /></> },
  agency: { title: "Holistic SEO agency", description: "Connected nodes representing the agency's systems approach.", paths: <><circle cx="5" cy="10" r="2" /><circle cx="15" cy="5" r="2" /><circle cx="15" cy="15" r="2" /><path d="m7 9 6-3M7 11l6 3" /></> },
  course: { title: "Topical Authority course", description: "An open book representing the course and learning material.", paths: <><path d="M3 4.5c3-1 5 .2 7 2v10c-2-1.8-4-3-7-2zM17 4.5c-3-1-5 .2-7 2v10c2-1.8 4-3 7-2z" /></> },
  founder: { title: "Founder biography", description: "A portrait frame representing the founder page.", paths: <><circle cx="10" cy="7" r="3" /><path d="M4 17c.9-3 2.9-4.5 6-4.5s5.1 1.5 6 4.5M3 3h14v14H3z" /></> },
  members: { title: "Member directory", description: "A group of people representing the attendee directory.", paths: <><circle cx="10" cy="6" r="2.5" /><circle cx="4.5" cy="8" r="1.8" /><circle cx="15.5" cy="8" r="1.8" /><path d="M5 17c.8-3 2.5-4.5 5-4.5s4.2 1.5 5 4.5M1.5 16c.3-2 1.3-3.2 3-3.8M18.5 16c-.3-2-1.3-3.2-3-3.8" /></> },
  james: { title: "James Dooley profile", description: "A rising search chart representing James Dooley's SEO entrepreneur profile.", paths: <><path d="M3 17h14M5 15v-4M9 15V8M13 15V5" /><path d="m4 9 4-3 3 1 5-4M14 3h2v2" /></> },
  mads: { title: "Mads Singers profile", description: "A compass and leadership point representing Mads Singers' business operator profile.", paths: <><circle cx="10" cy="10" r="7" /><path d="m12.8 7.2-1.6 4-4 1.6 1.6-4zM10 3v1M17 10h-1M10 17v-1M3 10h1" /></> },
  mira: { title: "Mira Doran profile", description: "A written page and pencil representing Mira Doran's independent publisher profile.", paths: <><path d="M5 3h8l3 3v11H5zM13 3v4h3M8 11h5M8 14h3" /><path d="m12.5 15.5 3-3 1 1-3 3-1.5.5z" /></> },
  ticket: { title: "Invitation application", description: "A ticket shape representing an invitation application.", paths: <><path d="M4 5h12v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4zM10 6v8" /></> },
  faq: { title: "Frequently asked questions", description: "A speech bubble with a question mark representing practical answers.", paths: <><path d="M3 4h14v10H9l-4 3v-3H3z" /><path d="M8 8a2 2 0 1 1 3.5 1.3C10 10.4 10 11 10 11M10 12.8h.01" /></> },
  arrow: { title: "Open page", description: "An arrow pointing toward the linked page.", paths: <><path d="M4 10h11M11 6l4 4-4 4" /></> },
};

export default function NavigationIcon({ name, className }: { name: NavigationIconName; className?: string }) {
  const ids = useId();
  const detail = iconDetails[name];
  return <svg className={className} viewBox="0 0 20 20" role="img" aria-labelledby={`${ids}-title ${ids}-description`} fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round"><title id={`${ids}-title`}>{detail.title}</title><desc id={`${ids}-description`}>{detail.description}</desc>{detail.paths}</svg>;
}
