import React, { useState } from 'react';
import Resource from '../components/Resource';
import './Gallery.css'

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const catAPI = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC'
    const dogAPI = 'https://api.thedogapi.com/v1/images/search/?limit=15&page=100&order=DESC'


    const render = (data) => {
        if (data.loading === true) return <p>loading ...</p>

        if (data.error) return <p>Error loading pets: {data.error}</p>

        console.log('Got the data', data);

        return (
            <div className="gallery-grid">
                {data.trans.map(pet => (
                    <div key={pet.id} className="gallery-card">
                        <img src={pet.url} alt='Pet image' className="pet-img" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="gallery-container">
            <h1>Pet Heaven's Gallery</h1>
            <p>Pets in our care</p>
            <div className="filter-buttons2">
                <button className={`filter-btn2 ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                <button className={`filter-btn2 ${filter === 'dogs' ? 'active' : ''}`} onClick={() => setFilter('dogs')}>Dogs</button>
                <button className={`filter-btn2 ${filter === 'cats' ? 'active' : ''}`} onClick={() => setFilter('cats')}>Cats</button>
            </div>

            {(filter === 'all' || filter === 'dogs') && (
                <div className="pet-section2">
                    <h2>Dogs</h2>
                    <Resource path={dogAPI} render={(data) => render(data, 'dog')} />
                </div>
            )}

            {(filter === 'all' || filter === 'cats') && (
                <div className="pet-section2">
                    <h2>Cats</h2>
                    <Resource path={catAPI} render={(data) => render(data, 'cat')} />
                </div>
            )}
        </div>
    )
}

export default Gallery;