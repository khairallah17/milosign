import React from 'react'
import Layout from '../components/Layout'
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai"
import { MdOutlinePlayCircleOutline } from "react-icons/md"

const Images = () => {
  return (
    <Layout>
      <div className="w-[500px] p-5 flex gap-10">

        <div className="w-fit h-full">

          <h1 className='uppercase font-bold text-lg tracking-wider'>images</h1>

          <div className="upload-photo-logo border-2 bg-gray-100 border-gray-300 border-dashed p-5">
              
              <button type='button' className='capitalize bg-blue-400 duration-200 hover:bg-blue-500 text-white p-4 px-10 rounded-lg flex items-center gap-2'>
                <AiOutlinePlus className='text-2xl'/> upload photo or logo
              </button>

              <p className='capitalize text-gray-400'>Image should be at least 100x100px</p>
          
          </div>

          <button type="button" className='text-lg text-blue-400 flex items-center gap-2 mt-5'>
            <MdOutlinePlayCircleOutline className='text-2xl'/>
            animate
          </button>

          <button type="button" className='text-lg text-blue-400 flex items-center gap-2 mt-5'>
            <AiOutlinePlusCircle className='text-2xl'/>
            add another
          </button>

        </div>
      </div>
    </Layout>
  )
}

export default Images