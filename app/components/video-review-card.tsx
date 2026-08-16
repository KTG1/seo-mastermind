"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { assetPath } from "./site-path";
import styles from "./video-review-card.module.css";

type VideoReview = {
  title: string;
  quote: string;
  role: string;
  location: string;
  duration: string;
  poster: string;
  video?: string;
  captions?: string;
};

export default function VideoReviewCard({ review }: { review: VideoReview }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function play() {
    if (!review.video) return;
    setPlaying(true);
    window.requestAnimationFrame(() => videoRef.current?.play());
  }

  return (
    <article className={`videoReviewCard ${review.video ? styles.card : ""} ${playing ? styles.playing : ""}`} onClick={!playing && review.video ? play : undefined}>
      {review.video ? (
        <video ref={videoRef} className={styles.media} poster={assetPath(review.poster)} controls={playing} playsInline preload="metadata" onEnded={() => setPlaying(false)}>
          <source src={assetPath(review.video)} type="video/mp4" />
          {review.captions ? <track kind="captions" src={assetPath(review.captions)} srcLang="en" label="English" default /> : null}
          Your browser does not support embedded video.
        </video>
      ) : (
        <Image src={assetPath(review.poster)} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
      )}
      <div className={`videoReviewShade ${styles.overlay}`} aria-hidden="true" />
      <div className={`videoReviewTop ${styles.overlay}`}><span>Video review</span><i>{review.duration}</i></div>
      <div className={`videoReviewBody ${styles.overlay}`}>
        {review.video ? <button className={styles.playButton} type="button" onClick={play} aria-label={`Play ${review.title}`}>▶</button> : <span className="videoPending" aria-label="Video asset pending">▶</span>}
        <h3 className={styles.kicker}>{review.title}</h3>
        <blockquote className={styles.quote}>“{review.quote}”</blockquote>
        <p>{review.role} · {review.location}</p>
      </div>
    </article>
  );
}
