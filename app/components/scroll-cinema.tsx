"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { assetPath } from "./site-path";

const mastermindOutcomes = [
  {
    id: "seo",
    label: "SEO & Conversion",
    backdrop: "/media-agenda-circle.jpg",
    stages: [
      ["Bring", "Scattered demand signals", "The real queries, pages, and friction in your way.", "search"],
      ["Build at the table", "An intent-to-action map", "A shared model of the journey your site should create.", "path"],
      ["Leave with", "A conversion-ready path", "Clear priorities your team can put into practice.", "target"],
    ],
  },
  {
    id: "automation",
    label: "AI & Automation",
    backdrop: "/media-hotel-terrace.jpg",
    stages: [
      ["Bring", "Manual loops & handoffs", "The work that is draining time or slipping through gaps.", "loop"],
      ["Build at the table", "A guarded workflow", "The trigger, review point, and decision logic it needs.", "shield"],
      ["Leave with", "An automation you trust", "A workflow that makes capacity without removing judgment.", "review"],
    ],
  },
  {
    id: "investment",
    label: "Business & Investment",
    backdrop: "/holistic-seo-mastermind-group.png",
    stages: [
      ["Bring", "A crowded opportunity set", "The bets competing for your attention and capital.", "compass"],
      ["Build at the table", "A tested investment thesis", "The advantage, downside, and evidence behind the choice.", "scale"],
      ["Leave with", "A focused allocation plan", "The next commitments that deserve conviction and follow-through.", "growth"],
    ],
  },
  {
    id: "conference",
    label: "Conference & Networking",
    backdrop: "/agenda-activity-scenes.png",
    stages: [
      ["Bring", "A question worth sharing", "The idea, challenge, or perspective that becomes stronger in a wider room.", "conversation"],
      ["Build at the conference", "A trusted circle", "A set of people who understand the work and can sharpen the next move.", "people"],
      ["Leave with", "Working alliances", "New conversations and follow-ups with real momentum behind them.", "connection"],
    ],
  },
] as const;

function StepGlyph({ type }: { type: string }) {
  if (type === "search") return <svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="5" /><path d="m14 14 5 5M8 10h4M10 8v4" /></svg>;
  if (type === "path") return <svg viewBox="0 0 24 24"><circle cx="5" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="m7 7 4 9M17 8l-4 8" /></svg>;
  if (type === "target") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3" /><path d="m16 8 4-4M16 8h4v4" /></svg>;
  if (type === "loop") return <svg viewBox="0 0 24 24"><path d="M18 8a7 7 0 0 0-12-2L4 8M4 4v4h4M6 16a7 7 0 0 0 12 2l2-2M20 20v-4h-4" /></svg>;
  if (type === "shield") return <svg viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 4.3-2.8 7.5-7 10-4.2-2.5-7-5.7-7-10V6zM9 12l2 2 4-4" /></svg>;
  if (type === "review") return <svg viewBox="0 0 24 24"><path d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z" /><circle cx="12" cy="12" r="2" /></svg>;
  if (type === "compass") return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>;
  if (type === "scale") return <svg viewBox="0 0 24 24"><path d="M12 4v16M7 7h10M5 19h14M7 7l-3 6h6zM17 7l-3 6h6z" /></svg>;
  if (type === "conversation") return <svg viewBox="0 0 24 24"><path d="M4 5h12v9H9l-4 4v-4H4zM18 8h2v8h-3l-2 2" /></svg>;
  if (type === "people") return <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20c.5-4 3-6 6-6s5.5 2 6 6M15 15c2.7.2 4.4 1.8 5 5" /></svg>;
  if (type === "connection") return <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="m8 11 8-4M8 13l8 4" /></svg>;
  return <svg viewBox="0 0 24 24"><path d="M4 19h16M6 17v-5M11 17V8M16 17V4M4 9l6-4 5 2 5-4" /></svg>;
}

export default function ScrollCinema() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || reducedMotion.matches || window.innerWidth < 761) return;

    let frame = 0;
    const render = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / distance));
      const eased = progress * progress * (3 - 2 * progress);
      const scene = progress < 0.25 ? "seo" : progress < 0.5 ? "automation" : progress < 0.75 ? "investment" : "conference";

      section.dataset.scene = scene;
      section.style.setProperty("--camera-x", `${-eased * 46}px`);
      section.style.setProperty("--camera-y", `${eased * 28}px`);
      section.style.setProperty("--camera-scale", `${1 + eased * 0.13}`);
      section.style.setProperty("--core-y", `${-24 + eased * 84}deg`);
      section.style.setProperty("--core-x", `${12 - eased * 18}deg`);
    };
    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <section className="scrollCinema" ref={sectionRef} data-scene="seo" aria-label="A scroll-driven preview of the three Holistic SEO Mastermind tracks">
    <div className="cinemaSticky">
      {mastermindOutcomes.map((track) => <Image
        className={`cinemaImage cinemaImage${track.id[0].toUpperCase()}${track.id.slice(1)}`}
        src={assetPath(track.backdrop)}
        alt=""
        fill
        sizes="100vw"
        unoptimized
        key={track.id}
      />)}
      <div className="cinemaShade" aria-hidden="true" />
      <div className="cinemaHud">
        <span>THREE MASTERMINDS + CONFERENCE / 01—04</span>
        <span className="cinemaRoomStatus" aria-live="polite">
          <span className="cinemaRoomSeo">01 / SEO &amp; CONVERSION</span>
          <span className="cinemaRoomAutomation">02 / AI &amp; AUTOMATION</span>
          <span className="cinemaRoomInvestment">03 / BUSINESS &amp; INVESTMENT</span>
          <span className="cinemaRoomConference">04 / CONFERENCE &amp; NETWORKING</span>
        </span>
      </div>
      <div className="cinemaCopy" aria-live="polite">
        <div className="cinemaLine cinemaSeo"><span>01 / SEO &amp; Conversion</span><h2>Turn intent<br />into <em>action.</em></h2><p>Build search journeys that earn the click, answer the need, and move the business forward.</p></div>
        <div className="cinemaLine cinemaAutomation"><span>02 / AI &amp; Automation</span><h2>Scale the work<br />without losing <em>thinking.</em></h2><p>Design useful systems, sharper workflows, and room for the judgment that still matters.</p></div>
        <div className="cinemaLine cinemaInvestment"><span>03 / Business &amp; Investment</span><h2>Make the system<br />earn its <em>future.</em></h2><p>Pressure-test where time, capital, and conviction can create a durable advantage.</p></div>
        <div className="cinemaLine cinemaConference"><span>04 / Conference &amp; Networking</span><h2>Make the right<br /><em>connections.</em></h2><p>Bring the work into a wider room, with people who can extend the conversation beyond the event.</p></div>
      </div>
      <div className="cinemaWorld" aria-hidden="true">
        <div className="cinemaHalo" />
        {mastermindOutcomes.map((track) => <div className={`cinemaPath cinemaPath${track.id[0].toUpperCase()}${track.id.slice(1)}`} key={track.id}>
          <div className="cinemaOutcomeHeading"><span>THE WORKING OUTPUT</span><b>{track.label}</b></div>
          <div className="cinemaFlow">
            <div className="cinemaPulse" />
            {track.stages.map(([label, title, copy, icon], index) => <article className={`cinemaOutcome cinemaOutcome${index + 1}`} key={title}>
              <StepGlyph type={icon} />
              <small>{label}</small>
              <b>{title}</b>
              <span>{copy}</span>
            </article>)}
            <div className="cinemaConnector cinemaConnector1"><i>→</i></div>
            <div className="cinemaConnector cinemaConnector2"><i>→</i></div>
          </div>
          <p className="cinemaOutcomeNote">A real problem becomes a usable operating decision.</p>
        </div>)}
      </div>
      <div className="cinemaFoot"><span>SCROLL TO MOVE THROUGH THE FOUR ROOMS</span><i>↓</i><span>KUŞADASI / TÜRKİYE</span></div>
    </div>
  </section>;
}
