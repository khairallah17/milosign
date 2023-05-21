import { useContext } from 'react'
import DomainSettingsContext from '../context/DomainSettingscontext'

const DomainSettingsHook = () => {
  return (
    useContext(DomainSettingsContext)
  )
}

export default DomainSettingsHook