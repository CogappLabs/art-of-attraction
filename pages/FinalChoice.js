import { useState, useContext } from 'react';
import { AppStateContext } from '../context/AppState'

const FinalChoice = () => {
    const { inProgress, setRevealImage, buttonDisabled, setButtonDisabled, setHideReset } = useContext(AppStateContext);

    const finalOptions = ['Number 1', 'Number 2', 'Number 3'];
    const [selectedOption, setSelectedOption] = useState(0);

    const handleOptionChange = (index) => {
        setSelectedOption(index);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setButtonDisabled(true);
        setHideReset(false);

        const formData = new FormData(event.target);
        const selectedValue = formData.get('finalOptions');

        if (selectedValue === 'Number 1') {
            setRevealImage([true, false, false]);
        } else if (selectedValue === 'Number 2') {
            setRevealImage([false, true, false]);
        } else {
            setRevealImage([false, false, true]);
        }

        
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={inProgress ? 'hidden' : 'mb-4'}>
                <p className='mb-2'>Will you pick <span className="text-pink-600 font-bold">Number 1</span>, <span className="text-pink-600 font-bold">Number 2</span>, or <span className="text-pink-600 font-bold">Number 3</span>? The choice is yours!</p>
                {finalOptions.map((option, index) => (
                    <div key={index} className="mb-2">
                        <input
                            type="radio"
                            id={option}
                            name="finalOptions"
                            value={option}
                            disabled={buttonDisabled}
                            checked={index === selectedOption}
                            onChange={() => handleOptionChange(index)}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
                <button type="submit" className={ buttonDisabled ? "rounded bg-pink-800 text-white p-2" : "rounded bg-pink-600 text-white p-2 hover:bg-pink-800" } disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    );

};

export default FinalChoice;