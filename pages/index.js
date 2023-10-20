import QuestionsRadio from './QuestionsRadio'
import ArtworkGrid from './ArtworkGrid'

export default function Home() {

  return (
    <div className="container mt-10 mx-auto mb-10 p-4">
      <h1 className="mb-4 text-2xl font-bold text-pink-600">Art of Attraction</h1>
      <p className="mb-2">
        <span className="font-bold text-pink-600">
          How to use:&nbsp;
        </span> 
          Ask three hidden artworks three questions, then pick your favourite based on their replies!
      </p>

      <QuestionsRadio />
      <ArtworkGrid />
    </div>
  );
}
