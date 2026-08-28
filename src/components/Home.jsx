import React from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.png';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from './Timeline';
import Awards from './Awards';
import ResearchCard from './ResearchCard';
import Contact from './Contact';

const Home = () => {

    const heroText = [
        <div>
            PhD Candidate in Cosmology, Leiden Observatory
            <div className='academic-hero'>
                <AcademicBar className='academic-hero' />
            </div>
        </div>
    ];

    const introText = [
        <p style={{ marginLeft: '10%', marginRight: 0 }}>
            I am a <b>PhD candidate in Cosmology at Leiden Observatory</b>,
            working with <b>Prof. Henk Hoekstra</b> and <b>Dr. Elisa Chisari</b>.
            My research focuses on <b>intrinsic alignments</b>, <b>large-scale structure</b>,
            and the impact of astrophysical systematics on precision weak-lensing cosmology.
            <br /><br />

            I work primarily with state-of-the-art cosmological hydrodynamical simulations,
            including <b>FLAMINGO</b> and <b>COLIBRE</b>, combining simulations with
            two-point statistics and statistical modelling to understand the connection
            between galaxies, dark matter haloes, and their surrounding environment.
            <br /><br />

            A major focus of my PhD has been developing physically motivated models of
            intrinsic alignments for next-generation weak-lensing surveys such as
            <b>Euclid</b>, <b>LSST</b>, and <b>Roman</b>. I led the development of the
            <b>TATT-M</b> model, a mass-dependent extension of the Tidal Alignment and
            Tidal Torquing framework that reduces the number of free parameters while
            retaining the flexibility required to describe the simulated alignment signal.
            The model has been adopted as the fiducial intrinsic-alignment model for
            Euclid.
            <br /><br />

            My research also explores <b>halo shapes</b>, <b>assembly bias</b>,
            <b>redshift evolution</b>, <b>baryonic feedback</b>, and intrinsic alignments
            in underdense environments. In particular, I am currently studying
            <b>galaxy alignments around cosmic voids</b>, extending the study of
            intrinsic alignments beyond the overdense environments traditionally
            considered in weak-lensing analyses.
            <br /><br />

            Before my PhD, I completed an <b>MSc in Astrophysics at Ludwig Maximilian
            University of Munich</b>, where I worked with researchers at the
            <b>Max Planck Institute for Astrophysics</b> on selection functions for
            neural networks used to identify strong gravitational lenses. I previously
            studied <b>Electrical and Electronics Engineering</b> at M. S. Ramaiah
            Institute of Technology in India.
            <br /><br />

            More broadly, I am interested in the intersection of <b>cosmology, statistics,
            simulations, and machine learning</b>. I am particularly interested in
            developing robust statistical methods that allow increasingly precise
            astronomical observations to be translated into reliable constraints on
            the physics of our Universe.
        </p>
    ];

    return (
        <div className='main-div-home'>

            {/* HOME */}
            <div id='home'>
                <div className='hero'>
                    <h1>Aniruddh HERLE</h1>
                    {heroText}
                </div>
            </div>


            {/* ABOUT */}
            <div id='about' className='sections-home' />

            <div className='about'>
                <h1 className='home-headers'>Introduction</h1>

                <div className='intro-grid'>
                    <div className='intro-img-container'>
                        <img
                            src={introImage}
                            alt='Aniruddh Herle'
                            className='intro-image'
                        />
                    </div>

                    <div className='intro-text-container'>
                        {introText}
                    </div>
                </div>

                <h3>Research Interests</h3>

                <div className='research-card-section'>
                    <ResearchCard title="Intrinsic Alignments" />
                    <ResearchCard title="Weak Gravitational Lensing" />
                    <ResearchCard title="Large-Scale Structure" />
                    <ResearchCard title="Galaxy–Halo Connection" />
                    <ResearchCard title="Hydrodynamical Simulations" />
                    <ResearchCard title="Halo Shapes" />
                    <ResearchCard title="Cosmological Statistics" />
                    <ResearchCard title="Astrophysical Systematics" />
                </div>
            </div>


            {/* SKILLS */}
            <div id='skills' className='sections-home' />

            <div className='skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
            </div>


            {/* TIMELINE */}
            <div id='timeline' className='sections-home' />

            <div className='timeline-main'>
                <h1 className='home-headers'>My journey so far</h1>

                <Timeline
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        primaryColor: "#000000",
                        secondaryColor: "#ffffff",
                    }}
                />
            </div>


            {/* RESEARCH PROJECTS */}
            <div id='projects' className='sections-home' />

            <div style={{ maxWidth: '100vw' }}>
                <h1 className='home-headers'>Research Projects</h1>

                <div className='projects-main'>
                    <Projects />
                </div>
            </div>


            {/* AWARDS */}
            <div id='awards' className='sections-home' />

            <div className='awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
            </div>


            {/* CONTACT */}
            <div id='contact' className='sections-home' />

            <div className='contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
            </div>

        </div>
    );
};

export default Home;