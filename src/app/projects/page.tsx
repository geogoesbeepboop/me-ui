"use client";
import Image from "next/image";
import { Project } from "@/types";
import styles from "./page.module.css";
import { FaPencilRuler, FaCode, FaFlask, FaRocket, FaArchive } from "react-icons/fa";

const projects: Project[] = [
  {
    id: "1",
    title: "Minimal Blog",
    description: "A clean, dark-themed blog platform focused on typography and reading experience.",
    image: "/window.svg",
    techStack: ["Next.js", "TypeScript", "Vercel"],
    link: "#",
    status: "production"
  },
  {
    id: "2",
    title: "Portfolio Gallery",
    description: "A portfolio site with atmospheric imagery and subtle interactions.",
    image: "/me.png",
    techStack: ["React", "Framer Motion", "CSS Modules"],
    link: "#",
    status: "design"
  }
];

const statusMap = {
  design: {
    label: "Design",
    color: "#2a00d1",
    icon: <FaPencilRuler />
  },
  development: {
    label: "Development",
    color: "#00bcd4",
    icon: <FaCode />
  },
  beta: {
    label: "Beta",
    color: "#ffc107",
    icon: <FaFlask />
  },
  production: {
    label: "Production",
    color: "#4caf50",
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
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 className={styles.projectTitle} style={{ margin: 0 }}>{project.title}</h3>
                <span
                  className={`${styles.statusIndicator} ${styles.statusRight}`}
                  style={{ color: statusMap[project.status].color }}
                >
                  {statusMap[project.status].icon}
                  <span style={{ marginLeft: 4 }}>{statusMap[project.status].label}</span>
                </span>
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