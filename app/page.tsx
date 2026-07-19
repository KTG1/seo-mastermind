"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, FormEvent, useEffect, useState } from "react";
import AgendaMenu from "./components/agenda-menu";
import BrandMark from "./components/brand-mark";
import SiteFooter from "./components/site-footer";
import { assetPath } from "./components/site-path";

const principles = [
  ["See the whole system", "Connect technical SEO, information gain, brand signals, entities, and conversion instead of treating them as separate checklists."],
  ["Work in public", "Bring the actual page, process, architecture, or problem. Leave with decisions you can put into practice immediately."],
  ["Build durable advantage", "Create a search presence that earns citations, strengthens the brand, and compounds long after a single update ships."],
];

const coreDays = [
  ["01", "Mastermind", "SEO & AI", "Search systems, information gain, and how AI changes the work without replacing the thinking."],
  ["02", "Mastermind", "Automation & business", "Design the operating systems, decision loops, and commercial habits that make good work compound."],
  ["03", "Mastermind", "Investment & opportunity", "Pressure-test the opportunities, allocation questions, and durable advantages worth building toward."],
  ["04", "Conference", "The whole system", "One shared conference day for stronger connections, sharper ideas, and perspectives beyond the table."],
];

const experiences = [
  { id: "parasailing", title: "Parasailing", overline: "A wider view", heading: "See the coast\nfrom above.", copy: "A calm lift above the Aegean for the people who want a little distance from the usual point of view." },
  { id: "jetskis", title: "Jet skis", overline: "On the water", heading: "Follow the\nenergy line.", copy: "An optional, high-energy coastal session for anyone who wants to trade the desk for open water." },
  { id: "water-sports", title: "Water sports", overline: "Move, then return", heading: "Reset in\nblue water.", copy: "Swimming, paddling, and open-water time give the day a different kind of focus." },
  { id: "coastal-safaris", title: "Coastal safaris", overline: "Beyond the shoreline", heading: "Take the\nlong route.", copy: "A slower outward journey through the landscape around Kuşadası, with room for the conversation to continue." },
  { id: "horse-safaris", title: "Horse safaris", overline: "A quieter pace", heading: "Trade speed\nfor attention.", copy: "A guided option for the people who would rather follow the terrain at a more deliberate rhythm." },
  { id: "atv-safaris", title: "ATV safaris", overline: "Off the main road", heading: "Find a\ndifferent line.", copy: "A more active route through the surrounding landscape—optional, weather-dependent, and arranged with care." },
  { id: "boat-time", title: "Boat time", overline: "Out on the Aegean", heading: "Make room\nfor horizon.", copy: "Coffee, a calm boat ride, and a stretch of water where a difficult idea can finally become clear." },
  { id: "massage", title: "Massage & recovery", overline: "Restore", heading: "Let the work\nsettle in.", copy: "A deliberately slower option for rest, recovery, and the space needed to integrate the week." },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [experiencePaused, setExperiencePaused] = useState(false);
  const currentExperience = experiences[activeExperience];

  useEffect(() => {
    if (experiencePaused) return;
    const timer = window.setInterval(() => {
      setActiveExperience((current) => (current + 1) % experiences.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [experiencePaused]);

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Holistic SEO Mastermind home">
          <BrandMark />
          <span>HOLISTIC SEO<br />MASTERMIND</span>
        </a>
        <nav aria-label="Primary navigation">
          <Link href="/about/">About</Link>
          <Link href="/agency/">Agency</Link>
          <Link href="/course/">Course</Link>
          <Link href="/founder/">Founder</Link>
          <AgendaMenu />
          <Link href="/attendees/">Members</Link>
        </nav>
        <a className="headerCta" href="#apply">Request a seat <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroImage">
            <Image
              src={assetPath("/holistic-seo-mastermind-group.png")}
              alt="Members of the Holistic SEO Mastermind gathered in Kuşadası"
              fill
              priority
              unoptimized
              sizes="100vw"
            />
          </div>
          <div className="heroShade" aria-hidden="true" />
          <div className="heroTopline"><span>Hosted by Koray Tuğberk Gübür</span><span>Kuşadası, Türkiye</span></div>
          <div className="heroCopy">
            <p className="eyebrow">For operators who know search is bigger than rankings</p>
            <h1 id="hero-title">Build the<br /><em>whole system.</em></h1>
            <p className="heroText">Holistic SEO Mastermind is a working room for people building durable organic growth—from the site architecture to the authority it earns in the world.</p>
            <a className="button buttonCoral" href="#apply">Apply for the next room <b>→</b></a>
          </div>
          <div className="heroCaption"><span>Not a conference. Not a course.</span><span>A focused table of builders.</span></div>
        </section>

        <section className="introduction" id="approach">
          <div className="sectionLabel"><span>01</span> A different way to work on search</div>
          <div className="introMain">
            <h2>SEO becomes valuable when it is understood as a <em>living business system.</em></h2>
            <div className="introSide">
              <p>The work is not about chasing a tool’s score. It is about creating useful information, clear relationships, technical foundations, and a brand people trust enough to choose.</p>
              <a className="underLink" href="#room">Explore the room <span>↓</span></a>
            </div>
          </div>
        </section>

        <section className="principles" id="room">
          <div className="principlesHeading">
            <div className="sectionLabel"><span>02</span> What happens at the table</div>
            <p>One small group. Real work. Careful thinking.</p>
          </div>
          <div className="principleList">
            {principles.map(([title, text], index) => (
              <article className="principle" key={title}>
                <span className="principleNumber">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="host">
          <div className="hostLine" aria-hidden="true" />
          <div className="hostKicker">Your host</div>
          <h2>Koray Tuğberk<br /><em>Gübür</em></h2>
          <p>Bringing a systems view to organic growth—so the strategy, the site, the content, and the reputation all begin to reinforce each other.</p>
          <div className="hostLocation">Kuşadası / Türkiye <span>✦</span> In person</div>
        </section>

        <section className="programmeOffer" aria-labelledby="programme-title">
          <div className="offerHeading"><div className="sectionLabel"><span>03</span> The core programme</div><h2 id="programme-title">Three days to <em>work the system.</em><br />One day to widen it.</h2><p>The core learning room moves through SEO, AI, automation, business, and investment—then opens into a dedicated conference day.</p></div>
          <div className="coreDays">{coreDays.map(([number, format, title, copy]) => <article key={number}><span>{number}</span><b>{format}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className="experienceBand" data-engagement={currentExperience.id} style={{ "--experience-background": `url(${assetPath("/media-water-sports.jpg")})` } as CSSProperties}>
            <div className="experienceCopy" key={currentExperience.id}>
              <span>{currentExperience.overline} <i>·</i> {String(activeExperience + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}</span>
              <h3>{currentExperience.heading.split("\n")[0]}<br />{currentExperience.heading.split("\n")[1]} <em>↗</em></h3>
              <p>{currentExperience.copy}</p>
              <small>Optional experience · final availability and safety guidance shared with invited attendees</small>
            </div>
            <ul onMouseEnter={() => setExperiencePaused(true)} onMouseLeave={() => setExperiencePaused(false)}>
              {experiences.map((experience, index) => (
                <li key={experience.id}>
                  <button type="button" aria-pressed={activeExperience === index} onClick={() => setActiveExperience(index)} onFocus={() => { setActiveExperience(index); setExperiencePaused(true); }} onBlur={() => setExperiencePaused(false)}>
                    {experience.title}<i>↗</i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="application" id="apply">
          <div className="applicationCopy">
            <div className="sectionLabel light"><span>03</span> Join the next room</div>
            <h2>Bring the question<br />that matters.</h2>
            <p>Tell us what you are trying to solve. We will reply if the next mastermind is the right space for your work.</p>
            <div className="applicationPrice"><span>Core programme access</span><strong>$6,000</strong><small>USD · per invited attendee</small></div>
          </div>
          <form className="applyForm" onSubmit={submitApplication}>
            <label>Your name<input required name="name" placeholder="Jane Smith" /></label>
            <label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label>
            <label>What are you building?<textarea required name="goal" placeholder="Tell us about the search problem you want to work on…" /></label>
            <button className="button buttonPaper" type="submit">Request a seat <b>→</b></button>
            <p className="formNote" aria-live="polite">{submitted ? "Thank you. Your request has been received." : "A considered reply, not an automated funnel."}</p>
          </form>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
