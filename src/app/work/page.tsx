"use client";
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode, FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import styles from "./page.module.css";
import { WorkExperience, Skill, Education, Achievement } from '@/types';

const workExperience: WorkExperience[] = [
  {
    id: "1",
    title: "Software Engineer II",
    company: "Bank of America",
    location: "Charlotte, NC",
    period: "2024 - Present",
    description: "Led full-stack development and architecture for flagship and new applications.",
    technologies: ["Java", "Spring", "TypeScript", "React", "MySQL", "Vite"],
    achievements: [
      "Collaborated with senior leadership to determine functional requirements for various products, ensuring the team is set up to achieve organizational goals.",
      "Researched and integrated emerging AI technologies, including GitHub Copilot and Apple Foundation Models, shaping the team's adoption strategy.",
      "Mentored junior engineers, accelerating onboarding and fostering a collaborative, high-performance team culture."
    ]
  },
  {
    id: "2",
    title: "Software Engineer I",
    company: "Bank of America",
    location: "Charlotte, NC",
    period: "2023 - 2024",
    description: "Led System Architecture, UI/UX design and techinical implementation for the team's flagship application.",
    technologies: ["Java", "Spring", "JavaScript", "HTML/CSS", "MySQL"],
    achievements: [
      "Developed and optimized backend infrastructure using Spring and MySQL, optimizing for performance and scalability of key features.",
      "Implemented reusable UI components with React and TypeScript, contributing to a consistent, user-friendly experience across multiple applications.",
      "Collaborated with cross-functional teams to deliver critical features for their web and mobile applications, enhancing organizational impact."
    ]
  },
  {
    id: "3",
    title: "iOS Developer",
    company: "App Team Carolina",
    location: "Chapel Hill, NC",
    period: "2021 - 2023",
    description: "Contributed to frontend and backend iOS development efforts across multiple projects.",
    technologies: ["Swift", "SwiftUI", "CoreData", "KeyChain", "Figma", "Firebase"],
    achievements: [
      "Integrated Plaid API and Keychain API to ensure sensitive, encrypted user data was handled following best security practices.",
      "Implemented SwiftUI views for first team launched app, Bubbly."
    ]
  }
];

const skills: Skill[] = [
  // Programming Languages
  { id: "2", name: "TypeScript", category: "Languages", level: 90 },
  { id: "4", name: "Java", category: "Languages", level: 85 },
  { id: "3", name: "Swift", category: "Languages", level: 80 },
  { id: "1", name: "SQL", category: "Languages", level: 90 },
  
  // Frontend
  { id: "5", name: "React", category: "Frontend", level: 90 },
  { id: "6", name: "MUI", category: "Frontend", level: 90 },
  { id: "7", name: "Next.js", category: "Frontend", level: 90 },
  { id: "8", name: "HTML/CSS", category: "Frontend", level: 90 },
  { id: "12", name: "SwiftUI", category: "Frontend", level: 85 },
  
  // Backend
  { id: "9", name: "Spring", category: "Backend", level: 90 },
  { id: "10", name: "Nest.js", category: "Backend", level: 85 },
  { id: "11", name: "DynamoDB", category: "Backend", level: 80 },
  { id: "12", name: "PostgreSQL", category: "Backend", level: 85 },
  { id: "18", name: "Redis", category: "Backend", level: 75 },
  
  // Cloud & Tools
  { id: "13", name: "Docker", category: "Cloud", level: 65 },
  { id: "14", name: "AWS", category: "Cloud", level: 65 },
  { id: "17", name: "Terraform", category: "Cloud", level: 75 },
  { id: "15", name: "Git", category: "Tools", level: 90 },
  { id: "16", name: "Node.js", category: "Tools", level: 90 }
];

const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of North Carolina at Chapel Hill",
    location: "Chapel Hill, NC",
    period: "2019 - 2023",
    description: "Specialized in iOS Development. Served as Technical Lead at App Team Carolina and Developer Student Clubs.",
    // gpa: "3.8/4.0"
  },
  {
    id: "2",
    degree: "Bachelor of Science in Economics",
    institution: "University of North Carolina at Chapel Hill",
    location: "Chapel Hill, NC",
    period: "2019 - 2023",
    description: "Specialized in Eastern Macroeconomic research and theory. Had fun learning about the world from a bird's eye view.",
    // gpa: "3.7/4.0"
  }
];

const achievements: Achievement[] = [
  {
    id: "1",
    title: "AWS Cloud Practitioner Certified",
    description: "Passed the technical AWS Cloud exam.",
    year: "2025",
    // link: "#"
  },
  {
    id: "2",
    title: "Level the Playing Field Scholar",
    description: "Accepted into highly competitive professional development program.",
    year: "2022",
    // link: "#"
  },
  {
    id: "3",
    title: "Distinguished Chancellor Science Scholar",
    description: "Recognized for stellar academic and professional achievements.",
    year: "2022",
    // link: "#"
  }
];

const skillCategories = ["Languages", "Frontend", "Backend", "Cloud", "Tools"];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'achievements', label: 'Achievements', icon: <FaTrophy /> }
  ];

  return (
    <section className={styles.workPage}>
      {/* Header Section */}
      <section className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>
          Professional Overview
        </h1>
        {/* <p className={styles.sectionSubtitle}>
          A comprehensive overview of my professional journey, skills, and achievements
        </p> */}
      </section>

      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className={styles.contentSection}>
        {activeTab === 'experience' && (
          <div className={styles.experienceSection}>
            {workExperience.map((job) => (
              <div key={job.id} className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.company}>{job.company}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.location}>
                        <FaMapMarkerAlt className={styles.metaIcon} />
                        {job.location}
                      </span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.period}>
                        <FaCalendarAlt className={styles.metaIcon} />
                        {job.period}
                      </span>
                    </div>
                  </div>
                  {job.link && (
                    <a href={job.link} className={styles.externalLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                
                <p className={styles.jobDescription}>{job.description}</p>
                
                <div className={styles.technologies}>
                  <h4>Technologies</h4>
                  <div className={styles.techTags}>
                    {job.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.achievements}>
                  <h4>Key Achievements</h4>
                  <ul className={styles.achievementList}>
                    {job.achievements.map((achievement, index) => (
                      <li key={index} className={styles.achievementItem}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className={styles.skillsSection}>
            {skillCategories.map((category) => (
              <div key={category} className={styles.skillCategory}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <div className={styles.skillsGrid}>
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.id} className={styles.skillCard}>
                        <div className={styles.skillHeader}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.skillBar}>
                          <div 
                            className={styles.skillProgress} 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className={styles.educationSection}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <h3 className={styles.degreeTitle}>{edu.degree}</h3>
                  {edu.gpa && (
                    <span className={styles.gpa}>GPA: {edu.gpa}</span>
                  )}
                </div>
                <div className={styles.educationMeta}>
                  <span className={styles.institution}>{edu.institution}</span>
                  <span className={styles.separator}>•</span>
                  <span className={styles.location}>
                    <FaMapMarkerAlt className={styles.metaIcon} />
                    {edu.location}
                  </span>
                  <span className={styles.separator}>•</span>
                  <span className={styles.period}>
                    <FaCalendarAlt className={styles.metaIcon} />
                    {edu.period}
                  </span>
                </div>
                <p className={styles.educationDescription}>{edu.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className={styles.achievementsSection}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className={styles.achievementCard}>
                <div className={styles.achievementHeader}>
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <span className={styles.achievementYear}>{achievement.year}</span>
                </div>
                <p className={styles.achievementDescription}>{achievement.description}</p>
                {achievement.link && (
                  <a href={achievement.link} className={styles.achievementLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    View Details
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
