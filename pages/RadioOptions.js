import { useState } from 'react';
import { getAnswers } from '../utils/getAnswers';
import FinalChoice from './FinalChoice'

const RadioOptions = ({ artworks, setArtworks, isInProgress, setIsInProgress, counter, setCounter, reveal, setReveal }) => {
    const [customOption, setCustomOption] = useState('');

    const options = ['I love spending time looking at beautiful scenery, do you think I\'ll enjoy looking at you?', 
    'My home is filled with interesting objects that each have a story, do you think you\'d fit in there?', 
    'I\'m drawn to thought-provoking and emotionally charged art. Can you evoke strong feelings or reflections in me?'];

    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsInProgress(true);

        const formData = new FormData(event.target);
        const selectedValue = formData.get('radioOptions');

        getAnswers(selectedValue, artworks, setArtworks, setIsInProgress, counter, setCounter);
    };

    return (
        <div>
            {(counter !== 'Final' || (counter === 'Final' && isInProgress)) && (
                <div>
                    <p className="mb-2">
                        <span className="text-pink-600 text-xl font-bold">{counter !== 1 ? `${counter} ` : 'Final '}</span>
                        {counter !== 1 ? `Questions Remaining` : 'Question'}
                    </p>
                    <form onSubmit={handleSubmit} className="mb-4">
                        {options.map((option, index) => (
                            <div key={index} className="mb-2">
                                <label htmlFor={option}>
                                    <input type="radio" id={option} name="radioOptions" value={option} className="mr-2" required/>
                                    {option}
                                </label>
                            </div>
                        ))}
                        <div className="mb-2">
                            <label htmlFor="customOption">
                                <input
                                    type="radio"
                                    id="customOption"
                                    name="radioOptions"
                                    value={customOption}
                                    onChange={handleCustomOptionChange}
                                    className="mr-2"
                                    required
                                />
                                Other:
                            </label>
                            <input
                                type="text"
                                id="customOptionInput"
                                value={customOption}
                                onChange={handleCustomOptionChange}
                                className="ml-2"
                            />
                        </div>
                        <button type="submit" className={isInProgress ? 'rounded bg-pink-800 text-white p-2' : 'rounded bg-pink-600 text-white p-2 hover:bg-pink-800'} disabled={isInProgress ? true : false}>
                            Ask Question
                        </button>
                    </form>
                </div>
            )}
            <p className={isInProgress ? 'mb-4 text-pink-600 font-bold' : 'hidden'}>Please give the artworks some time to think of their replies... it may take some time.</p>
            {counter === 'Final' && !isInProgress && <FinalChoice isInProgress={isInProgress} reveal={reveal} setReveal={setReveal}/>}
        </div>
    );
};

export default RadioOptions;
