export const getAnswers = async (question, artworks, setArtworks, setIsInProgress) => {
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

    console.log(data);

    setIsInProgress(false);

    } catch (error) {
        console.error("Error:", error);
    }
};