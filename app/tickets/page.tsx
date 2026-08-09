import Link from "next/link";
import type { CSSProperties } from "react";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import TicketApplication from "./ticket-application";
import background from "./tickets-background.module.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Apply for Holistic SEO Mastermind 2026 | Kuşadası",
  description: "Apply for an invitation to the seven-day Holistic SEO Mastermind 2026 in Kuşadası, Türkiye.",
};

const galleryMoments = [
  { src: "/tickets-gallery/session-room.jpg", alt: "A live mastermind session with attendees gathered around the stage", layout: "galleryAnchor" },
  { src: "/tickets-gallery/working-cabana.jpg", alt: "A small working group exchanging ideas beside the water", layout: "galleryWaterfront" },
  { src: "/tickets-gallery/night-group.jpg", alt: "Four attendees sharing a relaxed evening together", layout: "galleryNightGroup" },
  { src: "/tickets-gallery/wine-tasting.jpg", alt: "Attendees discovering a local wine during a cultural visit", layout: "galleryStart" },
  { src: "/tickets-gallery/safari-joy.jpg", alt: "Koray welcoming the group from the top of a safari jeep", layout: "galleryHeadlights" },
  { src: "/tickets-gallery/ephesus-moment.jpg", alt: "An attendee enjoying a playful moment among the ruins of Ephesus", layout: "galleryPortraitSun" },
  { src: "/tickets-gallery/water-fight.jpg", alt: "The group taking part in an outdoor water game", layout: "galleryClimb" },
  { src: "/tickets-gallery/safari-arrival.jpg", alt: "A safari jeep arriving along a forest road", layout: "galleryPortraitStone" },
  { src: "/tickets-gallery/cabana-circle.jpg", alt: "Attendees continuing the conversation in a shaded waterfront cabana", layout: "galleryTurn" },
  { src: "/tickets-gallery/cabana-trio.jpg", alt: "Koray seated with two attendees between sessions", layout: "galleryDusk" },
  { src: "/tickets-gallery/night-safari.jpg", alt: "Friends returning together after an evening safari", layout: "galleryRoad" },
  { src: "/tickets-gallery/ephesus-group.jpg", alt: "The full mastermind group gathered at the ancient city of Ephesus", layout: "galleryTrail" },
];

export default function TicketsPage() {
  return <main className={styles.tickets} style={{ "--tickets-poster": `url(${assetPath("/tickets-ephesus-group.jpg")})` } as CSSProperties}>
    <div className={`${styles.motionBackground} ${background.frame}`} aria-hidden="true">
      <div className={`${styles.motionPoster} ${background.photo}`} />
      <div className={styles.motionShade} />
    </div>
    <SiteHeader className={styles.header} ctaHref="#application" ctaLabel="Apply" />

    <section className={styles.hero}>
      <p>Seven days / Kuşadası, Türkiye</p>
      <h1>Where hard problems<br /><em>meet sharper minds.</em></h1>
      <div className={styles.heroBottom}><span>Hosted by Koray Tuğberk Gübür</span><span>Small by design</span></div>
    </section>

    <section className={styles.ticketPanel}>
      <div className={styles.ticketHeading}><span>Full week pass</span><h2>One place at<br />the table.</h2><p>Designed for the operator who wants time, perspective, and a room capable of meeting the real challenge.</p></div>
      <div className={styles.priceBox}><span>Participation fee</span><strong>$5,000</strong><small>USD · per attendee · seven-day immersion</small><Link href="#application">Apply for an invitation <i>→</i></Link></div>
      <div className={styles.inclusions}><span>What your place includes</span><ul><li><b>Two live working clinics</b> focused on your own business challenge.</li><li><b>A carefully composed peer room</b> for serious challenge and exchange.</li><li><b>Seven days of systems thinking</b> with Koray and the full group.</li><li><b>Hosted long-table meals</b> where the conversation keeps moving.</li><li><b>Selected water, massage, and recovery moments</b> to create space for insight.</li><li><b>A 90-day commitment</b> you can carry back into the business.</li></ul></div>
    </section>

    <section className={styles.gallery} aria-labelledby="gallery-title">
      <div className={styles.galleryHeading}>
        <span>Beyond the sessions</span>
        <h2 id="gallery-title">Seven days.<br /><em>One shared story.</em></h2>
        <p>The strongest connections rarely end when the working session does. The room moves—from hard questions to open roads, long dinners, and the moments nobody schedules.</p>
      </div>
      <div className={styles.galleryGrid} style={{ gridAutoFlow: "dense" }}>
        {galleryMoments.map((moment, index) => <figure className={`${styles.galleryFrame} ${styles[moment.layout]}`} key={moment.src}>
          <img src={assetPath(moment.src)} alt={moment.alt} loading="lazy" />
          <figcaption>{String(index + 1).padStart(2, "0")} / Kuşadası</figcaption>
        </figure>)}
      </div>
      <p className={styles.galleryFoot}>The work is serious. The week is alive.</p>
    </section>

    <TicketApplication />
    <section className={styles.note}><span>Before you apply</span><p>The $5,000 participation fee and payment timing are confirmed with your invitation before any payment is taken.</p></section>
    <SiteFooter />
  </main>;
}
