"use client"
import { motion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import Aurora from '@/backgrounds/Aurora';
import Image from 'next/image';
import styles from './page.module.css';

const sections = [
  {
    key: 'about',
    title: 'A little bit about me',
    text: `I’m George Andrade-Munoz, a designer and developer based in Minimal City. I specialize in building beautiful, accessible, and performant web apps. My work is guided by a love for whitespace, elegant typography, and subtle interactions.`,
    image: '/me.png',
    imageAlt: 'Profile placeholder',
  },
  {
    key: 'drives',
    title: 'What Drives Me',
    text: `Curiosity, creativity, and a desire to make technology more human. I thrive on solving complex problems and building things that matter.`,
    image: '/globe.svg',
    imageAlt: 'Drives placeholder',
  },
  {
    key: 'learning',
    title: 'Things I’m learning about right now',
    text: `AI, generative art, and the intersection of design and engineering. I’m always exploring new tools and frameworks to expand my toolkit.`,
    image: '/window.svg',
    imageAlt: 'Learning placeholder',
  },
  {
    key: 'afk',
    title: 'Current Interests making me AFK',
    text: `Jazz piano, hiking, and discovering new coffee shops. I believe inspiration often strikes away from the screen.`,
    image: '/file.svg',
    imageAlt: 'AFK placeholder',
  },
  {
    key: 'cta',
    title: 'Call to Action',
    text: `Let’s connect! Whether you want to collaborate, chat about tech, or share a coffee recommendation, my inbox is open.`,
    image: '/github.png',
    imageAlt: 'Call to action placeholder',
  },
];

export default function About() {
  return (
    <main className={styles.storybookMain}>
      <Aurora />
      <div className={styles.storybookContent}>
        {sections.map((section, idx) => (
          <motion.section
            key={section.key}
            className={styles.storySection}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            <div className={styles.sectionImageWrap}>
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={160}
                height={160}
                className={styles.sectionImage}
                priority={idx === 0}
              />
            </div>
            <BlurText text={section.title} animateBy="words" className={styles.sectionHeader} />
            <p className={styles.sectionText}>{section.text}</p>
          </motion.section>
        ))}
      </div>
    </main>
  );
} 