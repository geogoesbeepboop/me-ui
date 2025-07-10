"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className={styles.contactMain}>
      <section className={styles.contactSection}>
        <div className={styles.leftPane}>
          <h1 className={styles.sectionHeader}>Let's Talk</h1>
          <p className={styles.description}>
            Want to work together or just say hi? Fill out the form or email me directly.
          </p>
          <div className={styles.socialLinks}>
            <a href="mailto:jane@example.com">georgeandrade93@gmail.com</a>
            <span className={styles.separator}>/</span>
            <a href="https://github.com/geogoesbeepboop" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className={styles.separator}>/</span>
            <a href="https://www.linkedin.com/in/george-andrade-munoz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <form
          className={styles.contactForm}
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className={styles.formField}>
            <label htmlFor="name">
              Name <span className={styles.required}>*</span>
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">
              Email <span className={styles.required}>*</span>
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="message">
              Message <span className={styles.required}>*</span>
            </label>
            <textarea id="message" name="message" required minLength={10} />
          </div>
          <button className={styles.submitButton} type="submit">
            {submitted ? "Sent!" : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
} 