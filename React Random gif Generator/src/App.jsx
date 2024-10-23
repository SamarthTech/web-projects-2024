import React from "react";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";
function App() {
  return (
    
    <div className=" h-[100vh]">
    <div className="bg-blue-600 flex flex-col items-center ">
      <h1 className="text-xl p-2 my-5 font-bold text-white " >Random Gif</h1>
      </div>
      <div className="flex flex-col items-center " >

      <div className="flex items-center justify-center p-2 mt-5">
        <Random/>

      </div>
        <div className="flex items-center justify-center p-2 mt-5">
        <Tag/>

        </div>
        </div>
    </div>
  );
}

export default App;
