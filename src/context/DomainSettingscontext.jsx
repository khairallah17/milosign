import { createContext, useReducer, useState } from 'react'

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
    const [companyGroups, setCompanyGroups] = useState(["", "default", "main groups"])

    // COMPANY SOCIALS
    const [companyFacebook, setCompanyFacebook] = useState("")
    const [companyLinkedIn, setCompanyLinkedIn] = useState("")
    const [companyTwitter, setCompanyTwitter] = useState("")
    const [companyInstagram, setCompanyInstagram] = useState("")
    const [companyYoutube, setCompanyYoutube] = useState("")

    // COMPANY CUSTOM FIELDS
    const [companyCustomFields, setCompanyCustomFields] = useState([])

    // CAMPAIGN FIELDS
    const [campaignName, setCampaignName] = useState("")
    const [campaignMedium,setCampaignMedium] = useState("")
    const [campaignSource, setCampaignSource] = useState("")

    // EMPLOYEES CAN EDIT FIELDS
    const [employeeEmail, setEmployeeEmail] = useState(true)
    const [employeeName, setEmployeeName] = useState(true)
    const [employeePronouns, setEmployeePronouns] = useState(false)
    const [employeeTitle, setEmployeeTitle] = useState(false)
    const [employeeMobile, setEmployeeMobile] = useState(false)
    const [employeePhone, setEmployeePhone] = useState(false)
    const [employeeExtension, setEmployeeExtension] = useState(false)
    const [employeeFacebook, setEmployeeFacebook] = useState(false)
    const [employeeLinkedIn, setEmployeeLinkedIn] = useState(true)
    const [employeeTwitter, setEmployeeTwitter] = useState(true)
    const [employeeInstagram, setEmployeeInstagram] = useState(true)
    const [employeePhoto, setEmployeePhoto] = useState(false)

    // NEW EMPLOYEE
    const [employeeGroup, setEmployeeGroup] = useState("Main group")
    const [createEmployeeAs, setCreateEmployeeAs] = useState("Inactive")
    const [employeeInviteEmail, setEmployeeInviteEmail] = useState(false)
    const [onDeleteEmployee, setOnDeleteEmployee] = useState("Keep employee on Milosign")

    // INVITE EMAIL FIELDS
    const [emailSubject, setEmailSubject] = useState("")
    const [emailSender, setEmailSender] = useState("")
    const [askEmployeeToReview, setAskEmployeeToReview] = useState(true)
    const [manual, dispatchManual] = useReducer((manual, action) => {

      switch(action.type){
        case "IOS": return {...manual, ios: !action.value}
        case "MAC": return {...manual, mac: !action.value}
        case "GMAIL": return {...manual, personalGmail: !action.value}
        case "OUTLOOK": return {...manual, outlook: !action.value}
      }

    },{
      mac: true,
      ios: true,
      personalGmail: false,
      outlook: false,
      all:true
    })

    const changePermission = (value) => {

      if (value == "all"){
        setEmployeeEmail(true)
        setEmployeeName(true)
        setEmployeePronouns(true)
        setEmployeeTitle(true)
        setEmployeeMobile(true)
        setEmployeePhone(true)
        setEmployeeExtension(true)
        setEmployeeFacebook(true)
        setEmployeeLinkedIn(true)
        setEmployeeTwitter(true)
        setEmployeeInstagram(true)
        setEmployeePhoto(true)
      } else if (value == "none"){
        setEmployeeEmail(false)
        setEmployeeName(false)
        setEmployeePronouns(false)
        setEmployeeTitle(false)
        setEmployeeMobile(false)
        setEmployeePhone(false)
        setEmployeeExtension(false)
        setEmployeeFacebook(false)
        setEmployeeLinkedIn(false)
        setEmployeeTwitter(false)
        setEmployeeInstagram(false)
        setEmployeePhoto(false)
      } else if (value == "custom") {
        setEmployeeEmail(true)
        setEmployeeName(true)
        setEmployeePronouns(false)
        setEmployeeTitle(false)
        setEmployeeMobile(false)
        setEmployeePhone(false)
        setEmployeeExtension(false)
        setEmployeeFacebook(true)
        setEmployeeLinkedIn(true)
        setEmployeeTwitter(true)
        setEmployeeInstagram(false)
        setEmployeePhoto(false)
      }

    }

    const value = { activeNav, setActiveNav,
                    domain, setDomain,
                    companyName, setCompanyName,
                    companyAddress, setCompanyAddress,
                    companyWebsite, setCompanyWebsite,
                    companyPhone, setCompanyPhone,
                    companyFax, setCompanyFax,
                    companyFacebook, setCompanyFacebook,
                    companyLinkedIn, setCompanyLinkedIn,
                    companyTwitter, setCompanyTwitter,
                    companyInstagram, setCompanyInstagram,
                    companyYoutube, setCompanyYoutube,
                    companyCustomFields, setCompanyCustomFields,
                    companyLogo, setCompanyLogo,
                    campaignName, setCampaignName,
                    campaignSource, setCampaignSource,
                    campaignMedium, setCampaignMedium,
                    employeeEmail,
                    employeeName,
                    employeePronouns,
                    employeeTitle,
                    employeeMobile,
                    employeePhone,
                    employeeExtension,
                    employeeFacebook,
                    employeeLinkedIn,
                    employeeTwitter,
                    employeeInstagram,
                    employeePhoto,
                    setEmployeeEmail,
                    setEmployeeName,
                    setEmployeePronouns,
                    setEmployeeTitle,
                    setEmployeeMobile,
                    setEmployeePhone,
                    setEmployeeExtension,
                    setEmployeeFacebook,
                    setEmployeeLinkedIn,
                    setEmployeeTwitter,
                    setEmployeeInstagram,
                    setEmployeePhoto,
                    changePermission,
                    employeeGroup, setEmployeeGroup,
                    createEmployeeAs, setCreateEmployeeAs,
                    employeeInviteEmail, setEmployeeInviteEmail,
                    onDeleteEmployee, setOnDeleteEmployee,
                    emailSubject, setEmailSubject,
                    emailSender, setEmailSender,
                    askEmployeeToReview, setAskEmployeeToReview,
                    manual, dispatchManual,
                    companyGroups, setCompanyGroups }

  return (
    <DomainSettingsContext.Provider value={value}>
        { children }
    </DomainSettingsContext.Provider>
  )
}

export default DomainSettingsContext