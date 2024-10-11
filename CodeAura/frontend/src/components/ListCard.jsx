import React, { useState } from 'react'
import img from "../images/code.png"
import deleteImg from "../images/delete.png"
import { api_base_url } from '../helper';
import { useNavigate } from 'react-router-dom';

const ListCard = ({item}) => {
  const navigate = useNavigate();
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
  
  const deleteProj = (id) => {
    fetch(api_base_url + "/deleteProject",{
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        progId: id,
        userId: localStorage.getItem("userId")
      })
    }).then(res=>res.json()).then(data=>{
      if(data.success){
        setIsDeleteModelShow(false)
        window.location.reload()
      }else{
        alert(data.message)
        setIsDeleteModelShow(false)
      }
    })
  }
  return (
    <>
      <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
        <div onClick={()=>{navigate(`/editior/${item._id}`)}} className='flex items-center gap-2'>
          <img className='w-[80px]' src={img} alt="" />
          <div>
            <h3 className='text-[20px]'>{item.title}</h3>
            <p className='text-[gray] text-[14px]'>Created in {new Date(item.date).toDateString()}</p>
          </div>
        </div>
        <div>
          <img onClick={()=>{setIsDeleteModelShow(true)}} className='w-[30px] cursor-pointer mr-4' src={deleteImg} alt="" />
        </div>
      </div>

      {
        isDeleteModelShow ? <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col">
          <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[20px]">
            <h3 className='text-3xl'>Do you want to delete <br />
              this project</h3>
            <div className='flex w-full mt-5 items-center gap-[10px]'>
              <button onClick={()=>{deleteProj(item._id)}} className='p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]'>Delete</button>
              <button onClick={()=>{setIsDeleteModelShow(false)}} className='p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]'>Cancel</button>
            </div>
          </div>
        </div> : ""
      }
    </>
  )
}

export default ListCard
