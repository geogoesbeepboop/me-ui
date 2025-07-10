"use client";
import Image from "next/image";
import { Project } from "@/types";
import styles from "./page.module.css";

const projects: Project[] = [
  {
    id: "1",
    title: "Minimal Blog",
    description: "A clean, dark-themed blog platform focused on typography and reading experience.",
    image: "/window.svg",
    techStack: ["Next.js", "TypeScript", "Vercel"],
    link: "#"
  },
  {
    id: "2",
    title: "Portfolio Gallery",
    description: "A portfolio site with atmospheric imagery and subtle interactions.",
    image: "/me.png",
    techStack: ["React", "Framer Motion", "CSS Modules"],
    link: "#"
  }
];

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
              <h3 className={styles.projectTitle}>{project.title}</h3>
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