import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import imageme from "./components/image2.png"
import aldi from "./components/aldi.jpg"
import shoe from "./components/shoe.jpg"
import hospital from "./components/hospital.jpg"
import yahtzee from "./components/yahtzee.jpg"
import { Link, animateScroll as scroll } from 'react-scroll';

function ProjectCard({ title, imageSrc, description }) {
  return (
      <div className="project-card">
        <img className="project-image" src={imageSrc} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  );
}

function App() {
  const aboutData = {
    name: "Brian De La Torre",
    profilePictureSrc: imageme,
    bio: "Hello! I'm Brian De La Torre, an aspiring technologist with a passion for all things related to computer science and technology. Graduating from Aurora University in 2023 with a degree in Computer Science, I've honed my skills in programming, web development, and problem-solving.",
    projects: [
      {
        title: "Yahtzee Online",
        imageSrc: yahtzee,
        description: "A web-based multiplayer Yahtzee game.",
      },
      {
        title: "Aldi PTO system",
        imageSrc: aldi,
        description: "An employee leave management system for Aldi employees.",
      },
      {
        title: "Hospital billing system",
        imageSrc: hospital,
        description: "A software solution for managing hospital billing processes.",
      },
      {
        title: "Shoe augmented reality app",
        imageSrc: shoe,
        description: "An augmented reality app to try on virtual shoes.",
      },
      {
        title: "Smart mirror",
        imageSrc: "smart_mirror_image.jpg",
        description: "A smart mirror that displays useful information.",
      },
    ],
  };

  return (
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <div id="about">
            <About
                name={aboutData.name}
                profilePictureSrc={aboutData.profilePictureSrc}
                bio={aboutData.bio}
            />
          </div>
          <div id="projects">
            <div className="project-cards-container">
              {aboutData.projects.map((project, index) => (
                  <ProjectCard
                      key={index}
                      title={project.title}
                      imageSrc={project.imageSrc}
                      description={project.description}
                  />
              ))}
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>Contact: briandelatorr21@gmail.com</p>
          <p>Phone Number: 630-995-1397</p>
        </footer>
      </div>
  );
}

export default App;
