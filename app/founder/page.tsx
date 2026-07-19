import Image from "next/image";
import Link from "next/link";
import AgendaMenu from "../components/agenda-menu";
import BrandMark from "../components/brand-mark";
import SiteFooter from "../components/site-footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Koray Tuğberk Gübür | Holistic SEO Mastermind",
  description: "Meet Koray Tuğberk Gübür, founder and host of Holistic SEO Mastermind in Kuşadası, Türkiye.",
};

const lenses = [
  ["01", "Systems before tactics", "A search presence is not a pile of disconnected fixes. Its architecture, information, reputation, and commercial decisions have to reinforce one another."],
  ["02", "Meaning before volume", "Useful work begins with a clearer model of the audience, the topic, and the relationships that make an answer worth choosing."],
  ["03", "Evidence before noise", "The goal is not to produce more activity. It is to create work that is credible, distinct, and durable enough to earn attention over time."],
];

const caseStudies = [
  ["Exact match domain", "Case study", "A detailed study of the relationship between brand signals, design, technical work, and query processing in an exact-match domain project.", "https://www.holisticseo.digital/seo-research-study/exact-matching-domain/"],
  ["Entity identity management", "Case study", "An entity-oriented case study on identity, attributes, and the information signals that shape how a person or business is understood.", "https://www.holisticseo.digital/seo-research-study/entity-identity-management/"],
  ["SaaS SEO strategies", "Case study", "A long-form guide and case study that connects semantic, local, technical, and brand work for SaaS search visibility.", "https://www.holisticseo.digital/seo-research-study/saas/"],
];

const publications = [
  ["Topical Authority course", "Course & lectures", "Advanced learning material built around semantic SEO, topical authority, and the reasoning behind a durable search system.", "https://seocourse.digital/"],
  ["The Holistic SEO library", "Research & guides", "A deep archive of Koray’s technical, semantic, data, and search-engine research writing.", "https://www.holisticseo.digital/author/koray-tugberk-gubur/"],
  ["Visual semantics", "Published essay", "A Search Engine Land essay on how page design, document understanding, and visual structure can shape search visibility.", "https://searchengineland.com/visual-semantics-the-missing-piece-of-topical-authority-469184"],
];

const conversations = [
  ["Decoding topical authority", "Authority Hacker podcast", "A long-form conversation on topical authority and the vocabulary behind semantic search.", "https://www.authorityhacker.com/podcasts/decoding-topical-authority-with-koray-tugberk-gubur/"],
  ["AI & the evolution of SEO", "Chat With Sean", "A discussion on AI, indexing, machine learning, and what changes in the working practice of SEO.", "https://open.spotify.com/episode/4oG3wCjiD3bVGdwWFSaEPh"],
  ["Bridging search engines & humans", "Lumar / BrightonSEO", "A BrightonSEO conversation on how search engines model people and how practitioners can make better decisions inside that system.", "https://www.lumar.io/blog/qa/seo-interview-bridging-search-engines-and-humans/"],
];

export default function FounderPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/"><BrandMark /><b>HOLISTIC SEO<br />MASTERMIND</b></Link>
        <nav aria-label="Primary navigation"><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav>
        <Link className={styles.ticket} href="/tickets/">Request an invitation <i>↗</i></Link>
      </header>

      <section className={styles.hero} aria-labelledby="founder-title">
        <div className={styles.heroType} aria-hidden="true">KORAY</div>
        <div className={styles.heroCopy}>
          <p>Founder &amp; host · Kuşadası, Türkiye</p>
          <h1 id="founder-title">Koray<br />Tuğberk <em>Gübür.</em></h1>
          <div className={styles.heroLine}><span>HOLISTIC SEO MASTERMIND</span><span>A systems view of organic growth</span></div>
        </div>
        <div className={styles.heroPortrait}>
          <Image src="/holistic-seo-mastermind-group.png" alt="Koray Tuğberk Gübür with members of the Holistic SEO Mastermind in Kuşadası" fill priority sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
          <span>THE ROOM / IN PERSON</span>
        </div>
      </section>

      <section className={styles.introduction}>
        <p className={styles.eyebrow}>A biography in practice</p>
        <h2>He brings people back to the <em>whole system.</em></h2>
        <div className={styles.introCopy}>
          <p>Koray Tuğberk Gübür founded Holistic SEO Mastermind as a place for the work that sits beneath a ranking, a roadmap, or a single good page: the relationships between a business, its information, its technical foundations, and the reputation it earns.</p>
          <p>His approach makes room for detail without losing the larger picture. In the room, ideas are tested against the real site, real market, and real operating constraints behind them.</p>
        </div>
      </section>

      <section className={styles.lenses}>
        <div className={styles.lensesHeading}><p className={styles.eyebrow}>The working lens</p><h2>Search is a<br /><em>living system.</em></h2><p>That is the thread Koray brings to each conversation, whether the question begins with a technical issue, a content decision, or the direction of the business itself.</p></div>
        <div className={styles.lensList}>{lenses.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className={styles.work} aria-labelledby="work-title">
        <div className={styles.workIntro}><p className={styles.eyebrow}>Selected work</p><h2 id="work-title">The work is<br /><em>meant to travel.</em></h2><p>Case studies, courses, published writing, and long-form conversations make the thinking available beyond the table. Each link opens the original work.</p></div>
        <div className={styles.workColumns}>
          <WorkColumn title="Case studies" items={caseStudies} />
          <WorkColumn title="Courses & publishing" items={publications} />
          <WorkColumn title="Lectures & conversations" items={conversations} />
        </div>
      </section>

      <section className={styles.table}>
        <div><p className={styles.eyebrow}>At the mastermind</p><h2>Bring the<br /><em>unfinished question.</em></h2></div>
        <div className={styles.tableCopy}><p>Koray hosts the week as a working conversation—not a performance. The best material is the question you are still trying to solve: the page that will not become useful enough, the system that needs clarity, or the strategic choice that needs a sharper frame.</p><p>That is why the gathering stays intentionally small. There is enough time to see the work closely and enough distance from the usual routine to decide what it needs next.</p><Link href="/agenda/">See the seven-day programme <i>→</i></Link></div>
      </section>

      <section className={styles.closing}>
        <p>Hosted by Koray Tuğberk Gübür.<br />Built for people who want their <em>search presence to mean more.</em></p>
        <Link href="/tickets/#application">Request an invitation <i>→</i></Link>
      </section>

      <SiteFooter />
    </main>
  );
}

function WorkColumn({ title, items }: { title: string; items: string[][] }) {
  return <section className={styles.workColumn}><h3>{title}</h3>{items.map(([name, type, detail, href]) => <a key={name} href={href} target="_blank" rel="noreferrer"><span>{type}</span><h4>{name} <i>↗</i></h4><p>{detail}</p></a>)}</section>;
}
