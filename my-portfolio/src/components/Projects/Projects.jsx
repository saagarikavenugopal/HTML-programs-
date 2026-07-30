import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Drop a file matching project.image (see src/data/portfolioData.js) into public/assets/ */}
              <div className="project-card__image">
                <ImageWithFallback
                  fileName={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="project-card__photo"
                  fallback={<span className="project-card__image-label">{project.title}</span>}
                />
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__video">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={`${project.title} demo video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  <FiGithub /> View Project
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
