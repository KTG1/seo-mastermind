import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import styles from "./page.module.css";

export const metadata = {
  title: "FAQ | Holistic SEO Mastermind",
  description: "Practical answers about invitations, the programme, travel, and the Holistic SEO Mastermind in Kuşadası.",
};

const questions = [
  ["Is the mastermind invite-only?", "Yes. The room is deliberately small and applications are reviewed for fit. Tell us what you are building, the question you want to work on, and why this particular group would be useful to you. We will reply personally after reviewing your application."],
  ["Who is the room for?", "The mastermind is for experienced operators, founders, SEO leaders, agency owners, investors, and builders who are working on a real business question. Curiosity matters, but so does having work that can benefit from careful peer challenge."],
  ["What happens during the seven days?", "The week combines three mastermind days focused on SEO, AI, automation, business, and investment with one conference day. The remaining rhythm makes room for arrival, recovery, long-table conversation, and selected local experiences."],
  ["What is the participation fee?", "The current participation fee is USD 6,000. Your invitation will set out the confirmed scope, payment timing, and any practical details specific to the edition before you make a commitment."],
  ["What does my place include?", "Your place includes the core mastermind and conference programme, the working sessions, and hosted group moments shared in the final itinerary. Accommodation, travel, and the availability or cost of optional activities are confirmed directly with invited attendees."],
  ["Where does the event take place?", "The gathering is hosted in Kuşadası, Türkiye. The hotel and its surrounding spaces are part of the experience: a place for focused work, meals, recovery, and the conversations that continue after each session."],
  ["How should I plan travel?", "Most international guests plan their arrival through İzmir Adnan Menderes Airport. Transfer, check-in, venue, and final timing guidance are shared with confirmed attendees well before the gathering."],
  ["Are water sports and safaris included?", "Experiences such as boat time, water sports, parasailing, horse and ATV safaris, and recovery moments are optional. They are scheduled around the core programme and depend on weather, safety guidance, and final local availability."],
  ["Can I bring a colleague or partner?", "Each place is reviewed individually, since the strength of the room comes from the people in it. If you want to attend with a colleague, mention this in your application and explain the work you would bring together."],
];

export default function FaqPage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} />

    <section className={styles.hero}>
      <Image src={assetPath("/agenda-coast-hero.png")} alt="Sunset across the coast near Kuşadası" fill priority sizes="100vw" unoptimized />
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.heroCopy}><p>Before the room</p><h1>The useful<br /><em>details.</em></h1><span>Questions answered with care, before you decide to apply.</span></div>
      <div className={styles.heroNote}><span>KUŞADASI, TÜRKİYE</span><span>INVITE-ONLY / SEVEN DAYS</span></div>
    </section>

    <section className={styles.faqSection}>
      <aside className={styles.side}><p>01 / Practical guide</p><h2>Everything you need<br />to know <em>before you arrive.</em></h2><span>Still have a question?</span><Link href="/tickets/#application">Ask in your application <i>→</i></Link></aside>
      <div className={styles.questions}>{questions.map(([question, answer], index) => <details key={question} className={styles.item}><summary><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className={styles.closing}><div><span>One last thing</span><h2>The room works best<br />when the question is <em>real.</em></h2></div><p>Bring the decision, system, or opportunity that deserves more than another surface-level answer. The application is the right place to begin.</p><Link href="/tickets/#application">Apply for an invitation <i>→</i></Link></section>
    <SiteFooter />
  </main>;
}
