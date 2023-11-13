import { useState, useContext } from 'react';
import { AppStateContext } from '../context/AppState'

const Reset = () => {
    const { setRevealImage, setRemainingQuestions, setReset, setHideReset, setSelectedOption } = useContext(AppStateContext);

    const handleSubmit = (event) => {
        event.preventDefault();   
        
        setRevealImage([false, false, false]);
        setRemainingQuestions(3);
        setReset(true);
        setHideReset(true);
        setSelectedOption(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button className="rounded bg-pink-600 text-white p-2 hover:bg-pink-800">Reset</button>
        </form>
    );

};

export default Reset;