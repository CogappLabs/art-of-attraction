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
      "accessionnum": "1949.6.1",
      "locationid": "",
      "title": "Self-Portrait",
      "displaydate": "c. 1630",
      "beginyear": "1630",
      "endyear": "1630",
      "visualbrowsertimespan": "1601 to 1650",
      "medium": "oil on canvas",
      "dimensions": "overall: 74.6 × 65.1 cm (29 3/8 × 25 5/8 in.)\r\nframed: 99.7 × 91.12 × 8.89 cm (39 1/4 × 35 7/8 × 3 1/2 in.)",
      "inscription": "",
      "markings": "",
      "attributioninverted": "Leyster, Judith",
      "attribution": "Judith Leyster",
      "provenancetext": "Possibly the painting identified as a painting by Frans Hals depicting his daughter at the easel that appeared in four London sales between 1810 and 1812.[1] E.M. Grainger, Hastings, Sussex; Mrs. Granger, Bexhil-on-Sea, East Sussex;[2] (sale, Christie, Manson & Woods, London, 16 April 1926, no. 115); purchased by E. Smith, probably for a London dealer.[3] private collection, New York, in 1928.[4] (Ehrich Galleries, New York); purchased 9 May 1929 by Mr. and Mrs. Robert Woods Bliss, Washington, D.C.;[5] gift 1949 to NGA.\r\n\r\n\r\n[1] This suggestion was made by Burton Fredericksen. In a letter of 12 December 2002 to Arthur Wheelock (in NGA curatorial files) Fredericksen writes that the lack of recorded dimensions, the low price at which the painting was bought in, and the fact that it was part of a group of minor paintings prevent a firm conclusion, although paintings by Hals did not bring high prices at the beginning of the nineteenth century. For the first three sales, the painting was described as _The Portrait of F. Hals' Daughter_ by F. Hals; for the fourth sale it was _The Painter's Daughter at her Easel_, also by Hals.  The sales are as follows:  consigned by a Dr. Biam (or Byam) along with four other paintings to Christie's, London, 7 July 1810, no. 161, bought in; the same consignor to Christie's, London, 8 March 1811, no. 65, bought in; consigned by \"Pritchard\" to Christie's, London, 19 April 1811, no. 157; anonymous consignor to Peter Coxe, London, 3 June 1812, no. 28, bought in.\r\n\r\n[2] Lynda McLeod, Librarian, Christie’s Archives, kindly provided the name of the consignor; see her e-mail of 1 August 2012, in NGA curatorial files. Despite the slight difference in the spelling of the last name, E.M. Grainger and Mrs. Granger were likely related.\r\n\r\n[3] Information on this purchaser is from an annotated copy of the 1926 sale catalogue, and various articles in London papers giving the sale results; copies in NGA curatorial files.\r\n\r\n[4] The owner of the painting is identified in this way in Wilhelm R. Valentiner, \"Rediscovered Paintings by Frans Hals,\" _Art in America_ 16 (1928): 239, fig. 2.\r\n\r\n[5] The purchase date is in the donor's collection records for the painting, in NGA curatorial files.",
      "creditline": "Gift of Mr. and Mrs. Robert Woods Bliss",
      "classification": "Painting",
      "subclassification": "",
      "visualbrowserclassification": "painting",
      "parentid": "",
      "isvirtual": "0",
      "departmentabbr": "CNE-B",
      "portfolio": "",
      "series": "",
      "volume": "",
      "watermarks": "",
      "lastdetectedmodification": "2023-09-15 22:01:37.343-04",
      "wikidataid": "Q18888002",
      "customprinturl": "https://customprints.nga.gov/detail/461293/leyster-self-portrait-c.-1630",
      "images": [
        {
          "uuid": "440fe0d2-b4ca-4afc-a33e-2d4683ece38f",
          "iiifurl": "https://api.nga.gov/iiif/440fe0d2-b4ca-4afc-a33e-2d4683ece38f",
          "iiifthumburl": "https://api.nga.gov/iiif/440fe0d2-b4ca-4afc-a33e-2d4683ece38f/full/!200,200/0/default.jpg",
          "viewtype": "primary",
          "sequence": "0",
          "width": "28841",
          "height": "32922",
          "maxpixels": "",
          "created": "2022-06-16 18:10:54-04",
          "modified": "2023-09-15 22:27:18.41-04",
          "depictstmsobjectid": "37003",
          "assistivetext": "Shown from about the waist up, a woman with smooth, pale skin sits in a chair facing our right in front of a canvas on an easel in this vertical portrait. She leans onto her right elbow, which rests on the seat back. She turns her face to look at us, lips slightly parted. Her dress has a black bodice and a deep rose-pink skirt and sleeves. She wears a translucent white cap over her hair, which has been tightly pulled back. A stiff, white, plate-like ruff encircles her neck and reaches to her shoulders. She holds a paintbrush in her right hand and clutches about twenty brushes, a wooden paint palette, and a rag in her left hand, at the bottom right of the canvas. The painting behind her shows a man wearing robin's egg-blue and playing a violin."
        }
      ],
      "primaryImage": "https://api.nga.gov/iiif/440fe0d2-b4ca-4afc-a33e-2d4683ece38f/full/!200,200/0/default.jpg",
      "primaryImageHeight": "32922",
      "primaryImageWidth": "28841",
      "Systematic Catalogue Volume": [
        "Dutch Paintings of the Seventeenth Century (NGA Online Editions)"
      ],
      "Style": [
        "Baroque"
      ],
      "Keyword": [
        "Leyster, Judith"
      ],
      "School": [
        "Dutch"
      ],
      "Theme": [
        "self"
      ],
      "Technique": [
        "painted surface"
      ],
      "objectID": "37003"
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
    <div className="container mt-10 mx-auto mb-10 p-4">
      <h1 className="mb-4 text-2xl font-bold text-pink-600">Art of Attraction</h1>
      <p className="mb-2"><span className="font-bold text-pink-600">How to use:</span> Ask three hidden artworks three questions, then pick your favourite based on their replies!</p>

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
