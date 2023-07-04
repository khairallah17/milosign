import { useContext } from 'react'
import formContext from '../context/CampaignFormContext'

const CampaignFormHook = () => {
  return (
    useContext(formContext)
  )
}

export default CampaignFormHook