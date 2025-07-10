"use client";
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode, FaTools, FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link?: string;
}

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  link?: string;
}

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
      "Researched and integrated emerging AI technologies, including GitHub Copilot and Apple Foundation Models, shaping the team’s adoption strategy.",
      "Mentored junior engineers, accelerating onboarding and fostering a collaborative, high-performance team culture."
    ]
  },
  {
    id: "2",
    title: "Software Engineer I",
    company: "Bank of America",
    location: "Charlotte, NC",
    period: "2023 - 2024",
    description: "Led System Architecture, UI/UX design and techinical implementation for the team’s flagship application.",
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
    <div className="work-page">
      {/* Header Section */}
      <section className="section-header">
        <h1 className="section-title">
          <FaRocket className="title-icon" />
          Professional Experience
        </h1>
        <p className="section-subtitle">
          A comprehensive overview of my professional journey, skills, and achievements
        </p>
      </section>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div className="content-section">
        {activeTab === 'experience' && (
          <div className="experience-section">
            {workExperience.map((job) => (
              <div key={job.id} className="experience-card">
                <div className="card-header">
                  <div className="job-info">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="company">{job.company}</span>
                      <span className="separator">•</span>
                      <span className="location">
                        <FaMapMarkerAlt className="meta-icon" />
                        {job.location}
                      </span>
                      <span className="separator">•</span>
                      <span className="period">
                        <FaCalendarAlt className="meta-icon" />
                        {job.period}
                      </span>
                    </div>
                  </div>
                  {job.link && (
                    <a href={job.link} className="external-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="technologies">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="achievements">
                  <h4>Key Achievements</h4>
                  <ul className="achievement-list">
                    {job.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section">
            {skillCategories.map((category) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.id} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
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
          <div className="education-section">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="education-header">
                  <h3 className="degree-title">{edu.degree}</h3>
                  {edu.gpa && (
                    <span className="gpa">GPA: {edu.gpa}</span>
                  )}
                </div>
                <div className="education-meta">
                  <span className="institution">{edu.institution}</span>
                  <span className="separator">•</span>
                  <span className="location">
                    <FaMapMarkerAlt className="meta-icon" />
                    {edu.location}
                  </span>
                  <span className="separator">•</span>
                  <span className="period">
                    <FaCalendarAlt className="meta-icon" />
                    {edu.period}
                  </span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-section">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.link && (
                  <a href={achievement.link} className="achievement-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    View Details
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .work-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .section-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .title-icon {
          color: #2a00d1;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #a0a0a0;
          margin: 0;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #1a1a1a;
          border: 1px solid #333333;
          border-radius: 12px;
          color: #a0a0a0;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-button:hover {
          background-color: #2a2a2a;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .tab-button.active {
          background-color: #2a00d1;
          color: #ffffff;
          border-color: #4a20f1;
        }

        .content-section {
          min-height: 400px;
        }

        /* Experience Section */
        .experience-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .experience-card {
          background-color: #1a1a1a;
          border-radius: 12px;
          border: 1px solid #333333;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
        }

        .experience-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .job-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
        }

        .job-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #a0a0a0;
          flex-wrap: wrap;
        }

        .meta-icon {
          font-size: 0.75rem;
        }

        .separator {
          color: #666666;
        }

        .external-link {
          color: #2a00d1;
          font-size: 1rem;
          transition: color 0.2s ease;
        }

        .external-link:hover {
          color: #4a20f1;
        }

        .job-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .technologies, .achievements {
          margin-top: 1rem;
        }

        .technologies h4, .achievements h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background-color: #333333;
          color: #a0a0a0;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .achievement-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-item {
          color: #a0a0a0;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }

        .achievement-item::before {
          content: "•";
          color: #2a00d1;
          position: absolute;
          left: 0;
        }

        /* Skills Section */
        .skills-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .skill-category {
          background-color: #1a1a1a;
          border-radius: 12px;
          border: 1px solid #333333;
          padding: 1.5rem;
        }

        .category-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .skill-card {
          background-color: #111111;
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid #2a2a2a;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: #ffffff;
        }

        .skill-level {
          font-size: 0.75rem;
          color: #666666;
        }

        .skill-bar {
          height: 6px;
          background-color: #333333;
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background-color: #2a00d1;
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        /* Education Section */
        .education-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .education-card {
          background-color: #1a1a1a;
          border-radius: 12px;
          border: 1px solid #333333;
          padding: 1.5rem;
          transition: all 0.2s ease;
        }

        .education-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .degree-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .gpa {
          font-size: 0.875rem;
          color: #2a00d1;
          font-weight: 500;
        }

        .education-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #a0a0a0;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .education-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        /* Achievements Section */
        .achievements-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          background-color: #1a1a1a;
          border-radius: 12px;
          border: 1px solid #333333;
          padding: 1.5rem;
          transition: all 0.2s ease;
        }

        .achievement-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .achievement-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .achievement-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .achievement-year {
          font-size: 0.875rem;
          color: #2a00d1;
          font-weight: 500;
        }

        .achievement-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .achievement-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #2a00d1;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .achievement-link:hover {
          color: #4a20f1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .work-page {
            padding: 1rem;
          }

          .tab-navigation {
            gap: 0.5rem;
          }

          .tab-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .achievements-section {
            grid-template-columns: 1fr;
          }

          .job-meta, .education-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
