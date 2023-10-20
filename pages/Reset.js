import { useState } from 'react';

const Reset = ({reveal, setReveal, counter, setCounter, reset, setReset, hideReset, setHideReset }) => {
    const handleSubmit = (event) => {
        event.preventDefault();   
        
        setReveal([false, false, false]);
        setCounter(3);
        setReset(true);
        setHideReset(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <button className="rounded bg-pink-600 text-white p-2 hover:bg-pink-800">Reset Game</button>
        </form>
    );

};

export default Reset;