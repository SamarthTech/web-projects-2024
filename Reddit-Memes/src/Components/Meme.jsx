import React, { useState, useEffect } from 'react';
import "../index.css"

const Meme = () => {
  const [memeData, setMemeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMeme, setSelectedMeme] = useState(null);

  const fetchMeme = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://meme-api.com/gimme');
      if (response.ok) {
        const data = await response.json();
        setMemeData(data);
        setLoading(false);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMeme = async () => {
      try {
        const response = await fetch('https://meme-api.com/gimme');
        if (response.ok) {
          const data = await response.json();
          setMemeData(data);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchMeme();
  }, []);

  useEffect(() => {
    if (memeData && memeData.url) {
      const img = new Image();
      img.src = memeData.url;
      setSelectedMeme(memeData.url);
    }
  }, [memeData]);

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${memeData.title} - ${memeData.author}&url="${selectedMeme}"`
    );
  };

  const handleButtonClick = () => {
    setIsClicked(false)
    fetchMeme();
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  return (
    <>
    <button onClick={handleButtonClick}
      className="w-48 h-12 text-white font-semibold bg-gradient-to-r from-indigo-900 to-green-900 rounded-lg shadow-lg duration-200 hover:drop-shadow-lg hover:shadow-[#7d88fc] hover:cursor-pointer border-white border active:scale-90"
    >
      Generate Meme
    </button>
      <div>
        {loading ? (
          <div className="text-center text-white font-bold text-2xl mt-8">Loading...</div>
        ) : selectedMeme && (
          <div className="rounded-md shadow-md bg-[#00091a] dark:text-gray-100 mt-8 sm:mt-4 w-[400px] sm:w-[310px]">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-2">
                <div className="-space-y-1">
                  <h2 className="text-sm font-semibold leadi">{memeData.title}</h2>
                  <span className="inline-block text-xs leadi dark:text-gray-400">{memeData.author}</span>
                </div>
              </div>
            </div>
            <div className='w-[400px] sm:w-[310px] h-[380px]  dark:bg-white object-contain object-center flex items-center justify-center'>
              <img
                src={selectedMeme}
                alt="Meme"
                className='h-full w-full object-contain'
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button type="button" title="Like post" className="flex items-center justify-center" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-6 h-6 ${isClicked ? 'filled' : 'fill-transparent'}`}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={`${isClicked ? 'deeppink' : '#ffffff'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button type="button" title="Share post" className="flex items-center justify-center" onClick={twitter}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                      <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                    </svg>
                  </button>
                </div>
                <a href={memeData.postLink} className="flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#ffffff" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#ffffff" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )
        }
      </div >
    </>
  );
};

export default Meme;
