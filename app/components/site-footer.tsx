import Image from "next/image";
import Link from "next/link";
import BrandMark from "./brand-mark";
import styles from "./site-footer.module.css";

export default function SiteFooter() {
  return <footer className={styles.footer}>
    <Image className={styles.image} src="/agenda-coast-hero.png" alt="" fill sizes="100vw" unoptimized />
    <div className={styles.shade} aria-hidden="true" />
    <div className={styles.content}>
      <div className={styles.topline}><span>KUŞADASI, TÜRKİYE</span><span>SEVEN DAYS / ONE WORKING ROOM</span></div>
      <div className={styles.grid}>
        <section className={styles.intro}><Link href="/" className={styles.brand}><BrandMark /><span>HOLISTIC SEO<br />MASTERMIND</span></Link><h2>Stay close<br />to the <em>work.</em></h2><Link className={styles.apply} href="/tickets/#application">Apply for an invitation <i>→</i></Link></section>
        <nav className={styles.links} aria-label="Footer site links"><p>Explore</p><Link href="/about/">About the room</Link><Link href="/agency/">The agency</Link><Link href="/course/">Topical Authority course</Link><Link href="/founder/">Meet the founder</Link><Link href="/agenda/">Seven-day agenda</Link><Link href="/attendees/">Member directory</Link><Link href="/tickets/">Invitation &amp; tickets</Link></nav>
        <nav className={styles.links} aria-label="Footer experience links"><p>Experience</p><Link href="/hotel/">The venue</Link><Link href="/ephesus/">Ephesus visit</Link><Link href="/sirince/">Şirince village</Link><Link href="/agenda/">Water &amp; recovery</Link></nav>
        <section className={styles.notes}><p>Good to know</p><span>Invite-only gathering</span><span>Final itinerary shared with attendees</span><span>Official social handles coming soon</span><div className={styles.socials}><b>LinkedIn</b><b>Instagram</b><b>YouTube</b></div></section>
      </div>
      <div className={styles.base}><span>© 2026 HOLISTIC SEO MASTERMIND</span><span>HOSTED BY KORAY TUĞBERK GÜBÜR</span><span>BUILT FOR THE WHOLE SYSTEM</span></div>
    </div>
  </footer>;
}
