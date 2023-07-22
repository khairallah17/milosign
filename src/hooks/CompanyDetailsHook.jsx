import { useContext } from 'react'
import CompanyDetailsContext from '../context/CompanyDetailsContext'

const CompanyDetailsHook = () => {
  return (
    useContext(CompanyDetailsContext)
  )
}

export default CompanyDetailsHook