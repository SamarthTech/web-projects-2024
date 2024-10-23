import React, { useContext, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BgController = () => {
  const storageValue = JSON.parse(localStorage.getItem('value'))

  const [rounded, setRounded] = useState(storageValue?storageValue?.bgRounded:0);
  const [padding, setPadding] = useState(storageValue?storageValue?.bgPadding:0);
  const [color, setColor] = useState(storageValue?storageValue?.bgColor:"#000");

  const {updateStorage , setUpdateStorage} = useContext(UpdateStorageContext)

  
  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue)
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);
  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(e) => setRounded(e[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(e) => setPadding(e[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
};

export default BgController;
