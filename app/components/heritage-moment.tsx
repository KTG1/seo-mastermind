import Image from "next/image";
import Link from "next/link";
import styles from "./heritage-moment.module.css";
import { assetPath } from "./site-path";

export default function HeritageMoment() {
  return (
    <section className={styles.section} aria-labelledby="heritage-moment-title">
      <header className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>Beyond the working room · Ephesus</span>
          <h2 id="heritage-moment-title">The week keeps<br /><em>moving outward.</em></h2>
        </div>
        <div className={styles.intro}>
          <p>A guided day through Ephesus gives the room a different scale—and gives the conversation somewhere new to continue.</p>
          <Link href="/ephesus/">Explore the Ephesus visit <span>→</span></Link>
        </div>
      </header>

      <figure className={styles.figure}>
        <div className={styles.imageFrame}>
          <Image
            src={assetPath("/mastermind-ephesus-group.jpg")}
            alt="Holistic SEO Mastermind attendees gathered in front of the Library of Celsus at Ephesus"
            fill
            sizes="(max-width: 760px) 100vw, 92vw"
            unoptimized
          />
        </div>
        <figcaption>
          <span>Library of Celsus</span>
          <span>One shared frame · many points of view</span>
          <span>Selçuk / Türkiye</span>
        </figcaption>
      </figure>
    </section>
  );
}
