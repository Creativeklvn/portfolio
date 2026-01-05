import React, { useState } from "react";
import "./Services.css";
import { FiLayout } from "react-icons/fi";
import { MdBrush } from "react-icons/md";
import { FaCode } from "react-icons/fa";

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Services I Offer</h2>
      <p className="services-subtitle">
         
        Transforming ideas, design and building digital products, functional digital experiences tailored to your brand.
      </p>

      <div className="services-grid"data-aos="fade-in"data-aos-duration="1000">
        
        <div className="service-card">
            <FiLayout className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>
            Designing intuitive and visually engaging interfaces that deliver great user experiences
            while aligning with business goals.
          </p>
          <ul className="skills-list">
            <li>User-centered design approach</li>
            <li>Wireframing & prototyping</li>
            <li>Design systems</li>
            <li>Responsive design for all devices</li>
          </ul>
        </div>

        <div className="service-card">
            <MdBrush className="service-icon" />
          <h3>Graphic Design</h3>
          <p>
            Creating strong visual identities and marketing materials that communicate brand stories
            clearly and beautifully.
          </p>
          <ul className="skills-list">
            <li>Brand Identity</li>
            <li>Logo design</li>
            <li>Label and flyer designs</li>
            <li>Photo editing</li>
            <li>Vector tracing</li>
            <li>Print & Digital assets</li>
            <li>NFT digital art</li>
          </ul>
        </div>

        <div className="service-card">
            <FaCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>
            Building fast, responsive, and accessible web interfaces using modern frontend technologies.
          </p>
          <ul className="skills-list">
            <li>React Development</li>
            <li>HTML / CSS / JavaScript</li>
            <li>Responsive Design</li>
            <li> Landing page</li>
            <li>Cloud-Native & DevOps Technologies: Kubernetes and Docker</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
