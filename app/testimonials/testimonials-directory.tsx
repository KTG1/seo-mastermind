"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "../components/site-path";
import styles from "./page.module.css";

const categories = ["All", "CEOs", "Managers", "Investors", "Agency owners"] as const;
type Category = (typeof categories)[number];

const reviews = [
  { category: "CEOs", format: "video", title: "Making the whole system visible", quote: "The room connected decisions I had been treating as separate problems.", role: "Chief executive officer", location: "United Kingdom", initials: "CE", poster: "/holistic-seo-mastermind-group.png", duration: "02:18" },
  { category: "CEOs", format: "text", quote: "I left with fewer priorities, stronger conviction, and a much clearer sequence for the next quarter.", role: "Founder & CEO", location: "Europe", initials: "FC" },
  { category: "Managers", format: "text", quote: "It gave me a language for explaining the work upward—and a better way to challenge it with my own team.", role: "Organic growth manager", location: "Germany", initials: "GM" },
  { category: "Managers", format: "video", title: "From crowded roadmap to clear decisions", quote: "Clarity arrived when the room challenged the premise, not the task list.", role: "SEO director", location: "Netherlands", initials: "SD", poster: "/media-hotel-terrace.jpg", duration: "01:42" },
  { category: "Investors", format: "text", quote: "The useful shift was from evaluating isolated tactics to understanding where durable search advantage is actually created.", role: "Private investor", location: "United States", initials: "PI" },
  { category: "Investors", format: "text", quote: "I came for an SEO conversation and found a sharper framework for assessing operators, moats, and information assets.", role: "Investment partner", location: "Türkiye", initials: "IP" },
  { category: "Agency owners", format: "video", title: "What changed after the table", quote: "The hard part was not finding another tactic. It was choosing what the agency would stop doing.", role: "Agency owner", location: "United Kingdom", initials: "AO", poster: "/media-ephesus-group.jpg", duration: "02:06" },
  { category: "Agency owners", format: "text", quote: "The conversations between sessions mattered as much as the sessions themselves. People were generous, direct, and unusually specific.", role: "Agency founder", location: "Denmark", initials: "AF" },
] as const;

export default function TestimonialsDirectory() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleReviews = activeCategory === "All" ? reviews : reviews.filter((review) => review.category === activeCategory);

  return <section className={styles.directory} aria-labelledby="directory-title">
    <header className={styles.directoryHeading}><div><span>01 / Role index</span><h2 id="directory-title">Find the perspective<br />closest to <em>your seat.</em></h2></div><p>Each role enters the room with different constraints. Filter the notes by the responsibility behind them.</p></header>
    <div className={styles.filters} role="group" aria-label="Filter testimonials by professional role">
      {categories.map((category) => <button type="button" key={category} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}><span>{category}</span><i>{String(category === "All" ? reviews.length : reviews.filter((review) => review.category === category).length).padStart(2, "0")}</i></button>)}
    </div>
    <div className={styles.reviewGrid} aria-live="polite">
      {visibleReviews.map((review, index) => review.format === "video" ? <article className={styles.videoCard} key={`${review.category}-${review.role}`}>
        <Image src={assetPath(review.poster)} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
        <div className={styles.videoShade} aria-hidden="true"/><div className={styles.videoTop}><span>{review.category} / Video</span><i>{review.duration}</i></div>
        <div className={styles.videoBody}><span className={styles.play} aria-label="Video asset pending">▶</span><h3>{review.title}</h3><p>{review.role} · {review.location}</p></div>
      </article> : <figure className={styles.textCard} key={`${review.category}-${review.role}`}>
        <div className={styles.cardTop}><span>{String(index + 1).padStart(2, "0")} / {review.category}</span><i>“</i></div><blockquote>{review.quote}</blockquote><figcaption><span>{review.initials}</span><div><b>{review.role}</b><small>{review.location}</small></div></figcaption>
      </figure>)}
    </div>
    <p className={styles.placeholder}>Editorial placeholders · replace with approved names, quotes, and video files before publication</p>
  </section>;
}
