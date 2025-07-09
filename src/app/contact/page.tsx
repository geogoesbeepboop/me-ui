"use client";
export default function Contact() {
  return (
    <main>
      <section id="contact" style={{
        maxWidth: "var(--content-max-width)",
        margin: "0 auto",
        padding: "var(--space-xlarge) 0"
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--font-size-h2)",
          fontWeight: "var(--font-weight-regular)",
          marginBottom: "var(--space-medium)"
        }}>Contact</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>
          Want to work together or just say hi? Email me at <a href="mailto:jane@example.com" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>jane@example.com</a>
        </p>
      </section>
    </main>
  );
} 