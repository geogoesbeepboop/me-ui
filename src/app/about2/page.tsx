"use client";
import { useState } from 'react';
import FlowingMenu from '../../components/FlowingMenu';
import Image from 'next/image';
import styles from './page.module.css';

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

  const handleSectionClick = (sectionKey: string) => {
    setSelectedSection(sectionKey);
  };

  const selectedSectionData = sections.find(section => section.key === selectedSection);

  return (
    <main className={styles.about2Main}>
      {/* FlowingMenu Container */}
      <div className={styles.flowingMenuContainer}>
        <FlowingMenu 
          items={menuItems} 
          isCollapsed={false}
          onSectionClick={handleSectionClick}
        />
      </div>
      
      {/* Content Container */}
      <div className={styles.contentContainer}>
        {selectedSectionData ? (
          <div className={styles.sectionContent}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>{selectedSectionData.title}</h2>
              <p className={styles.sectionText}>{selectedSectionData.text}</p>
            </div>
            <div className={styles.imageContent}>
              <Image
                src={selectedSectionData.image}
                alt={selectedSectionData.imageAlt}
                width={400}
                height={300}
                className={styles.sectionImage}
              />
            </div>
          </div>
        ) : (
          <div className={styles.placeholderContent}>
            <h2>Click on a menu item to explore</h2>
            <p>Select any section from the menu to learn more about me</p>
          </div>
        )}
      </div>
    </main>
  );
}