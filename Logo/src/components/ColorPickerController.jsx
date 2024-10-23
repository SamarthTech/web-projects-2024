import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({ hideController = false, selectedColor }) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={(e) => {
            setColor(e)
            selectedColor(e)
        }}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
};

export default ColorPickerController;
