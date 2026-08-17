import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/css/About.css";
import ContactForm from "./ContactForm";
import Services from "./Services";
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
          <div className="logo">
  <img 
    src={`${process.env.PUBLIC_URL}/images/logo.webp`} 
    alt="logo" 
  />
</div>

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
          Web Developer <br />
          Technical Writer <br /> UI/UX Designer <br /> Graphic Designer 
        </h3>
      </section>

      <section id="section-three">
        <h3>
          I blend creativity with technical expertise to build products that are both 
          visually appealing and highly functional.
        </h3>
      </section>

       <section id="services">
        <Services />
      </section>

      <section id="section-skill">
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-container"data-aos="fade-up"data-aos-duration="700">
            <div className="skill-box">DevOps</div>
            <div className="skill-box">Kubernetes</div>
            <div className="skill-box">Technical Writing</div>
            <div className="skill-box">Docker</div>
             <div className="skill-box">GitOps</div>
            <div className="skill-box">GitHub Actions</div>
            <div className="skill-box">Digital Art</div>
            <div className="skill-box">Logo Design</div>
            <div className="skill-box">Product Design</div>
            <div className="skill-box">Wireframing</div>
            <div className="skill-box">Prototyping</div>
            <div className="skill-box">React</div>
            <div className="skill-box">CSS</div>
            <div className="skill-box">HTML</div>
            <div className="skill-box">JavaScript</div>
            <div className="skill-box">Helm</div>
            <div className="skill-box">Figma</div>
            <div className="skill-box">CorelDraw</div>
            <div className="skill-box">Adobe Photoshop</div>
            <div className="skill-box">Adobe Illustrator</div>
            <div className="skill-box">Vector tracing</div>
            <div className="skill-box">Photo Editing</div>
          </div>

          <div className="image-circle-container"data-aos="fade-in"data-aos-duration="700">
            {[
              ["figma.webp", ""],
              ["corel.webp", ""],
              ["photoshop.webp", ""],
              ["ai.webp", ""],
              ["vs.webp", ""],
              ["Kubernetes.svg", ""],
              ["gitops.png", ""],
              ["docker.png", ""],
            ].map(([img, name], i) => (
    <div className="image-circle" key={i}>
      <img
        src={`${process.env.PUBLIC_URL}/images/skills/${img}`}
        alt={name}
        loading="lazy"
      />
      <h5>{name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <h1 className="title">Featured Projects</h1>
        <p>
          Take a look at some of my previous projects that demonstrate my design
          and development skills.
        </p>

        <div className="projects-container">

<div className="project-card"data-aos="flip-right"data-aos-duration="400">
            <div className="banner">
                                            <img 
      src={`${process.env.PUBLIC_URL}/images/troxx.png`} 
      alt="Troxx (img)" 
    />
            </div>
            <h2>Troxx</h2>
            <p className="desc">Troxx is a crypto and gift card exchange platform 
              that allows users to buy, sell, and trade cryptocurrencies and gift cards quickly and securely.</p>
            <div className="tags">
              <span>Crypto</span>
              <span>Trading</span>
              <span>javascript</span>
              <span>React</span>
            </div>
            <div className="buttons">
              <a
                href="https://troxx.vercel.app/"
                className="live"
              >
                Visit project
              </a>
            </div>
          </div>

          <div className="project-card"data-aos="flip-right"data-aos-duration="200">
            <div className="banner">
                                            <img 
      src={`${process.env.PUBLIC_URL}/images/ba.jpg`} 
      alt="bank (img)" 
    />
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
                className="live"
              >
                View project
              </a>
            </div>
          </div>


       <div className="project-card"data-aos="flip-right"data-aos-duration="600">
            <div className="banner">
                              <img 
      src={`${process.env.PUBLIC_URL}/images/star.jpg`} 
      alt="Starlife movies (img)" 
    />
            </div>
            <h2>Starlife Movies</h2>
            <p className="desc">
              A web app that lets users discover trending movies, cartoons, TV series, and watch trailers.
            </p>
            <div className="tags">
              <span>Entertainment website</span>
              <span>React</span>
            </div>
            <div className="buttons">
              <a
                href="https://starlifemovies.vercel.app/"
                className="live"
              >
                Visit project
              </a>
            </div>
          </div>


          <div className="project-card"data-aos="flip-right"data-aos-duration="600">
            <div className="banner">
                                            <img 
      src={`${process.env.PUBLIC_URL}/images/delivery.jpg`} 
      alt="User Authentication Screen (img)" 
    />
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
                View project
              </a>
            </div>
          </div>


          <div className="project-card"data-aos="flip-right"data-aos-duration="400">
            <div className="banner">
                              <img 
      src={`${process.env.PUBLIC_URL}/images/look.png`} 
      alt="mylook (img)" 
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
            </div>
            <div className="buttons">
              <a
                href="https://stylemylook.netlify.app/"
                className="live"
              >
                Visit project
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


<section className="open-source" id="open-source">
  <div className="open-source-container">
    <div className="section-heading">
      <h2>Open Source</h2>
      <p>Merged upstream work</p>
    </div>

    <div className="pr-grid">

      {/* Kubernetes PR #56252 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Kubernetes</span>
          <img
            src="/images/kubernetes-logo.png"
            alt="Kubernetes logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #56252</h3>

        <p>
          Restructured the CertificateSigningRequest documentation,
          added a YAML manifest-based CSR workflow, clarified
          signer-specific valid usages, and cross-referenced a
          hands-on client-certificate tutorial.
        </p>

        <a
          href="https://github.com/kubernetes/website/pull/56252"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* Kubernetes PR #56421 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Kubernetes</span>
          <img
            src="/images/kubernetes-logo.png"
            alt="Kubernetes logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #56421</h3>

        <p>
          Added a "See also" reference linking the Gateway API
          documentation to the official Gateway API TLS Guide,
          helping readers find HTTPS and TLS listener configuration
          guidance.
        </p>

        <a
          href="https://github.com/kubernetes/website/pull/56421"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* Kubernetes PR #54858 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Kubernetes</span>
          <img
            src="/images/kubernetes-logo.png"
            alt="Kubernetes logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #54858</h3>

        <p>
          Fixed a broken readinessProbe example by updating the
          command to run through <code>/bin/sh -c</code>, ensuring
          it works reliably across containers where cat is not
          directly on PATH.
        </p>

        <a
          href="https://github.com/kubernetes/website/pull/54858"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* Kubernetes PR #55998 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Kubernetes</span>
          <img
            src="/images/kubernetes-logo.png"
            alt="Kubernetes logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #55998</h3>

        <p>
          Clarified the "Connecting Applications with Services"
          tutorial by specifying that TLS keys and certificates must
          be base64-encoded when written directly into a YAML manifest.
        </p>

        <a
          href="https://github.com/kubernetes/website/pull/55998"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* HAMi PR #737 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Project HAMi</span>
          <img
            src="/images/hami-logo.png"
            alt="Project HAMi logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #737 Open</h3>

        <p>
          Expanded Lab 1 to support AWS EC2 GPU instances alongside the
          existing Google Cloud setup, including provider-specific tabs,
          AWS CLI provisioning, version compatibility guidance, and
          kernel configuration fixes.
        </p>

        <a
          href="https://github.com/Project-HAMi/website/pull/737"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* HAMi PR #757 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Project HAMi</span>
          <img
            src="/images/hami-logo.png"
            alt="Project HAMi logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #757 Open</h3>

        <p>
          Updated the GPU partitioning Lab 3 documentation to fix the
          AWS EC2 workflow, adding steps to copy example YAML manifests
          from the local machine to the EC2 instance using scp and
          clarifying AWS and GCP workflow differences.
        </p>

        <a
          href="https://github.com/Project-HAMi/website/pull/757"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* HAMi PR #710 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">Project HAMi</span>
          <img
            src="/images/hami-logo.png"
            alt="Project HAMi logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #710</h3>

        <p>
          Improved terminology consistency in HAMi's core architecture
          documentation by standardizing the "in-container resource
          control" wording across current and versioned documentation.
        </p>

        <a
          href="https://github.com/Project-HAMi/website/pull/710"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>


      {/* KubeStellar PR #2709 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">KubeStellar</span>
          <img
            src="/images/kubestellar-logo.png"
            alt="KubeStellar logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #2709</h3>

        <p>
          Clarified the AI missions setup guide by specifying the
          exact options to select when creating a new mission and
          standardizing capitalization of "Kubernetes".
        </p>

        <a
          href="https://github.com/kubestellar/docs/pull/2709"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>


      {/* KubeStellar PR #2256 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">KubeStellar</span>
          <img
            src="/images/kubestellar-logo.png"
            alt="KubeStellar logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #2256</h3>

        <p>
          Added a GitHub Actions workflow to automatically run 
          markdownlint on Markdown and MDX files during pull requests 
          targeting the main branch.
        </p>

        <a
          href="https://github.com/kubestellar/docs/pull/2494"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* KubeStellar PR #2252 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">KubeStellar</span>
          <img
            src="/images/kubestellar-logo.png"
            alt="KubeStellar logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #2252</h3>

        <p>
          Updated the KubeStellar documentation to accurately
          identify the controller installation runbook.
        </p>

        <a
          href="https://github.com/kubestellar/console-kb/pull/2252"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

      {/* KubeStellar PR #2687 */}
      <article className="pr-card">
        <div className="pr-card-header">
          <span className="pr-project">KubeStellar</span>
          <img
            src="/images/kubestellar-logo.png"
            alt="KubeStellar logo"
            className="pr-logo"
          />
        </div>

        <h3>PR #2687</h3>

        <p>
          Fixed CONTRIBUTING.md by restoring the correct existing
          markdownlint command reference.
        </p>

        <a
          href="https://github.com/kubestellar/docs/pull/2687"
          target="_blank"
          rel="noopener noreferrer"
        >
          View PR →
        </a>
      </article>

    </div>
  </div>
</section>



<section className="portfolio" id="portfolio">
  <div className="portfolio-container">
    <h2>Resume</h2>


    <div className="resume-card">
      <div>
        <h3>Kelvin Uneze</h3>
        <p>View or download my resume to learn more about my experience and skills.</p>
      </div>

      <div className="resume-actions">
        <a
          href="/Kelvin-Uneze-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View
        </a>

        <a
          href="/Kelvin-Uneze-Resume.pdf"
          download
          className="resume-btn secondary"
        >
          Download
        </a>
      </div>
    </div>
  </div>
</section>

      <section id="section-five">
        <div className="about-container"data-aos="fade-up"data-aos-duration="700">

          <div className="about-text">
            <h2>About</h2>
            <h4>Discover My Story</h4>
            <p>
         I’m a passionate and versatile <b>Web Developer, Technical Writer, UI/UX Designer,
          and Graphic Designer</b> with a strong focus on creating visually appealing,
          and responsive digital experiences. Combining creativity with technical expertise to design 
          engaging interfaces, develop modern web applications, and create accurate technical documentation. 
          I actively contribute to open-source projects, including documentation and development within 
          the Kubernetes and KubeStellar ecosystems, helping improve technical documentation, developer 
          resources, and community-driven initiatives.

My technical interests span cloud-native technologies, Kubernetes, DevOps, Linux, containerization, 
distributed systems, infrastructure automation, and modern web development. I'm passionate about exploring 
emerging technologies, contributing to open-source software, and building scalable, secure, and developer-centric solutions.

            </p>
          </div>

          <div className="about-image">
                <img 
      src={`${process.env.PUBLIC_URL}/images/imgg.jpg`} 
      alt="X (img)" 
    />
          </div>
        </div>
      </section>

      <section id="section-six">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        
        
          <ContactForm />
        
      <div className="touc">
          <a href="https://github.com/Creativeklvn">
            <div className="reach-out">
                  <img 
      src={`${process.env.PUBLIC_URL}/images/git.png`} 
      alt="X (Twitter)" 
    />
            </div>
          </a>
          <a href="https://www.instagram.com/kelvin.uneze">
            <div className="reach-out">
                  <img 
      src={`${process.env.PUBLIC_URL}/images/insta.png`} 
      alt="X (Twitter)" 
    />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kelvin-uneze-446a64144">
            <div className="reach-out">
                  <img 
      src={`${process.env.PUBLIC_URL}/images/link.png`} 
      alt="X (Twitter)" 
    />
            </div>
          </a>
          <a href="https://x.com/creative_klvn">
            <div className="reach-out">
                  <img 
      src={`${process.env.PUBLIC_URL}/images/X.webp`} 
      alt="X (Twitter)" 
    />
            </div>
          </a>
        </div>

        <div className="country">
          <h3>
            <a href="mailto:kelvinuneze@gmail.com">kelvinuneze@gmail.com</a>
          </h3>
        </div>
                {/* ✅ Add Contact Form before footer */}
      </section>

      <section id="section-seven">
        <div className="end">
          
          <p>  © {new Date().getFullYear()}  Kelvin Uneze (All Rights Reserved)</p>
        </div>
      </section>
    </main>
  );
}

export default App;
