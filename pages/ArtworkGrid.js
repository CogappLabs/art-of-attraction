import { useState } from 'react';
import Image from 'next/image';

const ArtworkGrid = ({artworks, isInProgress, setIsInProgress, reveal, setReveal}) => {


    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className={ reveal[index] ? "hidden" : "bg-pink-600 h-96 w-full text-white p-4" }>
                        <h2 className="font-bold font-xl mb-4">Artwork Number {index+1}</h2>
                        <div className={ isInProgress ? 'hidden' : null}>
                            <span className="font-bold">{artwork.answer ? 'Answer: "' : null}</span>
                                {artwork.answer ? artwork.answer : null}
                            <span className="mt-4 font-bold">{artwork.answer ? '"' : null}</span>
                        </div>
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