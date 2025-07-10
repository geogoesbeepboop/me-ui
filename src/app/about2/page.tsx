"use client";
import { useState, useRef, useEffect } from 'react';
import FlowingMenu from '../../components/FlowingMenu';
import Image from 'next/image';
import styles from './page.module.css';
import { motion } from 'framer-motion';

const sections = [
  {
    key: 'about',
    title: 'A little bit about me',
    text: `I'm George Andrade-Munoz, a designer and developer based in Minimal City. I specialize in building beautiful, accessible, and performant web apps. My work is guided by a love for whitespace, elegant typography, and subtle interactions.`,
    image: '/me.png',
    imageAlt: 'Profile placeholder',
  },
  {
    key: 'drives',
    title: 'What drives me',
    text: `Curiosity, creativity, and a desire to make technology more human. I thrive on solving complex problems and building things that matter.`,
    image: '/globe.svg',
    imageAlt: 'Drives placeholder',
  },
  {
    key: 'learning',
    title: 'What I\'m learning right now',
    text: `AI, generative art, and the intersection of design and engineering. I'm always exploring new tools and frameworks to expand my toolkit.`,
    image: '/window.svg',
    imageAlt: 'Learning placeholder',
  },
  {
    key: 'afk',
    title: 'What I\'m doing when I\'m not building',
    text: `Jazz piano, hiking, and discovering new coffee shops. I believe inspiration often strikes away from the screen.`,
    image: '/file.svg',
    imageAlt: 'AFK placeholder',
  },
  {
    key: 'cta',
    title: 'Let\'s chat!',
    text: `Let's connect! Whether you want to collaborate, chat about tech, or share a coffee recommendation, my inbox is open.`,
    image: '/github.png',
    imageAlt: 'Call to action placeholder',
  },
];

const menuItems = [
  { link: '#about', text: 'A little bit about me', image: '/me.png' },
  { link: '#drives', text: 'What drives me?', image: '/globe.svg' },
  { link: '#learning', text: "What I'm learning right now", image: '/window.svg' },
  { link: '#afk', text: "What I'm doing when I'm not building", image: '/file.svg' },
  { link: '#cta', text: "Let's chat!", image: '/github.png' }
];

export default function About2() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleSectionClick = (sectionKey: string) => {
    setSelectedSection(sectionKey);
  };

  const scrollToTop = () => {
    setSelectedSection(null);
    // Scroll to the absolute top of the viewport
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Also scroll the document element to ensure we're at the very beginning
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    // Force scroll to the very beginning after a short delay to ensure it works
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
    }, 20);
  };

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
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  useEffect(() => {
    if (selectedSection && sectionRefs.current[selectedSection]) {
      sectionRefs.current[selectedSection]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedSection]);

  const selectedSectionData = sections.find(section => section.key === selectedSection);

  return (
    <main id='about2main' className={styles.about2Main}>
      {/* FlowingMenu Container */}
      <div className={styles.flowingMenuContainer} ref={topRef}>
        <FlowingMenu
          items={menuItems}
          isCollapsed={false}
          onSectionClick={handleSectionClick}
        />
      </div>
      {/* Only render content container if a section is selected */}
      {selectedSection && (
        <div className={styles.contentContainer}>
          {sections.map(section => (
            <div
              key={section.key}
              ref={el => { sectionRefs.current[section.key] = el; }}
              style={{ display: selectedSection === section.key ? 'block' : 'none' }}
            >
              <div className={styles.sectionContent}>
                <div className={styles.textContent}>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <p className={styles.sectionText}>{section.text}</p>
                </div>
                <div className={styles.imageContent}>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={400}
                    height={300}
                    className={styles.sectionImage}
                  />
                </div>
              </div>
            </div>
          ))}
          {showBackToTop && (
            <motion.button
              className={styles.backToTopBtn}
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              Back to Top
            </motion.button>
          )}
        </div>
      )}
    </main>
  );
}