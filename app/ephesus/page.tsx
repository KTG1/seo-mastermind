import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import styles from "./page.module.css";

export const metadata = {
  title: "Ephesus Visit | Holistic SEO Mastermind",
  description: "A shared visit to the ancient city of Ephesus during the Holistic SEO Mastermind in Kuşadası, Türkiye.",
};

const route = [
  ["Meet", "The hotel lobby", "A considered departure together, with water and sun protection ready."],
  ["Walk", "The marble city", "A paced route through Ephesus—time to look closely, photograph, and ask better questions."],
  ["Pause", "The Library of Celsus", "A shared stop at one of the site's most recognisable facades, without rushing to the next thing."],
  ["Return", "The long table", "The afternoon closes back at the hotel, carrying the day into dinner and conversation."],
];

export default function EphesusPage() {
  return (
    <main className={styles.page}>
      <SiteHeader className={styles.header} ctaClassName={styles.ticket} ctaHref="/tickets/" ctaLabel="Tickets" />

      <section className={styles.hero}>
        <Image src={assetPath("/media-ephesus-group.jpg")} alt="Mastermind attendees together among the ancient ruins of Ephesus" fill priority sizes="100vw" unoptimized />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p>Shared excursion · Kuşadası, Türkiye</p>
          <h1>Walk through<br /><em>what remains.</em></h1>
          <span>EPHESUS / A HALF-DAY OUTSIDE THE ROOM</span>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.eyebrow}>Why we go</p>
        <h2>To make room<br />for a <em>longer view.</em></h2>
        <p className={styles.copy}>Ephesus shifts the scale of the week. Beyond the work sessions and the hotel table, we will spend one unhurried half-day walking a city built for trade, theatre, ideas, and public life.</p>
      </section>

      <section className={styles.route}>
        <div className={styles.routeHeading}><p className={styles.eyebrow}>The shape of the visit</p><h2>Follow the<br /><em>stone line.</em></h2><p>We keep the group small and the pace human. This is not a checklist; it is a shared interruption to the usual rhythm.</p></div>
        <ol>{route.map(([moment, place, detail], index) => <li key={place}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{moment}</b><h3>{place}</h3></div><p>{detail}</p></li>)}</ol>
      </section>

      <section className={styles.notes}>
        <div><p className={styles.eyebrow}>A few practical notes</p><ul><li>Comfortable walking shoes matter—the route is marble, uneven in places, and best experienced slowly.</li><li>The excursion is woven into the seven-day programme; confirmed timing and transport details are shared with invited attendees.</li><li>Bring curiosity, water, and a camera if you want one. The group returns to the hotel for the rest of the day.</li></ul></div>
        <div className={styles.pullQuote}><span>“</span><p>History is not a backdrop. It changes the questions you bring back to the table.</p></div>
      </section>

      <section className={styles.cta}>
        <div><p className={styles.eyebrow}>The seven-day experience</p><h2>One ancient city.<br />One <em>shared memory.</em></h2></div>
        <Link href="/agenda/">See the full agenda <i>→</i></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
