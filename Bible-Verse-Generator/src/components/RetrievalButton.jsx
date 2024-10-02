import React, { useState } from 'react';
import axios from 'axios';
import './RetrievalButton.css'; // Make sure to create this CSS file

/**
 * Component to retrieve a specific Bible verse from labs.bible.org API.
 */
const RetrievalButton = () => {
  // State variables to store user input
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const [retrievedVerse, setRetrievedVerse] = useState('');
  const [error, setError] = useState(null);

  /**
   * Function to handle form submission and make API call.
   */
  const fetchVerse = async () => {
    // Check if all fields are filled
    if (!book || !chapter || !verse) {
      setError('Please fill in all fields!');
      return;
    }

    // Create the passage string
    const passage = `${book} ${chapter}:${verse}`;
    try {
      // Make the API call
      const response = await axios.get(`https://labs.bible.org/api/?passage=${encodeURIComponent(passage)}&type=text`);
      const responseData = response.data; // API returns a plain text verse

      setRetrievedVerse(responseData.replace(/<\/?b>/g, ''));
      setError(null);
    } catch (error) {
      console.error("Error fetching the specified verse:", error);
      setError("An error occurred while fetching the verse.");
      setRetrievedVerse('');
    }
  };

  return (
    <div className="retrieval-container">
      <h2>Retrieve Bible Verse</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="input-container">
        <input
          type="text"
          placeholder="Book Name (e.g. John)"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Chapter (e.g. 3)"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Verse (e.g. 16)"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={fetchVerse} className="fetch-btn">Retrieve Verse</button>

      {retrievedVerse && (
        <p className="verse-text">{retrievedVerse}</p>
      )}
    </div>
  );
};

export default RetrievalButton;