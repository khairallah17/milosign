import { useState } from "react"
import CampaignFormHook from "../hooks/CampaignFormHook"
import Signoff from '../assets/campaign/signoff.png'
import globalContextHook from "../hooks/globalContextHook"
import Image from "../assets/profile-img.jpg"
import { Link } from "react-router-dom"

const CampaignSignature = () => {
    
    const { banner } = CampaignFormHook()

    const {name, title, company, phone, mobile, website, email, address, social, image} = globalContextHook()

  return (
    <div className="campaign-signature p-5">
        
        <h1 className="font-bold text-xl mb-5" >My company signature</h1>

        <div className="signature border border-gray-400 rounded-lg w-[400px] bg-white">

            <div className="signature-draft bg-blue-100 p-1 flex items-center justify-center rounded-t-lg">
                <p className="text-sm font-light text-blue-500" >Draft</p>
            </div>

            <div className="signature-content p-5">

                <div className="receiver-subject mb-4">

                    <div className="receiver border-b border-b-gray-300 pb-2 mb-3">
                        <p className="text-gray-400 text-sm">To</p>
                    </div>

                    <div className="subject border-b border-b-gray-300 pb-2">
                        <p className="text-gray-400 text-sm">Subject</p>
                    </div>

                </div>

                <img src={Signoff} alt="signature" className="w-36 mb-5" />

                <div className="signature-info flex">

                    <div className="signature-info-image border-r-2 px-2">
                        <img src={image || Image} alt="" className="max-w-20 max-h-20" />
                    </div>

                    <div className="signature-info-text flex flex-col justify-between ml-2">

                        <p></p>

                        <p className="name text-gray-400 font-bold capitalize">
                            {name || "name"}
                        </p>
                        
                        <p className="website text-sm text-gray-400 font-light">
                            {website || "website.com"}
                        </p>

                    </div>

                </div>

                <div className={`signature-banner my-5 flex items-center justify-center ${!banner && "border-2 border-dashed p-3"}`}>
                    <Link>
                        <img src={banner} alt="" />
                    </Link>
                    { !banner && <p className="text-gray-400 text-sm">Your banner here</p>}
                </div>

                <div className="signature-important border-t py-2 border-black">
                    <p className="text-[9px] text-gray-400">
                        <span className="uppercase text-[10px]" >important:</span>
                        The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof. 
                    </p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default CampaignSignature