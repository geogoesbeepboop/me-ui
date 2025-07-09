"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "var(--space-xlarge) 0"
      }}>
        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--font-size-h1)",
          fontWeight: "var(--font-weight-light)",
          letterSpacing: "var(--letter-spacing-tight)",
          margin: 0, 
          marginTop: "-20%"
        }}>
          George Andrade-Munoz
        </h1>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--font-size-h2)",
          fontWeight: "var(--font-weight-regular)",
          color: "var(--color-text-secondary)",
          margin: "var(--space-medium) 0"
        }}>
          Minimalist Designer & Developer
        </h2>
        <p style={{
          maxWidth: 600,
          color: "var(--color-text-secondary)",
          fontSize: "1.2rem",
          margin: "var(--space-medium) auto"
        }}>
          I craft elegant, user-focused web experiences with a love for typography and dark, minimalist design.
        </p>
        <a href="/projects" style={{
          display: "inline-block",
          background: "var(--color-accent)",
          color: "#222",
          borderRadius: "999px",
          padding: "0.75rem 2rem",
          fontWeight: "var(--font-weight-medium)",
          fontFamily: "var(--font-sans)",
          fontSize: "1.1rem",
          textDecoration: "none",
          transition: "background 0.2s, color 0.2s"
        }}
        onMouseOver={e => { e.currentTarget.style.background = "var(--color-accent-secondary)"; }}
        onMouseOut={e => { e.currentTarget.style.background = "var(--color-accent)"; }}
        >View Projects</a>
      </section>
    </main>
  );
}
