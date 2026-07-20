import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import styles from "./mira-doran/page.module.css";

type ProfilePreviewProps = { name: string; initials: string; role: string; location: string; focus: string };

export default function ProfilePreview({ name, initials, role, location, focus }: ProfilePreviewProps) {
  return <main className={styles.attendeePage}>
    <SiteHeader className="attendeeHeader" />
    <section className="attendeeHero"><div className="exampleFlag">Profile preview · details pending approval</div><div className="attendeeEyebrow">Member profile <span>✦</span> Holistic SEO Mastermind</div><h1>{name.split(" ")[0]}<br /><em>{name.split(" ").slice(1).join(" ")}</em></h1><div className="attendeeIntro"><p>{role}</p><p>{location}</p></div><div className="attendeeMonogram" aria-hidden="true"><span>{initials}</span><i>HSM</i></div></section>
    <section className="profileLedger" aria-label={`${name} profile details`}><div><span>Focus</span><strong>{focus}</strong></div><div><span>Background</span><strong>Profile details in review</strong></div><div><span>Mastermind goal</span><strong>Bring an operator&apos;s perspective to the room</strong></div><div className="privateField"><span>Profile status</span><strong>Interview <em>coming soon</em></strong></div></section>
    <section className="attendeeStory"><div className="storyAside"><span>01</span><p>Profile preview</p></div><div className="storyBody"><h2>{name.split(" ")[0]}&apos;s attendee story is being <em>prepared.</em></h2><p>We are keeping this first version intentionally brief until the attendee has reviewed the biographical details, background, and interview content.</p><p>The profile will become a useful record of the perspective they bring to the mastermind—not a generic speaker biography.</p></div></section>
    <section className="attendeeQuote"><div className="quoteMark">“</div><blockquote>The interview will be added after the attendee has approved their profile.</blockquote><p>— Holistic SEO Mastermind</p></section>
    <section className="interview"><div className="interviewHeading"><span>02</span><h2>In conversation</h2><p>Questions and answers will be published here.</p></div><div className="interviewList"><article><span>01</span><h3>What are you bringing to the room?</h3><p>To be confirmed in conversation with the attendee.</p></article><article><span>02</span><h3>What question are you working on?</h3><p>To be confirmed in conversation with the attendee.</p></article></div></section>
    <SiteFooter />
  </main>;
}
