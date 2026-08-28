import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <p style={{ textAlign: 'left' }}>
            &copy; 2026 Aniruddh Herle
          </p>
        </div>

        <div className="footer-column">
          <p>
            <span style={{ color: 'grey', fontSize: '12px' }}>
              PhD Candidate · Leiden Observatory
            </span>
          </p>
        </div>

        <div className="footer-column">
          <p>
            <span style={{ color: 'grey', fontSize: '12px' }}>
              Last updated: August 2026
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;