"use client";

import { FormEvent, useState, type CSSProperties } from "react";
import { assetPath } from "../components/site-path";
import background from "./ticket-application-background.module.css";
import styles from "./ticket-application.module.css";

export default function TicketApplication() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New Holistic SEO Mastermind application");
    data.append("_template", "table");
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/8df081b6a01d5c96e4db5bfd88926d77", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <section className={`${styles.application} ${background.application}`} id="application" style={{ "--application-photo": `url(${assetPath("/tickets-application-safari.jpg")})` } as CSSProperties}>
    <div className={styles.intro}><span>Invitation only</span><h2>Tell us why<br />this room <em>matters now.</em></h2><p>We review applications for the quality of the question, the fit with the room, and the perspective each person brings. A ticket is offered only after an invitation.</p><div className={styles.fit}><strong>Good fit for the room</strong><ul><li>You own or influence meaningful organic-growth decisions.</li><li>You can bring a real, unfinished challenge to work on.</li><li>You value candid exchange more than passive learning.</li></ul></div></div>
    <form className={styles.form} onSubmit={submitApplication}>
      <div className={styles.formTop}><span>Application / step one</span><p aria-live="polite">{status === "success" ? "Your application is in. We’ll review it with the next room in mind." : status === "error" ? "We couldn’t send your application. Please try again, or email us directly." : "A thoughtful application takes around five minutes."}</p></div>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
      <div className={styles.fields}><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label><label>Your role & organisation<input required name="role" placeholder="Founder, Example Company" /></label><label>Where are you based?<input required name="location" placeholder="City, country" /></label><label className={styles.full}>What are you trying to make happen through search?<textarea required name="challenge" placeholder="Describe the business, system, or decision you want to work on…" /></label><label className={styles.full}>Why is this the right moment to join the mastermind?<textarea required name="motivation" placeholder="Tell us why this room, and why now." /></label></div>
      <button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}>{status === "submitting" ? "Sending…" : status === "success" ? "Application sent" : "Send application"} <i>{status === "success" ? "✓" : "→"}</i></button>
      <small>No payment is taken with an application. If invited, you’ll receive the final ticket details and next steps.</small>
    </form>
  </section>;
}
