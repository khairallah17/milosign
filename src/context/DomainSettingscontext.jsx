import { createContext, useState } from 'react'

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
    const [companyLogo, setCompanyLogo] = useState(null)
    // COMPANY SOCIALS
    const [companyFacebook, setCompanyFacebook] = useState("")
    const [companyLinkedIn, setCompanyLinkedIn] = useState("")
    const [companyTwitter, setCompanyTwitter] = useState("")
    const [companyInstagram, setCompanyInstagram] = useState("")
    const [companyYoutube, setCompanyYoutube] = useState("")
    // COMPANY CUSTOM FIELDS
    const [companyCustomFields, setCompanyCustomFields] = useState([])

    const value = { activeNav, setActiveNav, domain, setDomain,
                    companyName,
                    setCompanyName,
                    companyAddress,
                    setCompanyAddress,
                    companyWebsite,
                    setCompanyWebsite,
                    companyPhone,
                    setCompanyPhone,
                    companyFax,
                    setCompanyFax,
                    companyFacebook,
                    setCompanyFacebook,
                    companyLinkedIn,
                    setCompanyLinkedIn,
                    companyTwitter,
                    setCompanyTwitter,
                    companyInstagram,
                    setCompanyInstagram,
                    companyYoutube,
                    setCompanyYoutube,
                    companyCustomFields,
                    setCompanyCustomFields,
                    companyLogo,
                    setCompanyLogo }

  return (
    <DomainSettingsContext.Provider value={value}>
        { children }
    </DomainSettingsContext.Provider>
  )
}

export default DomainSettingsContext