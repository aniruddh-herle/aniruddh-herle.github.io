import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import resume from '../assets/Aniruddh_Herle_CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (sectionId) => (e) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      const offset = section.getBoundingClientRect().top;
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;

      window.scrollBy({
        top: offset - headerHeight,
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);
  };

  const handleScrollToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header
      id="header"
      className={`header ${scrolling ? 'scrolled' : ''}`}
    >
      <Link
        to="/"
        className={`header-link ${scrolling ? 'scrolled-text' : ''}`}
        onClick={handleScrollToTopClick}
      >
        <h2>Aniruddh Herle</h2>
      </Link>

      <nav className="nav">

        <a
          href="#about"
          className={`a ${scrolling ? 'scrolled-a' : ''}`}
          onClick={handleScrollToSection('about')}
        >
          About
        </a>

        <a
          href="#timeline"
          className={`a ${scrolling ? 'scrolled-a' : ''}`}
          onClick={handleScrollToSection('timeline')}
        >
          Timeline
        </a>

        <a
          href="#projects"
          className={`a ${scrolling ? 'scrolled-a' : ''}`}
          onClick={handleScrollToSection('projects')}
        >
          Research
        </a>

        <a
          href="https://ui.adsabs.harvard.edu/search/q=%20%20first_author%3A%22A.%20Herle%22&sort=date%20desc%2C%20bibcode%20desc&p_=0"
          target="_blank"
          rel="noopener noreferrer"
          className={`a ${scrolling ? 'scrolled-a' : ''}`}
        >
          NASA ADS
        </a>

        <a
          href="#contact"
          className={`a ${scrolling ? 'scrolled-a' : ''}`}
          onClick={handleScrollToSection('contact')}
        >
          Contact
        </a>

        <a
          href="https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={`a ${scrolling ? 'scrolled-a' : ''}`}
        >
          Google Scholar
        </a>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className={`header-button ${
            scrolling ? 'header-button-scrolled' : ''
          }`}
        >
          CV
        </a>

      </nav>

      <button
        className={`mobile-menu-button ${
          scrolling ? 'scrolled-mobile-menu-button' : ''
        } ${isMobileMenuOpen ? 'menu-button-open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Open menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <button
        className={`mobile-menu-close-button ${
          scrolling ? 'scrolled-mobile-menu-close-button' : ''
        } ${isMobileMenuOpen ? 'close-button-open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faClose} />
      </button>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-nav">

          <a
            href="#about"
            className="scrolled-a"
            onClick={handleScrollToSection('about')}
          >
            About
          </a>

          <a
            href="#timeline"
            className="scrolled-a"
            onClick={handleScrollToSection('timeline')}
          >
            Timeline
          </a>

          <a
            href="#projects"
            className="scrolled-a"
            onClick={handleScrollToSection('projects')}
          >
            Research
          </a>

          <a
            href="https://ui.adsabs.harvard.edu/search/q=%20%20first_author%3A%22A.%20Herle%22&sort=date%20desc%2C%20bibcode%20desc&p_=0"
            target="_blank"
            rel="noopener noreferrer"
            className="scrolled-a"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            NASA ADS
          </a>

          <a
            href="#contact"
            className="scrolled-a"
            onClick={handleScrollToSection('contact')}
          >
            Contact
          </a>

          <a
            href="https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="scrolled-a"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Google Scholar
          </a>

          <br />

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="header-button-scrolled"
          >
            CV
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;