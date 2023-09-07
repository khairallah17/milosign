import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import globalContextHook from '../hooks/globalContextHook'
import { BiSquareRounded, BiSquare } from "react-icons/bi"
import { BsCircle } from "react-icons/bs"
import { AiOutlineBorderBottom, AiOutlineBorderVerticle, AiOutlineBorderTop, AiOutlinePhone, AiOutlineEye } from "react-icons/ai"
import { MdFormatTextdirectionLToR, MdFormatTextdirectionRToL } from "react-icons/md"
import { GiPlainCircle } from "react-icons/gi"
import { BsFillSquareFill } from "react-icons/bs"
import { FaTwitterSquare, FaTwitter } from "react-icons/fa"
import Modal from '../components/Modal'
import { Sketch } from '@uiw/react-color';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Design = () => {

  const { setActiveLink,
          fontSize,setFontSize,
          font, setFont,
          lineSpacing, setLineSpacing,
          spaceFromContent, setSpaceFromContent,
          templateColor, setTemplateColor,
          imageSize, setImageSize,
          imagePosition, setImagePosition,
          imageLink, setImageLink,
          imageShape, setImageShape } = globalContextHook()

  // Simple example, see optional options for more configuration.

  const incrementSpaceFromContent = () => setSpaceFromContent((prev) => (prev < 25)? prev + 5 : prev)
  const decrementSpaceFromContent = () => setSpaceFromContent((prev) => (prev > 0) ? prev - 5 : prev)

  const [color, setColor] = useState("#000")
  const [showColorPicker, setShowColorPicker] = useState(false)


  setActiveLink("design")

  return (
    <Layout>

      <div className="w-[500px] p-5 flex gap-10">

        <div className="w-full h-full overflow-scroll no-scrollbar">

          <div className="social-header flex items-center justify-between max-w-full w-full">
            
            <h1 className='uppercase font-bold text-lg tracking-wider'>font & color</h1>

            <button className='text-blue-400'>
              style your icons
            </button>
          
          </div>

          <div className="font-color my-5 flex flex-col gap-4">

            <div className="font flex w-full flex-grow justify-between items-center">

              <span className='text-gray-500'>Font</span>
              <select name="font" id="" className='w-1/2 p-2 capitalize border-b-2 bg-transparent'>
                <option value="arial">arial</option>
              </select>

            </div>

            <div className="font-size flex w-full flex-grow justify-between items-center relative">

              <span className='text-gray-500 capitalize'>Font size</span>
              <input type="range" name="font size" max="20" min="12" value={fontSize} onChange={(e) => setFontSize({value: e.target.value})} className='w-1/2 bg-blue-400' id="" />
              <div className='font-size-range flex w-full absolute justify-end'>
                <div className='flex border-1 top-2 border-gray-300 border-x-2 h-2 w-1/2 z-[-1] absolute ml-2 px-1'>
                  <div className=' border-r-2 border-gray-300 w-1/4'></div>
                  <div className=' border-r-2 border-gray-300 w-1/4'></div>
                  <div className=' border-r-2 border-gray-300 w-1/4'></div>
                </div>
              </div>

            </div>

            <div className="line-spacing flex w-full flex-grow justify-between items-center">

              <span className='text-gray-500 capitalize flex-grow'>line spacing</span>
              <div className="spacings flex flex-grow">
                <button onClick={() => setLineSpacing({type: "SMALL"})} className='border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>0.5</button>
                <button onClick={() => setLineSpacing({type: "WIDE"})} className='border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>1.0</button>
                <button onClick={() => setLineSpacing({type: "BIG"})} className='border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>2.0</button>
              </div>

            </div>

            <div className="space-from-content flex w-full flex-grow justify-between items-center">

              <span className='text-gray-500 capitalize flex-grow'>space from content</span>
              <div className="spacings flex flex-grow w-[178px]">
                <button className='border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full' onClick={decrementSpaceFromContent}>-</button>
                <button className='border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>{spaceFromContent}</button>
                <button className='border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full' onClick={incrementSpaceFromContent}>+</button>
              </div>

            </div>

            <div className="space-from-content flex w-full flex-grow justify-between items-center relative">

              <span className='text-gray-500 capitalize flex-grow'>template color</span>
              <div className="spacings flex flex-grow w-[140px] gap-2 overflow-scroll no-scrollbar">
                <button className="bg-green-500 rounded-full w-5 h-5" color='#22c55e' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button className="bg-red-500 rounded-full w-5 h-5" color='#ef4444' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button className="bg-violet-500 rounded-full w-5 h-5" color='#8b5cf6' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button className="bg-indigo-500 rounded-full w-5 h-5" color='#6366f1' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button className="bg-yellow-500 rounded-full w-5 h-5" color='#eab308' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button className="bg-slate-500 rounded-full w-5 h-5" color='#64748b' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button className="bg-orange-500 rounded-full w-5 h-5" color='#f97316' onClick={(e) => {setTemplateColor(e.target.attributes.color.nodeValue)}}></button>
                <button onClick={() => setShowColorPicker(!showColorPicker)} className="border-gray-300 border-2 flex items-center justify-center rounded-full w-5 h-5">+</button>
              </div>

              <div className={`absolute z-99 top-0 right-4 ${showColorPicker ? "visible" : "hidden"}`} open={true}>
                <Sketch
                  style={{ marginLeft: 20 }}
                  color={templateColor}
                  onChange={(color) => {
                    setTemplateColor(color.hex);
                  }}
                />
              </div>

            </div>

          </div>

          <h1 className='uppercase font-bold text-lg tracking-wider'>images</h1>

          <div className="images my-5 flex flex-col gap-4">

              <div className="shapes flex">font-size-range 

                <span className='text-gray-500 capitalize flex-grow'>shapes</span>

                <div className="spacings flex flex-grow">
                  <button onClick={() => setImageShape({type: "ROUNDED"})} className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                    <BiSquareRounded/>
                  </button>
                  <button onClick={() => setImageShape({type: "SQUARE"})} className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                    <BiSquare/>
                  </button>
                  <button onClick={() => setImageShape({type: "FULL"})} className='flex items-center justify-center border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                    <BsCircle/>
                  </button>
                </div>

              </div>

              <div className="size flex">

                <span className="text-gray-500 capitalize flex-grow">size</span>
                <input type="range" name="font size" max="200" min="24" value={imageSize} onChange={(e) => setImageSize(parseInt(e.target.value))} className='w-1/2 bg-blue-400' id="" />

              </div>

              <div className="position flex">
                
                <span className="text-gray-500 capitalize flex-grow">position</span>

                <div className="spacings flex flex-grow">
                  <button onClick={() => setImagePosition({type: "TOP"})} className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                    <AiOutlineBorderTop/>
                  </button>
                  <button onClick={() => setImagePosition({type: "MIDDLE"})} className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                    <AiOutlineBorderVerticle/>
                  </button>
                  <button onClick={() => setImagePosition({type: "BOTTOM"})} className='flex items-center justify-center border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                    <AiOutlineBorderBottom/>
                  </button>
                </div>

              </div>

              <div className="image-link flex items-center">

                <span className='text-gray-500 capitalize flex-grow'>image link</span>
                <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} name='image link' placeholder='www.mywebsite.com' className='border-b-2 border-gray-400 outline-none p-2 w-[230px]' />

              </div>

          </div>

          <h1 className='uppercase font-bold text-lg tracking-wider'>details</h1>

          <div className="images my-5 flex flex-col gap-4">

            <div className="label flex">

              <span className='text-gray-500 capitalize flex-grow'>label</span>

              <div className="spacings flex flex-grow">
                <button className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  phone
                </button>
                <button className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <AiOutlinePhone/>
                </button>
                <button className='flex items-center justify-center border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  none
                </button>
              </div>

            </div>

            <div className="direction flex">
              
              <span className="text-gray-500 capitalize flex-grow">direction</span>

              <div className="spacings flex flex-grow">
                <button className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <MdFormatTextdirectionLToR/>
                </button>
                <button className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <MdFormatTextdirectionRToL/>
                </button>
              </div>

            </div>

            <div className="separator flex">
              
              <span className="text-gray-500 capitalize flex-grow">separator</span>

              <div className="spacings flex flex-grow">
                <button className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  |
                </button>
                <button className='flex items-center justify-center border-l-2 border-t-2 border-b-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <GiPlainCircle/>
                </button>
                <button className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <BsFillSquareFill/>
                </button>
                <button className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  none
                </button>
              </div>

            </div>

            <div className="text-color flex w-full flex-grow justify-between items-center">

              <span className='text-gray-500 capitalize flex-grow'>text color</span>
              <div className="spacings flex flex-grow w-[140px] gap-2 overflow-scroll no-scrollbar">
                <button className="bg-gray-800 rounded-full w-5 h-5"></button>
                <button className="bg-gray-700 rounded-full w-5 h-5"></button>
                <button className="bg-gray-600 rounded-full w-5 h-5"></button>
                <button className="bg-gray-500 rounded-full w-5 h-5"></button>
                <button className="bg-gray-400 rounded-full w-5 h-5"></button>
                <button className="bg-gray-300 rounded-full w-5 h-5"></button>
                <button className="bg-gray-200 rounded-full w-5 h-5"></button>
                <button className="border-gray-300 border-2 flex items-center justify-center rounded-full w-5 h-5">+</button>
              </div>

            </div>

            <div className="optimize-mail-for-ios flex items-center gap-5">
              <span className='text-gray-500 capitalize flex items-center gap-2'>optimize mail for ios <span className='text-blue-400 text-2xl'><AiOutlineEye/></span></span>
              <input type="checkbox" name="optimize ios for mail" id="" />
            </div>

          </div>

          <h1 className='uppercase font-bold text-lg tracking-wider'>social icons</h1>

          <div className="social-icons my-5 flex flex-col gap-4">

            <div className="label flex">

              <span className='text-gray-500 capitalize flex-grow'>fill</span>

              <div className="spacings flex flex-grow">
                <button className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <FaTwitterSquare/>
                </button>
                <button className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <FaTwitter className='border border-blue-400'/>
                </button>
                <button className='flex items-center justify-center border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <FaTwitter/>
                </button>
              </div>

            </div>

            <div className="shapes flex">
              
              <span className="text-gray-500 capitalize flex-grow">shapes</span>

              <div className="spacings flex flex-grow">

                <button className='flex items-center justify-center border-t-2 border-b-2 border-l-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <BiSquareRounded/>
                </button>
                <button className='flex items-center justify-center border-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <BiSquare/>
                </button>
                <button className='flex items-center justify-center border-t-2 border-b-2 border-r-2 border-gray-200 text-blue-400 p-2 py-1 w-full'>
                  <BsCircle/>
                </button>

              </div>

            </div>

            <div className="separator flex">
              
              <span className="text-gray-500 capitalize flex-grow">size</span>
              <input type="range" name="size" min="12" value="50" max="100" className='' id="" />

            </div>

            <div className="space between flex w-full flex-grow justify-between items-center">

              <span className='text-gray-500 capitalize flex-grow'>space between</span>
              <input type="range" name="space between" min="12" value="50" max="100" id="" />

            </div>

            <div className="optimize-mail-for-ios flex items-center gap-5">
              <span className='text-gray-500 capitalize flex items-center gap-2'>match with template color</span>
              <input type="checkbox" name="optimize ios for mail" id="" />
            </div>

          </div>

          <h1 className='uppercase font-bold text-lg tracking-wider'>decorative line</h1>

          <div className="social-icons my-5 flex flex-col gap-4">

            <div className="style flex">

              <span className='text-gray-500 capitalize flex-grow'>style</span>
              <select name="style" id="" className='p-2 px-5 bg-transparent'>
                <option value="normal">normal</option>
                <option value="dashed">dashed</option>
              </select>

            </div>

            <div className="match-template-color flex items-center gap-5">
              <span className='text-gray-500 capitalize flex items-center gap-2'>match with template color</span>
              <input type="checkbox" name="optimize ios for mail" id="" />
            </div>

            <div className="text-color flex w-full flex-grow justify-between items-center">

              <span className='text-gray-500 capitalize flex-grow'>text color</span>
              <div className="spacings flex flex-grow w-[140px] gap-2 overflow-scroll no-scrollbar">
                <button className="bg-gray-800 rounded-full w-5 h-5"></button>
                <button className="bg-gray-700 rounded-full w-5 h-5"></button>
                <button className="bg-gray-600 rounded-full w-5 h-5"></button>
                <button className="bg-gray-500 rounded-full w-5 h-5"></button>
                <button className="bg-gray-400 rounded-full w-5 h-5"></button>
                <button className="bg-gray-300 rounded-full w-5 h-5"></button>
                <button className="bg-gray-200 rounded-full w-5 h-5"></button>
                <button className="border-gray-300 border-2 flex items-center justify-center rounded-full w-5 h-5">+</button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>
  )
}

export default Design