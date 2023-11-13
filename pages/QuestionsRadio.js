import { useState, useContext, useRef } from 'react';
import { getAnswers } from '../utils/getAnswers';
import FinalChoice from './FinalChoice'; 
import { AppStateContext } from '../context/AppState'

const QuestionsRadio = () => {
    const { artworks, setArtworks, inProgress, setInProgress, remainingQuestions, setRemainingQuestions, setReset } = useContext(AppStateContext);
    const inputRef = useRef();
    const customRef = useRef();
    const [customQuestion, setCustomQuestion] = useState('');
    const [isCustomQuestionChecked, setIsCustomQuestionChecked] = useState(false);

    const questions = ['I love spending time looking at beautiful scenery, do you think I\'ll enjoy looking at you?', 
    'My home is filled with interesting objects that each have a unique story, do you think you\'d fit in there?', 
    'I\'m drawn to thought-provoking and emotionally charged art. Can you evoke strong feelings or reflections in me?'];

    const handleCustomQuestionChange = (event) => {
        setCustomQuestion(event.target.value);
        setIsCustomQuestionChecked(event.target.checked);
        inputRef.current.focus();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setInProgress(true);
        setReset(false);

        const formData = new FormData(event.target);
        const selectedValue = formData.get('radioOptions');

        getAnswers(selectedValue, artworks, setArtworks, setInProgress, remainingQuestions, setRemainingQuestions);
        setCustomQuestion('');
    };

    return (
        <div>
            {(remainingQuestions !== 'Final' || (remainingQuestions === 'Final' && inProgress)) && (
                <div>
                    <p className="mb-2">
                        <span className="text-pink-600 text-xl font-bold">
                            {remainingQuestions !== 1 ? `${remainingQuestions} ` : 'Final '}
                        </span>
                        
                        {remainingQuestions !== 1 ? `Questions Remaining` : 'Question'}

                    </p>
                    <form onSubmit={handleSubmit} className="mb-4">
                        {questions.map((question, index) => (
                            <div key={index} className="mb-2">
                                <label htmlFor={question}>
                                    <input 
                                        type="radio" 
                                        id={question} 
                                        name="radioOptions" 
                                        value={question} 
                                        className="mr-2" 
                                        required
                                        disabled={inProgress}
                                    />
                                    {question}
                                </label>
                            </div>
                        ))}
                        <div className="mb-2">
                            <label htmlFor="customQuestion">
                                <input
                                    ref={customRef}
                                    type="radio"
                                    id="customQuestion"
                                    name="radioOptions"
                                    value={customQuestion}
                                    onChange={handleCustomQuestionChange}
                                    className="mr-2"
                                    required
                                    disabled={inProgress}
                                />
                                Other:
                            </label>
                            <input
                                ref={inputRef}
                                type="text"
                                id="customQuestionInput"
                                value={customQuestion}
                                onChange={handleCustomQuestionChange}
                                className="ml-2 p-0.5 w-60"
                                required={isCustomQuestionChecked}
                                placeholder="e.g. Do you like piña coladas?"
                                disabled={inProgress}
                                onFocus={() => {
                                    customRef.current.checked = true;
                                }}
                            />
                        </div>
                        <button type="submit" className={inProgress ? 'rounded bg-pink-800 text-white p-2' : 'rounded bg-pink-600 text-white p-2 hover:bg-pink-800'} disabled={inProgress}>
                            {inProgress ? 'Holding on for Love...' : 'Ask Question'}
                        </button>
                    </form>
                </div>
            )}
            <p className={inProgress ? 'mb-4 text-pink-600 font-bold' : 'hidden'}>
                Please give the artworks some time to think of their replies... it may take some time.
            </p>
            {remainingQuestions === 'Final' && !inProgress && <FinalChoice />}
        </div>
    );
};

export default QuestionsRadio;


