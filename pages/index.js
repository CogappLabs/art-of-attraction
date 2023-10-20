import React, { useState } from 'react'
import RadioOptions from './RadioOptions'
import ArtworkGrid from './ArtworkGrid'

export default function Home() {
  const [counter, setCounter] = useState(3);
  const [isInProgress, setIsInProgress] = useState(false);
  const [reveal, setReveal] = useState([false, false, false]);
  const [disabled, setDisabled] = useState(false);
  const [reset, setReset] = useState(false);
  const [hideReset, setHideReset] = useState(true);

  const [artworks, setArtworks] = useState([
    {
      "accessioned": "1",
      "accessionnum": "2001.72.1",
      "locationid": "",
      "title": "Tomorrow I May Be Far Away",
      "displaydate": "1967",
      "beginyear": "1967",
      "endyear": "1967",
      "visualbrowsertimespan": "1951 to 1975",
      "medium": "collage of various papers with charcoal, graphite and paint on paper mounted to canvas",
      "dimensions": "overall: 116.8 x 142.2 cm (46 x 56 in.)",
      "inscription": "upper right: Romare Bearden",
      "markings": "",
      "attributioninverted": "Bearden, Romare",
      "attribution": "Romare Bearden",
      "provenancetext": "(Cordier & Ekstrom Gallery, New York); (Dintenfass Gallery, New York); Estate of Robert Lang, Rye, New York; James D. Julia, Maine; (Michael Rosenfeld Gallery, New York); purchased 2001 by NGA.",
      "creditline": "Paul Mellon Fund",
      "classification": "Drawing",
      "subclassification": "",
      "visualbrowserclassification": "drawing",
      "parentid": "",
      "isvirtual": "0",
      "departmentabbr": "CG-W",
      "portfolio": "",
      "series": "",
      "volume": "",
      "watermarks": "",
      "lastdetectedmodification": "2023-05-09 17:01:03.48-04",
      "wikidataid": "Q64629655",
      "customprinturl": "https://customprints.nga.gov/detail/507077/bearden-tomorrow-i-may-be-far-away-1967",
      "images": [
        {
          "uuid": "ff96f3bc-7f92-42f1-8836-a8c91b80fea9",
          "iiifurl": "https://api.nga.gov/iiif/ff96f3bc-7f92-42f1-8836-a8c91b80fea9",
          "iiifthumburl": "https://api.nga.gov/iiif/ff96f3bc-7f92-42f1-8836-a8c91b80fea9/full/!200,200/0/default.jpg",
          "viewtype": "primary",
          "sequence": "0",
          "width": "5669",
          "height": "4682",
          "maxpixels": "640",
          "created": "2011-02-15 12:11:03-05",
          "modified": "2023-07-26 10:44:37-04",
          "depictstmsobjectid": "119052",
          "assistivetext": "Made with mostly square or rectangular pieces of patterned paper in shades of asparagus and moss green, sky blue, tan, and ash brown, a man with brown skin sits in the center of this horizontal composition with a second person over his shoulder, in the upper left corner of this collage. The man’s facial features are a composite of cut-outs, mostly in shades of brown and gray, as if from black-and white photographs, and he smokes a cigarette. He sits with his body angled slightly to our right and he looks off in that direction, elbows resting on thighs and wrists crossed. His button-down shirt and pants, similarly collaged, are mottled with sky blue and white. One foot, on our right, is created with a cartoonish, shoe-shaped, black silhouette. The paper used for the other foot seems to have been scraped and scratched, creating the impression that that foot is bare. A tub, made of the same blue and white paper of the man’s suit, sits on the ground to our left, in the lower corner. The man sits in front of an expanse made up of green and brown pieces of paper patterned with wood grain, which could be a cabin. In a window in the upper left, a woman’s face, her features similarly collaged, looks out at us. One dark hand, large in relation to the people, rests on the sill with the fingers extended down the side of the house. The right third of the composition is filled collaged scraps of paper patterned to resemble leafy trees. Closer inspection reveals the form of a woman, smaller in scale than the other two, standing in that zone, facing our left in profile near a gray picket fence. She has a brown face, her hair wrapped in a patterned covering, and she holds a watermelon-sized, yellow fruit with brown stripes. Several blue birds and a red-winged blackbird fly and stand nearby. Above the woman and near the top of the composition, a train puffs along the top of what we read as the tops of trees. The artist signed the work in black letters in the upper right corner: “romare bearden.”"
        }
      ],
      "primaryImage": "https://api.nga.gov/iiif/ff96f3bc-7f92-42f1-8836-a8c91b80fea9/full/!200,200/0/default.jpg",
      "primaryImageHeight": "4682",
      "primaryImageWidth": "5669",
      "School": [
        "American"
      ],
      "Theme": [
        "daily life",
        "male"
      ],
      "Keyword": [
        "African American subject"
      ],
      "Technique": [
        "collage"
      ],
      "objectID": "119052"
    },
    {
        "accessioned": "1",
        "accessionnum": "1963.10.94",
        "locationid": "8687",
        "title": "The Boating Party",
        "displaydate": "1893/1894",
        "beginyear": "1893",
        "endyear": "1894",
        "visualbrowsertimespan": "1876 to 1900",
        "medium": "oil on canvas",
        "dimensions": "overall: 90 x 117.3 cm (35 7/16 x 46 3/16 in.)\r\nframed: 112.1 x 137.8 cm (44 1/8 x 54 1/4 in.)",
        "inscription": "",
        "markings": "",
        "attributioninverted": "Cassatt, Mary",
        "attribution": "Mary Cassatt",
        "provenancetext": "The artist [1844-1926] until at least 1918;[1] (Durand-Ruel, New York); sold 1 October 1929 to Chester Dale [1883-1962], New York; bequest 1963 to NGA.\r\n\r\n[1]See 12 February 1914 letter from the artist to Durand-Ruel, in Lionell Venturi, Les archives de l'impressionism, 2 vols., Paris and New York, 1939: II:133.  Lent by Cassatt to US traveling exhibition _Six American Women_, 1917-1918.",
        "creditline": "Chester Dale Collection",
        "classification": "Painting",
        "subclassification": "",
        "visualbrowserclassification": "painting",
        "parentid": "",
        "isvirtual": "0",
        "departmentabbr": "CF",
        "portfolio": "",
        "series": "",
        "volume": "",
        "watermarks": "",
        "lastdetectedmodification": "2023-05-09 17:01:03.48-04",
        "wikidataid": "Q15876324",
        "customprinturl": "https://customprints.nga.gov/detail/461041/cassatt-the-boating-party-18931894",
        "images": [
            {
                "uuid": "da9ff160-755f-4f9a-a78c-75727ce61a3b",
                "iiifurl": "https://api.nga.gov/iiif/da9ff160-755f-4f9a-a78c-75727ce61a3b",
                "iiifthumburl": "https://api.nga.gov/iiif/da9ff160-755f-4f9a-a78c-75727ce61a3b/full/!200,200/0/default.jpg",
                "viewtype": "primary",
                "sequence": "0",
                "width": "18412",
                "height": "14191",
                "maxpixels": "",
                "created": "2017-02-15 11:09:18-05",
                "modified": "2023-07-26 11:04:54-04",
                "depictstmsobjectid": "46569",
                "assistivetext": "We look slightly down into a lime-green and white rowboat carrying a woman holding a baby and a man in this nearly square painting. The man wears midnight-blue shoes, pants, jacket, and soft, floppy cap. He sits with his back to us, bending forward to row the boat, which is cropped by the bottom edge of the canvas. The left side of his ruddy face is visible over his left shoulder. The woman and baby both have pale skin. The woman and baby sit across from the man, facing us to our left in the bow. The woman’s long-sleeved, sky-blue dress is crosshatched with pink lines. The baby leans back in the woman’s arms, and wears a pink dress, blue socks, and brown shoes. The wide-brimmed hats on both the woman and baby are painted pale celery green. They gaze toward or just past the man. The corner of the boat’s sail, also painted pale green, is pulled taunt by the wind to our left. Azure-blue water surrounds the boat up to the high horizon line, which brushes the top edge of the painting. The shoreline in the distance is lined with trees and dotted with white houses with red roofs."
            }
        ],
        "primaryImage": "https://api.nga.gov/iiif/da9ff160-755f-4f9a-a78c-75727ce61a3b/full/!200,200/0/default.jpg",
        "primaryImageHeight": "14191",
        "primaryImageWidth": "18412",
        "Keyword": [
            "Boating"
        ],
        "Theme": [
            "amusement"
        ],
        "Style": [
            "Impressionist"
        ],
        "School": [
            "American"
        ],
        "Technique": [
            "painted surface"
        ],
        "objectID": "46569"
    },
    {
      "accessioned": "1",
      "accessionnum": "1986.4.1",
      "locationid": "",
      "title": "Winter: Cat on a Cushion (L'hiver: Chat sur un coussin)",
      "displaydate": "",
      "beginyear": "1859",
      "endyear": "1923",
      "visualbrowsertimespan": "1851 to 1875",
      "medium": "color lithograph",
      "dimensions": "sheet: 45 x 57.7 cm (17 11/16 x 22 11/16 in.)",
      "inscription": "upper right in plate artist's monogram; lower right /in graphite: Steinlen",
      "markings": "",
      "attributioninverted": "Steinlen, Théophile Alexandre",
      "attribution": "Théophile Alexandre Steinlen",
      "provenancetext": "",
      "creditline": "Gift of Lesley Hughes",
      "classification": "Print",
      "subclassification": "",
      "visualbrowserclassification": "print",
      "parentid": "",
      "isvirtual": "0",
      "departmentabbr": "CG-E",
      "portfolio": "",
      "series": "",
      "volume": "",
      "watermarks": "",
      "lastdetectedmodification": "2023-05-10 13:28:58.583-04",
      "wikidataid": "Q74071217",
      "customprinturl": "",
      "images": [
        {
          "uuid": "16943d3f-1589-4d52-b613-80856cec6ba2",
          "iiifurl": "https://api.nga.gov/iiif/16943d3f-1589-4d52-b613-80856cec6ba2",
          "iiifthumburl": "https://api.nga.gov/iiif/16943d3f-1589-4d52-b613-80856cec6ba2/full/!200,200/0/default.jpg",
          "viewtype": "primary",
          "sequence": "0",
          "width": "4736",
          "height": "3711",
          "maxpixels": "",
          "created": "2010-09-01 11:39:07-04",
          "modified": "2023-07-27 15:46:52-04",
          "depictstmsobjectid": "66755",
          "assistivetext": ""
        }
      ],
      "primaryImage": "https://api.nga.gov/iiif/16943d3f-1589-4d52-b613-80856cec6ba2/full/!200,200/0/default.jpg",
      "primaryImageHeight": "3711",
      "primaryImageWidth": "4736",
      "Technique": [
        "lithograph"
      ],
      "Keyword": [
        "Cat"
      ],
      "Theme": [
        "mammal"
      ],
      "School": [
        "French"
      ],
      "objectID": "66755"
    }
  ]);

  return (
    <div className="container mt-10 mx-auto mb-10">
      <h1 className="mb-4 text-2xl font-bold text-pink-600">Blind Date</h1>
      <p className="mb-2"><span className="font-bold text-pink-600">How to use:</span> Ask three hidden artworks three questions, then pick your favourite based on their answers!</p>

      <RadioOptions 
        artworks={artworks} 
        setArtworks={setArtworks} 
        isInProgress={isInProgress} 
        setIsInProgress={setIsInProgress} 
        counter={counter} 
        setCounter={setCounter}
        reveal={reveal} 
        setReveal={setReveal}
        disabled={disabled} 
        setDisabled={setDisabled}
        reset={reset}
        setReset={setReset}
        hideReset={hideReset}
        setHideReset={setHideReset}/>
      <ArtworkGrid 
        artworks={artworks} 
        isInProgress={isInProgress} 
        counter={counter} 
        setCounter={setCounter}
        reveal={reveal} 
        setReveal={setReveal}
        disabled={disabled} 
        setDisabled={setDisabled}
        reset={reset}
        setReset={setReset}
        hideReset={hideReset}
        setHideReset={setHideReset}/>
    </div>
  );
}
