import { useState, useContext } from 'react';
import { AppStateContext } from '../context/AppState'

const Reset = () => {
    const { setRevealImage, setRemainingQuestions, setReset, setHideReset, setSelectedOption, setButtonDisabled, setShowConfetti, setQuestions, setBackupQuestions } = useContext(AppStateContext);

    const handleSubmit = (event) => {
        event.preventDefault();   
        
        setRevealImage([false, false, false]);
        setRemainingQuestions(3);
        setReset(true);
        setHideReset(true);
        setSelectedOption(0);
        setButtonDisabled(false);
        setShowConfetti(false);

        setQuestions([
            'I love spending time looking at beautiful scenery, do you think I\'ll enjoy looking at you?', 
            'My home is filled with interesting objects that each have a unique story, do you think you\'d fit in there?', 
            'I\'m drawn to thought-provoking and emotionally charged art. Can you evoke strong feelings or reflections in me?' 
        ]);

        setBackupQuestions([        
            "I find myself captivated by vibrant and lively atmospheres. Does your presence bring a burst of energy and color that could light up my space?",
            "Quiet evenings with a good book are my sanctuary. Would your essence add to the tranquility and depth of such moments in my life?",
            "I have a passion for stories and narratives that span different cultures and times. Do you carry tales or inspirations from far-off places or eras?"
        ]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button className="rounded bg-pink-600 text-white p-2 hover:bg-pink-800">Reset</button>
        </form>
    );

};

export default Reset;