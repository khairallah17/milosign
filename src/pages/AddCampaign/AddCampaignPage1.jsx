import { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import CampaignFormHook from '../../hooks/CampaignFormHook'
import CampaignFormCounter from '../../components/CampaignFormCounter'

const AddCampaignPage1 = () => {

  const { formPage,
          campaignName, setCampaignName,
          campaignStartDate, dispatchCampaignStartDate,
          campaginEndDate, dispatchCampaignEndDate,
          campaignGroups, dispatchCampaignGroups } = CampaignFormHook()

  const [selectGroup, showSelectGroup] = useState(false)
  const [groups, setGroups] = useState(["group1","group2","group3"])

  const onRemove = value => dispatchCampaignGroups({type: "REMOVE", value: value})
  const onSelect = value => dispatchCampaignGroups({type: "ADD", value: value})

  const radioClickAll = () => {
      showSelectGroup(false)
      dispatchCampaignGroups({type: "RESET"})
  }

  const inputClass = "border-2 rounded-md border-gray-200 outline-none px-2 py-1"

  return (
    <div className="campaign-content">

        <CampaignFormCounter/>

        <div className="campaign-name flex flex-col gap-2 mt-5">
            <label htmlFor="Campaign name">Campaign name</label>
            <input type="text" name="campaign name" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} className={`${inputClass} w-[408px]`} />
        </div>

        <div className="campaign-date-time flex flex-col gap-2 mt-5">
            <label htmlFor="date and time">Campaign date & time</label>
            <div className="date-and-time flex gap-2">
                <input type="datetime-local" onChange={(e) => dispatchCampaignStartDate(e.target.value)} name="start date" className={`${inputClass} w-[200px]`} id="" />
                <input type="datetime-local" onChange={(e) => dispatchCampaignStartDate(e.target.value)} name="start date" className={`${inputClass} w-[200px]`} id="" />
            </div>
        </div>

        <div className="campaign-group flex flex-col gap-2 my-5">
            <label htmlFor="Group Name">Assign campaign to</label>
            <div className="group-select flex gap-4">
                <div className="all-groups flex gap-2">
                    <input onClick={radioClickAll} type="radio" name="group name" id="" />
                    <label htmlFor="all gtoups">All groups</label>
                </div>
                <div className="all-groups flex gap-2">
                    <input onClick={() => showSelectGroup(true)} type="radio" name="group name" id="" />
                    <label htmlFor="specific group">Specific group</label>
                </div>
            </div>
        </div>

        <div className="select-group mb-5 w-[408px]">
            {
                selectGroup &&
                <Multiselect
                    isObject={false}
                    onRemove={onRemove}
                    onSelect={onSelect}
                    options={groups}
                    value={campaignGroups}
                />
            }
        </div>
    </div>
  )
}

export default AddCampaignPage1