"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./agenda-program.module.css";

type Session = { time: string; title: string; description: string; type: "focus" | "water" | "restore" | "table" };
type Day = { id: string; label: string; overline: string; title: string; note: string; scene: "arrival" | "systems" | "authority" | "restoreDay" | "clinic" | "coast" | "integration"; sessions: Session[] };

const days: Day[] = [
  { id: "arrival", label: "Day 1", overline: "01 / Arrive & orient", title: "Land in the room", note: "Meet the people, the place, and the question you brought with you.", scene: "arrival", sessions: [
    { time: "16:00", title: "Kuşadası welcome", description: "Check in, settle by the coast, and let the week begin without a rush.", type: "table" },
    { time: "17:30", title: "Sunset orientation", description: "A shoreline walk and a gentle opening to the people you will work beside.", type: "water" },
    { time: "19:30", title: "First table", description: "A long welcome dinner: what brought you here, and what needs to change?", type: "table" },
  ] },
  { id: "systems", label: "Day 2", overline: "02 / See the system", title: "Name the whole", note: "Move beyond rankings and surface the system underneath the work.", scene: "systems", sessions: [
    { time: "08:00", title: "Sea start", description: "Optional swim, paddle, or quiet walk before the working day opens.", type: "water" },
    { time: "10:00", title: "The holistic SEO map", description: "Information, technical foundations, entities, reputation, and revenue in one working view.", type: "focus" },
    { time: "13:00", title: "Long coastal lunch", description: "An unhurried table for the conversations a lecture would never create.", type: "table" },
    { time: "15:00", title: "Systems studio", description: "Map the relationships, friction points, and opportunities inside your own organic growth model.", type: "focus" },
    { time: "18:00", title: "Massage & reset", description: "Optional massage appointments and terrace time before the evening.", type: "restore" },
  ] },
  { id: "authority", label: "Day 3", overline: "03 / Earn belief", title: "Make expertise visible", note: "Build the proof that makes a search presence useful, credible, and hard to replace.", scene: "authority", sessions: [
    { time: "08:30", title: "Blue hour boat ride", description: "Optional calm-water boat trip with coffee, swimming, and an open horizon.", type: "water" },
    { time: "10:30", title: "The authority question", description: "How original research, expert experience, and reputation become a credible search presence.", type: "focus" },
    { time: "13:30", title: "Lunch & walking pairs", description: "Take the hard question for a walk along the coast with someone who can challenge it.", type: "table" },
    { time: "15:30", title: "Evidence clinic", description: "Workshop the sources, proof, and distinct perspective your work needs to earn trust.", type: "focus" },
  ] },
  { id: "restore", label: "Day 4", overline: "04 / Restore & absorb", title: "Let it land", note: "A lighter day for recovery, reflection, and the connections that need room to grow.", scene: "restoreDay", sessions: [
    { time: "09:00", title: "Slow morning", description: "No alarm-clock programming. Choose the sea, a book, or a long breakfast.", type: "restore" },
    { time: "11:00", title: "Water choice", description: "Paddle, snorkel, a quiet swim, or simply shade by the water—your pace, your body.", type: "water" },
    { time: "14:00", title: "Hammam & massage", description: "Optional massage and spa appointments, held in a deliberately spacious afternoon.", type: "restore" },
    { time: "19:30", title: "Local table", description: "A relaxed evening of local food and conversations without an agenda.", type: "table" },
  ] },
  { id: "clinic", label: "Day 5", overline: "05 / Work in public", title: "Bring the live problem", note: "The room turns toward the difficult work—architecture, process, market, or measurement.", scene: "clinic", sessions: [
    { time: "09:30", title: "Working clinic I", description: "Present the live challenge. The group interrogates assumptions and makes the problem specific.", type: "focus" },
    { time: "12:30", title: "Kitchen-table lunch", description: "Keep the work moving over a long, shared lunch.", type: "table" },
    { time: "14:30", title: "Working clinic II", description: "Return with sharper decisions, practical next moves, and a clearer definition of evidence.", type: "focus" },
    { time: "17:30", title: "Sea exhale", description: "An optional swim or paddle before dinner clears the mind for the evening.", type: "water" },
  ] },
  { id: "coast", label: "Day 6", overline: "06 / Reconnect the parts", title: "Make it compound", note: "Bring strategy, site, content, and reputation back into a single operating rhythm.", scene: "coast", sessions: [
    { time: "08:30", title: "Sunrise on the water", description: "A guided paddle or boat ride for those who want to start with movement.", type: "water" },
    { time: "10:30", title: "Compounding workshop", description: "Design the rituals, decisions, and measures that let good search work get stronger over time.", type: "focus" },
    { time: "13:30", title: "Coastal feast", description: "A long lunch that leaves room for connection, reflection, and a little celebration.", type: "table" },
    { time: "16:00", title: "Quiet integration", description: "A protected stretch for writing, thinking, massage, or one more conversation that matters.", type: "restore" },
  ] },
  { id: "integration", label: "Day 7", overline: "07 / Carry it forward", title: "Leave with a thread", note: "Make the commitment concrete enough to survive the first busy Monday back.", scene: "integration", sessions: [
    { time: "09:30", title: "The 90-day commitment", description: "Choose the few decisions that create meaningful movement and define how they will be held.", type: "focus" },
    { time: "12:00", title: "Closing circle", description: "Name the support you need and offer the support you can give to the people beside you.", type: "table" },
    { time: "13:30", title: "Farewell lunch", description: "One final table before the week returns to the world beyond Kuşadası.", type: "table" },
    { time: "15:00", title: "Depart slowly", description: "An optional last swim, massage, or quiet moment by the sea before travel.", type: "restore" },
  ] },
];

const typeLabel = { focus: "Working room", water: "On the water", restore: "Restore", table: "At the table" };
const imageFor = { focus: "focusImage", water: "waterImage", restore: "restoreImage", table: "tableImage" } as const;

function clockHands(time: string) {
  const [hourText, minuteText] = time.split(":");
  const hour = Number(hourText) || 0;
  const minute = Number(minuteText) || 0;
  return { hour: ((hour % 12) + minute / 60) * 30, minute: minute * 6 };
}

export default function AgendaProgram() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeSession, setActiveSession] = useState(0);
  const sessionRefs = useRef<(HTMLElement | null)[]>([]);
  const sessionListRef = useRef<HTMLDivElement>(null);
  const active = days[activeDay];
  const currentSession = active.sessions[activeSession] ?? active.sessions[0];
  const hands = clockHands(currentSession.time);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSession(Number((visible.target as HTMLElement).dataset.sessionIndex));
    }, { root: sessionListRef.current, rootMargin: "-20% 0px -45% 0px", threshold: [0, 0.2, 0.6] });

    sessionRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, [activeDay]);

  useEffect(() => {
    sessionListRef.current?.scrollTo({ top: 0 });
  }, [activeDay]);

  return <section className={styles.program} aria-label="Seven-day mastermind programme">
    <div className={styles.calendarHead}><span>Seven days / one evolving conversation</span><span>Tap a day to enter its rhythm</span></div>
    <div className={styles.tabList} role="tablist" aria-label="Seven-day programme calendar">
      {days.map((day, index) => <button key={day.id} id={`tab-${day.id}`} role="tab" type="button" aria-selected={activeDay === index} aria-controls={`panel-${day.id}`} tabIndex={activeDay === index ? 0 : -1} onClick={() => { setActiveDay(index); setActiveSession(0); }}><span>0{index + 1}</span><strong>{day.label}</strong><i>{index === 3 ? "◌" : "↗"}</i></button>)}
    </div>
    <div className={`${styles.panel} ${styles[active.scene]}`} id={`panel-${active.id}`} role="tabpanel" aria-labelledby={`tab-${active.id}`}>
      <div className={styles.ambient} aria-hidden="true"><i /><i /><i /></div>
      <aside className={styles.panelIntro} aria-label="Current activity instrument"><span>{active.overline}</span><h2>{active.title}</h2><p>{active.note}</p>
        <div className={styles.activityStage}>
          <div className={styles.activityPicture} key={currentSession.title}><div className={`${styles.activityImage} ${styles[imageFor[currentSession.type]]}`} aria-hidden="true" /><div className={styles.imageShade} /><span>{typeLabel[currentSession.type]}</span><strong>{currentSession.title}</strong></div>
          <div className={styles.clock} aria-label={`Clock showing ${currentSession.time}`} role="img"><span className={styles.twelve}>XII</span><span className={styles.three}>III</span><span className={styles.six}>VI</span><span className={styles.nine}>IX</span><i className={styles.hourHand} style={{ transform: `rotate(${hands.hour}deg)` }} /><i className={styles.minuteHand} style={{ transform: `rotate(${hands.minute}deg)` }} /><b /></div>
          <div className={styles.clockReadout}><span>Now moving through</span><strong>{currentSession.time}</strong></div>
        </div>
        <div className={styles.legend}><span><i className={styles.focus} />Working room</span><span><i className={styles.water} />On the water</span><span><i className={styles.restore} />Restore</span><span><i className={styles.table} />At the table</span></div>
      </aside>
      <div className={styles.timelineRail}><div className={styles.timelineHead}><span>Day timeline</span><span>Hover or scroll to move through <i>↓</i></span></div><div className={styles.sessionList} ref={sessionListRef} tabIndex={0} aria-label={`${active.label} timetable. Hover, focus, or scroll to move through activities.`}>{active.sessions.map((session, index) => <article className={`${styles.session} ${activeSession === index ? styles.currentSession : ""}`} data-session-index={index} ref={(element) => { sessionRefs.current[index] = element; }} key={`${session.time}-${session.title}`} tabIndex={0} aria-current={activeSession === index ? "true" : undefined} onMouseEnter={() => setActiveSession(index)} onFocus={() => setActiveSession(index)}><time>{session.time}</time><span className={`${styles.dot} ${styles[session.type]}`}>{index === 0 ? "✦" : ""}</span><div><span className={styles.sessionType}>{typeLabel[session.type]}</span><h3>{session.title}</h3><p>{session.description}</p></div></article>)}</div></div>
    </div>
  </section>;
}
