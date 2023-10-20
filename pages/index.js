import React, { useState } from 'react'
import RadioOptions from './RadioOptions'
import ArtworkGrid from './ArtworkGrid'

export default function Home() {
  const [remainingQuestions, setRemainingQuestions] = useState(3);
  const [inProgress, setInProgress] = useState(false);
  const [reveal, setReveal] = useState([false, false, false]);
  const [disabled, setDisabled] = useState(false);
  const [reset, setReset] = useState(false);
  const [hideReset, setHideReset] = useState(true);

  const [artworks, setArtworks] = useState([
    {
      "accessioned": "1",
      "accessionnum": "1995.32.1",
      "locationid": "8456",
      "title": "Dishes with Oysters, Fruit, and Wine",
      "displaydate": "c. 1620/1625",
      "beginyear": "1620",
      "endyear": "1625",
      "visualbrowsertimespan": "1601 to 1650",
      "medium": "oil on panel",
      "dimensions": "overall: 52.9 x 73.4 cm (20 13/16 x 28 7/8 in.)\r\nframed: 72.1 x 92.7 x 4.4 cm (28 3/8 x 36 1/2 x 1 3/4 in.)",
      "inscription": "",
      "markings": "",
      "attributioninverted": "Beert the Elder, Osias",
      "attribution": "Osias Beert the Elder",
      "provenancetext": "(Kunsthandel P. de Boer, Amsterdam); purchased 1952 by private collector, Sweden; by inheritance to his son, Sweden;[1] (sale, Sotheby's, London, 6 July 1994, no. 17); (Johnny Van Haeften, London); purchased 24 May 1995 by NGA.\r\n\r\n\r\n\r\n[1] Provenance according to 1994 Sotheby's sales catalogue.",
      "creditline": "Patrons' Permanent Fund",
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
      "lastdetectedmodification": "2023-05-09 17:01:03.48-04",
      "wikidataid": "Q20176984",
      "customprinturl": "",
      "images": [
        {
          "uuid": "d345149c-3d2d-4ffa-84ce-1c9f788244fc",
          "iiifurl": "https://api.nga.gov/iiif/d345149c-3d2d-4ffa-84ce-1c9f788244fc",
          "iiifthumburl": "https://api.nga.gov/iiif/d345149c-3d2d-4ffa-84ce-1c9f788244fc/full/!200,200/0/default.jpg",
          "viewtype": "primary",
          "sequence": "0",
          "width": "18397",
          "height": "13224",
          "maxpixels": "",
          "created": "2016-06-07 13:31:07-04",
          "modified": "2023-07-26 11:05:42-04",
          "depictstmsobjectid": "91389",
          "assistivetext": "We look slightly down onto five plates, bowls, and dishes filled with oysters, raisins, prunes, figs, and sweets along with a wine glass and decanter, a stack of round, wooden boxes, and two seashells arrayed on a wooden tabletop against a dark background in this horizontal still life painting. Closest to us to our left, eleven glistening oysters on the halfshell are arranged on a round, iron-gray dish. Also close to us, to our right, a white porcelain bowl with a wide, flaring lip is painted with blue flowers, and it is piled with breads, rolls, and pastries. Two shells sit near that bowl: one shimmering, spiraling, ivory-white shell with brown marks sits to our left and an elongated, white shell with a ruffle along its length sits in the lower right corner of the panel. Between and behind these two dishes is a vessel with a pedestal foot and a wide, shallow bowl, filled with white almonds and rods that have been covered with white sugar. In the back left, a dark gray bowl holds raisins and other dried fruit along with an object that could be a slice of bread or cheese. Opposite it, a similar dish holds brown figs that more closely resemble chestnuts. To the back right, the lid of one of the three round, shallow boxes stacked along the right edge of the composition leans against the pile. The inner lid is covered with quince paste, which resembles apricot preserves. One glass goblet with a wide bowl is nearly filled with amber-colored liquid in the back left corner, beyond the dried fruit. A glass decanter, also filled with gold-colored wine, sits to our left of the pedestal-footed vessel holding the sugared sweets, at the center of the composition. The still life is brightly lit from our left."
        }
      ],
      "primaryImage": "https://api.nga.gov/iiif/d345149c-3d2d-4ffa-84ce-1c9f788244fc/full/!200,200/0/default.jpg",
      "primaryImageHeight": "13224",
      "primaryImageWidth": "18397",
      "Theme": [
        "still life"
      ],
      "Keyword": [
        "Almonds",
        "Façon de Venise",
        "Goblet",
        "Oysters",
        "Shells",
        "Food",
        "Fruit"
      ],
      "Technique": [
        "painted surface"
      ],
      "Style": [
        "Baroque"
      ],
      "School": [
        "Flemish"
      ],
      "Systematic Catalogue Volume": [
        "Flemish Paintings of the Seventeenth Century"
      ],
      "objectID": "91389"
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
        inProgress={inProgress} 
        setInProgress={setInProgress} 
        remainingQuestions={remainingQuestions} 
        setRemainingQuestions={setRemainingQuestions}
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
        inProgress={inProgress} 
        remainingQuestions={remainingQuestions} 
        setRemainingQuestions={setRemainingQuestions}
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
