import React, { useState } from 'react';
import { FaFillDrip, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ExpandableColorSelector = ({ onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#0000FF'); // Default to blue

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 mb-4 p-2 hover:bg-opacity-80 rounded"
        style={{ backgroundColor: selectedColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaFillDrip size={24} style={{ color: 'white' }} />
        {isOpen ? (
          <FaChevronUp size={16} style={{ color: 'white' }} />
        ) : (
          <FaChevronDown size={16} style={{ color: 'white' }} />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded shadow-lg">
          <label htmlFor="colorPicker" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select a color
          </label>
          <input
            type="color"
            id="colorPicker"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-full h-10 rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ExpandableColorSelector;