import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/css/About.css";
import ContactForm from "./ContactForm";
import Gallery from "./Gallery"; // add at the top


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      
    });
     AOS.refresh();
  }, []);
  return <Portfolio />;
}

function Portfolio() {
  // 🔹 Navbar toggle
  const toggleMenu = () => {
    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".toggle");
    navbar.classList.toggle("open");
    toggle.classList.toggle("active");
  };

  useEffect(() => {
    // ✅ Close navbar when any link is clicked
    const navLinks = document.querySelectorAll(".navbar a");
    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".toggle");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
        toggle.classList.remove("active");
      });
    });

    // ✅ Lightbox for images
    const images = document.querySelectorAll("img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector("#lightbox .close");

    images.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
      });
    });

    closeBtn.onclick = () => {
      lightbox.style.display = "none";
    };

    lightbox.onclick = (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    };
  }, []);

  
  return (
    <main>
      <section id="section-one">
        <header className="header">
          <a href="#" className="logo">
            <img src="/images/logo.webp" alt="logo" />
          </a>

          {/* Hamburger toggle button */}
          <div className="toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation menu */}
          <nav className="navbar" id="navbar">
            <a href="#section-one">Home</a>
            <a href="#section-skill">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#section-five">About</a>
            <a href="#section-six">Contact</a>
          </nav>
        </header>
      </section>

      <section id="section-two">
        <h2>Hi</h2>
        <h1>
          <span className="im">I'm</span>{" "}
          <span className="name">Kelvin Uneze</span>
        </h1>
        <h3>
          Visual Artist <br />
          Graphic Designer <br /> UI/UX Designer <br /> Frontend Developer
        </h3>
      </section>

      <section id="section-three">
        <h3>
          Familiarize yourself with my portfolio, I hope you will find solutions
          that will help your brand stand out and succeed.
        </h3>
      </section>

      <section id="section-skill">
        <div className="skills-section">
          <h2>SKILLS</h2>
          <div className="skills-container"data-aos="fade-up"data-aos-duration="1000">
            <div className="skill-box">Digital Art</div>
            <div className="skill-box">Logo Design</div>
            <div className="skill-box">Product Design</div>
            <div className="skill-box">Wireframing</div>
            <div className="skill-box">Prototyping</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">HTML</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">React</div>
            <div className="skill-box">Figma</div>
            <div className="skill-box">CorelDraw</div>
            <div className="skill-box">Adobe Photoshop</div>
            <div className="skill-box">Adobe Illustrator</div>
            <div className="skill-box">Visual Studio Code</div>
          </div>

          <div className="image-circle-container"data-aos="fade-in"data-aos-duration="700">
            {[
              ["figma.webp", ""],
              ["corel.webp", ""],
              ["photoshop.webp", ""],
              ["ai.webp", ""],
              ["vs.webp", ""],
            ].map(([img, name], i) => (
              <div className="image-circle" key={i}>
                <img src={`/images/skills/${img}`} alt={name} />
                <h5>{name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <h1 className="title">Featured Projects</h1>
        <h3>
          Take a look at some of my previous projects that demonstrate my design
          and development skills.
        </h3>

        <div className="projects-container">
          <div className="project-card">
            <div className="banner">
              <img src="/images/ba.jpg" alt="Internet Banking Logo" />
            </div>
            <h2>Internet Banking</h2>
            <p className="desc">A fintech app built for internet banking.</p>
            <div className="tags">
              <span>HTML</span>
              <span>Prototype</span>
              <span>CSS</span>
              <span>Figma</span>
              <span>JavaScript</span>
            </div>
            <div className="buttons">
              <a
                href="https://www.figma.com/proto/v2C4ZcTA90f13NNMlpYop3/Untitled?page-id=0%3A1&node-id=90-31&p=f&viewport=375%2C387%2C0.11&t=toLqogNKDjgQoCBv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=90%3A26"
                className="github"
              >
                Github
              </a>
              <a
                href="https://www.figma.com/proto/v2C4ZcTA90f13NNMlpYop3/Untitled?page-id=0%3A1&node-id=90-31&p=f&viewport=375%2C387%2C0.11&t=toLqogNKDjgQoCBv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=90%3A26"
                className="live"
              >
                View Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="banner">
              <img src="/images/delivery.jpg" alt="Fast Delivery Logo" />
            </div>
            <h2>Fast Delivery</h2>
            <p className="desc">A web app for Logistics.</p>
            <div className="tags">
              <span>Figma</span>
              <span>Wireframe</span>
              <span>Prototype</span>
            </div>
            <div className="buttons">
              <a
                href="https://www.figma.com/proto/PaeHWshARGoYP1gknROoFY/Fast-Delivery-Dispatch?node-id=0-1&t=XbysMYxhQXDGUoKF-1"
                className="live"
              >
                View Live
              </a>
            </div>
          </div>


          <div className="project-card">
            <div className="banner">
              <img
                src="/images/look.png"
                alt="User Authentication Screen"
              />
            </div>
            <h2>My Look</h2>
            <p className="desc">
              My Look is a go-to web app for effortless photo editing.
Style your images in seconds with intuitive tools, all while keeping your data safe and secure.
            </p>
            <div className="tags">
              <span>Figma</span>
              <span>React</span>
              <span>Javascript</span>
              <span>evn</span>
            </div>
            <div className="buttons">
              <a
                href="https://stylemylook.netlify.app/"
                className="live"
              >
                View Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="banner">
              <img
                src="/images/apple.jpg"
                alt="User Authentication Screen"
              />
            </div>
            <h2>User Authentication Screen</h2>
            <p className="desc">
              A User Authentication Screen where users prove identity before
              accessing the system.
            </p>
            <div className="tags">
              <span>Figma</span>
              <span>Wireframe</span>
              <span>Prototype</span>
            </div>
            <div className="buttons">
              <a
                href="https://www.figma.com/design/cQRstVRyhyaJ4ReI66xUjr/login?node-id=0-1&t=cIZt4Tnuu3SBrR1o-1"
                className="live"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
        
      </section>

      <section id="section-four">
        <Gallery />
      </section>

      <div id="lightbox">
        <span className="close">&times;</span>
        <img id="lightbox-img" src="" alt="lightbox" />
      </div>

      <section id="section-five">
        <div className="about-container"data-aos="fade-up"data-aos-duration="1000">

          <div className="about-text">
            <h2>About</h2>
            <h4>Discover My Story</h4>
            <p>
                       I’m a passionate and versatile <b>Graphic Designer, 
          UI/UX Designer, and Frontend Developer</b> {}
         with a strong focus on creating visually appealing, 
         user-friendly, and responsive digital experiences, 
         leveraging artistic and design talents in contributing 
         to innovative, visually stunning projects in a dynamic
          creative environment by crafting engaging visuals 
          that enhance user experience and brand perception.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/imgg.jpg" alt="About" />
          </div>
        </div>
      </section>

      <section id="section-six">
        <h2>Get In Touch</h2>
        <div className="touc">
          <a href="https://www.behance.net/kelvinuneze">
            <div className="reach-out">
              <img src="/images/be.png" alt="Behance" />
            </div>
          </a>
          <a href="https://www.instagram.com/kelvinuneze">
            <div className="reach-out">
              <img src="/images/insta.png" alt="Instagram" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kelvin-uneze-446a64144">
            <div className="reach-out">
              <img src="/images/link.png" alt="LinkedIn" />
            </div>
          </a>
          <a href="https://x.com/creativeklvn">
            <div className="reach-out">
              <img src="/images/X.webp" alt="X (Twitter)" />
            </div>
          </a>
        </div>

        <div className="country">
          <h3>
            <a href="mailto:kelvinuneze@gmail.com">kelvinuneze@gmail.com</a>
          </h3>
        </div>
                {/* ✅ Add Contact Form before footer */}
        
          <ContactForm />
        
      
      </section>

      <section id="section-seven">
        <div className="end">
          <p>Copyright © 2025 Kelvin Uneze (All Rights Reserved)</p>
        </div>
      </section>
    </main>
  );
}

export default App;
