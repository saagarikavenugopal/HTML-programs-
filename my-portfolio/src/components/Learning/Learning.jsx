import { motion } from 'framer-motion';
import { learningJourney } from '../../data/portfolioData';
import './Learning.css';

function Learning() {
  return (
    <section id="learning" className="section learning">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Growth</span>
          <h2 className="section-title">
            My learning <span className="gradient-text">journey</span>
          </h2>
          <p className="section-subtitle">
            I've been learning new technologies and steadily improving my skills in web development.
          </p>
        </div>

        <ol className="learning__list">
          {learningJourney.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="learning__number">{i + 1}</span>
              <span>{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Learning;
