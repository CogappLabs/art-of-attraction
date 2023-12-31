import { useContext } from 'react';
import Image from 'next/image';
import Reset from './Reset'
import { AppStateContext } from '../context/AppState'

const ArtworkGrid = () => {
    const { artworks, inProgress, revealImage, setRevealImage, reset, hideReset } = useContext(AppStateContext);
    const baseUrl = "https://www.nga.gov/collection/art-object-page";

    const updateItemInRevealImage = (index, value) => {
        const updatedRevealImage = revealImage.map((item, i) => (i === index ? value : item));
        setRevealImage(updatedRevealImage);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const selectedValue = formData.get('index');

        if (selectedValue === '0') {
            updateItemInRevealImage(0, true);
        } else if (selectedValue === '1') {
            updateItemInRevealImage(1, true);
        } else {
            updateItemInRevealImage(2, true);
        }      
    };

    return (
        <>
            <div className="grid md:grid-cols-3 gap-x-2 mb-4">
                {artworks.map((artwork, index) => (
                    <div key={index}>
                        <h2 className="font-bold font-xl mb-4 text-pink-600">Artwork Number {index+1}</h2>
                        <div className={ revealImage[index] ? "hidden" : "bg-pink-600 min-h-[24rem] w-full text-white p-4 flex" }>
                            <div className={ inProgress || revealImage.some((value) => value === true) || reset ? 'hidden' : null}>
                                <span className="font-bold">{artwork.answer ? 'Answer: ' : null}</span>
                                    <span className="font-bold answer-container">{artwork.answer ? '"' : null}</span>
                                    <span className="answer-container">{artwork.answer ? artwork.answer : null}</span>
                                <span className="mt-4 font-bold answer-container">{artwork.answer ? '"' : null}</span>
                            </div>
                            <form onSubmit={handleSubmit} className="self-center m-auto">
                                <input type="hidden" value={index} name="index"></input>
                                <button className={revealImage.some((value) => value === true) ? "rounded bg-white text-pink-600 p-2 hover:bg-gray-200" : "hidden" }>
                                    Reveal
                                </button>
                            </form>
                        </div>
                        <div className={ revealImage[index] ? "bg-pink-600 min-h-[24rem] w-full p-4 flex items-center justify-center" : "hidden" }>
                            <a href={`${baseUrl}.${artwork.objectID}.html`} target="_blank">
                                <Image 
                                    src={ artwork.primaryImage }
                                    alt=""
                                    width="200"
                                    height="140"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            { !hideReset && <Reset /> }
        </>
    );
};

export default ArtworkGrid;