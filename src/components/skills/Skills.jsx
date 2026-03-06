import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React JS", icon: "fab fa-react" },
    { name: "Tailwind", icon: "ri-tailwind-css-fill" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
  ];

  return (
    <section id="skills" className={styles.section} data-aos="fade-down">
      <h3 className={styles.title}>Skills</h3>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.card}>
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
