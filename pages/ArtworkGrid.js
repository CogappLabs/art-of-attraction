import { useState } from 'react';
import Image from 'next/image';

const ArtworkGrid = ({artworks, isInProgress, setIsInProgress, reveal, setReveal}) => {


    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className={ reveal[index] ? "hidden" : "bg-pink-600 h-60 w-40" }></div>
                    <div className={ reveal[index] ? "" : "hidden" }>
                        <Image 
                            src={ artwork.primaryImage }
                            alt=""
                            width={artwork.primaryImageWidth}
                            height={artwork.primaryImageHeight}
                        />
                    </div>
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