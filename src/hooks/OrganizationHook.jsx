import { useContext } from 'react'
import OrganizationContext from '../context/OrganizationContext'

const OrganizationHook = () => {
  return (
    useContext(OrganizationContext)
  )
}

export default OrganizationHook