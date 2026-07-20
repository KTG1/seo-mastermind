import Link from "next/link";
import BrandMark from "./brand-mark";
import NavigationIcon, { type NavigationIconName } from "./navigation-icon";
import styles from "./site-header.module.css";

type LinkItem = { label: string; href: string; icon: NavigationIconName; note?: string };
type Group = { label: string; icon: NavigationIconName; note: string; links: LinkItem[] };

const groups: Group[] = [
  { label: "Programme", icon: "agenda", note: "Seven days in the room and by the sea", links: [{ label: "Full agenda", href: "/agenda/", icon: "agenda", note: "The seven-day rhythm" }, { label: "The hotel", href: "/hotel/", icon: "venue", note: "Where the gathering lives" }, { label: "Ephesus", href: "/ephesus/", icon: "landmark", note: "Ancient-site visit" }, { label: "Şirince village", href: "/sirince/", icon: "village", note: "A slower day in the hills" }] },
  { label: "Work", icon: "agency", note: "The systems behind the room", links: [{ label: "Holistic SEO agency", href: "/agency/", icon: "agency", note: "The agency approach" }, { label: "Topical Authority course", href: "/course/", icon: "course", note: "Course and learning path" }, { label: "FAQ", href: "/faq/", icon: "faq", note: "Practical answers" }] },
  { label: "People", icon: "members", note: "Host and attending members", links: [{ label: "Koray Tuğberk Gübür", href: "/founder/", icon: "founder", note: "Founder and host" }, { label: "Member directory", href: "/attendees/", icon: "members", note: "Meet the room" }, { label: "James Dooley", href: "/attendees/james-dooley/", icon: "profile", note: "Member profile" }, { label: "Mads Singers", href: "/attendees/mads-singers/", icon: "profile", note: "Member profile" }, { label: "Mira Doran", href: "/attendees/mira-doran/", icon: "profile", note: "Member profile" }] },
];

export const footerGroups = [
  { label: "Explore", links: [{ label: "About the room", href: "/about/", icon: "about" as const }, { label: "Frequently asked questions", href: "/faq/", icon: "faq" as const }, { label: "Invitation & tickets", href: "/tickets/", icon: "ticket" as const }] },
  { label: "Programme", links: groups[0].links },
  { label: "Work & people", links: [...groups[1].links.slice(0, 2), ...groups[2].links] },
];

function MenuGroup({ group }: { group: Group }) {
  return <details className={styles.group}>
    <summary><NavigationIcon name={group.icon} /><span>{group.label}</span><i>+</i></summary>
    <div className={styles.panel}><p>{group.note}</p><div>{group.links.map((link) => <Link href={link.href} key={link.href}><NavigationIcon name={link.icon} /><span><strong>{link.label}</strong><small>{link.note}</small></span><NavigationIcon name="arrow" /></Link>)}</div></div>
  </details>;
}

type SiteHeaderProps = { className?: string; ctaHref?: string; ctaLabel?: string; ctaClassName?: string };

export default function SiteHeader({ className, ctaHref = "/tickets/#application", ctaLabel = "Request a seat", ctaClassName }: SiteHeaderProps) {
  return <header className={[styles.header, className].filter(Boolean).join(" ")}>
    <Link className={styles.wordmark} href="/" aria-label="Holistic SEO Mastermind home"><BrandMark /><span>HOLISTIC SEO<br />MASTERMIND</span></Link>
    <nav className={styles.navigation} aria-label="Primary navigation"><Link className={styles.about} href="/about/"><NavigationIcon name="about" /><span>About</span></Link>{groups.map((group) => <MenuGroup group={group} key={group.label} />)}</nav>
    <Link className={[styles.cta, ctaClassName].filter(Boolean).join(" ")} href={ctaHref}><NavigationIcon name="ticket" /><span>{ctaLabel}</span><i>↗</i></Link>
  </header>;
}
