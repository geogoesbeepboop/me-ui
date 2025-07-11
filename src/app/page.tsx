"use client";
import Image from "next/image";
import styles from "../app/page.module.css";
import BlurText from "@/components/BlurText";
import RotatingText from "@/components/RotatingText";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <BlurText
          text="George Andrade-Munoz"
          delay={100}
          animateBy="words"
          direction="top"
          className={styles.h1}
        />
        <h2 className={styles.h2}>
          <span>I'm a</span>
          <div className="rotating-text-wrapper">
            <RotatingText
              texts={['Fullstack Engineer', 'Cloud Practitioner', 'AI Enthusiast', 'Jazz Lover', 'Passionate Foodie']}
              staggerFrom={"first"}
              initial={{ y: "60%" }}
              animate={{ y: 0 }}
              exit={{ y: "0%" }}
              staggerDuration={0.025}
              rotationInterval={3000}
            />
          </div>
        </h2>
        <ProfileCard
          avatarUrl="/me.png"
          iconUrl="/background3.jpg"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />
      </section>
    </main>
  );
}
