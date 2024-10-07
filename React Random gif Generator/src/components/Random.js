import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "../App.css"


export const Random = () => {

 const [loading,setloading]= useState(false);
  const [gif, setGif]= useState(" ");


 async  function fetchdata(params) {

    setloading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
    const {data} = await axios.get(url);
    const imgsrc=data.data.images.downsized_large.url;
    setGif(imgsrc);

    setloading(false)
  }
  useEffect( ()=>{
    fetchdata();
  },[])

  function clickHandler() {
    fetchdata();
  }
  return (
    <div className='min-h-[30%] min-w-[30%] bg-black-500 '>
       {

        loading ? (<div className='spinner flex items-center justify-center'></div>)
        : (
          <div className='flex flex-col gap-y-5 items-center justify-center text-white '>
                <h1 className='text-2xl'>Random Gif</h1>
                <img src={gif} alt='' className='rounded-md w-[80%]'/>
                <button className='p-2 rounded-md bg-blue-500 text-white'
                  onClick={clickHandler}
                >Generate</button>
              </div>

        )

    }
          
    </div>

   
   
  )
}
