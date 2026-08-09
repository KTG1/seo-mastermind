import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import styles from "./page.module.css";

export const metadata = {
  title: "Why We Gather | Holistic SEO Mastermind",
  description: "The story behind Holistic SEO Mastermind: a seven-day working room for serious operators in Kuşadası, Türkiye.",
};

const chapters = [
  ["The question", "The work that matters rarely fits on a slide.", "Behind every visible search problem sits a larger one: an unclear system, a difficult decision, or a business that has outgrown the way it works."],
  ["The room", "So we built a place for unfinished thinking.", "Not a stage and an audience. A table where the real problem can be opened, challenged, and seen through the experience of people who understand what is at stake."],
  ["The distance", "Clarity often arrives after the agenda ends.", "The conversation continues by the water, on the road, over dinner, and among places older than the problems we arrived carrying."],
];

export default function AboutPage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} ctaHref="/tickets/#application" ctaLabel="Apply" />

    <section className={styles.hero} aria-labelledby="about-title">
      <Image src={assetPath("/tickets-gallery/ephesus-group.jpg")} alt="The Holistic SEO Mastermind group gathered at Ephesus" fill priority sizes="100vw" unoptimized />
      <div className={styles.heroVeil} />
      <div className={styles.heroCopy}>
        <p>Why we gather / Kuşadası, Türkiye</p>
        <h1 id="about-title">It began with a question<br /><em>too large for a slide.</em></h1>
        <div><span>Scroll to follow the story</span><span>↓</span></div>
      </div>
    </section>

    <section className={styles.prologue}>
      <span>Prologue</span>
      <p>Search work is full of answers. The rare thing is a room willing to stay with the <em>right question.</em></p>
    </section>

    <section className={styles.story} aria-label="The story of the mastermind">
      <div className={styles.thread} aria-hidden="true" />
      {chapters.map(([label, title, copy], index) => <article className={styles.chapter} key={label}>
        <div className={styles.chapterNumber}><span>0{index + 1}</span><i /></div>
        <div className={styles.chapterCopy}><p>{label}</p><h2>{title}</h2><div>{copy}</div></div>
        <figure className={styles.chapterImage}>
          <Image
            src={assetPath(index === 0 ? "/tickets-gallery/session-room.jpg" : index === 1 ? "/tickets-gallery/working-cabana.jpg" : "/tickets-gallery/ephesus-moment.jpg")}
            alt={index === 0 ? "A live mastermind session" : index === 1 ? "A working group in a waterfront cabana" : "An attendee exploring Ephesus"}
            fill sizes="(max-width: 800px) 100vw, 45vw" unoptimized
          />
          <figcaption>{index === 0 ? "THE WORK" : index === 1 ? "THE TABLE" : "THE DISTANCE"}</figcaption>
        </figure>
      </article>)}
    </section>

    <section className={styles.interlude}>
      <Image src={assetPath("/tickets-gallery/water-fight.jpg")} alt="Mastermind attendees sharing an outdoor activity" fill sizes="100vw" unoptimized />
      <div className={styles.interludeVeil} />
      <p>Serious work does not require<br /><em>a joyless week.</em></p>
      <span>The relationships are part of the method.</span>
    </section>

    <section className={styles.host}>
      <div className={styles.hostPortrait}><Image src={assetPath("/tickets-gallery/safari-joy.jpg")} alt="Koray Tuğberk Gübür welcoming the group" fill sizes="(max-width: 800px) 100vw, 42vw" unoptimized /></div>
      <div className={styles.hostCopy}><span>04 / The host</span><h2>Held by Koray.<br /><em>Shaped by the room.</em></h2><p>Koray Tuğberk Gübür hosts with a systems view of organic growth. He sets the conditions for exact thinking and candid exchange, then lets the strongest question—not the loudest voice—lead.</p><Link href="/founder/">Meet Koray <i>→</i></Link></div>
    </section>

    <section className={styles.return}>
      <span>05 / The return</span>
      <h2>You do not leave with more noise.</h2>
      <p>You leave with a thread: a small number of decisions clear enough to survive the journey back to a busy Monday.</p>
      <div><Link href="/agenda/">See the seven-day programme <i>→</i></Link><Link href="/tickets/#application">Request an invitation <i>→</i></Link></div>
    </section>

    <SiteFooter />
  </main>;
}
