import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import { assetPath } from "../components/site-path";
import AgendaProgram from "./agenda-program";
import styles from "./page.module.css";

export const metadata = {
  title: "Agenda | Holistic SEO Mastermind",
  description: "A sample working and coastal agenda for the Holistic SEO Mastermind in Kuşadası, Türkiye.",
};

export default function AgendaPage() {
  return (
    <main className={styles.agendaPage}>
      <SiteHeader className="agendaHeader" ctaHref="/#apply" />

      <section className="agendaHero">
        <Image className="agendaHeroImage" src={assetPath("/media-agenda-circle.jpg")} alt="Attendees in a peer conversation during a past Holistic SEO Mastermind" fill priority sizes="100vw" unoptimized />
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
