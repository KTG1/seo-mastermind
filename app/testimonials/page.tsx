import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import TestimonialsDirectory from "./testimonials-directory";
import styles from "./page.module.css";

export const metadata = {
  title: "Testimonials | Holistic SEO Mastermind",
  description: "Perspectives from CEOs, managers, investors, and agency owners around the Holistic SEO Mastermind table.",
};

export default function TestimonialsPage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} />
    <section className={styles.hero}>
      <Image src={assetPath("/holistic-seo-mastermind-group.png")} alt="A group gathered for the Holistic SEO Mastermind" fill priority sizes="100vw" unoptimized />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroTop}><span>Voices around the table</span><span>Kuşadası / Türkiye</span></div>
      <div className={styles.heroCopy}><p>Different responsibilities. Shared standards.</p><h1>The room,<br />in their <em>words.</em></h1></div>
      <div className={styles.heroFoot}><span>CEOs</span><i>×</i><span>Managers</span><i>×</i><span>Investors</span><i>×</i><span>Agency owners</span></div>
    </section>
    <TestimonialsDirectory />
    <section className={styles.closing}><div><span>Bring your perspective</span><h2>The next voice<br />could be <em>yours.</em></h2></div><p>The strongest room is built from people with different responsibilities and a shared willingness to work on the real question.</p><Link href="/tickets/#application">Apply for an invitation <i>→</i></Link></section>
    <SiteFooter />
  </main>;
}
