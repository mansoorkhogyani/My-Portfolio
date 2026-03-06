import React from "react";
import styles from "./About.module.css";

const About = () => {
  return ( 
    <section id="about" className={styles.aboutSection}>

      <div className={styles.aboutText} data-aos="fade-left">
        <h2>Hi, I'm <span>Mansoor</span></h2>
        <p>
          I am a passionate Frontend Web Developer with a strong understanding of modern web technologies and UI/UX principles. My expertise includes HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React, which I use to develop responsive and user-friendly interfaces.
          I am currently advancing my skills in full-stack development to broaden my ability to design and build complete web applications. I am committed to writing clean, maintainable code and continuously learning new technologies to stay aligned with industry standards.
          My goal is to contribute to innovative projects where I can combine creativity, technical skills, and problem-solving to deliver impactful digital solutions.
        </p>
        <div className={styles.aboutBtns}>
          <a href="#projects" className={styles.btn}>View My Work</a>
          <a href="https://github.com/mansoorkhogyani" target="_blank" rel="noreferrer" className={styles.btn}>My GitHub</a>
        </div>
      </div>

      
    </section>
  );
};

export default About;

