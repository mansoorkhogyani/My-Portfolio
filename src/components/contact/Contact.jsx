import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {

  return (
    <section id="contact" className={styles.section} >
      <h3 className={styles.title}>Contact Me</h3>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="https://www.gmail.com/" target="_blank" rel="noreferrer">
            <i className="ri-mail-line"></i>
            <div className="emailDets">
              <h4>EMAIL</h4>
              <h5>mansoorkhogyani@gmail.com</h5>
            </div>
          </a>
          <a href="https://github.com/mansoorkhogyani" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
            <div className="emailDets">
              <h4>GITHUB</h4>
              <h5>github.com/mansoorkhogyani</h5>
            </div>
          </a>
          <a href="https://web.telegram.org/itx_MegaByte" target="_blank" rel="noreferrer">
            <i className="fab fa-telegram"></i>
            <div className="emailDets">
              <h4>TELEGRAM</h4>
              <h5>@itx_MegaByte</h5>
            </div>
          </a>
        </div>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
