import { useEffect, useState } from "react";

function App() {
  const [words, setWords] = useState(10);
  const [stringOfWords, setStringOfWords] = useState("");

  const refreshWords = () => {
    fetch(`https://random-word-api.herokuapp.com/word?number=${words}`)
      .then((res) => res.json())
      .then((data) => setStringOfWords(data.join(" ")));
  };

  useEffect(() => {
    refreshWords();
  }, []);

  return (
    <>
      <h1>Type++</h1>
      <div>{stringOfWords}</div>
      <button onSubmit={refreshWords}>Refresh</button>
      <textarea name="abc" id="def"></textarea>
    </>
  );
}

export default App;
