import { useState, useContext, useRef } from 'react';
import { getAnswers } from '../utils/getAnswers';
import FinalChoice from './FinalChoice'; 
import { AppStateContext } from '../context/AppState'

const QuestionsRadio = () => {
    const { artworks, setArtworks, inProgress, setInProgress, remainingQuestions, setRemainingQuestions, setReset, selectedOption, setSelectedOption } = useContext(AppStateContext);
    const inputRef = useRef();
    const customRef = useRef();

    const handleOptionChange = (index) => {
        setSelectedOption(index);
    };

    const [customQuestion, setCustomQuestion] = useState('');
    const [isCustomQuestionChecked, setIsCustomQuestionChecked] = useState(false);

    const stagesQuestions = [
        [
          "I love spending time looking at beautiful scenery, do you think I'll enjoy looking at you?",
          "My home is filled with interesting objects that each have a unique story, do you think you'd fit in there?",
          "I'm drawn to thought-provoking and emotionally charged art. Can you evoke strong feelings or reflections in me?",
        ],
        [
          "I find myself captivated by vibrant and lively atmospheres. Does your presence bring a burst of energy and color that could light up my space?",
          "Quiet evenings with a good book are my sanctuary. Would your essence add to the tranquility and depth of such moments in my life?",
          "I have a passion for stories and narratives that span different cultures and times. Do you carry tales or inspirations from far-off places or eras?",
        ],
        [
          "I often seek solace in simplicity and minimalism. Do you embody a sense of calm and understated elegance that would resonate with my sense of peace?",
          "My world is often filled with the hustle and bustle of the modern day. Can you provide a window to a different perspective, perhaps a slower, more thoughtful view of the world?",
          "I am intrigued by mysteries and the unexplained. Do you hold secrets or layers of meaning that would challenge my curiosity and intellect?",
        ],
      ];
    
      // Calculate the current stage
      // I'm sorry that the 4 is hardcoded here :(
      const currentStage = 4 - remainingQuestions; // 3 -> 1, 2 -> 2, 1 -> 3
    
      // Select questions based on the current stage
      const questions = stagesQuestions[currentStage - 1];

    const handleCustomQuestionChange = (event) => {
        setCustomQuestion(event.target.value);
        setIsCustomQuestionChecked(event.target.checked);
        inputRef.current.focus();
        setSelectedOption(questions.length+1);
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
                                <input 
                                    type="radio" 
                                    id={`question-${index}`} 
                                    name="radioOptions" 
                                    value={question} 
                                    className="mr-2" 
                                    required
                                    disabled={inProgress}
                                    checked={index === selectedOption}
                                    onChange={() => handleOptionChange(index)}
                                />
                                <label htmlFor={`question-${index}`}>
                                    {question}
                                </label>
                            </div>
                        ))}
                        <div className="mb-2">
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
                            <label htmlFor="customQuestion">
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


