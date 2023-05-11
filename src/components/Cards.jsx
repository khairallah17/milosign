import React from 'react'
import Signature from "../assets/signature.png"
import Image from "../assets/profile-img.jpg"
import Facebook from "../assets/social icons/facebook.png"
import Instagram from "../assets/social icons/instagram.png"
import LinkedIn from "../assets/social icons/linkedin.png"
import Twitter from "../assets/social icons/twitter.png"
import globalContextHook from '../hooks/globalContextHook'
import { Link } from 'react-router-dom'

const Cards = () => {

    const {name, title, company, phone, mobile, website, email, address, social, image} = globalContextHook()

  return (
    <div className=' flex flex-col gap-5 items-end'>
        
        <div className="card">
            <div className="header w-full h-8 rounded-t-2xl p-[6px] px-3 bg-gray-400 flex gap-1 items-center">
                <div className="circle w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="circle w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="circle w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>

            <div className="footer p-2 bg-white rounded-b-2xl flex flex-col min-w-[800px] w-[800px] gap-3">
                
                <div className='border-b-2 text-gray-400 border-gray-300 flex items-center pb-2 gap-2'> 
                    To: <span className=' border-2 p-1 rounded-full px-2'>Mohammed khairallah</span> 
                </div>

                <div className='border-b-2 text-gray-400 border-gray-300 flex items-center pb-2 gap-2 capitalize'> 
                    subject: check out my new email signature
                </div>

                <div className="signature mt-5 p-5">
                    <img src={Signature} alt="hand signature image" className='w-36 mb-5' />

                    <div className="signature-info flex">

                        <div className="image border-r-2 pr-5">
                            <img src={image || Image} alt="signature user image" className='max-w-20 w-20' />
                        </div>

                        <div className="user-info pl-5 flex flex-col gap-2">

                            <h1 className='flex flex-col text-gray-400'>
                                <span className={`font-bold text-[]`}>{name || "Mohammed khairallah"}</span>
                                <span>{title || "Full Stack developer"}</span>
                            </h1>
                            
                            <div className="phone-email-website text-sm">
                                <span className='border-r-2 border-gray-400 pr-2'>{phone || "212-931-0000"}</span>
                                <span className='border-r-2 border-gray-400 px-2'>{website || "www.mohammedkhairallah.com"}</span>
                                <span className='pl-2'>{email || "contact@mohammedkhairallah.com"}</span>
                            </div>

                            <p className='text-sm mb-1'>{address || "1937 Fieldcrest road, NY 10011"}</p>

                            <div className="social-icons flex items-center gap-3 w-full overflow-scroll">

                                <Link to={social.facebook} target="_blank">
                                    <img src={Facebook} alt="" className='w-8'/>
                                </Link>
                                <Link to={social.instagram} target="_blank">
                                    <img src={Instagram} alt="" className='w-8'/>
                                </Link>
                                <Link to={social.twitter} target="_blank">
                                    <img src={Twitter} alt="" className='w-8'/>
                                </Link>
                                <Link to={social.linkedIn} target="_blank">
                                    <img src={LinkedIn} alt="" className='w-8'/>
                                </Link>

                            </div>


                        </div>

                    </div>

                    <button type="button" className="w-full app border-dashed border-2 mt-5 p-5 text-gray-400 text-center">
                        add an app here (disclaimer, banner...)
                    </button>

                </div>
            
            </div>
        </div>

        <button className='w-fit bg-green-300 duration-200 hover:bg-green-400 p-2 px-14 rounded-xl text-white font-bold'>Ok, I'm Done</button>

    </div>
  )
}

export default Cards