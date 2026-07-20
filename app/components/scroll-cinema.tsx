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
      const scene = progress < 0.34 ? "architecture" : progress < 0.68 ? "authority" : "momentum";

      section.dataset.scene = scene;
      section.style.setProperty("--camera-x", `${-eased * 46}px`);
      section.style.setProperty("--camera-y", `${eased * 28}px`);
      section.style.setProperty("--camera-scale", `${1 + eased * 0.13}`);
      section.style.setProperty("--core-y", `${-24 + eased * 84}deg`);
      section.style.setProperty("--core-x", `${12 - eased * 18}deg`);
      section.style.setProperty("--architecture-x", `${-218 + eased * 112}px`);
      section.style.setProperty("--architecture-y", `${-118 + eased * 67}px`);
      section.style.setProperty("--architecture-z", `${50 + eased * 90}px`);
      section.style.setProperty("--authority-x", `${96 - eased * 138}px`);
      section.style.setProperty("--authority-y", `${-154 + eased * 104}px`);
      section.style.setProperty("--authority-z", `${-70 + eased * 168}px`);
      section.style.setProperty("--momentum-x", `${-32 + eased * 175}px`);
      section.style.setProperty("--momentum-y", `${106 - eased * 150}px`);
      section.style.setProperty("--momentum-z", `${-150 + eased * 254}px`);
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

  return <section className="scrollCinema" ref={sectionRef} data-scene="architecture" aria-label="A scroll-driven view of the systems behind durable organic growth">
    <div className="cinemaSticky">
      <Image className="cinemaImage" src={assetPath("/agenda-coast-hero.png")} alt="" fill sizes="100vw" unoptimized />
      <div className="cinemaShade" aria-hidden="true" />
      <div className="cinemaHud"><span>SCROLL FILM / 01—03</span><span>THE WHOLE SYSTEM</span></div>
      <div className="cinemaCopy" aria-live="polite">
        <div className="cinemaLine cinemaArchitecture"><span>01 / Architecture</span><h2>Give every<br />signal a <em>place.</em></h2><p>Technical structure turns a collection of pages into a legible system.</p></div>
        <div className="cinemaLine cinemaAuthority"><span>02 / Authority</span><h2>Let the work<br /><em>become known.</em></h2><p>Useful information and credible experience give the system its weight.</p></div>
        <div className="cinemaLine cinemaMomentum"><span>03 / Momentum</span><h2>Turn clarity<br />into <em>compound growth.</em></h2><p>When decisions reinforce each other, progress becomes easier to keep.</p></div>
      </div>
      <div className="cinemaWorld" aria-hidden="true">
        <div className="cinemaHalo" />
        <div className="cinemaCore"><span>HSM</span><i>✦</i></div>
        <article className="cinemaCard cinemaCardArchitecture"><small>01</small><b>Architecture</b><span>Make the structure speak.</span></article>
        <article className="cinemaCard cinemaCardAuthority"><small>02</small><b>Authority</b><span>Give useful work a signal.</span></article>
        <article className="cinemaCard cinemaCardMomentum"><small>03</small><b>Momentum</b><span>Let the right decisions compound.</span></article>
      </div>
      <div className="cinemaFoot"><span>SCROLL TO MOVE THROUGH THE SYSTEM</span><i>↓</i><span>KUŞADASI / TÜRKİYE</span></div>
    </div>
  </section>;
}
