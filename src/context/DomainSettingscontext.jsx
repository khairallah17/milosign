import { createContext, useState, useReducer } from 'react'

const DomainSettingsContext = createContext({})

export const DomainSettingsProvider = ({ children }) => {

    const [activeNav, setActiveNav] = useState("Domain")

    const [domain, setDomain] = useState("domain.com")

    // COMPANY DETAILS
    const [companyName, setCompanyName] = useState("")
    const [companyAddress, setCompanyAddress] = useState("")
    const [companyWebsite, setCompanyWebsite] = useState("")
    const [companyPhone, setCompanyPhone] = useState("")
    const [companyFax, setCompanyFax] = useState("")
    // COMPANY SOCIALS
    const [companyFacebook, setCompanyFacebook] = useState("")
    const [companyLinkedIn, setCompanyLinkedIn] = useState("")
    const [companyTwitter, setCompanyTwitter] = useState("")
    const [companyInstagram, setCOmpanyInstagram] = useState("")
    const [copanyYoutube, setCompanyYoutube] = useState("")
    // COMPANY CUSTOM FIELDS
    const [companyCustomFields, setCompanyCustomFields] = useReducer()

    const value = { activeNav, setActiveNav, domain, setDomain }

  return (
    <DomainSettingsContext.Provider value={value}>
        { children }
    </DomainSettingsContext.Provider>
  )
}

export default DomainSettingsContext