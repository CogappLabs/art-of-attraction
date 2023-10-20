import { useState } from 'react';
import Image from 'next/image';

const ArtworkGrid = ({artworks, isInProgress, setIsInProgress, reveal, setReveal}) => {
    const updateItemInReveal = (index, value) => {
        const updatedReveal = reveal.map((item, i) => (i === index ? value : item));
        setReveal(updatedReveal);
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const selectedValue = formData.get('index');

        if (selectedValue === '0') {
            updateItemInReveal(0, true);
        } else if (selectedValue === '1') {
            updateItemInReveal(1, true);
        } else {
            updateItemInReveal(2, true);
        }      
    };

    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className={ reveal[index] ? "hidden" : "bg-pink-600 h-96 w-full text-white p-4" }>
                        <h2 className="font-bold font-xl mb-4">Artwork Number {index+1}</h2>
                        <div className={ isInProgress || reveal.some((value) => value === true) ? 'hidden' : null}>
                            <span className="font-bold">{artwork.answer ? 'Answer: "' : null}</span>
                                {artwork.answer ? artwork.answer : null}
                            <span className="mt-4 font-bold">{artwork.answer ? '"' : null}</span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" value={index} name="index"></input>
                            <button className={reveal.some((value) => value === true) ? "rounded bg-white text-pink-600 p-2 hover:bg-gray-200" : "hidden" }>
                                Reveal
                            </button>

                        </form>

                    </div>
                    <div className={ reveal[index] ? "" : "hidden" }>
                        <Image 
                            src={ artwork.primaryImage }
                            alt=""
                            width={artwork.primaryImageWidth}
                            height={artwork.primaryImageHeight}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArtworkGrid;