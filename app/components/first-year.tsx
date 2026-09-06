"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "./site-path";
import styles from "./first-year.module.css";

const memories = [
  { src: "/mastermind-2024-pamukkale.webp", date: "1 October", place: "Pamukkale", title: "A day we still talk about.", description: "Thermal pools, ancient ruins, and a shared view from the terraces. The first year, remembered together.", alt: "2024 mastermind collage of the group at Pamukkale, swimming in thermal pools and exploring ancient ruins" },
  { src: "/mastermind-2024-kusadasi-boat.webp", date: "3 October", place: "Kuşadası", title: "Out on the Aegean.", description: "Time on the water, familiar faces, and the Kuşadası coastline behind us. Another page from the first gathering.", alt: "2024 mastermind collage of attendees boating together along the Kuşadası coast" },
];
export default function FirstYear() {
  const viewer = useRef<HTMLDialogElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const open = (index: number) => { setActive(index); setZoomed(false); viewer.current?.showModal(); };
  const move = (direction: number) => { setActive((i) => (i + direction + memories.length) % memories.length); setZoomed(false); canvas.current?.scrollTo(0, 0); };
  return <section id="mastermind-2024" className={styles.section} aria-labelledby="first-year-title">
    <header className={styles.heading}><span>From the archive · First year</span><h2 id="first-year-title">Where it began.</h2><p>Two days from the first Holistic SEO Mastermind.<br />A whole collection of shared memories.</p></header>
    <div className={styles.journal}>
      <aside className={styles.timeline}><span className={styles.year}>2024</span><p>Kuşadası &amp; Pamukkale<br />The first gathering</p><nav aria-label="Explore the 2024 memories">{memories.map((m, i) => <a href={`#memory-2024-${i}`} key={m.src}><span>{m.date}</span><strong>{m.place}</strong><span aria-hidden="true">↓</span></a>)}</nav><small>Select a collage to explore every detail.</small></aside>
      <div className={styles.pages}>{memories.map((m, i) => <article id={`memory-2024-${i}`} key={m.src} className={styles.memory}>
        <div className={styles.date}><span>{m.date} 2024</span><span>{m.place}</span></div>
        <button className={styles.photo} onClick={() => open(i)} aria-label={`Explore full ${m.place} collage`} aria-haspopup="dialog"><Image src={assetPath(m.src)} alt={m.alt} width={3750} height={1959} unoptimized sizes="(max-width: 900px) 100vw, 76vw" /><span>Explore the collage <b aria-hidden="true">↗</b></span></button>
        <div className={styles.caption}><h3>{m.title}</h3><p>{m.description}</p></div>
      </article>)}</div>
    </div>
    <dialog ref={viewer} className={styles.viewer} aria-label="2024 mastermind photo journal" onKeyDown={(e) => { if(e.key === "ArrowRight" && !zoomed) {e.preventDefault();move(1);} if(e.key === "ArrowLeft" && !zoomed) {e.preventDefault();move(-1);} }}>
      <div className={styles.toolbar}><span>{memories[active].place} · {memories[active].date} 2024</span><button onClick={() => setZoomed(!zoomed)}>{zoomed ? "Fit to screen" : "Zoom in"}</button><button autoFocus aria-label="Close collage viewer" onClick={() => viewer.current?.close()}>Close ×</button></div>
      <div ref={canvas} className={styles.canvas} data-zoomed={zoomed}><Image src={assetPath(memories[active].src)} alt={memories[active].alt} width={2600} height={1358} unoptimized /></div>
      <div className={styles.controls}><button onClick={() => move(-1)} aria-label="Previous collage">←</button><p aria-live="polite">{active + 1} / {memories.length}<span>{zoomed ? "Scroll to explore the details" : "The full collage, as it was captured"}</span></p><button onClick={() => move(1)} aria-label="Next collage">→</button></div>
    </dialog>
  </section>;
}
