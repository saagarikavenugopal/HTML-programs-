import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.message.trim()) {
    errors.message = 'Please write a message.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // NOTE: This demo just simulates a send. Wire this up to a real backend
    // or a form service (e.g. Formspree, EmailJS) to actually deliver messages.
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3500);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Get in <span className="gradient-text">touch</span>
          </h2>
          <p className="section-subtitle">Have a project in mind or a role to fill? I'd love to hear from you.</p>
        </div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FiMail />
              </div>
              <div>
                <span>Email</span>
                <p>
                  <a href={personalInfo.socials.email}>{personalInfo.email}</a>
                </p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FiPhone />
              </div>
              <div>
                <span>Phone</span>
                <p>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
                </p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <FiMapPin />
              </div>
              <div>
                <span>Location</span>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact__socials">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`form-field ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className={`form-field ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className={`form-field ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project or opportunity..."
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <motion.button
              type="submit"
              id="send-message"
              className="btn btn-primary contact__submit"
              disabled={status !== 'idle'}
              whileTap={{ scale: 0.96 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contact__submit-label">
                    Send Message <FiSend />
                  </motion.span>
                )}
                {status === 'sending' && (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contact__submit-label">
                    Sending...
                  </motion.span>
                )}
                {status === 'sent' && (
                  <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contact__submit-label">
                    Message Sent <FiCheckCircle />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
