import { useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import globalContextHook from '../hooks/globalContextHook'
import { RxDragHandleDots2 } from "react-icons/rx"
import Facebook from "../assets/social icons/facebook.png"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCamera } from "react-icons/ai"
import { SocialIcons } from '../components/SocialIcons'

const Social = () => {

  const { setActiveLink, social, updateSocial} = globalContextHook()
  const [show, setShow] = useState(false)

  const defaultInputs = [{ placeHolder: "https://www.facebook.com/<username>", image: SocialIcons.facebook, name: "facebook" },
                         { placeHolder: "https://www.linkedin.com/<username>", image: SocialIcons.linkedin, name: "linkedin" },
                         { placeHolder: "https://www.instagram.com/<username>", image: SocialIcons.instagram, name: "instagram" },
                         { placeHolder: "https://www.twitter.com/<username>", image: SocialIcons.twitter, name: "twitter" }]

  return (
    <Layout>
      <div className="w-[500px] p-5 flex flex-col justify-between">

        <div className="w-fit max-h-full flex flex-col gap-5">

          <div className="social-header flex items-center justify-between max-w-full w-full">
            
            <h1 className='uppercase font-bold text-lg tracking-wider'>Social profiles</h1>

            <Link to="/design" onClick={() => setActiveLink("design")} className='text-blue-400'>
              style your icons
            </Link>
          
          </div>

          <div className="social-icons p-3 flex flex-col gap-5">


              {
                
                defaultInputs.map(({placeHolder, image}, key) => (
                  <div key={key} className="social flex gap-4 items-center">
                    <RxDragHandleDots2 className='text-2xl text-gray-500'/>
                    <img src={image} className="w-10" alt="facebook" />
                    <input type="text" className='p-2 outline-none border-b-2'placeholder={placeHolder}/>
                  </div>
                ))

              }


          </div>

          <button onClick={() => setShow(!show)} className="flex items-center gap-2 text-blue-400">
            {show ? <AiOutlineMinus/> : <AiOutlinePlus/> }
            {show ? "show less" : "show more"}
          </button>

          <div className={`icons ${show ? "visible" : "hidden"} flex flex-wrap gap-2 max-w-full w-full`}>
            
            {
              Object.values(SocialIcons).map((icon, key) => (
                <img src={icon} alt="" key={key} className="w-10 cursor-pointer" />
              ))
            }

          </div>

        </div>

        <div className="upload-icon flex flex-col items-center justify-center w-full">
          
          <button type='button' className="capitalize flex items-center gap-1 justify-center border-dashed border-2 border-gray-300 p-2 px-12 bg-gray-100 w-fit">
            <AiOutlineCamera className='text-2xl'/>
            upload your own icon
          </button>
        
          <p className='text-gray-400 text-sm text-center'>Best Size 64x64px. file no longer 20KB</p>

        </div>

      </div>
    </Layout>
  )
}

export default Social