import { motion } from 'framer-motion';
import { skillPills, skillsTable } from '../../data/portfolioData';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="section section-alt skills">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">skills</span>
          </h2>
        </div>

        <div className="skills__pills">
          {skillPills.map((skill, i) => (
            <motion.div
              className="skill-pill"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills__table-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <table className="skills-table">
            <caption>Skills overview</caption>
            <thead>
              <tr>
                <th>Technology</th>
                <th>Proficiency</th>
                <th>Years of Experience</th>
              </tr>
            </thead>
            <tbody>
              {skillsTable.map((row) => (
                <tr key={row.tech}>
                  <td>{row.tech}</td>
                  <td>
                    <span className={`level-badge level-badge--${row.proficiency.toLowerCase()}`}>
                      {row.proficiency}
                    </span>
                  </td>
                  <td>{row.years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
