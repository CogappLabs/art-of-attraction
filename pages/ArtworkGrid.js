import { useState } from 'react';

const ArtworkGrid = ({artworks, isInProgress, setIsInProgress}) => {


    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className="bg-pink-600 h-60 w-40"></div>
                    <h2 className="font-bold text-pink-600">Artwork Number {index+1}</h2>
                    <div className={ isInProgress ? 'hidden' : null}>
                        <span className="font-bold text-pink-600">{artwork.answer ? 'Answer: "' : null}</span>
                            {artwork.answer ? artwork.answer : null}
                        <span className="mt-4 text-pink-600 font-bold">{artwork.answer ? '"' : null}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArtworkGrid;