"use client";
export default function About() {
  return (
    <main>
      <section id="about" style={{
        maxWidth: "var(--content-max-width)",
        margin: "0 auto",
        padding: "var(--space-xlarge) 0"
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--font-size-h2)",
          fontWeight: "var(--font-weight-regular)",
          marginBottom: "var(--space-medium)"
        }}>About Me</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem" }}>
          I’m George Andrade-Munoz, a designer and developer based in Minimal City. I specialize in building beautiful, accessible, and performant web apps. My work is guided by a love for whitespace, elegant typography, and subtle interactions.
        </p>
      </section>
    </main>
  );
} 