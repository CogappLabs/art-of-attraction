import { useState } from 'react';

const ArtworkGrid = ({artworks}) => {
    const [customOption, setCustomOption] = useState('');


    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
        console.log('Form submitted!', customOption);
    };

    const answerTag = `<span>Answer: </span>`;

    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className="bg-pink-600 h-60 w-40"></div>
                    <h2 className="font-bold text-pink-600">Artwork Number {index+1}</h2>
                    <div>
                        <span className="font-bold text-pink-600">{artwork.answer ? 'Answer: "' : null}</span>
                            {artwork.answer ? artwork.answer : null}
                        <span className="font-bold text-pink-600">{artwork.answer ? '"' : null}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArtworkGrid;