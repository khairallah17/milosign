import { useState, createContext, useReducer } from 'react'
import toast from "react-hot-toast"

const formContext = createContext({})

export const FromProvider = ({ children }) => {

    const [formPage, setFormPage] = useState(1)

    // DETAILS PAGE 1
    const [campaignName, setCampaignName] = useState("")
    const [campaignStartDate, dispatchCampaignStartDate] = useReducer((campaignStartDate, value) => value.split("T"),"")
    const [campaginEndDate, dispatchCampaignEndDate] = useReducer((campaginEndDate, value) => value.split("T"),"")
    const [campaignGroups, dispatchCampaignGroups] = useReducer((campaignGroups, action) => {

      switch(action.type) {
        case "ADD": return [...campaignGroups ,action.value[action.value.length - 1]]
        case "REMOVE": {
          let index = campaignGroups.indexOf(action.value[0])
          console.log("INDEX TO REMOVE ==> ", index)
          let removed = campaignGroups.splice(index, 1)
          console.log("ERMOVED ITEM ==> ", removed)
          console.log("NEW ARRAY ==> ", campaignGroups)
        }break;
      }

    },[])

    // DESIGN PAGE 2
    const [banner, setBanner] = useState("")
    const [bannerPos, setBannerPos] = useState("")
    const [bannerAlign, setBannerAlign] = useState("")
    const [bannerSize, setBannerSize] = useState(75)
    const [activePos, setActivePos] = useState(0)
    const [activeAlign, setActiveAlign] = useState(0)
    const [otherBanners, dispatchOtherBanners] = useReducer((otherBanners, action) => {

      switch(action){
        case "remove": return false;
        case "keep": return true;
        default : return true
      }

    },true)

    // CALL TO ACTION PAGE 3
    const [camapginPriority, setCampaignPriority] = useState("")
    const [bannerLink, setBannerLink] = useState("")
    const [activePriority, setActivePriority] = useState(0)
    
    // ON CLICK CREATE CAMPAIGN
    const createCampaign = () => {
      toast.success("Campaign Created Successfully!")
    }

    const value = {
        formPage, setFormPage,
        campaignName, setCampaignName,
        campaignStartDate, dispatchCampaignStartDate,
        campaginEndDate, dispatchCampaignEndDate,
        campaignGroups, dispatchCampaignGroups,
        banner, setBanner,
        bannerPos, setBannerPos,
        bannerAlign, setBannerAlign,
        bannerSize, setBannerSize,
        camapginPriority, setCampaignPriority,
        bannerLink, setBannerLink,
        activePos, setActivePos,
        activeAlign, setActiveAlign,
        otherBanners, dispatchOtherBanners,
        activePriority, setActivePriority,
        createCampaign
    }

  return (
    <formContext.Provider value={value} >
        { children }
    </formContext.Provider>
  )
}

export default formContext