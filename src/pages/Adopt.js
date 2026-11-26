import React, { useState } from 'react';
import "./Adopt.css"
import Footer from "../components/Footer";

const Adopt = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);

  const pets = [
    // Dogs
    { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: "2 years", gender: "Male", image: "/images/golden.jpg"},
    { id: 2, name: "Coco", type: "Dog", breed: "Corgi", age: "3 years", gender: "Female", image: "/images/corgi.png"},
    { id: 3, name: "Peanut", type: "Dog", breed: "Beagle", age: "1 year", gender: "Male", image: "/images/beagle.jpg"},
    { id: 4, name: "Doge", type: "Dog", breed: "Shiba Inu", age: "3 years", gender: "Female", image: "/images/shiba.jpg"},
    { id: 5, name: "Toby", type: "Dog", breed: "Pug", age: "1 year", gender: "Male", image: "/images/pug.jpg"},
    // Cats
    { id: 6, name: "Luna", type: "Cat", breed: "Ragdoll", age: "2 years", gender: "Female", image: "/images/ragdoll.jpg"},
    { id: 7, name: "Garfield", type: "Cat", breed: "Persian", age: "3 years", gender: "Male", image: "/images/persian.jpg"},
    { id: 8, name: "Miao", type: "Cat", breed: "Munchkin", age: "1 year", gender: "Female", image: "/images/munchkin.jpg"},
    { id: 9, name: "Tiger", type: "Cat", breed: "Scottish Fold", age: "1 year", gender: "Male", image: "/images/scottish.jpg"},
    { id: 10, name: "Milo", type: "Cat", breed: "Munchkin", age: "2 years", gender: "Female", image: "/images/siamese.jpg"}
  ];

  const filterPets = filter === 'all' ? pets : pets.filter(pet => pet.type.toLowerCase() === filter);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    reason: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Adoption request for ${selectedPet.name} submitted. We will contact you soon.`);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      reason: ''
    });
    closeModal();
  };

  return (
    <div className="adopt-page">
      <div className="container">
        <div className="adopt-header">
          <h1>Adopt a Pet</h1>
          <p>Browse our available pets and find the one that's meant to be part of your family</p>
        </div>
        {showModal && selectedPet && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <button className='close-btn' onClick={closeModal}>x</button>
              <div className='modal-header'>
                <h2>Adopt {selectedPet.name}</h2>
              </div>
              <div className='modal-body'>
                <div className='pet-details'>
                  <img src={selectedPet.image} alt={selectedPet.name} />
                  <div className='pet-info'>
                    <h3>{selectedPet.name}</h3>
                    <p><strong>Breed:</strong> {selectedPet.breed}</p>
                    <p><strong>Age:</strong> {selectedPet.age}</p>
                    <p><strong>Gender:</strong> {selectedPet.gender}</p>
                  </div>
                </div>

                <form className='adoption-form' onSubmit={handleSubmit}>
                  <h3>Adoption Form</h3>
                  <div className='form-group'>
                    <label>Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleFormChange} required />
                  </div>
                  <div className='form-group'>
                    <label>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
                  </div>
                  <div className='form-group'>
                    <label>Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required />
                  </div>
                  <div className='form-group'>
                    <label>Address *</label>
                    <textarea name="address" value={formData.address} onChange={handleFormChange} rows="3" required />
                  </div>
                  <div className='form-group'>
                    <label>Reason for Adoption *</label>
                    <textarea name="reason" value={formData.reason} onChange={handleFormChange} rows="4" placeholder='Tell us why you want to adopt this pet...' required />
                  </div>
                  <div className='form-actions'>
                    <button type="button" className='cancel-btn' onClick={closeModal}>Cancel</button>
                    <button type="submit" className='submit-btn'>Send Adoption Request</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="pets">
          <div className="filter-btns">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
            <button className={filter === 'dog' ? 'active' : ''} onClick={() => setFilter('dog')}>Dogs</button>
            <button className={filter === 'cat' ? 'active' : ''} onClick={() => setFilter('cat')}>Cats</button>
          </div>
          <div className="pets-grid">
            {filterPets.map(pet => (
              <div key={pet.id} className="pet-card">
                <img src={pet.image} alt={pet.name} />
                <div className="pet-info">
                  <h3>{pet.name}</h3>
                  <p><strong>Breed:</strong> {pet.breed}</p>
                  <p><strong>Age:</strong> {pet.age}</p>
                  <p><strong>Gender:</strong> {pet.gender}</p>
                  <button className="adopt-btn2" onClick={() => handleAdoptClick(pet)}>Request adoption</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adopt;
