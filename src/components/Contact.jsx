import React from 'react';
import '../styles/contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import {
  faGoogleScholar
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  return (
    <div className="contact-div-main">

      <div className="contact-text">

        <div className="contact-item">
          <FontAwesomeIcon icon={faLocationDot} />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Leiden+Observatory"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-links"
          >
            Leiden Observatory
            <br />
            Leiden, The Netherlands
          </a>
        </div>


        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />

          <a
            href="mailto:aniruddh.herle@gmail.com"
            className="contact-links"
          >
            aniruddh.herle@gmail.com
          </a>
        </div>


        <div className="contact-item">
          <FontAwesomeIcon icon={faGoogleScholar} />

          <a
            href="https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-links"
          >
            Google Scholar
          </a>
        </div>

      </div>

    </div>
  );
};

export default Contact;