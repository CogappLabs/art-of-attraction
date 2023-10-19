import { useState } from 'react';
import { getAnswers } from '../utils/getAnswers';

const RadioOptions = ({ artworks, setArtworks, isInProgress, setIsInProgress }) => {
    const [customOption, setCustomOption] = useState('');
    const [counter, setCounter] = useState(3);
    const [finalChoice, setFinalChoice] = useState('');

    const options = ['I love spending time looking at beautiful scenery, do you think I\'ll enjoy looking at you?', 
    'My home is filled with interesting objects that each have a story, do you think you\'d fit in there?', 
    'I\'m drawn to thought-provoking and emotionally charged art. Can you evoke strong feelings or reflections in me?'];
    
    const finalOptions = ['Number 1', 'Number 2', 'Number 3'];

    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
    };

    const handleFinalChoiceChange = (event) => {
        setFinalChoice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setIsInProgress(true);

        if (counter > 1) {
            setCounter(counter - 1);
        } else if (counter === 1) {
            setCounter('Final');
        }

        const formData = new FormData(event.target);
        const selectedValue = formData.get('radioOptions');

        getAnswers(selectedValue, artworks, setArtworks, setIsInProgress);
    };

    return (
        <div>
            {counter !== 'Final' && (
                <div>
                    <p className="mb-2">
                        <span className="text-pink-600 text-xl font-bold">{counter !== 1 ? `${counter} ` : 'Final '}</span>
                        {counter !== 1 ? `Questions Remaining` : 'Question'}
                    </p>
                    <form onSubmit={handleSubmit} className="mb-4">
                        {options.map((option, index) => (
                            <div key={index} className="mb-2">
                                <input type="radio" id={option} name="radioOptions" value={option} />
                                <label htmlFor={option} className="ml-2">{option}</label>
                            </div>
                        ))}
                        <div className="mb-2">
                            <input
                                type="radio"
                                id="customOption"
                                name="radioOptions"
                                value={customOption}
                                onChange={handleCustomOptionChange}
                            />
                            <label htmlFor="customOption" className="ml-2">Other:</label>
                            <input
                                type="text"
                                id="customOptionInput"
                                value={customOption}
                                onChange={handleCustomOptionChange}
                                className="ml-2"
                            />
                        </div>
                        <button type="submit" className="rounded bg-pink-600 text-white p-2 hover:bg-pink-800">
                            Ask Question
                        </button>
                        <p className={isInProgress ? 'mt-4 text-pink-600 font-bold' : 'hidden'}>Please give the artworks some time to think of their replies... it may take some time.</p>
                    </form>
                </div>
            )}
            {counter === 'Final' && (
                <div>
                    <form className="mb-4">
                        <p>Will you pick <span className="text-pink-600 font-bold">Number 1</span>, <span className="text-pink-600 font-bold">Number 2</span>, or <span className="text-pink-600 font-bold">Number 3</span>? The choice is yours!</p>
                        {finalOptions.map((option, index) => (
                            <div key={index} className="mb-2">
                                <input
                                    type="radio"
                                    id={option}
                                    name="finalOptions"
                                    value={option}
                                    onChange={handleFinalChoiceChange}
                                />
                                <label htmlFor={option} className="ml-2">{option}</label>
                            </div>
                        ))}
                        <button type="submit" className="rounded bg-pink-600 text-white p-2 hover:bg-pink-800">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default RadioOptions;
