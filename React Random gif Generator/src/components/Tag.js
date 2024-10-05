
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "../App.css"


export const Tag = () => {

 const [loading,setloading]= useState(false);
 const [tag,settag]=useState(" ")
  const [gif, setGif]= useState(" ");


 async  function fetchdata(params) {

    setloading(true);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=${tag}`;
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
    <div className='min-h-[30%] min-w-[30%] bg-black-500 my-20'>
       {

        loading ? (<div className='spinner flex items-center justify-center'></div>)
        : (
          <div className='flex flex-col gap-y-5 items-center justify-center text-white'>

              <h1 className='text-2xl'>Gif on Basic of tag</h1>
                <h1>Random Gif {tag !== " " && `of ${tag}`}</h1>
                <input type='text' placeholder='Enter tag....' onChange={(e)=>settag(e.target.value)} className='p-2 text-blue-800  rounded-md'/>
                <img src={gif} alt='' className='rounded-md  w-[80%]'/>
                <button className='p-2 rounded-md bg-blue-500 text-white'
                  onClick={clickHandler}
                >Generate</button>

          </div>

        )

    }
          
    </div>

   
   
  )
}
