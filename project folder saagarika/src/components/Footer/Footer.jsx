import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <p>
          &copy; {year} {personalInfo.name}. Built with React, Framer Motion &amp; CSS.
        </p>

        <nav className="footer__socials" aria-label="Social links">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
