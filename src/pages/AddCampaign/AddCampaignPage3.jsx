import { useState } from 'react'
import CampaignFormCounter from '../../components/CampaignFormCounter'
import CampaignFormHook from '../../hooks/CampaignFormHook'

const AddCampaignPage3 = () => {

  const { bannerLink, setBannerLink,
          campaignPriority, setCampaignPriority,
          activePriority, setActivePriority } = CampaignFormHook()

  const priority = (prio) => {

    const pr = ["low", "regular", "high"]

    setActivePriority(prio)
    setCampaignPriority(pr[prio - 1])

  }

  return (
    <div>

      <CampaignFormCounter />

      <div className="campaign-settings mt-5 flex flex-col gap-4">

        <div className="campaign-priority flex flex-col gap-2">
          <label htmlFor="campaign priority">Campaign Priority</label>
          <div className="campagin-priority flex items-center">

            <button onClick={() => priority(1)} className={`priority-low flex flex-col px-4 py-2 border ${activePriority == 1 && "bg-gray-100"}`}>
              <input type="radio" name="campaign priority" className="appearance-none" />
              <label htmlFor="banner priority" className={`text-gray-400 cursor-pointer text-[12px] font-bold ${activePriority == 1 && "!text-blue-400"}`}>Low</label>
            </button>

            <button onClick={() => priority(2)} className={`priority-low flex flex-col px-4 py-2 border ${activePriority == 2 && "bg-gray-100"}`}>
              <input type="radio" name="campaign priority" className="appearance-none" />
              <label htmlFor="banner priority" className={`text-gray-400 cursor-pointer text-[12px] font-bold ${activePriority == 2 && "!text-blue-400"}`}>Regular</label>
            </button>

            <button onClick={() => priority(3)} className={`priority-low flex flex-col px-4 py-2 border ${activePriority == 3 && "bg-gray-100"}`}>
              <input type="radio" name="campaign priority" className="appearance-none" />
              <label htmlFor="banner priority" className={`text-gray-400 cursor-pointer text-[12px] font-bold ${activePriority == 3 && "!text-blue-400"}`}>High</label>
            </button>

          </div>
        </div>

        <div className="banner-link flex flex-col gap-2 ">
          <label htmlFor="banner link">Banner links to (optional)</label>
          <input type="text" name="banner link" className="border-2 rounded-lg p-2 w-[400px] outline-none" value={bannerLink} onChange={(e) => setBannerLink(e.target.value)} />
        </div>

      </div>

    </div>
  )
}

export default AddCampaignPage3