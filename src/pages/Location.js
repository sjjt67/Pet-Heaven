import React from "react";
import "./Location.css";

const Location = () => {
    return (
        <section className="location">
            <div className="container">
                <h2>Visit Us</h2>
                <div className="location-content">
                    <div className="location-info">
                        <h3>Pet Heaven Shelter</h3>
                        <div className="contact-details">
                            <p>📍 <strong>Address:</strong><br />461 Clementi Rd,<br/>Singapore 599491</p>
                            <p>📞 <strong>Phone:</strong><br />+65 9876 5432</p>
                            <p>🕗 <strong>Operating Hours:</strong><br />Monday - Sunday: 9:00AM - 5:00PM</p>
                            <p>📧 <strong>Email:</strong><br />contact@petheaven.org.sg</p>
                        </div>
                    </div>
                    
                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7444038584135!2d103.7761745!3d1.3294012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1080893304bd%3A0xc889e76f4e447e42!2sSIM%20Global%20Education!5e0!3m2!1sen!2ssg!4v1763464413092!5m2!1sen!2ssg" width="100%" height="100%" style={{border:0, borderRadius: '8px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;