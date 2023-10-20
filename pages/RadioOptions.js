import { useState } from 'react';
import { getAnswers } from '../utils/getAnswers';
import FinalChoice from './FinalChoice'; 

const RadioOptions = ({ artworks, setArtworks, inProgress, setInProgress, remainingQuestions, setRemainingQuestions, reveal, setReveal, disabled, setDisabled, reset, setReset, hideReset, setHideReset }) => {
    const [customOption, setCustomOption] = useState('');
    const [isCustomOptionChecked, setIsCustomOptionChecked] = useState(false);

    const options = ['I love spending time looking at beautiful scenery, do you think I\'ll enjoy looking at you?', 
    'My home is filled with interesting objects that each have a unique story, do you think you\'d fit in there?', 
    'I\'m drawn to thought-provoking and emotionally charged art. Can you evoke strong feelings or reflections in me?'];

    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
        setIsCustomOptionChecked(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setInProgress(true);
        setReset(false);

        const formData = new FormData(event.target);
        const selectedValue = formData.get('radioOptions');

        getAnswers(selectedValue, artworks, setArtworks, setInProgress, remainingQuestions, setRemainingQuestions);
        setCustomOption('');
    };

    return (
        <div>
            {(remainingQuestions !== 'Final' || (remainingQuestions === 'Final' && inProgress)) && (
                <div>
                    <p className="mb-2">
                        <span className="text-pink-600 text-xl font-bold">{remainingQuestions !== 1 ? `${remainingQuestions} ` : 'Final '}</span>
                        {remainingQuestions !== 1 ? `Questions Remaining` : 'Question'}
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
                                className="ml-2 p-0.5 w-60"
                                required={isCustomOptionChecked}
                                placeholder="e.g. Do you like piña coladas?"
                            />
                        </div>
                        <button type="submit" className={inProgress ? 'rounded bg-pink-800 text-white p-2' : 'rounded bg-pink-600 text-white p-2 hover:bg-pink-800'} disabled={inProgress ? true : false}>
                            Ask Question
                        </button>
                    </form>
                </div>
            )}
            <p className={inProgress ? 'mb-4 text-pink-600 font-bold' : 'hidden'}>Please give the artworks some time to think of their replies... it may take some time.</p>
            {remainingQuestions === 'Final' && !inProgress && 
                <FinalChoice 
                    inProgress={inProgress} 
                    reveal={reveal} 
                    setReveal={setReveal} 
                    disabled={disabled} 
                    setDisabled={setDisabled} 
                    reset={reset}
                    setReset={setReset}  
                    hideReset={hideReset}
                    setHideReset={setHideReset}
                />
            }
        </div>
    );
};

export default RadioOptions;


