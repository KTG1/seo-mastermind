import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import styles from "./page.module.css";
import caseStyles from "./case-studies.module.css";

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

const caseStudies = [
  { metric: "0 → 128K", period: "123 days", title: "Building topical authority from zero", sector: "Multilingual publishing", method: "Semantic content network", copy: "A new web source grew from no organic visibility to 128,000 monthly visits by building contextual hierarchy, topical coverage, and a consistent publishing rhythm.", href: "https://www.holisticseo.digital/theoretical-seo/topical-authority/" },
  { metric: "+155%", period: "6 months", title: "Making every signal reinforce the next", sector: "Energy comparison", method: "Holistic SEO", copy: "Encazip combined semantic relevance with technical refinement, page-speed work, information architecture, and close collaboration across the client team.", href: "https://www.holisticseo.digital/seo-research-study/holistic-seo/" },
  { metric: "40×", period: "Organic traffic", title: "Creating demand around a SaaS product", sector: "B2B & B2C SaaS", method: "SaaS search system", copy: "The programme aligned technical SEO, semantic coverage, product understanding, local signals, and conversion paths around the way software buyers research and decide.", href: "https://www.holisticseo.digital/seo-research-study/saas/" },
  { metric: "+200%", period: "3 months", title: "Turning specialist knowledge into discoverability", sector: "B2B services", method: "Commercial search strategy", copy: "A B2B project increased organic clicks year over year by connecting its specialist subject matter to the questions, entities, and decision stages buyers actually use.", href: "https://www.holisticseo.digital/seo-research-study/b2b/" },
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

    <section className={caseStyles.cases} aria-labelledby="case-studies-title">
      <header className={caseStyles.heading}><p>Selected case studies</p><h2 id="case-studies-title">The evidence is in<br />what the system <em>changes.</em></h2><span>Selected public studies from Holistic SEO &amp; Digital. Each result links to the full methodology, context, and supporting search data.</span></header>
      <div className={caseStyles.ledger}>
        {caseStudies.map((study, index) => <a href={study.href} target="_blank" rel="noreferrer" className={caseStyles.study} key={study.title}>
          <div className={caseStyles.index}><span>Case {String(index + 1).padStart(2, "0")}</span><i>↗</i></div>
          <div className={caseStyles.result}><strong>{study.metric}</strong><small>{study.period}</small></div>
          <div className={caseStyles.narrative}><p>{study.sector} · {study.method}</p><h3>{study.title}</h3><span>{study.copy}</span></div>
          <div className={caseStyles.action}>Read the complete study <b>→</b></div>
        </a>)}
      </div>
    </section>

    <section className={styles.connection}>
      <div><p className={styles.eyebrow}>From the agency to the room</p><h2>The agency tests<br />the work. The mastermind<br />opens the <em>conversation.</em></h2></div>
      <div className={styles.connectionCopy}><p>Holistic SEO Mastermind is the in-person extension of the same systems thinking. It is where operators can bring the difficult question, examine the work in context, and leave with a clearer next move.</p><Link href="/founder/">Meet the founder <i>→</i></Link><Link href="/agenda/">Explore the seven-day programme <i>→</i></Link></div>
    </section>

    <section className={styles.closing}><p>Build a search presence<br />with <em>more to stand on.</em></p><a href="https://www.holisticseo.digital/" target="_blank" rel="noreferrer">Visit Holistic SEO &amp; Digital <i>↗</i></a></section>
    <SiteFooter />
  </main>;
}
