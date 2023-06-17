import React, { useState } from 'react';
import './index.css';

function App() {
  //useState is a special function that helps us manage and update data in our app.
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const { value } = event.target;
    setText(value);

    // Count the number of words
    const words = value.trim().split(/\s+/);
    setWordCount(words.length);
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          className="text-area"
          rows="6"
          value={text}
          onChange={handleTextChange}
          placeholder="Type here..."
        ></textarea>
        <div className="word-count">Word Count: {wordCount}</div>
      </div>
    </div>
  );
}

export default App;
