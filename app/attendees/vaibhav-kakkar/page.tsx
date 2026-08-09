import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import styles from "../mira-doran/page.module.css";

export const metadata = {
  title: "Vaibhav Kakkar | Holistic SEO Mastermind",
  description: "Meet Vaibhav Kakkar, founder and Group CEO of DWS Group and co-founder of RankWatch.",
};

export default function VaibhavKakkarPage() {
  return <main className={styles.attendeePage}>
    <SiteHeader className="attendeeHeader" />
    <section className="attendeeHero">
      <div className="attendeeEyebrow">Attendee biography <span>✦</span> Holistic SEO Mastermind</div>
      <h1>Vaibhav<br /><em>Kakkar</em></h1>
      <div className="attendeeIntro"><p>Founder &amp; Group CEO, DWS Group</p><p>San Jose, California</p></div>
      <div className="attendeeMonogram" aria-hidden="true"><span>VK</span><i>HSM</i></div>
    </section>

    <section className="profileLedger" aria-label="Vaibhav Kakkar profile details">
      <div><span>Focus</span><strong>Agency growth &amp; marketing technology</strong></div>
      <div><span>Role</span><strong>Founder &amp; Group CEO, DWS Group</strong></div>
      <div><span>Based in</span><strong>San Jose, California</strong></div>
      <div className="privateField"><span>At the table</span><strong>Operator <em>perspective</em></strong></div>
    </section>

    <section className="attendeeStory">
      <div className="storyAside"><span>01</span><p>Biography</p></div>
      <div className="storyBody">
        <h2>He turns digital expertise into <em>systems that scale.</em></h2>
        <p>Vaibhav Kakkar is the founder and Group CEO of DWS Group, where he works across digital marketing, technology, and agency growth. His career has been shaped by building businesses that connect search expertise with measurable commercial outcomes.</p>
        <p>He is also a co-founder of RankWatch, an SEO software platform created to help marketing teams monitor search performance and make better-informed decisions. Across his agency and software work, he brings an operator&apos;s perspective to automation, experimentation, and the changing relationship between SEO and AI-driven discovery.</p>
      </div>
    </section>

    <section className="attendeeQuote">
      <div className="quoteMark">↳</div>
      <blockquote>A builder&apos;s view of how agencies can combine search knowledge, technology, disciplined experimentation, and commercial judgment without losing the human insight behind the work.</blockquote>
      <p>What Vaibhav brings to the room</p>
    </section>

    <section className="interview">
      <div className="interviewHeading"><span>02</span><h2>Public record</h2><p>Biography checked against public company profiles.</p></div>
      <div className="interviewList">
        <article><span>01</span><h3>DWS Group</h3><p><a href="https://www.digitalwebsolutions.com/who-we-are/" target="_blank" rel="noreferrer">Read the company leadership profile ↗</a></p></article>
        <article><span>02</span><h3>RankWatch</h3><p><a href="https://www.rankwatch.com/about-us" target="_blank" rel="noreferrer">See the RankWatch team profile ↗</a></p></article>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
