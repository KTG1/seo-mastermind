"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, FormEvent, useEffect, useState } from "react";
import experienceStyles from "./homepage-experience.module.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { assetPath } from "./components/site-path";
import ScrollCinema from "./components/scroll-cinema";
import HeritageMoment from "./components/heritage-moment";
import VideoReviewCard from "./components/video-review-card";

const principles = [
  { id: "seo", label: "SEO", title: "SEO & topical authority", summary: "Shape the entities, information gain, site architecture, and conversion paths that make a search presence useful and understood.", outcome: "A clearer topical map and sharper priority pages.", glyph: "seo" },
  { id: "ai", label: "AI", title: "AI & research systems", summary: "Use AI to expand research, model demand, and improve decision quality without outsourcing the judgment that makes the work distinct.", outcome: "Practical AI workflows your team can supervise.", glyph: "ai" },
  { id: "automation", label: "Automation", title: "Automation & operations", summary: "Find the loops, handoffs, and recurring tasks that deserve a system—then design safeguards so the right work still gets reviewed.", outcome: "A trustworthy operating loop with clear ownership.", glyph: "automation" },
  { id: "business", label: "Business", title: "Business strategy", summary: "Connect the search opportunity to the commercial model, customer journey, offer, and decision that actually move the business forward.", outcome: "A strategy that links visibility to commercial value.", glyph: "business" },
  { id: "investment", label: "Investment", title: "Investment & allocation", summary: "Pressure-test where time, money, and conviction belong, so promising initiatives become considered bets instead of another crowded roadmap.", outcome: "A stronger thesis for the next allocation decision.", glyph: "investment" },
  { id: "management", label: "Management", title: "Management & leadership", summary: "Create the cadence, context, and accountability that helps capable people make better decisions together when the work is complex.", outcome: "A management rhythm people can actually use.", glyph: "management" },
] as const;

function PrincipleGlyph({ type }: { type: string }) {
  if (type === "seo") return <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="11" cy="20" r="3" /><circle cx="28" cy="11" r="3" /><circle cx="28" cy="29" r="3" /><path d="m14 19 11-7M14 21l11 7" /></svg>;
  if (type === "ai") return <svg viewBox="0 0 40 40" aria-hidden="true"><rect x="10" y="10" width="20" height="20" rx="2" /><path d="M15 10V7M20 10V7M25 10V7M15 33v-3M20 33v-3M25 33v-3M10 15H7M10 20H7M10 25H7M33 15h-3M33 20h-3M33 25h-3M16 22l3-4 3 5 3-4" /></svg>;
  if (type === "automation") return <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="12" cy="13" r="3" /><circle cx="28" cy="13" r="3" /><circle cx="20" cy="28" r="3" /><path d="m15 14 9 0M14 16l4 9M26 16l-4 9" /></svg>;
  if (type === "business") return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M9 31h22M12 28V17h16v11M16 17v-5h8v5M16 22h3M21 22h3" /></svg>;
  if (type === "investment") return <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M9 31h22M12 28v-8M20 28V16M28 28V10M11 16l8-5 6 3 5-6" /></svg>;
  return <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="12" r="4" /><path d="M11 31c1-6 4-9 9-9s8 3 9 9M7 17h6M27 17h6" /></svg>;
}

const coreDays = [
  ["01", "Mastermind", "SEO & reputation", "Build search systems, authority, and a reputation that reinforce one another."],
  ["02", "Mastermind", "Automation & business", "Design operating systems and commercial habits that make good work compound."],
  ["03", "Mastermind", "Management & scaling", "Work through the leadership, accountability, and scaling decisions behind durable growth."],
  ["04", "Mastermind", "Opportunity room", "Pressure-test partnerships, talent, investments, and the opportunities worth pursuing together."],
  ["05", "Conference", "The whole system", "One full conference day for stronger connections, sharper ideas, and perspectives beyond the table."],
];

const eventExperiences = [
  "Massages",
  "Jet skis",
  "Water sports",
  "Parasailing",
  "Ephesus visit",
  "Pamukkale visit",
  "Horse safari",
  "ATV safari",
  "Water battle",
  "Mountain safari",
  "Scuba diving",
  "Opening night party",
  "Closing night party",
];

const experiences = [
  { id: "parasailing", title: "Parasailing", overline: "A wider view", heading: "See the coast\nfrom above.", copy: "A calm lift above the Aegean for the people who want a little distance from the usual point of view.", image: "/experience-parasailing.jpg" },
  { id: "jetskis", title: "Jet skis", overline: "On the water", heading: "Follow the\nenergy line.", copy: "An optional, high-energy coastal session for anyone who wants to trade the desk for open water.", image: "/experience-jetskis.jpg" },
  { id: "water-sports", title: "Water sports", overline: "Move, then return", heading: "Reset in\nblue water.", copy: "Swimming, paddling, and open-water time give the day a different kind of focus.", image: "/mastermind-aegean-water-sports-poster.jpg", video: "/mastermind-aegean-water-sports.mp4" },
  { id: "coastal-safaris", title: "Coastal safaris", overline: "Beyond the shoreline", heading: "Take the\nlong route.", copy: "A slower outward journey through the landscape around Kuşadası, with room for the conversation to continue.", image: "/experience-coastal-safari-mastermind.jpg" },
  { id: "horse-safaris", title: "Horse safaris", overline: "A quieter pace", heading: "Trade speed\nfor attention.", copy: "A guided option for the people who would rather follow the terrain at a more deliberate rhythm.", image: "/experience-horse-safari.jpg" },
  { id: "atv-safaris", title: "ATV safaris", overline: "Off the main road", heading: "Find a\ndifferent line.", copy: "A more active route through the surrounding landscape—optional, weather-dependent, and arranged with care.", image: "/experience-atv-safari.jpg" },
  { id: "boat-time", title: "Boat time", overline: "Out on the Aegean", heading: "Make room\nfor horizon.", copy: "Coffee, a calm boat ride, and a stretch of water where a difficult idea can finally become clear.", image: "/experience-boat-time.jpg" },
  { id: "massage", title: "Massage & recovery", overline: "Restore", heading: "Let the work\nsettle in.", copy: "A deliberately slower option for rest, recovery, and the space needed to integrate the week.", image: "/experience-recovery.jpg" },
];

const faqHighlights = [
  { label: "Invitation", question: "Is the mastermind invite-only?", answer: "Yes. The room is deliberately small, and every application is reviewed for fit. Tell us what you are building and the real question you want to work on; we will reply personally." },
  { label: "Invitation", question: "Can I bring a colleague or partner?", answer: "Each place is reviewed individually because the strength of the room comes from the people in it. Mention your colleague in the application and explain the work you would bring together." },
  { label: "Programme", question: "What happens during the eight days?", answer: "The week combines four mastermind sessions across SEO, automation, business, management, reputation, and scaling with one full conference day and four attendee-led night-time Q&As. The wider rhythm leaves room for hosted experiences, recovery, and long-table conversation." },
  { label: "Programme", question: "Who is the room designed for?", answer: "Experienced operators, founders, SEO leaders, agency owners, investors, and builders working on a real business question. Curiosity matters, but so does having work that can benefit from careful peer challenge." },
  { label: "Fee", question: "What does the $5,000 place include?", answer: "Everything in the hosted week: accommodation, food, drinks, VIP airport transfers, four masterminds, the conference, safaris, water sports, massages, parties, and the listed group experiences." },
  { label: "Travel", question: "How should I plan for Kuşadası?", answer: "Most international guests arrive through İzmir Adnan Menderes Airport. We collect every attendee in a VIP vehicle and return them to the airport after the event." },
  { label: "Travel", question: "Where does the gathering take place?", answer: "The 2026 gathering takes place at Infinity by Yelken Aquapark Hotel, a five-star hotel in Kuşadası, Türkiye, from 25 September to 2 October." },
  { label: "Experiences", question: "Are the coastal activities required?", answer: "No. Boat time, water sports, safaris, and recovery sessions are optional. They sit around the core programme and depend on weather, safety guidance, and local availability." },
  { label: "Experiences", question: "Will activities interrupt the working sessions?", answer: "No. The core programme anchors the week. Optional experiences are arranged around it to create recovery, conversation, and a different rhythm without displacing the work." },
];

const faqLabels = ["All", ...Array.from(new Set(faqHighlights.map((item) => item.label)))];

const testimonials = [
  { quote: "The value was not another list of tactics. It was finally seeing how the technical decisions, the brand, and the commercial model affect one another.", role: "Agency founder", location: "United Kingdom", initials: "AF" },
  { quote: "I arrived with a crowded roadmap and left with three decisions. The room made the important work obvious—and gave me the confidence to remove the rest.", role: "Organic growth lead", location: "Europe", initials: "OG" },
  { quote: "The conversations between sessions mattered as much as the sessions themselves. People challenged the premise, not just the execution.", role: "Independent operator", location: "International", initials: "IO" },
];

const videoTestimonials = [
  { title: "Deeper expertise. Lasting relationships.", role: "Mastermind attendee", location: "Kuşadası, Türkiye", duration: "00:30", poster: "/mastermind-testimonial-poster.jpg", video: "/mastermind-testimonial-30s.mp4", captions: "/mastermind-testimonial-30s.vtt" },
  { title: "The conversation beyond the sessions", role: "Independent operator", location: "International", duration: "01:42", poster: "/media-hotel-terrace.jpg" },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeExperience, setActiveExperience] = useState(2);
  const [experiencePaused, setExperiencePaused] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeFaqLabel, setActiveFaqLabel] = useState("All");
  const [activeReviewType, setActiveReviewType] = useState<"all" | "video" | "text">("all");
  const currentExperience = experiences[activeExperience];
  const selectedPrinciple = principles[activePrinciple];
  const visibleFaqs = activeFaqLabel === "All" ? faqHighlights : faqHighlights.filter((item) => item.label === activeFaqLabel);

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
      <SiteHeader className="siteHeader" ctaHref="#apply" />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroImage">
            <Image
              src={assetPath("/agenda-coast-hero.png")}
              alt="Sunset over the Aegean coast near Kuşadası"
              fill
              priority
              unoptimized
              sizes="100vw"
            />
          </div>
          <video className="heroVideo" autoPlay muted loop playsInline preload="metadata" poster={assetPath("/agenda-coast-hero.png")} aria-hidden="true">
            <source src={assetPath("/mastermind-2026-programme-background.mp4")} type="video/mp4" />
          </video>
          <div className="heroShade" aria-hidden="true" />
          <div className="heroTopline"><span>Hosted by Koray Tuğberk Gübür</span><span>Kuşadası, Türkiye</span></div>
          <div className="heroCopy">
            <p className="eyebrow">For operators who know search is bigger than rankings</p>
            <h1 id="hero-title">Holistic SEO<br /><em>Mastermind.</em></h1>
            <p className="heroFocus">25 September—2 October 2026 · 60 guests</p>
            <p className="heroText">Holistic SEO Mastermind is a working room for people building durable organic growth—from the site architecture to the authority it earns in the world.</p>
            <a className="button buttonCoral" href="#apply">Request your invitation <b>→</b></a>
          </div>
          <div className="heroCaption"><span>Not a conference. Not a course.</span><span>A focused table of builders.</span></div>
        </section>

        <section className="eventBrief" aria-labelledby="event-brief-title">
          <header className="eventBriefHeading">
            <div>
              <div className="sectionLabel"><span>2026</span> The invitation-only week</div>
              <h2 id="event-brief-title">One room.<br /><em>Sixty builders.</em><br />Eight days.</h2>
            </div>
            <div className="eventBriefDecision">
              <span className="eventBriefAvailability"><i aria-hidden="true" /> 60% of places are already taken</span>
              <p>For business owners, operators, and exceptional talent in SEO, automation, management, reputation building, and scaling—people looking for opportunities to network and grow together.</p>
              <a className="button buttonCoral" href="#apply">Request an invitation <b>→</b></a>
            </div>
          </header>

          <div className="eventBriefFacts">
            <article><span>When</span><strong>25 Sep—2 Oct</strong><small>2026 · eight hosted days</small></article>
            <article><span>Where</span><strong>Infinity by Yelken</strong><small>Five-star Aquapark Hotel · Kuşadası</small></article>
            <article><span>The room</span><strong>60 attendees</strong><small>Invitation and reference required</small></article>
            <article><span>All-inclusive fee</span><strong>$5,000</strong><small>For each new attendee</small></article>
          </div>

          <div className="eventBriefProgramme">
            <div className="eventBriefProgrammeShade" aria-hidden="true" />
            <article className="eventBriefFormat">
              <span>Inside the room</span>
              <h3>Four masterminds.<br />One full conference day.<br />Four night-time Q&amp;As.</h3>
              <p>The mastermind sessions cover automation, business, SEO, management, reputation, and scaling. Evening Q&amp;A topics are chosen from attendee suggestions.</p>
            </article>
            <article className="eventBriefIncluded">
              <span>Everything is included</span>
              <p>Accommodation, food, drinks, all local transportation, VIP airport collection and return, the masterminds, conference, and every hosted experience.</p>
              <ul>{eventExperiences.map((experience) => <li key={experience}>{experience}</li>)}</ul>
            </article>
          </div>

          <footer className="eventBriefInvite">
            <span>How to join</span>
            <p>Ask a past attendee to introduce you, or request an invitation from <strong>Koray Tuğberk Gübür</strong>, <strong>James Dooley</strong>, or <strong>Mads Singers</strong>.</p>
            <a href="#apply">Start your request <span>↓</span></a>
          </footer>
        </section>

        <section className="nightInterlude" aria-labelledby="night-interlude-title">
          <div className="nightInterludeCopy">
            <div className="sectionLabel light"><span>After hours</span> The conversation continues</div>
            <h2 id="night-interlude-title">Serious work.<br /><em>Unscripted nights.</em></h2>
            <p>The strongest relationships are rarely built from an agenda alone. After the sessions, the room becomes music, laughter, and conversations that keep moving.</p>
            <span className="nightInterludeNote">One week · one room · many stories</span>
          </div>
          <figure className="nightInterludeImage">
            <Image
              src={assetPath("/mastermind-unscripted-night.jpg")}
              alt="Holistic SEO Mastermind attendees singing and laughing together during an evening in Kuşadası"
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 46vw"
            />
            <figcaption>Kuşadası after hours</figcaption>
          </figure>
        </section>

        <ScrollCinema />

        <section className="aegeanInterlude" aria-labelledby="aegean-interlude-title" style={{ "--aegean-poster": `url(${assetPath("/mastermind-aegean-water-sports-poster.jpg")})` } as CSSProperties}>
          <video autoPlay muted loop playsInline preload="metadata" poster={assetPath("/mastermind-aegean-water-sports-poster.jpg")} aria-hidden="true">
            <source src={assetPath("/mastermind-aegean-water-sports.mp4")} type="video/mp4" />
          </video>
          <div className="aegeanInterludeShade" aria-hidden="true" />
          <div className="aegeanInterludeCopy">
            <div className="sectionLabel light"><span>Beyond the table</span> The Aegean resets the room</div>
            <h2 id="aegean-interlude-title">Leave the room.<br /><em>Keep the momentum.</em></h2>
            <p>Open water, a wider horizon, and enough distance for the next useful idea to surface.</p>
          </div>
          <div className="aegeanInterludeFoot"><span>Kuşadası / Türkiye</span><span>Optional coastal experiences</span></div>
        </section>

        <section className="introduction" id="approach">
          <video className="introductionVideo" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src={assetPath("/mastermind-champagne-spill-background.mp4")} type="video/mp4" />
          </video>
          <div className="introductionShade" aria-hidden="true" />
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
            <p>Choose a discipline to see the work.</p>
          </div>
          <div className="principleList" role="group" aria-label="Explore the working disciplines">
            {principles.map((principle, index) => (
              <button className="principle" type="button" key={principle.id} aria-pressed={activePrinciple === index} onClick={() => setActivePrinciple(index)} onMouseEnter={() => setActivePrinciple(index)} onFocus={() => setActivePrinciple(index)}>
                <span className="principleTop"><span className="principleNumber">0{index + 1}</span><span className="principleTag">{principle.label}</span></span>
                <span className="principleGlyph"><PrincipleGlyph type={principle.glyph} /></span>
                <strong>{principle.title}</strong>
                <i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>
          <div className="principleDetail" aria-live="polite">
            <div><span>0{activePrinciple + 1} / {selectedPrinciple.label}</span><h3>{selectedPrinciple.title}</h3></div>
            <p>{selectedPrinciple.summary}</p>
            <aside><span>Leave with</span><b>{selectedPrinciple.outcome}</b></aside>
          </div>
        </section>

        <section className="host">
          <video className="hostVideo" autoPlay muted loop playsInline preload="metadata" poster={assetPath("/mastermind-pamukkale-walk-poster.jpg")} aria-hidden="true">
            <source src={assetPath("/mastermind-pamukkale-walk-background.mp4")} type="video/mp4" />
          </video>
          <div className="hostVideoShade" aria-hidden="true" />
          <div className="hostLine" aria-hidden="true" />
          <div className="hostKicker">Your host</div>
          <h2>Koray Tuğberk<br /><em>Gübür</em></h2>
          <p>Bringing a systems view to organic growth—so the strategy, the site, the content, and the reputation all begin to reinforce each other.</p>
          <div className="hostLocation">Kuşadası / Türkiye <span>✦</span> In person</div>
        </section>

        <section className="programmeOffer" aria-labelledby="programme-title">
          <div className="offerHeading"><div className="sectionLabel"><span>03</span> The core programme</div><h2 id="programme-title">Four masterminds to <em>work the system.</em><br />One full day to widen it.</h2><p>The working room moves through SEO, reputation, automation, business, management, and scaling—then opens into a dedicated conference day.</p></div>
          <div className="coreDays">{coreDays.map(([number, format, title, copy]) => <article key={number}><span>{number}</span><b>{format}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className={`experienceBand ${experienceStyles.experienceBand}`} data-engagement={currentExperience.id} style={{ "--experience-background": `url(${assetPath(currentExperience.image)})` } as CSSProperties}>
            {"video" in currentExperience && currentExperience.video ? (
              <video className="experienceVideo" autoPlay muted loop playsInline preload="metadata" poster={assetPath(currentExperience.image)} aria-hidden="true">
                <source src={assetPath(currentExperience.video)} type="video/mp4" />
              </video>
            ) : null}
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

        <section className="roadMoment" aria-labelledby="road-moment-title">
          <Image
            src={assetPath("/mastermind-night-ride.jpg")}
            alt="Holistic SEO Mastermind attendees sharing a night safari ride in Kuşadası"
            fill
            unoptimized
            sizes="100vw"
          />
          <div className="roadMomentShade" aria-hidden="true" />
          <div className="roadMomentCopy">
            <div className="sectionLabel light"><span>Beyond the sessions</span> Shared experience</div>
            <h2 id="road-moment-title">The day doesn’t end<br /><em>at the last slide.</em></h2>
          </div>
          <div className="roadMomentFoot">
            <span>Night safari · Kuşadası</span>
            <p>Some of the best conversations begin on the way back.</p>
          </div>
        </section>

        <HeritageMoment />

        <section className="collectivePortrait" aria-labelledby="collective-portrait-title">
          <header className="collectivePortraitHeading">
            <div className="sectionLabel"><span>04</span> The people behind the week</div>
            <h2 id="collective-portrait-title">A room becomes valuable<br />when everyone <em>adds to it.</em></h2>
          </header>
          <figure className="collectivePortraitFrame">
            <Image
              src={assetPath("/mastermind-collective-toast.jpg")}
              alt="Holistic SEO Mastermind attendees raising a toast together beside the water in Kuşadası"
              fill
              unoptimized
              sizes="100vw"
            />
            <div className="collectivePortraitShade" aria-hidden="true" />
            <figcaption>
              <span>Previous gathering · Kuşadası, Türkiye</span>
              <strong>Different markets. Different questions.<br />One generous table.</strong>
            </figcaption>
          </figure>
        </section>

        <section className="testimonials" aria-labelledby="testimonials-title">
          <header className="testimonialHeading">
            <div className="sectionLabel"><span>05</span> Notes from the room</div>
            <h2 id="testimonials-title">What stays with<br />people <em>afterward.</em></h2>
            <p>Watch a participant reflection or read the notes people carried away from the table.</p>
          </header>
          <div className="reviewTabs" role="group" aria-label="Filter reviews by format">
            {([{"id":"all","label":"All","count":testimonials.length + videoTestimonials.length},{"id":"video","label":"Video reviews","count":videoTestimonials.length},{"id":"text","label":"Text reviews","count":testimonials.length}] as const).map((tab) => <button type="button" key={tab.id} aria-pressed={activeReviewType === tab.id} onClick={() => setActiveReviewType(tab.id)}><span>{tab.label}</span><i>{String(tab.count).padStart(2, "0")}</i></button>)}
          </div>
          <div className="testimonialGrid" data-review-view={activeReviewType} aria-live="polite">
            {(activeReviewType === "all" ? videoTestimonials.slice(0, 1) : activeReviewType === "video" ? videoTestimonials : []).map((review) => <VideoReviewCard review={review} key={review.title} />)}
            {(activeReviewType === "all" ? testimonials.slice(0, 1) : activeReviewType === "text" ? testimonials : []).map((testimonial, index) => <figure className="testimonialCard" key={testimonial.role}>
              <div className="testimonialMeta"><span>{String(index + 1).padStart(2, "0")} / {activeReviewType === "all" ? "01" : "03"}</span><i>“</i></div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption><span className="testimonialMonogram">{testimonial.initials}</span><span><b>{testimonial.role}</b><small>{testimonial.location}</small></span></figcaption>
            </figure>)}
          </div>
          <p className="testimonialNote">Participant reflections from previous Holistic SEO Mastermind gatherings</p>
          <Link className="testimonialArchive" href="/testimonials/">Explore testimonials by role <span>→</span></Link>
        </section>

        <section className="application" id="apply">
          <div className="applicationCopy">
            <div className="sectionLabel light"><span>06</span> Join the next room</div>
            <h2>Bring the question<br />that matters.</h2>
            <p>Request an invitation with a reference from a past attendee, or through Koray Tuğberk Gübür, James Dooley, or Mads Singers. Tell us what you are building and what you can add to the room.</p>
            <div className="applicationPrice"><span>Everything included</span><strong>$5,000</strong><small>USD · per new invited attendee</small></div>
          </div>
          <form className="applyForm" onSubmit={submitApplication}>
            <label>Your name<input required name="name" placeholder="Jane Smith" /></label>
            <label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label>
            <label>What are you building?<textarea required name="goal" placeholder="Tell us about the search problem you want to work on…" /></label>
            <label>Your reference or inviter<input required name="reference" placeholder="Past attendee, Koray, James, or Mads" /></label>
            <button className="button buttonPaper" type="submit">Request an invitation <b>→</b></button>
            <p className="formNote" aria-live="polite">{submitted ? "Thank you. Your request has been received." : "A considered reply, not an automated funnel."}</p>
          </form>
        </section>

        <section className="homeFaq" aria-labelledby="home-faq-title">
          <header className="homeFaqHeading">
            <div>
              <div className="sectionLabel"><span>07</span> Before you decide</div>
              <h2 id="home-faq-title">Questions worth<br />answering <em>early.</em></h2>
            </div>
            <div className="homeFaqIntro">
              <p>The practical details, kept close to the decision they support.</p>
              <Link href="/faq/">Read the complete FAQ <span>→</span></Link>
            </div>
          </header>
          <div className="homeFaqFilters" role="group" aria-label="Filter frequently asked questions by topic">
            {faqLabels.map((label) => <button type="button" key={label} aria-pressed={activeFaqLabel === label} onClick={() => setActiveFaqLabel(label)}>{label}<span>{label === "All" ? faqHighlights.length : faqHighlights.filter((item) => item.label === label).length}</span></button>)}
          </div>
          <div className="homeFaqList" aria-live="polite">
            {visibleFaqs.map((item) => <details className="homeFaqItem" key={item.question}>
              <summary><span className="faqLabel">{item.label}</span><b>{item.question}</b><i>+</i></summary>
              <p>{item.answer}</p>
            </details>)}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
