import React from 'react';

const Button = () => {
  return (
    <button
      className="w-48 h-12 text-white font-semibold bg-gradient-to-r from-indigo-900 to-green-900 rounded-lg shadow-lg duration-200 hover:drop-shadow-lg hover:shadow-[#7d88fc] hover:cursor-pointer border-white border active:scale-90"
    >
      Generate Meme
    </button>
  );
};

export default Button;
