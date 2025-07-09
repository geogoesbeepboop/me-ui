"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BlurText from "@/components/BlurText";
import RotatingText from "@/components/RotatingText";
import Aurora from "./backgrounds/Aurora";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className={styles.hero} style={{ marginTop: '-10%' }}>
        <BlurText
          text="George Andrade-Munoz"
          delay={350}
          animateBy="words"
          direction="top"
          className={styles.h1}
        />
        <h2 className={styles.h2}>
          <span>I'm a</span>
          <div className="rotating-text-wrapper">
            <RotatingText
              texts={['Fullstack Engineer', 'Cloud Practitioner', 'AI Developer', 'Jazz Enthusiast']}
              staggerFrom={"first"}
              initial={{ y: "60%" }}
              animate={{ y: 0 }}
              exit={{ y: "0%" }}
              staggerDuration={0.025}
              rotationInterval={5000}
            />
          </div>
        </h2>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </section>
    </main>
  );
}
