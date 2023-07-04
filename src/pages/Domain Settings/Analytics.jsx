import React from 'react'
import DomainLayout from '../../components/DomainLayout'
import DomainSettingsHook from '../../hooks/DomainSettingsHook'

const Analytics = () => {

  const { campaignName,
         setCampaignName,
         campaignSource,
         setCampaignSource,
         campaignMedium,
         setCampaignMedium,
         setActiveNav } = DomainSettingsHook()

  const campaignDetails = [{name: "camapaign name", value: campaignName, func: setCampaignName},
                           {name: "campaign medium", value: campaignMedium, func: setCampaignMedium},
                           {name: "campaign source", value: campaignSource, func: setCampaignSource}]      

  setActiveNav("Analytics")  

  const inputClass = "outline-none border p-2 w-80 rounded-md"  

  return (
    <DomainLayout>
      <div className="analytics flex justify-between py-10">

        <div className="utm-params flex flex-col gap-2">
          <h1 className='font-semibold capitalize'>UTM Parameters</h1>
          <p>Add UTM params to all signature links & analyze clicks data <br />on your Google analytics account. You may use macros for a <br />personalized analysis</p>
        </div>

        <div className="utm-inputs w-1/2 flex flex-col gap-4">

          {
            campaignDetails.map(({name, value, func}, key) => (
              <div className={`${name.split(" ").join("-")} flex flex-col gap-2`}>
                <label htmlFor={name} className="font-semibold">{name}</label>
                <input type="text" className={inputClass} name={name} value={value} onChange={(e) => func(e.target.value)} />
              </div>
            ))
          }

        </div>

      </div>
    </DomainLayout>
  )
}

export default Analytics