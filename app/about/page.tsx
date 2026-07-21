import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import policyStyles from "./policy-faq.module.css";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Holistic SEO Mastermind",
  description: "Why Holistic SEO Mastermind exists, hosted by Koray Tuğberk Gübür in Kuşadası, Türkiye.",
};

const principles = [
  ["Bring the real work", "The room is for the difficult question behind the presentation: the architecture, process, market, or operating habit that needs to change."],
  ["Think in relationships", "Search becomes durable when technical foundations, useful information, reputation, and commercial decisions strengthen one another."],
  ["Leave with a thread", "The value is not a stack of notes. It is a small number of decisions that remain clear when you return to a busy Monday."],
];

const policyFaqs = [
  ["Privacy", "How is application information used?", "We use the details you share to review your invitation request and reply directly about the gathering. We do not sell applicant information. Before any payment or confirmed booking process begins, attendees receive the applicable privacy notice and contact route for data questions."],
  ["Terms", "When do the attendance terms apply?", "The final date, scope, inclusions, payment schedule, and participation terms are confirmed in writing for each invited attendee. The overview on this website explains the room; the confirmed invitation and booking terms govern a place in it."],
  ["Refunds", "What if plans change after I am invited?", "Cancellation, refund, transfer, and programme-change arrangements are set out in the confirmed booking terms. They depend on timing, committed venue and supplier costs, and whether a place can be offered to another approved applicant."],
  ["Attendance", "Can I ask about access, dietary, or travel needs?", "Yes. Share any practical requirements during the invitation process. We will discuss what the venue and programme can reasonably support before you confirm your place, rather than making assumptions after arrival."],
  ["Media", "Will photographs or video be taken?", "The gathering may be documented to share the atmosphere and work of the room. We will make the approach clear to confirmed attendees and give people a practical way to raise identifiable-image or recording preferences."],
];

export default function AboutPage() {
  return <main className={styles.aboutPage}>
    <SiteHeader className={styles.header} ctaHref="/#apply" />

    <section className={styles.hero}>
      <p>About the room</p>
      <h1>For people who<br />want search to <em>mean more.</em></h1>
      <div><span>Hosted by Koray Tuğberk Gübür</span><span>A small gathering for serious operators</span></div>
    </section>

    <section className={styles.statement}>
      <span>01 / Why we gather</span>
      <p>Holistic SEO Mastermind exists because the most important search work cannot be solved by a checklist—or in isolation.</p>
      <div><p>It needs a room where people can bring the unfinished problem, see the system around it, and be challenged by peers who understand the cost of getting it wrong.</p><p>We meet in Kuşadası to give the thinking space: away from the dashboard, close to the sea, and in conversation with people who are building for the long term.</p></div>
    </section>

    <section className={styles.groupPhoto}>
      <Image src={assetPath("/holistic-seo-mastermind-group.png")} alt="Members of the Holistic SEO Mastermind gathering in Kuşadası" fill sizes="100vw" unoptimized />
      <div><span>THE ROOM, KUŞADASI</span><p>Different businesses. One shared appetite for the work beneath the work.</p></div>
    </section>

    <section className={styles.host}>
      <span>02 / Your host</span>
      <div><h2>Koray Tuğberk<br /><em>Gübür</em></h2><p>Koray hosts the room with a systems view of organic growth—making space for exact thinking, real debate, and the practical moves that turn insight into a stronger search presence.</p><Link href="/founder/">Meet Koray Tuğberk Gübür <i>→</i></Link></div>
    </section>

    <section className={styles.principles}>
      <div className={styles.principleLead}><span>03 / How we work</span><h2>Not a conference.<br /><em>A working table.</em></h2></div>
      <div>{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className={policyStyles.section} aria-labelledby="policy-faq-title">
      <header className={policyStyles.header}><span>04 / Practical clarity</span><h2 id="policy-faq-title">The details behind<br />a <em>considered yes.</em></h2><p>Clear policies protect the room, the host, and every person who makes the journey.</p></header>
      <div className={policyStyles.list}>{policyFaqs.map(([label, question, answer], index) => <details key={question}>
        <summary><span>{String(index + 1).padStart(2, "0")} / {label}</span><b>{question}</b><i>+</i></summary>
        <p>{answer}</p>
      </details>)}</div>
      <p className={policyStyles.note}>Plain-English policy summaries · final confirmed invitation and booking terms take precedence.</p>
    </section>

    <section className={styles.closing}><p>The most useful search strategy is the one your company can keep becoming.</p><Link href="/#apply">Join the next room <i>→</i></Link></section>
    <SiteFooter />
  </main>;
}
