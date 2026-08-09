import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import expanded from "./course-expanded.module.css";
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

const lectureAtlas = [
  { number: "01", title: "Search engine foundations", topics: ["Information retrieval and indexing", "Ranking, re-ranking, and relevance", "How search systems interpret a source"], output: "A working model of the machine you are optimizing for." },
  { number: "02", title: "Queries, intent, and context", topics: ["Query semantics and search intent", "Relatedness, distinctiveness, and query paths", "How context changes the required answer"], output: "A query network—not a disconnected keyword list." },
  { number: "03", title: "Entities and meaning", topics: ["Entities, attributes, predicates, and frames", "Lexical relationships and contextual domains", "Turning concepts into retrievable information"], output: "A clearer semantic specification for every page." },
  { number: "04", title: "Topical map architecture", topics: ["Source context and the central entity", "Topical borders, coverage, and prioritization", "Core and outer sections of the map"], output: "A sequenced publishing plan with explicit boundaries." },
  { number: "05", title: "Semantic content networks", topics: ["Document templates and heading structures", "Internal links, anchor context, and crawl paths", "Connecting articles into a coherent source"], output: "A network in which every document has a job." },
  { number: "06", title: "Quality and authority signals", topics: ["Information gain and answer precision", "Source, author, and historical signals", "Consolidation, revision, and consistency"], output: "A quality-control system that survives publication." },
  { number: "07", title: "Technical implementation", topics: ["Canonicalization and indexability", "International and multilingual structure", "Performance, crawl efficiency, and monitoring"], output: "A site architecture that supports the semantic model." },
  { number: "08", title: "Experiments and case studies", topics: ["Reading results without confusing correlation", "Applying the framework across industries", "Building the next test from observed evidence"], output: "A repeatable process for testing your own assumptions." },
];

const learnerNotes = [
  { quote: "A structured way of thinking about SEO—dense enough that I went through it twice to understand how much was inside.", name: "Jean-Christophe Chouinard", note: "Course participant · condensed from a public review", href: "https://www.linkedin.com/posts/koray-tugberk-gubur_seo-semanticseo-topicalauthority-activity-7170080710693699584-fk6_" },
  { quote: "The lectures reward pausing, replaying, and taking serious notes. The real learning time extends far beyond the video runtime.", name: "James Dooley / FatRank", note: "Independent course review · paraphrased", href: "https://www.fatrank.com/topical-authority-semantic-seo-course/" },
  { quote: "The course and continued support gave us a framework to bring a site back into the rankings.", name: "Abdul Latif", note: "Course participant · condensed from a public post", href: "https://www.linkedin.com/posts/performancemarketing-seo-specialist_i-want-to-thanks-koray-tugberk-gubur-topical-activity-7283136435711340544-fkTE" },
];

export default function CoursePage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} ctaClassName={styles.invitation} ctaLabel="Request an invitation" />

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

    <section className={expanded.atlas} aria-labelledby="atlas-title">
      <div className={expanded.atlasHeader}>
        <div><p className={styles.eyebrow}>The lecture atlas</p><h2 id="atlas-title">From the mechanics<br />to the <em>method.</em></h2></div>
        <p>This is the learning sequence behind the work—not a list of isolated tricks. Each area gives the next one a stronger foundation.</p>
      </div>
      <div className={expanded.atlasBody}>
        <aside aria-label="Course study note"><span>STUDY NOTE / 01</span><p>Move through the material with one real website beside you. The framework becomes clearer when every concept has somewhere to land.</p><a href="https://www.youtube.com/watch?v=u_P7h2L6vIg" target="_blank" rel="noreferrer">Watch Lecture 0 <i>↗</i></a></aside>
        <ol className={expanded.lectureList}>{lectureAtlas.map((lecture) => <li key={lecture.number}>
          <span className={expanded.lectureNumber}>{lecture.number}</span>
          <div className={expanded.lectureMain}><h3>{lecture.title}</h3><ul>{lecture.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
          <p className={expanded.output}><span>WORKING OUTPUT</span>{lecture.output}</p>
        </li>)}</ol>
      </div>
    </section>

    <section className={expanded.inside} aria-labelledby="inside-title">
      <div className={expanded.imageWide}><Image src={assetPath("/holistic-seo-mastermind-group.png")} alt="Koray Tuğberk Gübür with members of the Holistic SEO community" fill sizes="(max-width: 760px) 100vw, 66vw" unoptimized /></div>
      <div className={expanded.insideCopy}><p className={styles.eyebrow}>Beyond the recording</p><h2 id="inside-title">A course built from<br /><em>observed work.</em></h2><p>The framework grew through repeated experiments across sites, languages, and industries. The official course story documents more than 30 SEO case studies and work across 60 successful websites.</p><a href="https://www.topicalauthority.digital/about" target="_blank" rel="noreferrer">Read the course story <i>↗</i></a></div>
      <figure className={expanded.imagePortrait}><Image src={assetPath("/mastermind-testimonial-poster.jpg")} alt="Koray Tuğberk Gübür speaking with a member of the SEO community" fill sizes="(max-width: 760px) 70vw, 24vw" unoptimized /><figcaption>Questions move from the lecture into the room.</figcaption></figure>
    </section>

    <section className={expanded.testimonials} aria-labelledby="learner-title">
      <div className={expanded.testimonialLead}><p className={styles.eyebrow}>Learner field notes</p><h2 id="learner-title">Not quick.<br /><em>Worth returning to.</em></h2><p>Public reflections from practitioners who studied the material. Their words have been shortened or paraphrased for clarity; each note links to its source.</p></div>
      <div className={expanded.notes}>{learnerNotes.map((item, index) => <blockquote key={item.name}><span>{String(index + 1).padStart(2, "0")} / 03</span><p>“{item.quote}”</p><footer><strong>{item.name}</strong><small>{item.note}</small><a href={item.href} target="_blank" rel="noreferrer" aria-label={`Read the source for ${item.name}`}>Source ↗</a></footer></blockquote>)}</div>
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
