import { useState, useContext } from 'react';
import { AppStateContext } from './AppState'

const FinalChoice = () => {
    const { inProgress, reveal, setReveal, disabled, setDisabled, reset, setReset, hideReset, setHideReset } = useContext(AppStateContext);
    const [finalChoice, setFinalChoice] = useState('');

    const finalOptions = ['Number 1', 'Number 2', 'Number 3'];

    const handleSubmit = (event) => {
        event.preventDefault();

        setDisabled(true);
        setHideReset(false);

        const formData = new FormData(event.target);
        const selectedValue = formData.get('finalOptions');

        if (selectedValue === 'Number 1') {
            setReveal([true, false, false]);
        } else if (selectedValue === 'Number 2') {
            setReveal([false, true, false]);
        } else {
            setReveal([false, false, true]);
        }

        
    };

    const handleFinalChoiceChange = (event) => {
        setFinalChoice(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={inProgress ? 'hidden' : 'mb-4'}>
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
                <button type="submit" className={ disabled ? "rounded bg-pink-800 text-white p-2" : "rounded bg-pink-600 text-white p-2 hover:bg-pink-800" } disabled={disabled}>Submit</button>
            </form>
        </div>
    );

};

export default FinalChoice;