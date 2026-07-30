// All real content from the original site lives here — edit this file to update
// text anywhere on the site without touching component code.

export const personalInfo = {
  name: 'Saagarika Venugopal',
  greeting: 'Hi, I am Saagarika',
  emoji: '😊',
  tagline: 'I build websites and applications.',
  bio: "I am a passionate web developer with experience in creating responsive and user-friendly websites. I am from Bangalore and love spending time learning to code new websites with different technologies.",
  email: 'saagarikavenugopal@gmail.com',
  phone: '+91 9876543210',
  location: 'Bangalore, India',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/saagarikavenugopal',
    linkedin: 'https://www.linkedin.com/in/saagarikavenugopal',
    email: 'mailto:saagarikavenugopal@gmail.com',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skillPills = ['HTML', 'CSS', 'JS', 'React', 'C++', 'C', 'Python'];

export const skillsTable = [
  { tech: 'HTML5', proficiency: 'Intermediate', years: 3 },
  { tech: 'CSS3', proficiency: 'Intermediate', years: 3 },
  { tech: 'JavaScript', proficiency: 'Intermediate', years: 2 },
  { tech: 'React', proficiency: 'Intermediate', years: 1 },
  { tech: 'Node.js', proficiency: 'Beginner', years: 1 },
];

export const learningJourney = [
  'Learn the basics of HTML and build simple web pages.',
  'Study CSS to style layouts and make pages look nice.',
  'Practice JavaScript to add interactivity to websites.',
  'Create small projects to apply what I learned.',
  'Improve by reviewing code and learning new tools like React.',
];

// NOTE: Local screenshot filenames from the original site (e.g. "calci photo.png")
// are referenced below as /assets/<name>.png — drop your real image files into
// src/assets/ with these names, or update the `image` field to match your files.
export const projects = [
  {
    title: 'RENTSYNC — Rental Management App',
    description: 'Real-time rental management system.',
    image: 'rentsync.png',
    tags: ['React', 'API'],
    github: 'https://github.com/saagarikavenugopal',
    youtubeId: 'X1zCAPLvMtw',
  },
  {
    title: 'Calculator',
    description: 'A simple calculator application.',
    image: 'calculator.png',
    tags: ['JavaScript', 'UI'],
    github: 'https://github.com/saagarikavenugopal',
    youtubeId: 'DM_KJbit0mM',
  },
  {
    title: 'Mario Game',
    description: 'A simple Mario-style browser game built with HTML and JavaScript.',
    image: 'mario.png',
    tags: ['Game', 'JavaScript'],
    github: 'https://github.com/saagarikavenugopal',
    youtubeId: 'IqpLQefIEHY',
  },
  {
    title: 'Weather App',
    description: 'A simple weather application.',
    image: 'weather.png',
    tags: ['API', 'UI'],
    github: 'https://github.com/saagarikavenugopal',
    youtubeId: 'MIYQR-Ybrn4',
  },
];
