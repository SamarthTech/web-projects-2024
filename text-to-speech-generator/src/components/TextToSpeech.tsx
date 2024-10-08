import React, { useEffect, useState } from "react";
import Voices from "./Voices";

const TextToSpeech = () => {
  const [text, setText] = useState<string>("");
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);
  const [language, setLanguage] = useState<string>("en-US");
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!isSpeaking) handleStop();
    else handleSpeech();
  }, [isSpeaking, language]);
  const handleSpeech = () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      setIsSpeaking(false);
      return;
    }

    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Custom settings
    utterance.pitch = 1.2;
    utterance.voice = selectedVoice;
    utterance.rate = 1;
    utterance.volume = 0.8;
    console.log(language);
    utterance.lang = language;

    // Speak the text
    window.speechSynthesis.speak(utterance);
    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
  };
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="bg-transparent text-white">
      <h1 className="text-xl font-semibold">Text to Speech Converter</h1>
      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
        className="bg-transparent text-white outline-none w-[90%] text-md border-gray-500 border-2 rounded-md p-2"
      />
      <br />
      <div className="flex items-center w-full justify-center text-gray-700 bg-transparent flex-col">
        <label htmlFor="languageSelect" className="text-white font-semibold">
          Select Language:
        </label>

        <select
          name="languageSelect"
          onChange={handleLanguageChange}
          className="bg-inherit outline-none border-gray-500 border-2 rounded-md"
          defaultValue={language}
        >
          <option value="en-US">English (US)</option>
          <option value="ru-RU">Russian</option>
          <option value="es-ES">Spanish</option>
          <option value="de-DE">German</option>
          <option value="it-IT">Italian</option>
          <option value="fr-FR">French</option>
          <option value="zh-CN">Chinese (Simplified)</option>
          <option value="ja-JP">Japanese</option>
          <option value="ko-KR">Korean</option>
          <option value="pt-BR">Portuguese (Brazil)</option>
          <option value="vi-VN">Vietnamese</option>
        </select>
        <Voices
          selectedVoice={selectedVoice}
          setSelectedVoice={setSelectedVoice}
          language={language}
        />
        <button
          className={` " rounded-[30px] overflow-hidden  p-3 bg-opacity-50" ${
            isSpeaking && "bg-yellow-500"
          }`}
          onClick={() => setIsSpeaking((prev) => !prev)}
        >
          <img
            alt="icon-mic"
            src="/mic.png"
            className="md:w-[60px] w-[30px] "
          />
        </button>
      </div>
      {/* Show the download link if an audio URL is available */}
      {audioUrl && (
        <div className="mt-4">
          <a
            href={audioUrl}
            download="speech.wav"
            className="text-blue-500 underline"
          >
            Download Speech as .wav
          </a>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
