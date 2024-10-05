import React, { useState } from 'react';
import axios from 'axios';
import './RandomVerse.css';

const RandomVerse = () => {
  const [verse, setVerse] = useState({ reference: '', text: 'Click the button to get a random verse' });

  const fetchRandomVerse = async () => {
    try {
      const response = await axios.get("https://labs.bible.org/api/?passage=random&type=text");
      const responseText = response.data;

      // Split to get reference and text, ensuring we handle <b> tags
      const verseReference = responseText.split(" ")[0].replace(/<\/?b>/g, '');
      const verseText = responseText.replace(verseReference, "").trim().replace(/<\/?b>/g, '');

      
      console.log(verseReference)
      console.log(verseText)

      // Set the verse state with the reference and text
      setVerse({ reference: verseReference, text: verseText });
    } catch (error) {
      console.error("Error fetching the random verse:", error);
      setVerse({ reference: '', text: "An error occurred while fetching the verse." });
    }
  };

  return (
    <div className="verse-container">
      <h2>Random Bible Verse</h2>
      <table className="verse-table">
        <tbody>
          <tr>
            <th>Reference</th>
            <td>{verse.reference}</td>
          </tr>
          <tr>
            <th>Verse</th>
            <td>{verse.text.includes("<b>") ? <span dangerouslySetInnerHTML={{ __html: verse.text }} /> : verse.text}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={fetchRandomVerse} className="fetch-btn">Get Random Verse</button>
    </div>
  );
};

export default RandomVerse;
