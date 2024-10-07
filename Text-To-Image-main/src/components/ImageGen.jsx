import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const API_TOKEN = process.env.REACT_APP_HUGGING_FACE_API_TOKEN;

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [input, setinput] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input || loading) {
      return;
    }
    setOutput(null);
    setLoading(true);

    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      alert("error occured while generation the image");
      setLoading(false);
      // throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  const handleDownload = () => {
    if (output) {
      const link = document.createElement("a");
      link.href = output;
      link.download = "ai_generated_image.png";
      link.click();
    }
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const PlaceholderChanger = () => {
    const originalTexts = useMemo(
      () => [
        "Android assassin on a rainy rooftop",
        "Playful cat in a field of flowers",
        "A lone wanderer searching for hope in a post-apocalyptic world",
        "Team of superheroes saving the world",
        "Peaceful lakeside surrounded by lush greenery",
        "Cozy cabin in snowy mountains",
        "Caped crusader protecting the city",
        "Vintage cafe in a bustling city",
        "Happy dogs wagging their tails",
        "Cool and confident swordsman with silver hair",
      ],
      []
    );
    const [texts, setTexts] = useState([]);

    useEffect(() => {
      setTexts(shuffleArray(originalTexts));
    }, [originalTexts]);

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 100000);

      return () => {
        clearInterval(interval);
      };
    }, [texts]);

    return texts.length > 0 && texts[currentTextIndex];
  };

  return (
    <motion.div
      className="body al-c md:pl-56 md:pt-24 pt-16 font-Display"
      initial={{ opacity: 0, x: -240 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 2.3,
        },
      }}
    >
      <h1 className="text-4xl text-center md:text-left md:text-6xl font-extrabold">
        Imagilearn
      </h1>

      <p className="text-center md:text-left md:ml-5">
        AI-Powered Creativity for All
      </p>

      <label className="font-medium block md:mt-20 mt-8 pl-6 md:pl-0">
        Prompt:
      </label>

      <form className="mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          onChange={(e) => setinput(e.target.value)}
          placeholder={String(PlaceholderChanger())}
          className="border border-black placeholder-gray font-light text-darkorange focus:outline-darkorange focus:border-pxorange md:px-4 md:py-3 md:w-3/6 px-3 py-2 w-5/6 md:ml-0 ml-6"
        />

        <button disabled={loading}>
          <a
            href="#_"
            className="relative inline-flex items-center justify-center md:p-4 md:px-6 md:py-3 md:ml-6 px-3 py-2 ml-6 overflow-hidden font-normal text-pxorange transition duration-500 ease-out border border-black group md:mt-0 mt-4"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-pxorange duration-500 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-500 transform group-hover:translate-x-full ease bg-pxorange">
              Create image
            </span>
            <span className="relative invisible">Create image</span>
          </a>
        </button>
      </form>

      {loading && (
        <div className="ml-6 mt-3 md:mt-5 md:ml-0">
          Generating your image...
        </div>
      )}
      {!loading && output && (
        <motion.div
          initial={{ opacity: 0, x: -240 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 1.6,
            },
          }}
          className="result-artwork md:mt-10 md:flex md:items-end mt-5 md:ml-0 ml-6"
        >
          <img
            src={output}
            alt="artwork"
            style={{
              width: "256px",
              height: "256px",
              border: "1px solid black",
              padding: "5px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                ease: "easeInOut",
                duration: 3.6,
              },
            }}
          >
            <button
              className="bg-black border border-black hover:bg-darkorange transition-color duration-500 text-white font-normal py-2 px-4 inline-flex items-center md:ml-5 md:mt-0 mt-4"
              onClick={handleDownload}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ImageGenerationForm;
