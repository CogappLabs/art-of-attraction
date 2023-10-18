import React, { useState } from 'react'
import RadioOptions from './RadioOptions'
import ArtworkGrid from './ArtworkGrid'

export default function Home() {
  const apiKey = process.env.OPENAI_API_KEY;

  const HandleButtonClick = async () => {
    try {
      const prompt = "Tell me something about yourself...";

      const response = await fetch("/api/generateAnswers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: prompt
        }),
      });
      const data = await response.json();

      console.log(data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-10 mx-auto mb-10">
      <h1 className="mb-4 text-2xl font-bold">Blind Date</h1>
      <p className="mb-2"><span className="font-bold">How to use:</span> Ask three hidden artworks three questions, then pick your favourite based on their answers!</p>

      <RadioOptions />
      <ArtworkGrid />

      <button className="font-bold rounded-md bg-violet-600 text-white hover:bg-white hover:text-violet-600 active:bg-white active:text-violet-600 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sky-400 p-2" onClick={HandleButtonClick}>Play Now</button>

    </div>
  );
}
