import React from "react";
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeImg} data-aos="fade-left">
        <img src="src/images/mm2.png" alt="Mansoor Image" />
      </div>

      <div className={styles.homeText} data-aos="fade-right">
        <h2>Hi, I'm <span>Mansoor</span></h2>
        <p>
          I am a detail-oriented Frontend Web Developer with strong expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. I build responsive, user-focused, and performance-driven web applications.
          Currently expanding my skill set into full-stack development to create scalable, end-to-end digital solutions that combine clean design with powerful backend functionality.
        </p>
        <div className={styles.homeBtns}>
          <a href="#projects" className={styles.btn}>View My Work</a>
          <a href="https://github.com/mansoorkhogyani" target="_blank" rel="noreferrer" className={styles.btn}>My GitHub</a>
        </div>
      </div>

    </section>
  );
};

export default Home;
