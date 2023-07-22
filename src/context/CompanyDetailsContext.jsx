import { createContext, useState } from 'react'

const CompanyDetailsContext = createContext({})

export const CompanyDetailsProvider = ({ children }) => {

  const [ companyNav, setCompanyNav ] = useState("info")
  const [companyName, setCompanyName] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [companyAddress, setCompanyAddress] = useState("")
  const [companyPhone, setCompanyPhone] = useState("")
  const [companyFax, setCompanyFax] = useState("")
  const [companyLogo, setCompanyLogo] = useState("")

  const value = {
    companyNav, setCompanyNav,
    companyName, setCompanyName,
    companyWebsite, setCompanyWebsite,
    companyAddress, setCompanyAddress,
    companyPhone, setCompanyPhone,
    companyFax, setCompanyFax,
    companyLogo, setCompanyLogo
  }

  return(
    <CompanyDetailsContext.Provider value={value} >
      { children }
    </CompanyDetailsContext.Provider>
  )
}

export default CompanyDetailsContext