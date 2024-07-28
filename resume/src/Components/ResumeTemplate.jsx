import React from 'react';
import './ResumeTemplate.css';

function App() {
  const experiences = [
    {
      company: 'Tech Company',
      role: 'Software Engineer',
      duration: 'Jan 2020 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB.'
    },
    {
      company: 'Other Company',
      role: 'Frontend Developer',
      duration: 'Jun 2017 - Dec 2019',
      description: 'Built responsive user interfaces with HTML, CSS, and JavaScript.'
    }
  ];

  const education = [
    {
      institution: 'University of XYZ',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2013 - 2017'
    }
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  return (
    <div className="App">
      <div className="frame">
        <header className="header">
          <img src="resume/public/images-removebg-preview(1).png" alt="Profile" className="profile-image" />
          <div className="header-text">
            <h1>John Doe</h1>
            <h2>Software Engineer</h2>
          </div>
        </header>
        
        <section className="summary">
          <h3>Summary</h3>
          <p>
            Experienced software engineer with a strong background in developing scalable web applications and working with various technologies. Passionate about learning new skills and improving existing ones.
          </p>
        </section>

        <section className="experience">
          <h3>Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.role} at {exp.company}</h4>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="education">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p>{edu.duration}</p>
            </div>
          ))}
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="contact">
          <h3>Contact</h3>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </div>
    </div>
  );
}

export default App;
