import { useState } from 'react';

const ArtworkGrid = () => {
    const [customOption, setCustomOption] = useState('');
    const artworks = [
        {
            "id": 1,
            "title": "Classic Landscape",
            "artist": "Charles Sheeler",
            "label": "Artwork Number 1"
        },
        {
            "id": 2,
            "title": "The Farm",
            "artist": "Joan Miró",
            "label": "Artwork Number 2"
        },
        {
            "id": 3,
            "title": "The Boating Party",
            "artist": "Mary Cassatt",
            "label": "Artwork Number 3"
        }
    ];

    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
        console.log('Form submitted!', customOption);
    };

    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className="bg-pink-600 h-60 w-40"></div>
                    <h2>{artwork.label}</h2>
                </div>
            ))}
        </div>
    );
};

export default ArtworkGrid;