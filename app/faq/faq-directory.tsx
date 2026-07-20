"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const groups = [
  { id: "joining", number: "01", label: "Joining the room", note: "Fit, invitation & fee" },
  { id: "programme", number: "02", label: "Programme & inclusions", note: "The week and your place" },
  { id: "travel", number: "03", label: "Travel & Kuşadası", note: "Arrival, venue & activities" },
];

const questions = [
  { group: "joining", question: "Is the mastermind invite-only?", answer: "Yes. The room is deliberately small and applications are reviewed for fit. Tell us what you are building, the question you want to work on, and why this particular group would be useful to you. We will reply personally after reviewing your application." },
  { group: "joining", question: "Who is the room for?", answer: "The mastermind is for experienced operators, founders, SEO leaders, agency owners, investors, and builders who are working on a real business question. Curiosity matters, but so does having work that can benefit from careful peer challenge." },
  { group: "joining", question: "What is the participation fee?", answer: "The current participation fee is USD 6,000. Your invitation will set out the confirmed scope, payment timing, and any practical details specific to the edition before you make a commitment." },
  { group: "joining", question: "Can I bring a colleague or partner?", answer: "Each place is reviewed individually, since the strength of the room comes from the people in it. If you want to attend with a colleague, mention this in your application and explain the work you would bring together." },
  { group: "programme", question: "What happens during the seven days?", answer: "The week combines three mastermind days focused on SEO, AI, automation, business, and investment with one conference day. The remaining rhythm makes room for arrival, recovery, long-table conversation, and selected local experiences." },
  { group: "programme", question: "What does my place include?", answer: "Your place includes the core mastermind and conference programme, the working sessions, and hosted group moments shared in the final itinerary. Accommodation, travel, and the availability or cost of optional activities are confirmed directly with invited attendees." },
  { group: "travel", question: "Where does the event take place?", answer: "The gathering is hosted in Kuşadası, Türkiye. The hotel and its surrounding spaces are part of the experience: a place for focused work, meals, recovery, and the conversations that continue after each session." },
  { group: "travel", question: "How should I plan travel?", answer: "Most international guests plan their arrival through İzmir Adnan Menderes Airport. Transfer, check-in, venue, and final timing guidance are shared with confirmed attendees well before the gathering." },
  { group: "travel", question: "Are water sports and safaris included?", answer: "Experiences such as boat time, water sports, parasailing, horse and ATV safaris, and recovery moments are optional. They are scheduled around the core programme and depend on weather, safety guidance, and final local availability." },
];

export default function FaqDirectory() {
  const [activeGroup, setActiveGroup] = useState(groups[0].id);
  const active = groups.find((group) => group.id === activeGroup) ?? groups[0];
  const visibleQuestions = questions.filter((question) => question.group === activeGroup);

  return <section className={styles.faqSection}>
    <div className={styles.tabs} role="tablist" aria-label="FAQ categories">
      {groups.map((group) => <button key={group.id} type="button" role="tab" id={`faq-tab-${group.id}`} aria-selected={activeGroup === group.id} aria-controls="faq-panel" onClick={() => setActiveGroup(group.id)}>
        <span>{group.number}</span><strong>{group.label}</strong><small>{group.note}</small><i>{questions.filter((question) => question.group === group.id).length}</i>
      </button>)}
    </div>
    <div className={styles.faqInner}>
      <aside className={styles.side}><p>{active.number} / {active.label}</p><h2>Everything you need<br />to know <em>before you arrive.</em></h2><span>Still have a question?</span><Link href="/tickets/#application">Ask in your application <i>→</i></Link></aside>
      <div className={styles.questions} id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${activeGroup}`} aria-live="polite">{visibleQuestions.map(({ question, answer }, index) => <details key={question} className={styles.item}><summary><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
    </div>
  </section>;
}
