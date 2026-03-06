import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      pic:"src/images/Amazon.PNG",
      title: "Amazon Clone",
      desc: "E-commerce UI clone focusing on responsive layout and clean design.",
      link:"https://github.com/mansoorkhogyani/Amazon-Clone"
    },
    {
      pic:"src/images/Spotify.PNG",
      title: "Spotify Clone",
      desc: "Music streaming interface built using HTML and CSS.",
      link:"https://github.com/mansoorkhogyani/Spotify-Clone"
    },
    {
      pic:"src/images/Bubble.PNG",
      title: "Bubble Game",
      desc: "Interactive JavaScript-based game with scoring system.",
      link:"https://github.com/mansoorkhogyani/Bubble-Game"
    },
    {
      pic:"src/images/WeatherApp.PNG",
      title: "Weather App",
      desc: "Interactive JavaScript-based weather app with APIs concept and DOM",
      link:"https://github.com/mansoorkhogyani/weatherApp-JS"
    },
    {
      pic:"src/images/noteApp.PNG",
      title: "Notes App (React js)",
      desc: "A note app using React js.",
      link:"https://github.com/mansoorkhogyani/notesApp-react-Js"
    },
    {
      pic:"src/images/GitHub.jpg",
      title: "More Projects",
      desc: "Visit My GitHub Account To Explore More Projects.",
      link:"https://github.com/mansoorkhogyani"
    }
  ];

  return (
    <section id="projects" className={styles.section} >
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <img
              src={project.pic}
              alt={project.title}
            />
            <div className={styles.content}>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
            <div className={styles.projectsBtns}>
              <button className={styles.btn}><a className={styles.anchor} href={project.link} target="_blank">View Source Code</a></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
