import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import FaqDirectory from "./faq-directory";
import styles from "./page.module.css";

export const metadata = {
  title: "FAQ | Holistic SEO Mastermind",
  description: "Practical answers about invitations, the programme, travel, and the Holistic SEO Mastermind in Kuşadası.",
};

export default function FaqPage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} />

    <section className={styles.hero}>
      <Image src={assetPath("/agenda-coast-hero.png")} alt="Sunset across the coast near Kuşadası" fill priority sizes="100vw" unoptimized />
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.heroCopy}><p>Before the room</p><h1>The useful<br /><em>details.</em></h1><span>Questions answered with care, before you decide to apply.</span></div>
      <div className={styles.heroNote}><span>KUŞADASI, TÜRKİYE</span><span>INVITE-ONLY / SEVEN DAYS</span></div>
    </section>

    <FaqDirectory />

    <section className={styles.closing}><div><span>One last thing</span><h2>The room works best<br />when the question is <em>real.</em></h2></div><p>Bring the decision, system, or opportunity that deserves more than another surface-level answer. The application is the right place to begin.</p><Link href="/tickets/#application">Apply for an invitation <i>→</i></Link></section>
    <SiteFooter />
  </main>;
}
