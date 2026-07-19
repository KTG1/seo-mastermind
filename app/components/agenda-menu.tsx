"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./agenda-menu.module.css";

const programmeLinks = [
  ["Full agenda", "/agenda/", "Seven days in the room & by the sea"],
  ["The venue", "/hotel/", "Where the mastermind lives"],
  ["Ephesus", "/ephesus/", "A shared ancient-city visit"],
  ["Şirince village", "/sirince/", "A slower day in the hills"],
];

export default function AgendaMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    function closeWhenLeaving(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", closeWhenLeaving);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeWhenLeaving);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className={styles.menu} data-open={open} ref={menuRef}>
      <Link className={styles.label} href="/agenda/">Agenda</Link>
      <button className={styles.toggle} type="button" aria-label="Open programme destinations" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((current) => !current)}>
        <span aria-hidden="true">+</span>
      </button>
      <div className={styles.panel} id={panelId} aria-label="Agenda destinations">
        <p>Explore the programme</p>
        <div>{programmeLinks.map(([label, href, description], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span><strong>{label}</strong><small>{description}</small><i>↗</i></Link>)}</div>
      </div>
    </div>
  );
}
