import React, { useEffect, useState } from "react";

function Voices({
  language,
  setSelectedVoice,
  selectedVoice,
}: {
  language: string;
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: React.Dispatch<
    React.SetStateAction<SpeechSynthesisVoice | null>
  >;
}) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();

      // Filter voices by language
      const filteredVoices = availableVoices.filter(
        (voice) => voice.lang === language
      );

      setVoices(filteredVoices);

      // Set the default voice based on the selected language
      const defaultVoice = filteredVoices.find(
        (voice) => voice.lang === language
      );
      setSelectedVoice(defaultVoice || null);
    };

    // Fetch voices when the component mounts and whenever they change
    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;
  }, [language]);

  return (
    <div className="bg-transparent flex flex-col">
      <label htmlFor="voiceSelect" className="text-white font-semibold">
        Select Voice:
      </label>

      {voices.length > 0 && (
        <select
          id="voiceSelect"
          name="voiceSelect"
          defaultValue={selectedVoice?.name || ""}
          onChange={(e) =>
            setSelectedVoice(
              voices.find((voice) => voice.name === e.target.value) || null
            )
          }
          className="bg-transparent border-2 rounded-md border-gray-500"
        >
          {voices.map((voice: SpeechSynthesisVoice, index: number) => (
            <option value={voice.name} key={index}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Voices;
