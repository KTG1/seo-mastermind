import Image from "next/image";
import Link from "next/link";
import AgendaMenu from "../components/agenda-menu";
import BrandMark from "../components/brand-mark";
import SiteFooter from "../components/site-footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Şirince Village | Holistic SEO Mastermind",
  description: "A slow village day in Şirince during the Holistic SEO Mastermind in Kuşadası, Türkiye.",
};

const moments = [
  ["Arrive", "Leave the main road behind", "We meet as a small group and enter the village without a rushed agenda."],
  ["Wander", "Follow the hillside lanes", "Whitewashed facades, small details, open doors, and the permission to take the long way."],
  ["Gather", "Share a local table", "Lunch becomes a pause in the programme: food, a view, and conversations that do not need a facilitator."],
  ["Carry it back", "Make space for the unplanned", "The visit ends in time to return to the hotel, rest, and let the evening begin naturally."],
];

export default function SirincePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/"><BrandMark /><b>HOLISTIC SEO<br />MASTERMIND</b></Link>
        <nav aria-label="Primary navigation"><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav>
        <Link className={styles.ticket} href="/tickets/">Tickets <i>↗</i></Link>
      </header>

      <section className={styles.hero}>
        <Image src="/sirince-village-preview.png" alt="Illustrative cobblestone lane through Şirince village in late afternoon light" fill priority sizes="100vw" unoptimized />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}><p>Village day · Hills above Kuşadası</p><h1>A different<br /><em>kind of pace.</em></h1><span>ŞİRİNCE / A DAY FOR LOOKING UP</span></div>
      </section>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>A village within the week</p>
        <div><h2>Some of the best<br />thinking happens<br /><em>off the agenda.</em></h2><p>Şirince gives the mastermind a quieter register: a hillside village of stone lanes, tiled roofs, olive trees, and long views. We go to soften the pace—not to fill it.</p></div>
      </section>

      <section className={styles.moments}>
        <div className={styles.momentLead}><p className={styles.eyebrow}>The village rhythm</p><h2>No fixed<br /><em>route.</em></h2><p>A short journey out, a generous stretch of time there, and enough room for people to follow what catches their attention.</p></div>
        <div className={styles.cards}>{moments.map(([step, heading, copy], index) => <article key={heading}><div><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div><h3>{heading}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className={styles.table}>
        <div className={styles.tableTitle}><p className={styles.eyebrow}>The point of the table</p><h2>There is no<br /><em>break</em> from the<br />mastermind.</h2></div>
        <p>There are only different kinds of attention. A shared meal is where the formal conversation loosens, new friendships find their language, and a difficult idea can become simple enough to act on.</p>
      </section>

      <section className={styles.notes}>
        <div><p className={styles.eyebrow}>Good to know</p><ul><li>The village is built on a hill; comfortable shoes make the day better.</li><li>Transport, meeting time, and table details are shared with invited attendees before arrival.</li><li>Leave enough room in your bag for a small find and enough room in your day for a detour.</li></ul></div>
        <Link href="/agenda/">Explore the seven-day agenda <i>→</i></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
