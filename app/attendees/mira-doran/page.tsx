import Link from "next/link";
import AgendaMenu from "../../components/agenda-menu";
import BrandMark from "../../components/brand-mark";
import SiteFooter from "../../components/site-footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Mira Doran — Example Attendee | Holistic SEO Mastermind",
  description: "A fictional example of an attendee profile for Holistic SEO Mastermind.",
};

const interview = [
  ["What brought you to the mastermind?", "I had a capable content team and a technically sound site, but the work was still arriving as disconnected wins. I wanted a way to make every decision—information architecture, editorial process, entity work, and measurement—reinforce the next."],
  ["What changed after joining?", "The most useful shift was learning to name the system, not just the task. We changed how briefs are written, how research is stored, and how product expertise reaches the pages. The team can now see why the work matters."],
  ["What would you bring to the next room?", "An honest look at the places where search breaks down inside a growing business. I value rooms where people can share the unfinished version, not just the success story."],
];

export default function AttendeeExamplePage() {
  return (
    <main className={styles.attendeePage}>
      <header className="attendeeHeader">
        <Link className="wordmark attendeeWordmark" href="/"><BrandMark /><span>HOLISTIC SEO<br />MASTERMIND</span></Link>
        <nav aria-label="Primary navigation" style={{ display: "flex", gap: 18, marginLeft: 0 }}><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav>
        <Link href="/#apply">Request a seat <b>↗</b></Link>
      </header>

      <section className="attendeeHero">
        <div className="exampleFlag">Fictional profile · sample fields only</div>
        <div className="attendeeEyebrow">Member no. 017 <span>✦</span> Joined October 2025</div>
        <h1>Mira<br /><em>Doran</em></h1>
        <div className="attendeeIntro"><p>Independent publisher &amp; founder</p><p>Manchester, United Kingdom</p></div>
        <div className="attendeeMonogram" aria-hidden="true"><span>MD</span><i>HSM</i></div>
      </section>

      <section className="profileLedger" aria-label="Mira Doran profile details">
        <div><span>Focus</span><strong>Information-led commerce</strong></div>
        <div><span>Background</span><strong>12 years in digital publishing</strong></div>
        <div><span>Mastermind goal</span><strong>Turn expertise into a durable search estate</strong></div>
        <div className="privateField"><span>Private profile · illustrative only</span><strong>Estimated net worth <em>£1.8m</em></strong></div>
      </section>

      <section className="attendeeStory">
        <div className="storyAside"><span>01</span><p>Background</p></div>
        <div className="storyBody">
          <h2>She is building a company that treats knowledge as an <em>asset—not a content calendar.</em></h2>
          <p>Mira founded a specialist media business after leading editorial teams at two UK publishers. Her work sits at the intersection of trusted research, practical buying decisions, and complex product categories.</p>
          <p>She joined the Holistic SEO Mastermind to connect a growing library of expertise with the technical, commercial, and reputational signals that let it earn a long life in search.</p>
        </div>
      </section>

      <section className="attendeeQuote"><div className="quoteMark">“</div><blockquote>The room made me stop asking, “What should we publish next?” and start asking, “What kind of company are we making visible?”</blockquote><p>— Mira Doran, fictional example attendee</p></section>

      <section className="interview">
        <div className="interviewHeading"><span>02</span><h2>In conversation</h2><p>Three questions from the table.</p></div>
        <div className="interviewList">{interview.map(([question, answer], index) => <article key={question}><span>0{index + 1}</span><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>

      <SiteFooter />
    </main>
  );
}
