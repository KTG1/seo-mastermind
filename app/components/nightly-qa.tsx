import Image from "next/image";
import Link from "next/link";
import { assetPath } from "./site-path";
import styles from "./nightly-qa.module.css";

export default function NightlyQA() {
  return (
    <section className={styles.section} id="nightly-qa" aria-labelledby="nightly-qa-title">
      <header className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>Every-night Q&amp;A</span>
          <h2 id="nightly-qa-title">Bring the question<br />you’re still thinking about.</h2>
        </div>
        <p>Each evening, the conversation opens up again. Bring the question that surfaced during the day—about search, your business, or the decision you need to make next.</p>
      </header>
      <div className={styles.layout}>
        <figure className={styles.room}>
          <Image src={assetPath("/mastermind-nightly-qa-room.webp")} alt="Attendees gathered in a circle for an evening Q&A on the illuminated hotel terrace" fill unoptimized sizes="(max-width: 760px) 100vw, 64vw" />
          <figcaption>A previous gathering · the evening conversation</figcaption>
        </figure>
        <div className={styles.detail}>
          <figure className={styles.closeup}>
            <Image src={assetPath("/mastermind-nightly-qa-conversation.webp")} alt="A closer view of attendees listening and contributing to the evening discussion" fill unoptimized sizes="(max-width: 760px) 100vw, 30vw" />
          </figure>
          <div className={styles.copy}>
            <h3>The room sets the direction.</h3>
            <p>Topics come from attendee suggestions. SEO, automation, reputation, management, and scaling can all become part of the discussion.</p>
            <p>Ask a follow-up. Share your experience. Explore the question with people who bring a different perspective.</p>
            <Link href="/agenda/">Explore the full programme <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
