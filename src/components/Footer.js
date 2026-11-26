import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <Link to="/"><img src="/images/petheavenlogo.png" alt="Pet Heaven Logo" /></Link>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com"><img src="/images/facebook.png" alt="Facebook" /></a>
                            <a href="https://www.instagram.com"><img src="/images/instagram.png" alt="Instagram" /></a>
                            <a href="https://x.com"><img src="/images/twitter.png" alt="X" /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>📧 contact@petheaven.org.sg</p>
                        <p>📞 +65 9876 5432</p>
                    </div>
                </div>
                <div className="footer-btm">
                    <p>&copy; 2025 Pet Heaven. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;