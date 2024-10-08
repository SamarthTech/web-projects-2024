import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

function LogoPreview({downloadIcon}) {
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  const [storageValue, setStorageValue] = useState();

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
    console.log(storageValue);
  }, [updateStorage]);

  const Icon = ({ name, size, color, rotate }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      return;
    }
    return (
      <LucideIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  useEffect(() => {
    if(downloadIcon){
      downloadPngLogo()
    }
  } , [downloadIcon])


  /*Download Functionality*/
  const downloadPngLogo = () => {
    const downloadId = document.querySelector("#downloadId")

    html2canvas(downloadId, {
      backgroundColor: null
    }).then(canvas => {
      const pngImg = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.href = pngImg;
      downloadLink.download = 'KT_Icon_png';
      downloadLink.click()
    })
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div
        className="h-[400px] w-[400px] bg-gray-200 outline-dotted outline-gray-300"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
        id="downloadId"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            backgroundColor: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
