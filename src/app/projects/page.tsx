"use client";
export default function Projects() {
  return (
    <main>
      <section id="projects" style={{
        maxWidth: "var(--content-max-width)",
        margin: "0 auto",
        padding: "var(--space-xlarge) 0"
      }}>
        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--font-size-h2)",
          fontWeight: "var(--font-weight-regular)",
          marginBottom: "var(--space-medium)"
        }}>Projects</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "var(--space-large)"
        }}>
          {/* Dummy project cards */}
          <div style={{
            background: "var(--color-bg-secondary)",
            borderRadius: "1rem",
            padding: "var(--space-large)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            color: "var(--color-text-primary)"
          }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "var(--font-weight-regular)", fontSize: "2rem", margin: 0 }}>Minimal Blog</h3>
            <p style={{ color: "var(--color-text-secondary)", margin: "var(--space-small) 0" }}>
              A clean, dark-themed blog platform focused on typography and reading experience.
            </p>
          </div>
          <div style={{
            background: "var(--color-bg-secondary)",
            borderRadius: "1rem",
            padding: "var(--space-large)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            color: "var(--color-text-primary)"
          }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: "var(--font-weight-regular)", fontSize: "2rem", margin: 0 }}>Portfolio Gallery</h3>
            <p style={{ color: "var(--color-text-secondary)", margin: "var(--space-small) 0" }}>
              A portfolio site with atmospheric imagery and subtle interactions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 