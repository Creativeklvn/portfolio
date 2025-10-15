import React from "react";
import "../css/About.css"; // your CSS file path

function Portfolio() {
  return (
    <main>
      
      <section id="section-one">
        <header className="header">
          <a href="#" className="logo">
            <img src="/images/logo.webp" alt="logo" />
          </a>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      </section>

      <section id="section-two">
        <h1>Hello, I’m Kelvin Uneze 👋</h1>
        <p>UI/UX Designer • Frontend Developer • Visual Artist</p>
      </section>
    </main>
  );
}

export default Portfolio;
