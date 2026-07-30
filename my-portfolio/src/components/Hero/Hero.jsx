import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="hero__title">
            {personalInfo.greeting} <span className="hero__emoji">{personalInfo.emoji}</span>
          </h1>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
