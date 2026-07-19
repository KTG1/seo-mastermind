import Image from "next/image";
import Link from "next/link";
import AgendaMenu from "../components/agenda-menu";
import BrandMark from "../components/brand-mark";
import SiteFooter from "../components/site-footer";
import AgendaProgram from "./agenda-program";
import styles from "./page.module.css";

export const metadata = {
  title: "Agenda | Holistic SEO Mastermind",
  description: "A sample working and coastal agenda for the Holistic SEO Mastermind in Kuşadası, Türkiye.",
};

export default function AgendaPage() {
  return (
    <main className={styles.agendaPage}>
      <header className="agendaHeader">
        <Link className="wordmark" href="/"><BrandMark /><span>HOLISTIC SEO<br />MASTERMIND</span></Link>
        <nav aria-label="Primary navigation" style={{ display: "flex", gap: 18, marginLeft: 0 }}><Link href="/about/">About</Link><Link href="/agency/">Agency</Link><Link href="/course/">Course</Link><Link href="/founder/">Founder</Link><AgendaMenu /><Link href="/attendees/">Members</Link></nav>
        <Link href="/#apply">Request a seat <b>↗</b></Link>
      </header>

      <section className="agendaHero">
        <Image className="agendaHeroImage" src="/agenda-coast-hero.png" alt="Aegean coastline at sunrise near Kuşadası" fill priority sizes="100vw" unoptimized />
        <div className="agendaHeroShade" aria-hidden="true" />
        <div className="agendaStamp">Sample programme<br />Details to be confirmed</div>
        <p>Seven days in the room &amp; by the sea</p>
        <h1>Work deep.<br /><em>Return restored.</em></h1>
        <div className="agendaHeroFoot"><span>Holistic SEO Mastermind</span><span>Hosted by Koray Tuğberk Gübür</span></div>
      </section>

      <section className="agendaIntro">
        <span>The rhythm</span>
        <p>A thoughtfully held gathering moves between clear thinking, movement, care, and the conversations that happen once everyone has stopped performing.</p>
      </section>

      <AgendaProgram />

      <section className="agendaClosing"><p>Bring the question that has been following you around.</p><Link href="/#apply">Apply for the next room <span>→</span></Link></section>
      <SiteFooter />
    </main>
  );
}
