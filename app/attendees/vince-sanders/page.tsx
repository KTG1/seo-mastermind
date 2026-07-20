import Link from "next/link";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import styles from "./page.module.css";

export const metadata = {
  title: "Vince Sanders — CBD American Shaman Founder | Holistic SEO Mastermind",
  description: "The story of Kansas City entrepreneur Vince Sanders, founder of CBD American Shaman and an early advocate for the American hemp industry.",
};

const milestones = [
  { year: "Early years", title: "An entrepreneur by example", body: "Raised in Kansas City in a family of business owners, Sanders learned customer service and sales close to home. His first venture was a car-detailing business." },
  { year: "2012", title: "A personal search", body: "When his uncle became terminally ill, Sanders began researching cannabinoids and experimenting with early hemp extracts. The experience became the reason he entered CBD." },
  { year: "2015", title: "American Shaman begins", body: "Sanders founded CBD American Shaman in Kansas City, initially supplying CBD products to smoke shops, chiropractors and health stores." },
  { year: "2016–18", title: "From store to movement", body: "The first Kansas City retail store opened, while Sanders joined other hemp businesses in organizing and advocating for clearer state and federal rules." },
  { year: "Today", title: "A national footprint", body: "The company grew from a local experiment into a widely distributed cannabinoid brand with a large franchise and retail network." },
];

function MolecularMark() {
  return <svg viewBox="0 0 520 520" role="img" aria-label="Abstract molecular diagram inspired by hemp compounds">
    <g className={styles.orbits}><circle cx="260" cy="260" r="196"/><circle cx="260" cy="260" r="128"/><path d="M94 156 260 64l167 96v193L260 450 93 354Z"/><path d="m150 260 110-64 111 64v128"/></g>
    <g className={styles.nodes}><circle cx="260" cy="64" r="13"/><circle cx="427" cy="160" r="13"/><circle cx="427" cy="353" r="13"/><circle cx="260" cy="450" r="13"/><circle cx="93" cy="354" r="13"/><circle cx="94" cy="156" r="13"/><circle cx="260" cy="196" r="19"/></g>
    <text x="260" y="278" textAnchor="middle">VS</text><text x="260" y="310" textAnchor="middle" className={styles.svgLabel}>KANSAS CITY / 2015</text>
  </svg>;
}

export default function VinceSandersPage() {
  return <main className={styles.page}>
    <SiteHeader className={styles.header} ctaHref="/tickets/#application" />

    <section className={styles.hero}>
      <div className={styles.heroTop}><span>Founder biography</span><span>Kansas City, Missouri</span></div>
      <div className={styles.heroCopy}>
        <p className={styles.kicker}>CBD American Shaman / Founder &amp; president</p>
        <h1>Vince<br/><em>Sanders.</em></h1>
        <p className={styles.dek}>The self-taught entrepreneur who helped move CBD from the legal margins into American main streets.</p>
      </div>
      <div className={styles.heroArt}><MolecularMark/><span className={styles.artNote}>Founder profile<br/>Field note № 04</span></div>
      <div className={styles.heroFoot}><span>Entrepreneurship</span><i>×</i><span>Hemp advocacy</span><i>×</i><span>Retail innovation</span></div>
    </section>

    <section className={styles.intro}>
      <div className={styles.introLabel}><span>01</span><p>The short version</p></div>
      <div className={styles.introStory}>
        <h2>One family crisis became a <em>national business.</em></h2>
        <div className={styles.columns}><p>Vince Sanders was born and raised in Kansas City, Missouri, surrounded by entrepreneurs on both sides of his family. He started working for himself as a young man, first in car detailing, and built his career by learning through action.</p><p>His turn toward hemp began when an uncle was diagnosed with terminal lung cancer. Looking for ways to ease his discomfort, Sanders researched CBD and began making crude extracts. The effort did not save his uncle, but it convinced Sanders that cannabinoids deserved wider access and serious attention.</p></div>
      </div>
    </section>

    <section className={styles.pullQuote}>
      <span>His operating principle</span>
      <blockquote>“Pick a place<br/>and <em>go.</em>”</blockquote>
      <p>Sanders on learning through action and building the ladder as you climb.</p>
    </section>

    <section className={styles.timeline}>
      <header><div><span>02</span><p>The path</p></div><h2>From first extract<br/>to <em>storefront.</em></h2></header>
      <div className={styles.timelineGrid}>{milestones.map((item, index) => <article key={item.year}>
        <div className={styles.timeMark}><span>{String(index + 1).padStart(2, "0")}</span><i/></div>
        <p className={styles.year}>{item.year}</p><h3>{item.title}</h3><p>{item.body}</p>
      </article>)}</div>
    </section>

    <section className={styles.context}>
      <div className={styles.contextTitle}><span>03 / Context</span><h2>A path with<br/><em>rough edges.</em></h2></div>
      <div className={styles.contextBody}><p>Sanders’ story is not a polished, straight-line founder myth. Before hemp, he served federal prison time for a marijuana-trafficking conspiracy—history he later discussed openly with Kansas City public radio. His second act unfolded in another unsettled category: CBD, before federal and state rules were clear.</p><p>That past helps explain both his appetite for legal risk and his emphasis on second chances. Sanders lobbied lawmakers, worked with the U.S. Hemp Roundtable, and pushed for the rules that helped establish a legal national hemp market. Admirers call that persistence; critics see a businessman repeatedly testing the edge of regulation. Both are part of the record.</p></div>
    </section>

    <section className={styles.impact}>
      <div className={styles.impactHeading}><span>04 / What he built</span><h2>The American Shaman <em>idea.</em></h2></div>
      <div className={styles.impactGrid}>
        <article><b>01</b><h3>Explain before selling</h3><p>Brick-and-mortar stores gave a then-unfamiliar product a human guide and a place for questions.</p></article>
        <article><b>02</b><h3>Make absorption the story</h3><p>The brand made water-soluble delivery and nano-emulsion central to how it described its product innovation.</p></article>
        <article><b>03</b><h3>Scale through partners</h3><p>Wholesale distribution and franchising turned a Kansas City operation into a recognizable national retail network.</p></article>
      </div>
    </section>

    <section className={styles.sources}>
      <span>Reporting &amp; sources</span>
      <div><a href="https://americanshamanfranchise.com/our-story/" target="_blank" rel="noreferrer">American Shaman — Our Story ↗</a><a href="https://www.kcur.org/health/2019-09-03/the-man-behind-kansas-citys-fastest-growing-cbd-chain-is-gaining-notoriety-and-making-some-enemies" target="_blank" rel="noreferrer">KCUR — Founder profile ↗</a><a href="https://www.bitbean.com/ceos-speak/vince-sanders-of-cbd-american-shaman/" target="_blank" rel="noreferrer">CEOs Speak — Interview ↗</a></div>
      <p>This biography summarizes public reporting and first-person interviews. It does not offer medical advice or endorse health claims about CBD.</p>
    </section>

    <div className={styles.back}><Link href="/attendees/">← Back to member directory</Link></div>
    <SiteFooter/>
  </main>;
}
