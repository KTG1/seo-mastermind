"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, FormEvent, useEffect, useState } from "react";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { assetPath } from "./components/site-path";
import ScrollCinema from "./components/scroll-cinema";

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
  ["01", "Mastermind", "SEO & AI", "Search systems, information gain, and how AI changes the work without replacing the thinking."],
  ["02", "Mastermind", "Automation & business", "Design the operating systems, decision loops, and commercial habits that make good work compound."],
  ["03", "Mastermind", "Investment & opportunity", "Pressure-test the opportunities, allocation questions, and durable advantages worth building toward."],
  ["04", "Conference", "The whole system", "One shared conference day for stronger connections, sharper ideas, and perspectives beyond the table."],
];

const experiences = [
  { id: "parasailing", title: "Parasailing", overline: "A wider view", heading: "See the coast\nfrom above.", copy: "A calm lift above the Aegean for the people who want a little distance from the usual point of view.", image: "/experience-parasailing.jpg" },
  { id: "jetskis", title: "Jet skis", overline: "On the water", heading: "Follow the\nenergy line.", copy: "An optional, high-energy coastal session for anyone who wants to trade the desk for open water.", image: "/experience-jetskis.jpg" },
  { id: "water-sports", title: "Water sports", overline: "Move, then return", heading: "Reset in\nblue water.", copy: "Swimming, paddling, and open-water time give the day a different kind of focus.", image: "/media-water-sports.jpg" },
  { id: "coastal-safaris", title: "Coastal safaris", overline: "Beyond the shoreline", heading: "Take the\nlong route.", copy: "A slower outward journey through the landscape around Kuşadası, with room for the conversation to continue.", image: "/experience-coastal-safari.jpg" },
  { id: "horse-safaris", title: "Horse safaris", overline: "A quieter pace", heading: "Trade speed\nfor attention.", copy: "A guided option for the people who would rather follow the terrain at a more deliberate rhythm.", image: "/experience-horse-safari.jpg" },
  { id: "atv-safaris", title: "ATV safaris", overline: "Off the main road", heading: "Find a\ndifferent line.", copy: "A more active route through the surrounding landscape—optional, weather-dependent, and arranged with care.", image: "/experience-atv-safari.jpg" },
  { id: "boat-time", title: "Boat time", overline: "Out on the Aegean", heading: "Make room\nfor horizon.", copy: "Coffee, a calm boat ride, and a stretch of water where a difficult idea can finally become clear.", image: "/experience-boat-time.jpg" },
  { id: "massage", title: "Massage & recovery", overline: "Restore", heading: "Let the work\nsettle in.", copy: "A deliberately slower option for rest, recovery, and the space needed to integrate the week.", image: "/experience-recovery.jpg" },
];

const faqHighlights = [
  { label: "Invitation", question: "Is the mastermind invite-only?", answer: "Yes. The room is deliberately small, and every application is reviewed for fit. Tell us what you are building and the real question you want to work on; we will reply personally." },
  { label: "Invitation", question: "Can I bring a colleague or partner?", answer: "Each place is reviewed individually because the strength of the room comes from the people in it. Mention your colleague in the application and explain the work you would bring together." },
  { label: "Programme", question: "What happens during the seven days?", answer: "The week combines three mastermind days across SEO, AI, automation, business, and investment with one conference day. The wider rhythm leaves room for arrival, recovery, local experiences, and long-table conversation." },
  { label: "Programme", question: "Who is the room designed for?", answer: "Experienced operators, founders, SEO leaders, agency owners, investors, and builders working on a real business question. Curiosity matters, but so does having work that can benefit from careful peer challenge." },
  { label: "Fee", question: "What does the $6,000 place include?", answer: "Your place includes the core mastermind and conference programme, working sessions, and the hosted group moments in the final itinerary. Accommodation, travel, and optional activities are confirmed separately for invited attendees." },
  { label: "Travel", question: "How should I plan for Kuşadası?", answer: "Most international guests arrive through İzmir Adnan Menderes Airport. Confirmed attendees receive the final venue, transfer, check-in, and timing guidance well before the gathering." },
  { label: "Travel", question: "Where does the gathering take place?", answer: "The gathering is hosted in Kuşadası, Türkiye. The final hotel and venue details are shared directly with confirmed attendees as part of their arrival guidance." },
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
  { title: "Why the room changed the roadmap", role: "Agency founder", location: "United Kingdom", duration: "02:18", poster: "/holistic-seo-mastermind-group.png" },
  { title: "The conversation beyond the sessions", role: "Independent operator", location: "International", duration: "01:42", poster: "/media-hotel-terrace.jpg" },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
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
          <div className="heroShade" aria-hidden="true" />
          <div className="heroTopline"><span>Hosted by Koray Tuğberk Gübür</span><span>Kuşadası, Türkiye</span></div>
          <div className="heroCopy">
            <p className="eyebrow">For operators who know search is bigger than rankings</p>
            <h1 id="hero-title">Holistic SEO<br /><em>Mastermind.</em></h1>
            <p className="heroFocus">Business &amp; investment networking</p>
            <p className="heroText">Holistic SEO Mastermind is a working room for people building durable organic growth—from the site architecture to the authority it earns in the world.</p>
            <a className="button buttonCoral" href="#apply">Apply for the next room <b>→</b></a>
          </div>
          <div className="heroCaption"><span>Not a conference. Not a course.</span><span>A focused table of builders.</span></div>
        </section>

        <ScrollCinema />

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
          <div className="hostLine" aria-hidden="true" />
          <div className="hostKicker">Your host</div>
          <h2>Koray Tuğberk<br /><em>Gübür</em></h2>
          <p>Bringing a systems view to organic growth—so the strategy, the site, the content, and the reputation all begin to reinforce each other.</p>
          <div className="hostLocation">Kuşadası / Türkiye <span>✦</span> In person</div>
        </section>

        <section className="programmeOffer" aria-labelledby="programme-title">
          <div className="offerHeading"><div className="sectionLabel"><span>03</span> The core programme</div><h2 id="programme-title">Three days to <em>work the system.</em><br />One day to widen it.</h2><p>The core learning room moves through SEO, AI, automation, business, and investment—then opens into a dedicated conference day.</p></div>
          <div className="coreDays">{coreDays.map(([number, format, title, copy]) => <article key={number}><span>{number}</span><b>{format}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className="experienceBand" data-engagement={currentExperience.id} style={{ "--experience-background": `url(${assetPath(currentExperience.image)})` } as CSSProperties}>
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

        <section className="testimonials" aria-labelledby="testimonials-title">
          <header className="testimonialHeading">
            <div className="sectionLabel"><span>04</span> Notes from the room</div>
            <h2 id="testimonials-title">What stays with<br />people <em>afterward.</em></h2>
            <p>Watch a participant reflection or read the notes people carried away from the table.</p>
          </header>
          <div className="reviewTabs" role="group" aria-label="Filter reviews by format">
            {([{"id":"all","label":"All","count":testimonials.length + videoTestimonials.length},{"id":"video","label":"Video reviews","count":videoTestimonials.length},{"id":"text","label":"Text reviews","count":testimonials.length}] as const).map((tab) => <button type="button" key={tab.id} aria-pressed={activeReviewType === tab.id} onClick={() => setActiveReviewType(tab.id)}><span>{tab.label}</span><i>{String(tab.count).padStart(2, "0")}</i></button>)}
          </div>
          <div className="testimonialGrid" data-review-view={activeReviewType} aria-live="polite">
            {(activeReviewType === "all" ? videoTestimonials.slice(0, 1) : activeReviewType === "video" ? videoTestimonials : []).map((review) => <article className="videoReviewCard" key={review.title}>
              <Image src={assetPath(review.poster)} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
              <div className="videoReviewShade" aria-hidden="true" />
              <div className="videoReviewTop"><span>Video review</span><i>{review.duration}</i></div>
              <div className="videoReviewBody"><span className="videoPending" aria-label="Video asset pending">▶</span><h3>{review.title}</h3><p>{review.role} · {review.location}</p></div>
            </article>)}
            {(activeReviewType === "all" ? testimonials.slice(0, 1) : activeReviewType === "text" ? testimonials : []).map((testimonial, index) => <figure className="testimonialCard" key={testimonial.role}>
              <div className="testimonialMeta"><span>{String(index + 1).padStart(2, "0")} / {activeReviewType === "all" ? "01" : "03"}</span><i>“</i></div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption><span className="testimonialMonogram">{testimonial.initials}</span><span><b>{testimonial.role}</b><small>{testimonial.location}</small></span></figcaption>
            </figure>)}
          </div>
          <p className="testimonialNote">Editorial placeholders · replace with approved participant quotes and video files before publication</p>
          <Link className="testimonialArchive" href="/testimonials/">Explore testimonials by role <span>→</span></Link>
        </section>

        <section className="application" id="apply">
          <div className="applicationCopy">
            <div className="sectionLabel light"><span>05</span> Join the next room</div>
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

        <section className="homeFaq" aria-labelledby="home-faq-title">
          <header className="homeFaqHeading">
            <div>
              <div className="sectionLabel"><span>06</span> Before you decide</div>
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
