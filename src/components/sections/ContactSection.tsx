import { useState } from "react";
import styles from "./ContactSection.module.scss";
import contactImg from "@/assets/images/contact-img.png";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
    setForm(empty);
  }

  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        {/* ── Left — copy + form ──────────────────────────────────── */}
        <div className={styles.left}>
          <header className={styles.header}>
            <h2 className={styles.title}>Visit Us</h2>
            <div className={styles.divider} aria-hidden="true" />
            <p className={styles.subtitle}>
              We accept reservations throughout the fall and winter seasons.
            </p>
            <p className={styles.description}>
              To make a reservation, give us a call! To inquire about a private
              party, or send a resume, please fill out the form below.
            </p>
          </header>

          {submitted ? (
            <div className={styles.success} role="status">
              <p>Thank you — we'll be in touch soon!</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="c-name">
                  Name{" "}
                  <span className={styles.req} aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="c-name"
                  className={styles.input}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="c-email">
                  Email{" "}
                  <span className={styles.req} aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="c-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="c-phone">
                  Phone{" "}
                  <span className={styles.req} aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="c-phone"
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="c-message">
                  Message{" "}
                  <span className={styles.req} aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="c-message"
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your reservation, private party, or inquiry…"
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* ── Right — image ───────────────────────────────────────── */}
        <div className={styles.right} aria-hidden="true">
          <img
            src={contactImg}
            alt=""
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
