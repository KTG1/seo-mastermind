import Image from "next/image";
import Link from "next/link";
import AgendaMenu from "../components/agenda-menu";
import BrandMark from "../components/brand-mark";
import SiteFooter from "../components/site-footer";
import styles from "./page.module.css";

export const metadata = {
  title: "The Hotel | Holistic SEO Mastermind",
  description: "An illustrative venue preview for the Holistic SEO Mastermind in Kuşadası, Türkiye.",
};

const spaces = [
  ["The salon", "Focused morning work", "A daylight room set for the system maps, working clinics, and small-group conversations that need a table and a little privacy."],
  ["The terrace", "Unhurried connection", "The place for long lunches, walking pairs, and the conversations that begin after the planned session ends."],
  ["The garden table", "Evenings that continue the work", "Shared dinners are deliberately part of the programme—warm enough to be generous, small enough to stay honest."],
  ["The coast", "Recovery with purpose", "Water, quiet time, and selected recovery moments create the space needed for a difficult idea to settle into a real decision."],
];

export default function HotelPage() {
  return <main className={styles.hotel}>
    <header className={styles.header}><Link className={styles.wordmark} href="/"><BrandMark /><b>HOLISTIC SEO<br />MASTERMIND</b></Link><nav aria-label="Primary navigation"><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav><Link href="/tickets/">Tickets <i>↗</i></Link></header>

    <section className={styles.hero}>
      <Image src="/hotel-venue-preview.png" alt="Illustrative Mediterranean hotel terrace overlooking the sea at blue hour" fill priority sizes="100vw" unoptimized />
      <div className={styles.shade} />
      <div className={styles.heroCopy}><p>Illustrative venue preview · Kuşadası</p><h1>The hotel is<br />part of the <em>room.</em></h1><span>Final hotel details will be confirmed with invited attendees.</span></div>
    </section>

    <section className={styles.intro}><span>More than a place to sleep</span><p>For seven days, the venue holds the rhythm of the mastermind: concentrated work in the morning, the right kind of space between sessions, and evenings that allow the conversation to deepen.</p></section>

    <section className={styles.spaces}><div className={styles.spaceLead}><span>How the event lives here</span><h2>One setting.<br /><em>Four modes.</em></h2></div><div>{spaces.map(([name, moment, text], index) => <article key={name}><span>0{index + 1}</span><div><h3>{name}</h3><b>{moment}</b></div><p>{text}</p></article>)}</div></section>

    <section className={styles.dayFlow}><div><span>How a day is organised</span><h2>The programme moves<br />with the <em>place.</em></h2></div><ol><li><time>Morning</time><strong>Focused work in the salon</strong><p>System mapping, live clinics, and practical decisions before the day becomes noisy.</p></li><li><time>Afternoon</time><strong>Terrace time &amp; recovery</strong><p>Long lunch, walking conversations, water, or quiet room to integrate what surfaced.</p></li><li><time>Evening</time><strong>The long table</strong><p>Hosted dinners and smaller conversations—less networking, more shared context.</p></li></ol></section>

    <section className={styles.stay}><div><span>What attendees can expect</span><ul><li>A single venue that keeps the group close without feeling enclosed</li><li>Spaces designed for work, rest, meals, and unplanned conversation</li><li>Access and activity details shared with invited attendees before arrival</li></ul></div><div><h2>Come for the room.<br />Stay for what<br /><em>happens around it.</em></h2><Link href="/tickets/#application">Apply for an invitation <i>→</i></Link></div></section>
    <SiteFooter />
  </main>;
}
