import { useState } from 'react'
import CampaignFormCounter from '../../components/CampaignFormCounter'
import CampaignFormHook from '../../hooks/CampaignFormHook'
import { FcCameraAddon } from "react-icons/fc"
import { AiOutlineAlignLeft, AiOutlineAlignCenter, AiOutlineAlignRight } from "react-icons/ai"

const AddCampaignPage2 = () => {
  
  const { setBanner,
          setBannerPos,
          setBannerAlign,
          bannerSize, setBannerSize,
          dispatchOtherBanners,
          activePos, setActivePos,
          activeAlign, setActiveAlign} = CampaignFormHook()

  const activatePostion = (pos) => {
    
    const positions = ["below", "above", "footer"]

    setActivePos(pos)
    setBannerPos(positions[pos -1])

  }

  const actAlign = (align) => {

    const alignement = ["left", "center", "right"]

    setActiveAlign(align)
    setBannerAlign(alignement[align - 1])

  }

  const uploadBanner = (e) => {

    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => setBanner(reader.result)
    reader.onerror = () => console.log("error ==> ", error)

  }
  
  return (
    <div>

      

      <CampaignFormCounter/>

      <div className="banner-info my-5 mr-5">
        
        <div className="flex relative upload-baner">

          <input type="file" onChange={(e) => uploadBanner(e)} name="banner" accept='image/*' className='inputfile !top-0 h-full w-full' />
          <label htmlFor="image" className='capitalize border-dashed border-2 border-gray-200 !flex flex-col items-center justify-center w-full p-4'>
              <FcCameraAddon className='text-3xl' />
              <p className='py-2' >upload your banner <span className='capitalize text-blue-400 underline' >here</span></p>
          </label>

        </div>

        <div className="banner-styling flex flex-col gap-4">

          <div className="banner-position flex flex-col gap-2 mt-5">
            <label htmlFor="banner position">Banner Position</label>
            <div className="banner-pos-radio flex">
              
              <button onClick={() => activatePostion(1)} className={`banner-pos-bottom border-2 border-r-0 p-2 px-4 ${activePos == 1 && "bg-gray-100"} `}>
                <input type="radio" name="banner position" id="" className='appearance-none' />
                <label htmlFor="banner position" className={`cursor-pointer ${activePos == 1 ? "text-blue-400" : "text-gray-400"} text-[12px] font-semibold`}>Below details</label>
              </button>

              <button onClick={() => activatePostion(2)} className={`banner-pos-top border-2 border-r-0 p-2 px-4 ${activePos == 2 && "bg-gray-100"} `}>
                <input type="radio" name="banner position" id="" className='appearance-none' />
                <label htmlFor="banner position" className={`cursor-pointer ${activePos == 2 ? "text-blue-400" : "text-gray-400"} text-[12px] font-semibold`}>Above details</label>
              </button>

              <button onClick={() => activatePostion(3)} className={`banner-pos-footer border-2 p-2 px-4 ${activePos == 3 && "bg-gray-100"} `}>
                <input type="radio" name="banner position" id="" className='appearance-none' />
                <label htmlFor="banner position" className={`cursor-pointer ${activePos == 3 ? "text-blue-400" : "text-gray-400"} text-[12px] font-semibold`}>Footer</label>
              </button>

            </div>
          </div>

          <div className="banner-alignment flex flex-col gap-2">
            <label htmlFor="banner alignement" className='capitalize'>banner alignement</label>
            
            <div className="banner-alignement-radios flex">

              <button onClick={() => actAlign(1)} className={`banner-left border-2 border-r-0 py-2 px-4 flex items-center ${activeAlign == 1 && "bg-gray-100"}`}>
                <input type="radio" name="banner alignement" id="" className='appearance-none' />
                <label htmlFor="banner alignement" >
                  <AiOutlineAlignLeft className={`cursor-pointer text-2xl ${activeAlign == 1 ? "text-blue-400" : "text-gray-400"}`} />
                </label>
              </button>

              <button onClick={() => actAlign(2)} className={`banner-center border-2 border-r-0 py-2 px-4 flex items-center ${activeAlign == 2 && "bg-gray-100"}`}>
                <input type="radio" name="banner center" id="" className='appearance-none' />
                <label htmlFor="banner alignement">
                  <AiOutlineAlignCenter className={`cursor-pointer text-2xl ${activeAlign == 2 ? "text-blue-400" : "text-gray-400"}`} />
                </label>
              </button>

              <button onClick={() => actAlign(3)} className={`banner-right border-2 py-2 px-4 flex items-center ${activeAlign == 3 && "bg-gray-100"}`}>
                <input type="radio" name="banner right" id="" className='appearance-none' />
                <label htmlFor="banner alignement">
                  <AiOutlineAlignRight className={`cursor-pointer text-2xl ${activeAlign == 3 ? "text-blue-400" : "text-gray-400"}`} />
                </label>
              </button>

            </div>

          </div>

          <div className="banner-size flex flex-col">
            <label htmlFor="banner size" className='capitalize'>banner size</label>
            <div className="banner-size-slider flex gap-4 items-center">
              <input type="range" name="banner size" min={0} max={100} value={bannerSize} onChange={(e) => setBannerSize(e.target.value)} className='rounded-full w-full' />
              <input type="text" name="banner size" value={`${bannerSize}%`} className="px-4 py-2 border w-[80px] text-center" disabled />
            </div>
          </div>

          <div className="other-banners flex flex-col gap-2">
            <label htmlFor="other banners">Additional banners</label>
            <select name="other banners" onChange={(e) => dispatchOtherBanners(e.target.value)} className="bg-white p-3 border rounded-md">
              <option value="keep">keep banners from signature</option>
              <option value="remove">remove banners during the campaign</option>
            </select>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AddCampaignPage2