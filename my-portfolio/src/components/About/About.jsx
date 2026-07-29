import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">
            A little <span className="gradient-text">about me</span>
          </h2>
        </div>

        <div className="about__grid">
          <motion.figure
            className="about__figure"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {/* Drop your real headshot into src/assets/profile.jpg and swap the src below */}
            <div className="about__photo-frame">
              <div className="about__photo-placeholder">SV</div>
            </div>
            <figcaption>My Profile Photo</figcaption>
          </motion.figure>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p>{personalInfo.bio}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
