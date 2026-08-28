import React from 'react';
import '../styles/home.css';

import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.png';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="main-div-home">

      {/* HERO */}
      <div id="home">
        <div className="hero">
          <h1>Aniruddh Herle</h1>

          <div>
            PhD Candidate in Cosmology, Leiden Observatory

            <div className="academic-hero">
              <AcademicBar className="academic-hero" />
            </div>
          </div>
        </div>
      </div>


      {/* ABOUT */}
      <div id="about" className="sections-home" />

      <div className="about">
        <h1 className="home-headers">About</h1>

        <div className="intro-grid">

          <div className="intro-img-container">
            <img
              src={introImage}
              alt="Aniruddh Herle"
              className="intro-image"
            />
          </div>

          <div className="intro-text-container">
            <p style={{ marginLeft: '10%', marginRight: 0 }}>

              I am a <b>PhD Candidate in Cosmology at Leiden Observatory</b>,
              working with Prof. Henk Hoekstra and Dr. Elisa Chisari. My
              research focuses on <b>intrinsic alignments, weak lensing,
              galaxy–halo connections, and hydrodynamical simulations</b>,
              with a particular emphasis on developing physically motivated
              models for the next generation of cosmological surveys.

              <br /><br />

              My work combines cosmological simulations, large-scale
              structure statistics and statistical methodology to understand
              how galaxy and halo shapes respond to their environments. I
              primarily work with the <b>FLAMINGO</b> and <b>COLIBRE</b>
              hydrodynamical simulations, developing statistical tools that
              can be directly applied to precision weak-lensing analyses.

              <br /><br />

              During my PhD, I have developed methods for measuring dark
              matter halo shapes from satellite galaxies, investigated the
              redshift and assembly-history dependence of intrinsic
              alignments, and developed the <b>TATT-M</b> intrinsic-alignment
              model. TATT-M has been selected as the fiducial IA model for
              the <b>Euclid</b> analysis.

              <br /><br />

              I am also currently studying galaxy alignments around cosmic
              voids, the intrinsic-alignment B-mode signal, and the
              connection between halo shapes and their formation history.
              More broadly, I am interested in statistical methods that can
              extract robust cosmological information from increasingly
              precise survey data.

              <br /><br />

              Before my PhD, I completed an <b>MSc in Astrophysics at
              Ludwig Maximilian University of Munich</b>, where I worked
              with Simona Vegetti and Daniel Gruen on selection functions
              for strong gravitational-lens finding neural networks.

            </p>
          </div>

        </div>

        <h3>Research Interests</h3>

        <div className="research-card-section">
          <div>Intrinsic Alignments</div>
          <div>Weak Lensing</div>
          <div>Galaxy–Halo Connections</div>
          <div>Hydrodynamical Simulations</div>
          <div>Large-Scale Structure</div>
          <div>Halo Shapes</div>
          <div>Statistical Cosmology</div>
          <div>Euclid & LSST</div>
        </div>
      </div>


      {/* TIMELINE */}
      <div id="timeline" className="sections-home" />

      <div className="timeline-main">
        <h1 className="home-headers">
          Academic & Research Journey
        </h1>

        <Timeline
          mode="VERTICAL_ALTERNATING"
          theme={{
            primaryColor: '#000000',
            secondaryColor: '#ffffff',
          }}
        />
      </div>


      {/* RESEARCH */}
      <div id="projects" className="sections-home" />

      <div style={{ maxWidth: '100vw' }}>
        <h1 className="home-headers">Research</h1>

        <div className="projects-main">
          <Projects />
        </div>
      </div>


      {/* CONTACT */}
      <div id="contact" className="sections-home" />

      <div className="contact-main">
        <h1 className="home-headers">Contact</h1>
        <Contact />
      </div>

    </div>
  );
};

export default Home;