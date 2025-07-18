"use client";
import Image from "next/image";
import { Project } from "@/types";
import styles from "./page.module.css";
import { FaPencilRuler, FaCode, FaFlask, FaRocket, FaArchive } from "react-icons/fa";

const projects: Project[] = [
  {
    id: "1",
    title: "Cali",
    description: "A powerful AI chatbot integrated with real-time financial data, function tools, and web search to give you insightful economic analysis on demand.",
    image: "/window.svg",
    techStack: ["Next.js", "Zustand", "Nest.js", "Redis", "PostgreSQL", "DynamoDB"],
    // link: "#",
    status: "development"
  },
  {
    id: "2",
    title: "Ruby",
    description: "Your personal AI companion for daily reflection, goal setting, and mindful progress— built to listen, guide, and grow with you.",
    image: "/me.png",
    techStack: ["SwiftUI", "Combine", "Core Data"],
    // link: "#",
    status: "design"
  }
];

const statusMap = {
  design: {
    label: "Design",
    color: "#ee07ff",
    icon: <FaPencilRuler />
  },
  development: {
    label: "Development",
    color: "#ff3907",
    icon: <FaCode />
  },
  beta: {
    label: "Beta",
    color: "#00bcd4",
    icon: <FaFlask />
  },
  production: {
    label: "Production",
    color: "#3eba18",
    icon: <FaRocket />
  },
  archived: {
    label: "Archived",
    color: "#888888",
    icon: <FaArchive />
  }
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsHeader}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            {/* Image Container */}
            <div className={styles.projectImageContainer}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={350}
                  className={styles.projectImage}
                />
              )}
            </div>
            {/* Content Section */}
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.statusContainer}>
                  <span className={styles.statusLabel}>Status:</span>
                  <span
                    className={styles.statusIndicator}
                    style={{ color: statusMap[project.status].color }}
                  >
                    {statusMap[project.status].icon}
                    <span className={styles.statusText}>{statusMap[project.status].label}</span>
                  </span>
                </div>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechStack}>
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className={styles.techBadge}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 