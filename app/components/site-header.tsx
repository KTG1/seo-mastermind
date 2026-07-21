"use client";

import Link from "next/link";
import { useState } from "react";
import BrandMark from "./brand-mark";
import NavigationIcon, { type NavigationIconName } from "./navigation-icon";
import styles from "./site-header.module.css";

type LinkItem = { label: string; href: string; icon: NavigationIconName; note?: string };
type Group = { label: string; icon: NavigationIconName; note: string; links: LinkItem[] };

const groups: Group[] = [
  { label: "Programme", icon: "agenda", note: "Seven days in the room and by the sea", links: [{ label: "Full agenda", href: "/agenda/", icon: "agenda", note: "The seven-day rhythm" }, { label: "The hotel", href: "/hotel/", icon: "venue", note: "Where the gathering lives" }, { label: "Ephesus", href: "/ephesus/", icon: "landmark", note: "Ancient-site visit" }, { label: "Şirince village", href: "/sirince/", icon: "village", note: "A slower day in the hills" }] },
  { label: "Work", icon: "agency", note: "The systems behind the room", links: [{ label: "Holistic SEO agency", href: "/agency/", icon: "agency", note: "The agency approach" }, { label: "Topical Authority course", href: "/course/", icon: "course", note: "Course and learning path" }] },
  { label: "People", icon: "members", note: "Host, members, and voices from the room", links: [{ label: "Koray Tuğberk Gübür", href: "/founder/", icon: "founder", note: "Founder and host" }, { label: "Member directory", href: "/attendees/", icon: "members", note: "Meet the room" }, { label: "Testimonials", href: "/testimonials/", icon: "members", note: "Voices around the table" }, { label: "James Dooley", href: "/attendees/james-dooley/", icon: "james", note: "Member profile" }, { label: "Mads Singers", href: "/attendees/mads-singers/", icon: "mads", note: "Member profile" }, { label: "Mira Doran", href: "/attendees/mira-doran/", icon: "mira", note: "Member profile" }, { label: "Vince Sanders", href: "/attendees/vince-sanders/", icon: "members", note: "Founder profile" }] },
];

const primaryLinks = [
  { label: "About", href: "/about/", icon: "about" as const },
  { label: "FAQ", href: "/faq/", icon: "faq" as const },
];

function MenuGroup({ group, open, onToggle, onClose }: { group: Group; open: boolean; onToggle: () => void; onClose: () => void }) {
  return <details className={styles.group} open={open}>
    <summary aria-expanded={open} onClick={(event) => { event.preventDefault(); onToggle(); }}><NavigationIcon name={group.icon} /><span>{group.label}</span><i>+</i></summary>
    <div className={styles.panel}><p>{group.note}</p><div>{group.links.map((link) => <Link href={link.href} key={link.href} onClick={onClose}><NavigationIcon name={link.icon} /><span><strong>{link.label}</strong><small>{link.note}</small></span><NavigationIcon name="arrow" /></Link>)}</div></div>
  </details>;
}

function CompactMenu() {
  return <details className={styles.compactMenu}>
    <summary><span>Menu</span><i>+</i></summary>
    <div className={styles.compactPanel}>
      <div className={styles.compactPrimary}>{primaryLinks.map((link) => <Link href={link.href} key={link.href}><NavigationIcon name={link.icon} /><span>{link.label}</span><NavigationIcon name="arrow" /></Link>)}</div>
      {groups.map((group) => <section key={group.label}><p>{group.label}</p><div>{group.links.map((link) => <Link href={link.href} key={link.href}><span>{link.label}</span><small>{link.note}</small></Link>)}</div></section>)}
    </div>
  </details>;
}

type SiteHeaderProps = { className?: string; ctaHref?: string; ctaLabel?: string; ctaClassName?: string };

export default function SiteHeader({ className, ctaHref = "/tickets/#application", ctaLabel = "Request a seat", ctaClassName }: SiteHeaderProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  function toggleGroup(label: string) {
    setOpenGroup((current) => current === label ? null : label);
  }

  return <header className={[styles.header, className].filter(Boolean).join(" ")}>
    <Link className={styles.wordmark} href="/" aria-label="Holistic SEO Mastermind home"><BrandMark /><span>HOLISTIC SEO<br />MASTERMIND</span></Link>
    <nav className={styles.navigation} aria-label="Primary navigation">
      <Link className={styles.menuLink} href="/about/"><NavigationIcon name="about" /><span>About</span></Link>
      <MenuGroup group={groups[1]} open={openGroup === groups[1].label} onToggle={() => toggleGroup(groups[1].label)} onClose={() => setOpenGroup(null)} />
      <MenuGroup group={groups[0]} open={openGroup === groups[0].label} onToggle={() => toggleGroup(groups[0].label)} onClose={() => setOpenGroup(null)} />
      <MenuGroup group={groups[2]} open={openGroup === groups[2].label} onToggle={() => toggleGroup(groups[2].label)} onClose={() => setOpenGroup(null)} />
      <Link className={styles.menuLink} href="/faq/"><NavigationIcon name="faq" /><span>FAQ</span></Link>
    </nav>
    <CompactMenu />
    <Link className={[styles.cta, ctaClassName].filter(Boolean).join(" ")} href={ctaHref}><NavigationIcon name="ticket" /><span>{ctaLabel}</span><i>↗</i></Link>
  </header>;
}
