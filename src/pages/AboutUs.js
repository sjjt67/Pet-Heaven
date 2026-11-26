import React from "react";
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us" id="about-us">
            <div className="container">
                <h2>About Pet Heaven</h2>
                <div className="about-intro">
                    <p>
                        Pet Heaven is a non-profit animal welfare society dedicated to rescuing abandoned and released pets in Singapore.
                        Since our establishment in 2020, we have been committed to giving every animal a second chance at a loving home.
                    </p>
                </div>
                <div className="about-grid">
                    <div className="about-card">
                        <h3>🐾 Our Mission</h3>
                        <p>We rescue animals in need and provide them with comprehensive medical care, rehabilitation, and love they deserve before finding them permanent homes.</p>
                    </div>
                    <div className="about-card">
                        <h3>🏠 Our Shelter</h3>
                        <p>We provide temporary shelter and care while pets await their forever homes through our adoption program.</p>
                    </div>
                    <div className="about-card">
                        <h3>❤️ Adoption Process</h3>
                        <p>We conduct thorough screening and matching to ensure successful, permanent adoptions that benefit both pets and their new families.</p>
                    </div>
                </div>
                <div className="about-stats">
                    <div className="stat">
                        <h4>500+</h4>
                        <p>Pets Rescued</p>
                    </div>
                    <div className="stat">
                        <h4>300+</h4>
                        <p>Successful Adoptions</p>
                    </div>
                    <div className="stat">
                        <h4>50+</h4>
                        <p>Active Volunteers</p>
                    </div>
                    <div className="stat">
                        <h4>5</h4>
                        <p>Years of Service</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;