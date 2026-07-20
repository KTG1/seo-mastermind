"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { assetPath } from "./site-path";

const trackSteps = [
  { id: "seo", label: "SEO & Conversion", steps: [["01", "Map intent", "Find the demand worth serving.", "search"], ["02", "Shape the path", "Remove the friction between query and answer.", "path"], ["03", "Earn action", "Turn useful visits into a clearer next step.", "target"]] },
  { id: "automation", label: "AI & Automation", steps: [["01", "Spot repetition", "Choose the work that should not stay manual.", "loop"], ["02", "Build guardrails", "Design the workflow before you scale it.", "shield"], ["03", "Review & refine", "Keep human judgment at the decision point.", "review"]] },
  { id: "investment", label: "Business & Investment", steps: [["01", "Set the thesis", "Name the advantage you are building toward.", "compass"], ["02", "Test the downside", "Pressure-test the bet before it becomes expensive.", "scale"], ["03", "Allocate & compound", "Put attention and capital behind what works.", "growth"]] },
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
      const scene = progress < 0.34 ? "seo" : progress < 0.68 ? "automation" : "investment";

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
      <Image className="cinemaImage" src={assetPath("/agenda-coast-hero.png")} alt="" fill sizes="100vw" unoptimized />
      <div className="cinemaShade" aria-hidden="true" />
      <div className="cinemaHud"><span>THREE MASTERMINDS / 01—03</span><span>SCROLL TO ENTER EACH ROOM</span></div>
      <div className="cinemaCopy" aria-live="polite">
        <div className="cinemaLine cinemaSeo"><span>01 / SEO &amp; Conversion</span><h2>Turn intent<br />into <em>action.</em></h2><p>Build search journeys that earn the click, answer the need, and move the business forward.</p></div>
        <div className="cinemaLine cinemaAutomation"><span>02 / AI &amp; Automation</span><h2>Scale the work<br />without losing <em>thinking.</em></h2><p>Design useful systems, sharper workflows, and room for the judgment that still matters.</p></div>
        <div className="cinemaLine cinemaInvestment"><span>03 / Business &amp; Investment</span><h2>Make the system<br />earn its <em>future.</em></h2><p>Pressure-test where time, capital, and conviction can create a durable advantage.</p></div>
      </div>
      <div className="cinemaWorld" aria-hidden="true">
        <div className="cinemaHalo" />
        <div className="cinemaCore"><span>HSM</span><i>✦</i></div>
        {trackSteps.map((track) => <div className={`cinemaPath cinemaPath${track.id[0].toUpperCase()}${track.id.slice(1)}`} key={track.id}>
          <article className="cinemaPathLabel"><span>MASTER MIND</span><b>{track.label}</b></article>
          {track.steps.map(([number, title, copy, icon]) => <article className="cinemaStep" key={title}><StepGlyph type={icon} /><small>{number}</small><b>{title}</b><span>{copy}</span></article>)}
        </div>)}
      </div>
      <div className="cinemaFoot"><span>SCROLL TO MOVE THROUGH THE THREE ROOMS</span><i>↓</i><span>KUŞADASI / TÜRKİYE</span></div>
    </div>
  </section>;
}
