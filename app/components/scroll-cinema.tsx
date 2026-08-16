"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./scroll-cinema.module.css";
import { assetPath } from "./site-path";

const mastermindOutcomes = [
  {
    id: "seo",
    label: "SEO & Conversion",
    backdrop: "/media-agenda-circle.jpg",
    note: "Leave with fewer guesses and a decision you can use on Monday.",
    stages: [
      ["Bring", "A real growth bottleneck", "The site, market, or decision keeping you stuck.", "search"],
      ["Work through", "A room-tested direction", "Operators challenge the assumptions and sharpen the move.", "path"],
      ["Take home", "Your next three moves", "A focused plan you can put to work immediately.", "target"],
    ],
  },
  {
    id: "automation",
    label: "AI & Automation",
    backdrop: "/media-hotel-terrace.jpg",
    note: "Build leverage without handing away the judgment that makes you valuable.",
    stages: [
      ["Bring", "Work that steals your time", "The recurring task, handoff, or bottleneck slowing growth.", "loop"],
      ["Design together", "A system with safeguards", "The workflow, review point, and ownership it needs.", "shield"],
      ["Take home", "Leverage you can trust", "A practical system that creates capacity without losing judgment.", "review"],
    ],
  },
  {
    id: "investment",
    label: "Business & Investment",
    backdrop: "/mastermind-cabana-conversation.jpg",
    note: "The right room can turn a possibility into a serious next conversation.",
    stages: [
      ["Bring", "What you are building", "The opportunity, ambition, or constraint you want to move forward.", "compass"],
      ["Find in the room", "The right counterpart", "Talent, capital, distribution, or experience that fits the moment.", "scale"],
      ["Leave with", "A serious next step", "A partnership, introduction, or decision worth following through.", "growth"],
    ],
  },
  {
    id: "conference",
    label: "Conference & Networking",
    backdrop: "/mastermind-safari-conversations.jpg",
    note: "Meet people you will still call when the event is over.",
    stages: [
      ["Bring", "A question worth asking", "The challenge or idea that deserves more than a quick answer.", "conversation"],
      ["Meet here", "People who understand it", "Founders and operators who can challenge, connect, and contribute.", "people"],
      ["Leave with", "Relationships with momentum", "Conversations you genuinely want to continue after Kuşadası.", "connection"],
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
    let currentProgress = 0;
    let targetProgress = 0;

    const measure = () => {
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      targetProgress = Math.min(1, Math.max(0, -bounds.top / distance));
    };

    const paint = (progress: number) => {
      const sceneIndex = Math.min(mastermindOutcomes.length - 1, Math.floor(progress * mastermindOutcomes.length));
      const sceneStart = sceneIndex / mastermindOutcomes.length;
      const localProgress = Math.min(1, Math.max(0, (progress - sceneStart) * mastermindOutcomes.length));
      const settledMotion = Math.sin(localProgress * Math.PI);
      const scene = mastermindOutcomes[sceneIndex].id;

      section.dataset.scene = scene;
      section.dataset.sceneIndex = String(sceneIndex + 1);
      section.style.setProperty("--cinema-progress", progress.toFixed(4));
      section.style.setProperty("--scene-progress", localProgress.toFixed(4));
      section.style.setProperty("--scene-settle", settledMotion.toFixed(4));
      section.style.setProperty("--camera-x", `${(progress - 0.5) * -18}px`);
      section.style.setProperty("--camera-y", `${(localProgress - 0.5) * 10}px`);
      section.style.setProperty("--camera-scale", `${1.035 + settledMotion * 0.018}`);
      section.style.setProperty("--core-y", `${-13 + localProgress * 26}deg`);
      section.style.setProperty("--core-x", `${7 - localProgress * 12}deg`);
    };

    const render = () => {
      const delta = targetProgress - currentProgress;
      currentProgress += delta * 0.12;

      if (Math.abs(delta) < 0.0004) currentProgress = targetProgress;
      paint(currentProgress);

      if (currentProgress !== targetProgress) frame = window.requestAnimationFrame(render);
      else frame = 0;
    };

    const requestRender = () => {
      measure();
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    measure();
    currentProgress = targetProgress;
    paint(currentProgress);
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const moveToScene = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const scrollDistance = Math.max(0, section.offsetHeight - window.innerHeight);
    window.scrollTo({
      top: section.offsetTop + (scrollDistance * index) / (mastermindOutcomes.length - 1),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return <section className={`scrollCinema ${styles.root}`} ref={sectionRef} data-scene="seo" data-scene-index="1" aria-label="A scroll-driven preview of the Holistic SEO Mastermind programme">
    <div className={`cinemaSticky ${styles.sticky}`}>
      <div className={styles.backdrops} aria-hidden="true">
        {mastermindOutcomes.map((track) => <Image
          className={`cinemaImage cinemaImage${track.id[0].toUpperCase()}${track.id.slice(1)}`}
          src={assetPath(track.backdrop)}
          alt=""
          fill
          sizes="100vw"
          unoptimized
          key={track.id}
        />)}
      </div>
      <div className="cinemaShade" aria-hidden="true" />
      <div className="cinemaHud">
        <span>FOUR ROOMS BUILT AROUND REAL DECISIONS / 01—04</span>
        <span className="cinemaRoomStatus" aria-live="polite">
          <span className="cinemaRoomSeo">01 / SEO &amp; CONVERSION</span>
          <span className="cinemaRoomAutomation">02 / AI &amp; AUTOMATION</span>
          <span className="cinemaRoomInvestment">03 / BUSINESS &amp; INVESTMENT</span>
          <span className="cinemaRoomConference">04 / CONFERENCE &amp; NETWORKING</span>
        </span>
      </div>
      <nav className={styles.sceneNav} aria-label="Mastermind rooms">
        {mastermindOutcomes.map((track, index) => <button
          type="button"
          className={styles.sceneNavButton}
          data-room={index + 1}
          onClick={() => moveToScene(index)}
          aria-label={`Go to ${track.label}`}
          key={track.id}
        ><b>{track.label}</b><span>{String(index + 1).padStart(2, "0")}</span><i /></button>)}
      </nav>
      <div className="cinemaCopy" aria-live="polite">
        <div className="cinemaLine cinemaSeo"><span>01 / SEO &amp; Conversion</span><h2>Bring the problem.<br />Leave with <em>a plan.</em></h2><p>Put your real growth question in front of people who know how to pressure-test it.</p></div>
        <div className="cinemaLine cinemaAutomation"><span>02 / AI &amp; Automation</span><h2>Turn lost time<br />into <em>leverage.</em></h2><p>Build practical systems with operators who have scaled the work before.</p></div>
        <div className="cinemaLine cinemaInvestment"><span>03 / Business &amp; Investment</span><h2>Find the opportunity<br />you came <em>for.</em></h2><p>Meet people with the talent, capital, reach, or experience your next move needs.</p></div>
        <div className="cinemaLine cinemaConference"><span>04 / Conference &amp; Networking</span><h2>Meet people<br />worth <em>knowing.</em></h2><p>Start conversations in Kuşadası that continue long after the event ends.</p></div>
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
          <p className="cinemaOutcomeNote">{track.note}</p>
        </div>)}
      </div>
      <div className="cinemaFoot"><span>SCROLL OR CHOOSE A ROOM TO EXPLORE</span><i>↓</i><span>KUŞADASI / TÜRKİYE</span></div>
    </div>
  </section>;
}
