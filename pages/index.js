import React, { useState } from 'react'
import RadioOptions from './RadioOptions'
import ArtworkGrid from './ArtworkGrid'

export default function Home() {
  return (
    <div className="container mt-10 mx-auto mb-10">
      <h1 className="mb-4 text-2xl font-bold">Blind Date</h1>
      <p className="mb-2"><span className="font-bold">How to use:</span> Ask three hidden artworks three questions, then pick your favourite based on their answers!</p>

      <RadioOptions />
      <ArtworkGrid />

    </div>
  );
}
