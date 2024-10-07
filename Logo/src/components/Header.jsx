import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = ({downloadIcon}) => {
  return (
    <div className=" w-full p-4 shadow-md border flex items-center justify-between">
      <img src="./logo.png" className="w-[15vw]" alt="" />
      <Button className="flex gap-2 items-center" onClick={() => downloadIcon(Date.now())}>
        {" "}
        <Download className="h-4 w-4" /> Download
      </Button>
    </div>
  );
};

export default Header;
