import React, { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';
import { FaSquare, FaCircle, FaFont, FaTrashAlt, FaBrush, FaSave, FaFillDrip, FaPaintBrush } from 'react-icons/fa';
import ExpandableColorSelector from './ExpandableColorSelector';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [textValue, setTextValue] = useState('Hello Canvas');
  const [fontSize, setFontSize] = useState(20);
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const resizeCanvas = (canvasInstance) => {
    const width = window.innerWidth - 160;
    const height = window.innerHeight - 80;
    canvasInstance.setDimensions({ width, height });
    canvasInstance.renderAll();
  };

  useEffect(() => {
    const canvasInstance = new fabric.Canvas(canvasRef.current, {
      backgroundColor: '#ffffff',
    });
    setCanvas(canvasInstance);

    resizeCanvas(canvasInstance); // Initial resize to fit screen

    const handleResize = () => resizeCanvas(canvasInstance);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasInstance.dispose();
    };
  }, []);

  const toggleDrawingMode = () => {
    const newMode = !isDrawingMode;
    setIsDrawingMode(newMode);
    if (canvas) {
      canvas.isDrawingMode = newMode;
    }
  };

  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      fill: 'blue',
      width: 100,
      height: 100,
      selectable: true,
      hasControls: true,
    });
    canvas.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      fill: 'green',
      radius: 50,
      hasControls: true,
    });
    canvas.add(circle);
  };

  const addText = () => {
    const text = new fabric.Textbox(textValue, {
      left: 200,
      top: 200,
      fill: 'black',
      fontSize: fontSize,
      selectable: true,
      hasControls: true,
    });
    canvas.add(text);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'textbox') {
      activeObject.set({ text: e.target.value });
      canvas.renderAll();
    }
  };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === 'textbox') {
      activeObject.set({ fontSize: newSize });
      canvas.renderAll();
    }
  };

  const changeObjectColor = (color) => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.set({ fill: color });
      canvas.renderAll();
    }
  };

  const deleteObject = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
      canvas.discardActiveObject();
    }
  };

  const generateHTMLAndCSS = () => {
    let html = '';
    let css = '';

    canvas.getObjects().forEach((obj, index) => {
      if (obj.type === 'rect') {
        html += `<div id="rect${index}"></div>\n`;
        css += `#rect${index} {
          position: absolute;
          left: ${obj.left}px;
          top: ${obj.top}px;
          width: ${obj.width * obj.scaleX}px;
          height: ${obj.height * obj.scaleY}px;
          background-color: ${obj.fill};
        }\n`;
      } else if (obj.type === 'circle') {
        html += `<div id="circle${index}"></div>\n`;
        css += `#circle${index} {
          position: absolute;
          left: ${obj.left - obj.radius}px;
          top: ${obj.top - obj.radius}px;
          width: ${obj.radius * 2 * obj.scaleX}px;
          height: ${obj.radius * 2 * obj.scaleY}px;
          background-color: ${obj.fill};
          border-radius: 50%;
        }\n`;
      } else if (obj.type === 'textbox') {
        html += `<div id="text${index}">${obj.text}</div>\n`;
        css += `#text${index} {
          position: absolute;
          left: ${obj.left}px;
          top: ${obj.top}px;
          font-size: ${obj.fontSize}px;
          color: ${obj.fill};
        }\n`;
      }
    });

    return { html, css };
  };

  const handleGenerate = () => {
    const { html, css } = generateHTMLAndCSS();
    const combinedHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;

    const blob = new Blob([combinedHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'yourpage.html';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen">
      {/* Toolbar */}
      <div className="w-20 bg-gray-800 text-white flex flex-col items-center py-4">
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={addRectangle}>
          <FaSquare size={24} />
        </button>
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={addCircle}>
          <FaCircle size={24} />
        </button>
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={addText}>
          <FaFont size={24} />
        </button>
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={() => changeObjectColor('red')}>
          <FaFillDrip size={24} style={{ color: 'red' }} />
        </button>
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={() => changeObjectColor('blue')}>
          <FaFillDrip size={24} style={{ color: 'blue' }} />
        </button>
        <ExpandableColorSelector onColorChange={changeObjectColor} />
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={deleteObject}>
          <FaTrashAlt size={24} />
        </button>
        <button className="mb-4 p-2 hover:bg-gray-600 rounded" onClick={toggleDrawingMode}>
          {isDrawingMode ? <FaBrush size={24} /> : <FaPaintBrush size={24} />}
        </button>
        <button className="mt-auto mb-4 p-2 hover:bg-gray-600 rounded" onClick={handleGenerate}>
          <FaSave size={24} />
        </button>
      </div>

      {/* Canvas */}
      <div className="flex-1 p-8">
        <div className="border border-gray-300 shadow-lg bg-white p-4">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* Text and Font Controls */}
        <div className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            value={textValue}
            onChange={handleTextChange}
            placeholder="Enter text"
            className="p-2 border border-gray-300 rounded shadow-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            placeholder="Font size"
            className="p-2 border border-gray-300 rounded shadow-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
