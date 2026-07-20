import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import styles from "./page.module.css";

export const metadata = {
  title: "Holistic SEO & Digital | Holistic SEO Mastermind",
  description: "Holistic SEO & Digital is a search systems agency founded by Koray Tuğberk Gübür.",
};

const practices = [
  ["Semantic systems", "Make the subject, the audience, and the relationships between pages legible to both people and search engines."],
  ["Technical foundations", "Resolve the crawl, indexation, performance, and architecture decisions that make a site easier to understand and use."],
  ["Data & experimentation", "Use analysis, testing, and search-engine research to turn assumptions into a clearer operating model."],
  ["Design & conversion", "Give the information its right form—so a page can answer, guide, and earn the next action without creating friction."],
];

const commitments = [
  ["The real business", "The work begins with the product, market, and decisions behind a website—not a generic keyword list."],
  ["The actual system", "Content, technical SEO, entities, brand signals, and user experience are considered together because they affect one another."],
  ["The long horizon", "The point is a stronger search presence the business can keep building on—not a short-lived reporting win."],
];

export default function AgencyPage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} ctaClassName={styles.invitation} ctaLabel="Request an invitation" />

    <section className={styles.hero} aria-labelledby="agency-title">
      <div className={styles.systemGrid} aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <div className={styles.heroTop}><span>HOLISTIC SEO &amp; DIGITAL</span><span>SEARCH SYSTEMS AGENCY</span></div>
      <div className={styles.heroCopy}><p>Founded by Koray Tuğberk Gübür</p><h1 id="agency-title">The work behind<br />a <em>durable presence.</em></h1><p>Holistic SEO &amp; Digital helps businesses build a search presence that makes sense as a whole: useful information, clear meaning, technical strength, and a brand people can recognise and trust.</p></div>
      <a className={styles.heroLink} href="https://www.holisticseo.digital/" target="_blank" rel="noreferrer">Visit the agency <i>↗</i></a>
    </section>

    <section className={styles.statement}>
      <p className={styles.eyebrow}>What Holistic SEO means</p>
      <h2>Search is not a channel.<br />It is a <em>system of evidence.</em></h2>
      <div><p>A site earns visibility when its purpose is clear from every angle: its structure, language, information, performance, references, and the experience it creates for the person using it.</p><p>That is the agency’s starting point. Instead of treating SEO as a collection of isolated deliverables, the work is designed to connect the pieces that make a business credible and discoverable.</p></div>
    </section>

    <section className={styles.practices} aria-labelledby="practice-title">
      <div className={styles.practicesIntro}><p className={styles.eyebrow}>The practice</p><h2 id="practice-title">One search<br /><em>system.</em><br />Many disciplines.</h2><p>Each discipline has a different job. Their value appears when they begin to reinforce one another.</p></div>
      <div className={styles.practiceGrid}>{practices.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className={styles.commitments}>
      <div><p className={styles.eyebrow}>How the agency thinks</p><h2>Closer to the<br /><em>real question.</em></h2></div>
      <ol>{commitments.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
    </section>

    <section className={styles.connection}>
      <div><p className={styles.eyebrow}>From the agency to the room</p><h2>The agency tests<br />the work. The mastermind<br />opens the <em>conversation.</em></h2></div>
      <div className={styles.connectionCopy}><p>Holistic SEO Mastermind is the in-person extension of the same systems thinking. It is where operators can bring the difficult question, examine the work in context, and leave with a clearer next move.</p><Link href="/founder/">Meet the founder <i>→</i></Link><Link href="/agenda/">Explore the seven-day programme <i>→</i></Link></div>
    </section>

    <section className={styles.closing}><p>Build a search presence<br />with <em>more to stand on.</em></p><a href="https://www.holisticseo.digital/" target="_blank" rel="noreferrer">Visit Holistic SEO &amp; Digital <i>↗</i></a></section>
    <SiteFooter />
  </main>;
}
