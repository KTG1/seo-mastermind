import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import type { ReactNode } from "react";
import styles from "./mira-doran/page.module.css";

type Source = { label: string; url: string };

type Props = {
  name: string;
  initials: string;
  role: string;
  location: string;
  focus: string;
  headline: ReactNode;
  biography: string[];
  perspective: string;
  sources: Source[];
};

export default function ResearchedProfile({ name, initials, role, location, focus, headline, biography, perspective, sources }: Props) {
  const [firstName, ...surname] = name.split(" ");
  return <main className={styles.attendeePage}>
    <SiteHeader className="attendeeHeader" />
    <section className="attendeeHero"><div className="attendeeEyebrow">Attendee biography <span>✦</span> Holistic SEO Mastermind</div><h1>{firstName}<br /><em>{surname.join(" ")}</em></h1><div className="attendeeIntro"><p>{role}</p><p>{location}</p></div><div className="attendeeMonogram" aria-hidden="true"><span>{initials}</span><i>HSM</i></div></section>
    <section className="profileLedger" aria-label={`${name} profile details`}><div><span>Focus</span><strong>{focus}</strong></div><div><span>Role</span><strong>{role}</strong></div><div><span>Based in</span><strong>{location}</strong></div><div className="privateField"><span>At the table</span><strong>Operator <em>perspective</em></strong></div></section>
    <section className="attendeeStory"><div className="storyAside"><span>01</span><p>Biography</p></div><div className="storyBody"><h2>{headline}</h2>{biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="attendeeQuote"><div className="quoteMark">↳</div><blockquote>{perspective}</blockquote><p>What {firstName} brings to the room</p></section>
    <section className="interview"><div className="interviewHeading"><span>02</span><h2>Public record</h2><p>Biography checked against public professional sources.</p></div><div className="interviewList">{sources.map((source, index) => <article key={source.url}><span>0{index + 1}</span><h3>{source.label}</h3><p><a href={source.url} target="_blank" rel="noreferrer">Read the source profile ↗</a></p></article>)}</div></section>
    <SiteFooter />
  </main>;
}
