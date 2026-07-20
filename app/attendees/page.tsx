"use client";

import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { useMemo, useState } from "react";
import styles from "./page.module.css";
import WorldMap from "./world-map";

export type Member = { name: string; initials: string; role: string; location: string; focus: string; joined: string; tone: string; coordinates: [number, number]; slug: string };

const members: Member[] = [
  { name: "James Dooley", initials: "JD", role: "SEO entrepreneur", location: "United Kingdom", focus: "Authority", joined: "2026", tone: "coral", coordinates: [-2.5, 54.5], slug: "james-dooley" },
  { name: "Mads Singers", initials: "MS", role: "Business operator", location: "Denmark", focus: "Strategy", joined: "2026", tone: "blue", coordinates: [10.1, 56.1], slug: "mads-singers" },
  { name: "Mira Doran", initials: "MD", role: "Independent publisher & founder", location: "Manchester, UK", focus: "Authority", joined: "2025", tone: "olive", coordinates: [-2.24, 53.48], slug: "mira-doran" },
];

const focuses = ["All", ...Array.from(new Set(members.map((member) => member.focus)))];

export default function AttendeesDirectory() {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState("All");
  const visibleMembers = useMemo(() => members.filter((member) => {
    const matchesFocus = focus === "All" || member.focus === focus;
    const searchable = `${member.name} ${member.role} ${member.location} ${member.focus}`.toLowerCase();
    return matchesFocus && searchable.includes(query.trim().toLowerCase());
  }), [focus, query]);

  return <main className={styles.directory}>
    <SiteHeader className={styles.header} ctaHref="/#apply" />

    <section className={styles.hero}>
      <div><p>Member directory <span>·</span> First profiles</p><h1>People who<br /><em>do the work.</em></h1></div>
      <p className={styles.heroCopy}>Three early profiles from a cross-disciplinary room for people building durable organic advantage. Open each card for its inner page.</p>
    </section>

    <section className={styles.stats} aria-label="Directory statistics">
      <div><strong>{members.length}</strong><span>member<br />profiles</span></div>
      <div><strong>{new Set(members.map((member) => member.location.split(", ").at(-1))).size}</strong><span>countries &amp;<br />regions represented</span></div>
      <div><strong>{focuses.length - 1}</strong><span>organic-growth<br />specialisms</span></div>
      <div><strong>07</strong><span>days of shared<br />working time</span></div>
    </section>

    <WorldMap members={visibleMembers} />

    <section className={styles.members}>
      <div className={styles.controlBar}>
        <label className={styles.search}><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, location, or focus" aria-label="Search members" /></label>
        <span>{visibleMembers.length} shown</span>
      </div>
      <div className={styles.filters} role="group" aria-label="Filter by focus">{focuses.map((option) => <button key={option} type="button" aria-pressed={focus === option} onClick={() => setFocus(option)}>{option}</button>)}</div>
      <div className={styles.memberGrid} aria-live="polite">
        {visibleMembers.map((member, index) => <Link className={styles.member} href={`/attendees/${member.slug}/`} key={member.name} aria-label={`Open ${member.name}'s attendee profile`}>
          <div className={`${styles.monogram} ${styles[member.tone]}`}><span>{member.initials}</span><i>HSM</i></div>
          <div className={styles.memberMeta}><span>Member / 0{index + 1}</span><span>Joined {member.joined}</span></div>
          <h2>{member.name}</h2><p>{member.role}</p>
          <footer><span>{member.location}</span><b>{member.focus} <i>↗</i></b></footer>
        </Link>)}
      </div>
      {visibleMembers.length === 0 && <div className={styles.empty}>No members match that search. Try another name, location, or focus.</div>}
    </section>

    <section className={styles.closing}><p>The directory is only the beginning. The value is in what happens when these perspectives meet.</p><Link href="/#apply">Join the next room <i>→</i></Link></section>
    <SiteFooter />
  </main>;
}
