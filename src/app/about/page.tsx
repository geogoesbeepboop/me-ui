"use client"
import { AnimatePresence, motion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import Aurora from '@/backgrounds/Aurora';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const sections = [
  {
    key: 'about',
    title: 'About Me',
    text: `I’m a full-stack developer with a passion for elegant solutions. 
    I’m fueled by a mix of curiosity, creativity, and caffeine (let’s be honest).
    I'm driven to keep creating and innovating. After all, we’re living in a time where almost anything is possible from a laptop- how cool is that?
    `,
    image: '/me.png',
    imageAlt: 'Profile placeholder',
    layout: 'left'
  },
  {
    key: 'drives',
    title: 'What Drives Me',
    text: ` 
    I believe great software is equal parts empathic design, robust system architecture, and beautiful code. 
    My love for building apps stems from my problem-solving and ever-learning nature. 
    In the end, I aim to build solutions that make life a little bit easier.`,
    image: '/globe.svg',
    imageAlt: 'Drives placeholder',
    layout: 'right'
  },
  {
    key: 'learning',
    title: 'Current Studies',
    text: `I’m diving into cloud infrastructure and networking to 
    broaden my knowledge of the behind-the-scenes engineering that keeps our world spinning. I’m also integrating
    AI into apps that make the user experience feel more like magic than software.`,
    image: '/cloud_ai.jpg',
    imageAlt: 'Learning placeholder',
    layout: 'left'
  },
  {
    key: 'afk',
    title: "During My Free Time...",
    text: `When I’m not knee-deep in code, I’m probably tinkering with my 3D printer, 
    testing out salsa recipes, 
    or playing my saxophone. I’m a believer that creative hobbies make better engineers- and vice versa.`,
    image: '/ai_gum_gum_fruit.png',
    imageAlt: 'AFK placeholder',
    layout: 'right'
  }
];

export default function About() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show back to top when user is near the bottom
      if (scrollY + windowHeight > documentHeight - 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Update active section based on scroll position
      const sectionElements = sections.map(section =>
        document.getElementById(section.key)
      );

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const sectionKey = sections[sectionIndex].key;
    const element = document.getElementById(sectionKey);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionIndex);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.storybookMain}>
      {/* <div className={styles.auroraContainer}>
        <Aurora />
      </div> */}

      {/* Section Navigation Dots */}
      <div className={styles.sectionDots}>
        {sections.map((section, index) => (
          <button
            key={section.key}
            className={`${styles.dot} ${activeSection === index ? styles.activeDot : ''}`}
            onClick={() => {
              if (index === 0) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                scrollToSection(index);
              }
            }}
            aria-label={`Go to ${section.title}`}
          />
        ))}
      </div>

      {/* Animated Section Content */}
      <div className={styles.storybookContent}>
        {sections.map((section, idx) => (
          <motion.section
            key={section.key}
            id={section.key}
            className={`${styles.storySection} ${styles[`layout${section.layout.charAt(0).toUpperCase() + section.layout.slice(1)}`]}`}
            initial={{ opacity: 0, y: 60 }}
            animate={activeSection === idx ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 30 }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            <div className={styles.sectionImageWrap}>
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={500}
                height={400}
                className={styles.sectionImage}
                priority={idx === 0}
              />
            </div>
            <div className={styles.sectionContent}>
              <BlurText text={section.title} animateBy="words" className={styles.sectionHeader} />
              <p className={styles.sectionText}>{section.text}</p>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className={styles.backToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Back to Top
        </motion.button>
      )}
    </main>
  );
} 