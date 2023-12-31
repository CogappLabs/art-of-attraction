export const getAnswers = async (question, artworks, setArtworks, setInProgress, remainingQuestions, setRemainingQuestions, selectedOption, setSelectedOption, questions, setQuestions, backupQuestions, setBackupQuestions) => {
    const apiKey = process.env.OPENAI_API_KEY;

    try {
        const prompt = question;
        const fullArtworks = artworks;

        let artworksTitleAndArtist = [];

        fullArtworks.forEach(obj => {
            let artworkReduced = {
                title: obj.title,
                attribution: obj.attribution
            };
            artworksTitleAndArtist.push(artworkReduced);
        });

        const response = await fetch("/api/generateAnswers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: prompt,
            artworks: artworksTitleAndArtist
        }),
    });
    const data = await response.json();

    // Todo: setArtworks with new "answer" key
    const updatedArtworks = artworks.map((artwork, index) => {
        // Assuming answersArray contains three answers
        const answer = data[index]; // Assuming answersArray and artworks array have the same length
    
        // Add a new key "answer" to each artwork object
        return { ...artwork, answer: answer };
      });
    
      // Update the artworks array with the new key using setArtworks
      setArtworks(updatedArtworks);

    if (remainingQuestions > 1) {
        setRemainingQuestions(remainingQuestions - 1);
    } else if (remainingQuestions === 1) {
        setRemainingQuestions('Final');
    }

    console.log(data);

    setInProgress(false);

    if (selectedOption === 0 || selectedOption === 1 || selectedOption === 2) {
        let nextQuestions = questions.filter(function (question) {
            return question !== questions[selectedOption];
        });
    
        nextQuestions = [
            ...nextQuestions.slice(0, selectedOption),
            backupQuestions[0],
            ...nextQuestions.slice(selectedOption)
        ];
    
        const nextBackupQuestions = backupQuestions.filter(function (question) {
            return question !== backupQuestions[0];
        });
    
        setBackupQuestions(nextBackupQuestions);
    
        setQuestions(nextQuestions);
    }



    setSelectedOption(undefined);


    } catch (error) {
        console.error("Error:", error);
    }
};