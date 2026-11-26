import React, { useState } from 'react';
import './Release.css';

const Release = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    petGender: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your submission. We will contact you within 48 hours.')
    setFormData({
      ownerName: '',
      email: '',
      phone: '',
      petName: '',
      petType: '',
      petBreed: '',
      petAge: '',
      petGender: '',
      reason: ''
    });
  };

  return (
    <div className="release-page">
      <div className='release-container'>
        <div className='release-header'>
          <h1>Pet Release Form</h1>
          <p>Find your pet a new loving home.</p>
        </div>
        <form className='release-form' onSubmit={handleSubmit}>
          <h3>Owner Information</h3>
          <div className='release-form-group'>
            <label>Your Name *</label>
            <input type='text' name="ownerName" value={formData.ownerName} onChange={handleChange} required />
          </div>
          <div className='release-form-group'>
            <label>Email *</label>
            <input type='email' name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className='release-form-group'>
            <label>Phone *</label>
            <input type='tel' name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <h3>Pet Information</h3>
          <div className='release-form-group'>
            <label>Pet's Name *</label>
            <input type='text' name="petName" value={formData.petName} onChange={handleChange} required />
          </div>
          <div className='release-form-group'>
            <label>Pet Type *</label>
            <select name="petType" value={formData.petType} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>
          <div className='release-form-group'>
            <label>Breed *</label>
            <input type='text' name="petBreed" value={formData.petBreed} onChange={handleChange} required />
          </div>
          <div className='release-form-group'>
            <label>Age (years) *</label>
            <input type='text' name="petAge" value={formData.petAge} onChange={handleChange} required />
          </div>
          <div className='release-form-group'>
            <label>Gender *</label>
            <select name="petGender" value={formData.petGender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='release-form-group'>
            <label>Reason for Release *</label>
            <textarea name="reason" value={formData.reason} onChange={handleChange} rows={"4"} placeholder='Why do you need to release your pet?' required />
          </div>
          <button type="submit" className='submit-btn2'>Submit Release Request</button>
        </form>
      </div>
    </div>
  );
};

export default Release;
