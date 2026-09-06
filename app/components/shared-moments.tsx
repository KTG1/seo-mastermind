"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "./site-path";
import styles from "./shared-moments.module.css";

const moments = [
  { src: "/mastermind-singing-together.webp", alt: "Mastermind attendees singing and laughing together during an evening in Kuşadası", title: "One more song.", caption: "Music and laughter after hours", detail: "The sessions finish. The stories keep going." },
  { src: "/mastermind-waterfront-walk.webp", alt: "Mastermind attendees walking and talking along the waterfront", title: "Take the long way back.", caption: "Conversations along the waterfront", detail: "A different view. A conversation you didn’t plan." },
  { src: "/mastermind-water-fight.webp", alt: "Mastermind attendees playing with water pistols outdoors", title: "Let your guard down.", caption: "A little friendly competition", detail: "Shared experiences become shared memories." },
];

export default function SharedMoments() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  function open(index: number) { setActive(index); dialog.current?.showModal(); }
  function step(direction: number) { setActive((current) => (current + direction + moments.length) % moments.length); }
  return <section className={styles.section} aria-labelledby="shared-moments-title">
    <header className={styles.header}>
      <div><p className={styles.eyebrow}>Between sessions · Kuşadası</p><h2 id="shared-moments-title">Shared moments.<br />Lasting connections.</h2></div>
      <p className={styles.intro}>The waterfront walks. The unexpected singalong. The people you get to know along the way.<span>Explore moments from a previous gathering.</span></p>
    </header>
    <div className={styles.grid}>
      {moments.map((moment, index) => <button className={styles.scene} key={moment.src} onClick={() => open(index)} aria-label={`Open photo: ${moment.caption}`} aria-haspopup="dialog">
        <Image src={assetPath(moment.src)} alt={moment.alt} fill unoptimized sizes="(max-width: 760px) 100vw, 55vw" />
        <span className={styles.expand} aria-hidden="true">↗</span>
        <span className={styles.copy}><span className={styles.caption}>{moment.caption}</span><strong>{moment.title}</strong><span className={styles.detail}>{moment.detail}</span><span className={styles.view}>View photograph <span aria-hidden="true">↗</span></span></span>
      </button>)}
    </div>
    <p className={styles.footer}>A glimpse of the week, beyond the working room.</p>
    <dialog ref={dialog} className={styles.viewer} aria-label="Photos from the mastermind" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); step(1); } if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); } }}>
      <button className={styles.close} onClick={() => dialog.current?.close()} autoFocus aria-label="Close photo viewer">Close ×</button>
      <div className={styles.fullPhoto}><Image src={assetPath(moments[active].src)} alt={moments[active].alt} fill unoptimized sizes="100vw" /></div>
      <div className={styles.controls}><button onClick={() => step(-1)} aria-label="Previous photo">←</button><p aria-live="polite">{moments[active].caption}<span>{active + 1} / {moments.length}</span></p><button onClick={() => step(1)} aria-label="Next photo">→</button></div>
    </dialog>
  </section>;
}
