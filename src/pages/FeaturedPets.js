import React from "react";
import { Link } from "react-router-dom";
import './FeaturedPets.css';

const FeaturedPets = () => {
    const featuredPets = [
        // Dogs
        { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: "2 years", gender: "Male", image: "/images/golden.jpg"},
        { id: 2, name: "Coco", type: "Dog", breed: "Corgi", age: "3 years", gender: "Female", image: "/images/corgi.png"},
        { id: 3, name: "Peanut", type: "Dog", breed: "Beagle", age: "1 year", gender: "Male", image: "/images/beagle.jpg"},
        // Cats
        { id: 4, name: "Luna", type: "Cat", breed: "Ragdoll", age: "2 years", gender: "Female", image: "/images/ragdoll.jpg"},
        { id: 5, name: "Garfield", type: "Cat", breed: "Persian", age: "3 years", gender: "Male", image: "/images/persian.jpg"},
        { id: 6, name: "Miao", type: "Cat", breed: "Munchkin", age: "1 year", gender: "Female", image: "/images/munchkin.jpg"}
    ];

    return (
        <section className="featured-pets">
            <div className="container">
                <h2>Featured Pets</h2>
                <p>Meet some of our adorable pets</p>
                <div className="pets-grid1">
                    {featuredPets.map(pet => (
                        <div key={pet.id} className="pet-card1">
                            <img src={pet.image} alt={pet.name} />
                            <h3>{pet.name}</h3>
                            <p><strong>Breed:</strong> {pet.breed}</p>
                            <p><strong>Age:</strong> {pet.age}</p>
                            <p><strong>Gender:</strong> {pet.gender}</p>
                            <Link to="/adopt" className="view-btn">View More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPets;