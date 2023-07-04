import React from 'react'
import CampaignFormHook from '../hooks/CampaignFormHook'

const CampaignFormCounter = () => {
  
    const { formPage } = CampaignFormHook()
    const numberClass = "border rounded-full w-5 h-5 text-xs flex items-center justify-center"

  return (

    <div>

    <h1 className="text-lg font-bold capitalize">create campaign</h1>

        <div className="campaign-page-state mt-5 flex items-center gap-4">

        <div className="page1 flex items-center gap-2">
            <p className={`${numberClass} ${formPage == 1 ? "border-blue-400 text-blue-400" : " border-gray-400"} text-gray-400`} >1</p>
            <p className={`text-sm ${formPage == 1 ? "" : "text-gray-400"}`}>
                Details
            </p>
        </div>

        <div className="line border w-10 h-0"></div>

        <div className="page2 flex items-center gap-2">
            <p className={`${numberClass} ${formPage == 2 ? "border-blue-400 text-blue-400" : " border-gray-400"} text-gray-400`} >2</p>
            <p className={`text-sm ${formPage == 2 ? "" : "text-gray-400"}`}>
                Design
            </p>
        </div>

        <div className="line border w-10 h-0"></div>

        <div className="page3 flex items-center gap-2">
            <p className={`${numberClass} ${formPage == 3 ? "border-blue-400 text-blue-400" : " border-gray-400"} text-gray-400`} >3</p>
            <p className={`text-sm ${formPage == 3 ? "" : "text-gray-400"}`}>
                Call to action
            </p>
        </div>

        </div>

    </div>

  )
}

export default CampaignFormCounter