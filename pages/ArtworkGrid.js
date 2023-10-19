import { useState } from 'react';

const ArtworkGrid = () => {
    const [customOption, setCustomOption] = useState('');
    const artworks = [
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
        }
    ];

    const handleCustomOptionChange = (event) => {
        setCustomOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
        console.log('Form submitted!', customOption);
    };

    return (
        <div className="grid grid-cols-3 gap-x-2">
            {artworks.map((artwork, index) => (
                <div key={index}>
                    <div className="bg-pink-600 h-60 w-40"></div>
                    <h2>{artwork.label}</h2>
                </div>
            ))}
        </div>
    );
};

export default ArtworkGrid;