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

    <TicketApplication />
    <section className={styles.note}><span>Before you apply</span><p>The $5,000 participation fee and payment timing are confirmed with your invitation before any payment is taken.</p></section>
    <SiteFooter />
  </main>;
}
