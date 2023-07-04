import {useState } from 'react'
import CampaignFormHook from '../../hooks/CampaignFormHook'
import AddCampaignPage1 from './AddCampaignPage1'
import AddCampaignPage2 from "./AddCampaignPage2"
import AddCampaignPage3 from './AddCampaignPage3'
import EmailPreview from "../../assets/campaign/campaign_preview_static.png"
import CampaignSignature from '../../components/CampaignSignature'
import { Toaster } from "react-hot-toast"

const AddCampaign = () => {

  const{ formPage, setFormPage,
    setCampaignName,
    dispatchCampaignStartDate,
    dispatchCampaignEndDate,
    dispatchCampaignGroups,
    setBanner,
    setBannerPos,
    setBannerAlign,
    setBannerSize,
    setCampaignPriority,
    setBannerLink,
    dispatchOtherBanners,
    createCampaign,
    setActivePos,
    setActiveAlign,
    setActivePriority} = CampaignFormHook()

  const nextPage = () => setFormPage((prev) => prev + 1)
  const previousPage = () => setFormPage((prev) => prev - 1)

  const campaignLaunch = () => {
    createCampaign()
    const exitIcon = document.querySelector(".exit-modal")
    setTimeout(() => {
        exitIcon.click()
        setCampaignName("")
        dispatchCampaignStartDate("")
        dispatchCampaignEndDate("")
        dispatchCampaignGroups({type: "RESET"})
        setBanner("")
        setBannerPos("")
        setBannerAlign("")
        setBannerSize("")
        setCampaignPriority("")
        setBannerLink("")
        dispatchOtherBanners("")
        setFormPage(1)
        setActivePos(0)
        setActiveAlign(0)
        setActivePriority(0)
    }, 1000)
  } 

  return (
    <div className="campaign-form">
        
        <div className="campaign-form-text flex">

            <div className="campaign-form-page w-[500px] h-[700px] flex flex-col justify-between">

            { formPage == 1 && <AddCampaignPage1/> }
            { formPage == 2 && <AddCampaignPage2/> }
            { formPage == 3 && <AddCampaignPage3/> }

            <div className={`campagin-set-form-page w-full flex ${ formPage == 1 ? "justify-end" : "justify-between" } px-5`}>
                    {
                        formPage > 1 ? 
                            <button onClick={previousPage} className="p-3 text-gray-400 px-6" >
                                Back
                            </button>
                        :""
                    }
                    <button onClick={formPage < 3 ? nextPage : campaignLaunch } className="p-3 bg-blue-500 text-white rounded-md px-6">
                        { formPage == 3 ? "Create campaign" : "Continue"}
                    </button>
                </div>

            </div>

            <div className="bg-gray-100 p-2" >
            {
                formPage == 1 ? 
                    <img src={EmailPreview} alt="" />
                : <CampaignSignature/>
            }
            </div>

        </div>

    </div>
  )
}

export default AddCampaign