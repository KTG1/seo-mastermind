import Image from "next/image";
import Link from "next/link";
import AgendaMenu from "../components/agenda-menu";
import BrandMark from "../components/brand-mark";
import SiteFooter from "../components/site-footer";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Holistic SEO Mastermind",
  description: "Why Holistic SEO Mastermind exists, hosted by Koray Tuğberk Gübür in Kuşadası, Türkiye.",
};

const principles = [
  ["Bring the real work", "The room is for the difficult question behind the presentation: the architecture, process, market, or operating habit that needs to change."],
  ["Think in relationships", "Search becomes durable when technical foundations, useful information, reputation, and commercial decisions strengthen one another."],
  ["Leave with a thread", "The value is not a stack of notes. It is a small number of decisions that remain clear when you return to a busy Monday."],
];

export default function AboutPage() {
  return <main className={styles.aboutPage}>
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/"><BrandMark /><b>HOLISTIC SEO<br />MASTERMIND</b></Link>
      <nav aria-label="Primary navigation" style={{ display: "flex", gap: 18, marginLeft: 0 }}><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav>
      <Link href="/#apply">Request a seat <i>↗</i></Link>
    </header>

    <section className={styles.hero}>
      <p>About the room</p>
      <h1>For people who<br />want search to <em>mean more.</em></h1>
      <div><span>Hosted by Koray Tuğberk Gübür</span><span>A small gathering for serious operators</span></div>
    </section>

    <section className={styles.statement}>
      <span>01 / Why we gather</span>
      <p>Holistic SEO Mastermind exists because the most important search work cannot be solved by a checklist—or in isolation.</p>
      <div><p>It needs a room where people can bring the unfinished problem, see the system around it, and be challenged by peers who understand the cost of getting it wrong.</p><p>We meet in Kuşadası to give the thinking space: away from the dashboard, close to the sea, and in conversation with people who are building for the long term.</p></div>
    </section>

    <section className={styles.groupPhoto}>
      <Image src="/holistic-seo-mastermind-group.png" alt="Members of the Holistic SEO Mastermind gathering in Kuşadası" fill sizes="100vw" unoptimized />
      <div><span>THE ROOM, KUŞADASI</span><p>Different businesses. One shared appetite for the work beneath the work.</p></div>
    </section>

    <section className={styles.host}>
      <span>02 / Your host</span>
      <div><h2>Koray Tuğberk<br /><em>Gübür</em></h2><p>Koray hosts the room with a systems view of organic growth—making space for exact thinking, real debate, and the practical moves that turn insight into a stronger search presence.</p><Link href="/founder/">Meet Koray Tuğberk Gübür <i>→</i></Link></div>
    </section>

    <section className={styles.principles}>
      <div className={styles.principleLead}><span>03 / How we work</span><h2>Not a conference.<br /><em>A working table.</em></h2></div>
      <div>{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={styles.closing}><p>The most useful search strategy is the one your company can keep becoming.</p><Link href="/#apply">Join the next room <i>→</i></Link></section>
    <SiteFooter />
  </main>;
}
