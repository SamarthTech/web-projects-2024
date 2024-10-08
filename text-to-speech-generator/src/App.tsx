import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextToSpeech from "./components/TextToSpeech";

function App() {
  return (
    <div className="App font-mono bg-gradient-to-r from-green-400 to-yellow-400 h-screen">
      <TextToSpeech />
    </div>
  );
}

export default App;
