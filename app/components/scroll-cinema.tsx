"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { assetPath } from "./site-path";

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
      section.style.setProperty("--seo-x", `${-192 + eased * 96}px`);
      section.style.setProperty("--seo-y", `${-128 + eased * 68}px`);
      section.style.setProperty("--seo-z", `${70 + eased * 86}px`);
      section.style.setProperty("--automation-x", `${112 - eased * 126}px`);
      section.style.setProperty("--automation-y", `${-160 + eased * 106}px`);
      section.style.setProperty("--automation-z", `${-60 + eased * 172}px`);
      section.style.setProperty("--investment-x", `${-18 + eased * 168}px`);
      section.style.setProperty("--investment-y", `${112 - eased * 154}px`);
      section.style.setProperty("--investment-z", `${-144 + eased * 248}px`);
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
        <article className="cinemaCard cinemaCardSeo"><small>01</small><b>SEO &amp;<br />Conversion</b><span>Turn search intent into action.</span></article>
        <article className="cinemaCard cinemaCardAutomation"><small>02</small><b>AI &amp;<br />Automation</b><span>Scale work with discernment.</span></article>
        <article className="cinemaCard cinemaCardInvestment"><small>03</small><b>Business &amp;<br />Investment</b><span>Make the right bets compound.</span></article>
      </div>
      <div className="cinemaFoot"><span>SCROLL TO MOVE THROUGH THE THREE ROOMS</span><i>↓</i><span>KUŞADASI / TÜRKİYE</span></div>
    </div>
  </section>;
}
