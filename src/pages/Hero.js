import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section 
            className="hero"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('/images/hero-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="hero-content">
                <h1>Rescuing pets, Creating families</h1>
                <p>Giving all pets a second chance at love and happiness</p>
                <div className="hero-btns">
                    <Link to="/adopt" className="btn first-btn">Adopt Now</Link>
                    <Link to="/gallery" className="btn second-btn">Browse Gallery</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;