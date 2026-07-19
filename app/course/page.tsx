import Link from "next/link";
import AgendaMenu from "../components/agenda-menu";
import BrandMark from "../components/brand-mark";
import SiteFooter from "../components/site-footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Topical Authority Course | Holistic SEO Mastermind",
  description: "An introduction to Koray Tuğberk Gübür's advanced Semantic SEO and Topical Authority Course.",
};

const modules = [
  ["01", "Semantic search engines", "Study how search engines process, retrieve, and extract information—then use that model to make more intentional decisions."],
  ["02", "Query semantics", "Work with context, relatedness, distinctiveness, query weights, and the relationships that change what an answer needs to do."],
  ["03", "Topical maps", "Learn to model a subject as a connected territory: its central entities, supporting questions, boundaries, and information gaps."],
  ["04", "Semantic content networks", "Turn the map into connected, structured content that creates a more coherent and useful source over time."],
];

const expectations = [
  ["Bring the foundations", "The course is built for people who already understand the basics of SEO and want to go deeper into how search engines make sense of the web."],
  ["Stay with the theory", "This is not a collection of shortcuts. It asks for patience with linguistics, information retrieval, and the ideas behind the implementation."],
  ["Practice the model", "The point is to apply the reasoning to a real site, not simply collect a new vocabulary for search."],
];

export default function CoursePage() {
  return <main className={styles.page}>
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/"><BrandMark /><b>HOLISTIC SEO<br />MASTERMIND</b></Link>
      <nav aria-label="Primary navigation"><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav>
      <Link className={styles.invitation} href="/tickets/">Request an invitation <i>↗</i></Link>
    </header>

    <section className={styles.hero} aria-labelledby="course-title">
      <div className={styles.topicMap} aria-hidden="true"><span className={styles.nodeA}>query</span><span className={styles.nodeB}>context</span><span className={styles.nodeC}>source</span><span className={styles.nodeD}>entity</span><span className={styles.nodeE}>intent</span><i /><i /><i /><i /></div>
      <div className={styles.heroTop}><span>SEO COURSE / ADVANCED SEMANTICS</span><span>CREATED BY KORAY TUĞBERK GÜBÜR</span></div>
      <div className={styles.heroCopy}><p>Topical Authority course</p><h1 id="course-title">Learn the<br /><em>shape of meaning.</em></h1><p>An advanced Semantic SEO course for practitioners who want to understand how query processing, context, topical coverage, and content networks work together.</p></div>
      <div className={styles.heroMeta}><span>40+ HOURS OF LECTURES, EXPLANATIONS &amp; EXAMPLES</span><a href="https://seocourse.digital/" target="_blank" rel="noreferrer">Explore the official course <i>↗</i></a></div>
    </section>

    <section className={styles.introduction}>
      <p className={styles.eyebrow}>The premise</p>
      <h2>To rank a source,<br />a search engine needs to<br /><em>understand what it means.</em></h2>
      <div><p>Topical Authority is a way of thinking about that understanding. It moves beyond choosing terms in isolation and asks how a source answers a complete territory of questions with clear, connected information.</p><p>The course examines the semantic logic beneath the work: how queries carry context, how documents are interpreted, and how a site can become easier to retrieve, evaluate, and trust.</p></div>
    </section>

    <section className={styles.modules} aria-labelledby="module-title">
      <div className={styles.modulesIntro}><p className={styles.eyebrow}>What you study</p><h2 id="module-title">Build a map.<br /><em>Then make it live.</em></h2><p>Four connected areas form the backbone of the course. They are designed to be studied as one system, not as disconnected tactics.</p></div>
      <div className={styles.moduleGrid}>{modules.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}</div>
    </section>

    <section className={styles.expectations}>
      <div><p className={styles.eyebrow}>A serious learning room</p><h2>Depth requires<br /><em>a longer attention.</em></h2></div>
      <ol>{expectations.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
    </section>

    <section className={styles.connection}>
      <div><p className={styles.eyebrow}>Three places for the work</p><h2>Study the model.<br />Test the system.<br />Bring the <em>question.</em></h2></div>
      <div className={styles.connectionGrid}><Link href="/agency/"><span>01 / THE AGENCY</span><h3>Test it in the work <i>→</i></h3><p>Holistic SEO &amp; Digital applies systems thinking to real search challenges.</p></Link><Link href="/agenda/"><span>02 / THE MASTERMIND</span><h3>Work it through in person <i>→</i></h3><p>Bring the difficult question to a small room of serious operators in Kuşadası.</p></Link></div>
    </section>

    <section className={styles.closing}><p>Advanced semantics.<br /><em>Made practical through the work.</em></p><a href="https://seocourse.digital/" target="_blank" rel="noreferrer">Visit the official course <i>↗</i></a></section>
    <SiteFooter />
  </main>;
}
