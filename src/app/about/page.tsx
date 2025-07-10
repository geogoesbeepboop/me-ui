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
    title: 'A little bit about me',
    text: `I'm George Andrade-Munoz, a designer and developer based in Minimal City. I specialize in building beautiful, accessible, and performant web apps. My work is guided by a love for whitespace, elegant typography, and subtle interactions.`,
    image: '/me.png',
    imageAlt: 'Profile placeholder',
    layout: 'left'
  },
  {
    key: 'drives',
    title: 'What Drives Me',
    text: `Curiosity, creativity, and a desire to make technology more human. I thrive on solving complex problems and building things that matter.`,
    image: '/globe.svg',
    imageAlt: 'Drives placeholder',
    layout: 'right' 
  },
  {
    key: 'learning',
    title: 'Things I\'m learning about right now',
    text: `AI, generative art, and the intersection of design and engineering. I'm always exploring new tools and frameworks to expand my toolkit.`,
    image: '/window.svg',
    imageAlt: 'Learning placeholder',
    layout: 'left' 
  },
  {
    key: 'afk',
    title: 'Current Interests making me AFK',
    text: `Jazz piano, hiking, and discovering new coffee shops. I believe inspiration often strikes away from the screen.`,
    image: '/file.svg',
    imageAlt: 'AFK placeholder',
    layout: 'right' 
  },
  {
    key: 'cta',
    title: 'Call to Action',
    text: `Let's connect! Whether you want to collaborate, chat about tech, or share a coffee recommendation, my inbox is open.`,
    image: '/github.png',
    imageAlt: 'Call to action placeholder',
    layout: 'center'
  },
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