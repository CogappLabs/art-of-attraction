import { useState } from 'react';
import Image from 'next/image';
import Reset from './Reset'

const ArtworkGrid = ({artworks, isInProgress, setIsInProgress, counter, setCounter, reveal, setReveal, disabled, setDisabled, reset, setReset, hideReset, setHideReset }) => {
    const baseUrl = "https://www.nga.gov/collection/art-object-page";

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
        <>
            <div className="grid grid-cols-3 gap-x-2 mb-4">
                {artworks.map((artwork, index) => (
                    <div key={index}>
                        <h2 className="font-bold font-xl mb-4 text-pink-600">Artwork Number {index+1}</h2>
                        <div className={ reveal[index] ? "hidden" : "bg-pink-600 h-96 w-full text-white p-4" }>
                            <div className={ isInProgress || reveal.some((value) => value === true) || reset ? 'hidden' : null}>
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
                            <a href={`${baseUrl}.${artwork.objectID}.html`} target="_blank">
                                <Image 
                                    src={ artwork.primaryImage }
                                    alt=""
                                    width={artwork.primaryImageWidth}
                                    height={artwork.primaryImageHeight}
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            { !hideReset && <Reset reveal={reveal} setReveal={setReveal} counter={counter} setCounter={setCounter} reset={reset} setReset={setReset} hideReset={hideReset} setHideReset={setHideReset}/> }
        </>
    );
};

export default ArtworkGrid;