import { useState } from "react";
import styles from "./ContactSection.module.scss";
import contactImg from "@/assets/images/article-2.webp";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const encode = (data: any) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const handleChange = (e: any) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "cta-form", ...form }),
    })
      .then(() => setSent(true))
      .catch(() => setError(true))
      .finally(() => setSubmitting(false));
  };

  return (
    <section className={styles.contact}>
      {/* ── Left — copy + form ──────────────────────────────────── */}
      <div className={styles.left}>
        <header className={styles.header}>
          {/* <h2 className={styles.title}>Visit Us</h2> */}
          <p className={styles.subtitle}>
            We accept reservations throughout the fall and winter seasons.
          </p>
          <p className={styles.description}>
            To make a reservation, give us a call! To inquire about a private
            party please fill out the form below.
          </p>
          <p>
            Email:{" "}
            <a
              className={styles.email}
              href="mailto:theroostwpg@gmail.com"
              target="_blank"
            >
              theroostwpg@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a className={styles.phone} href="tel:+12044149313">
              (204) 414-9313
            </a>
          </p>
        </header>

        {sent ? (
          <div className={styles.success} role="status">
            <p>Thank you — we'll be in touch soon!</p>
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            name="cta-form"
            method="POST"
            data-netlify="true"
          >
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

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
            {error && (
              <p className="cta-form__error">
                Something went wrong — please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>

      {/* ── Right — image ───────────────────────────────────────── */}
      <div className={styles.right} aria-hidden="true">
        <img src={contactImg} alt="" className={styles.image} loading="lazy" />
      </div>
    </section>
  );
}
