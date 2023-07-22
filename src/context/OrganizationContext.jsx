import { createContext, useState } from 'react'

const OrganizationContext = createContext({})

export const OrganizationContextProvider = ({ children }) => {
  
    const [organizationGroups, setOrganizationGroups] = useState(["All Groups", "Main Group"])
    const [organizationSignature, setOrganizationSignature] = useState(["All Signatures", "Main Signature"])
  
    const value = {
        organizationGroups, setOrganizationGroups,
        organizationSignature, setOrganizationSignature
    }

    return (
        <OrganizationContext.Provider value={value}>
            { children }
        </OrganizationContext.Provider>
    )
}

export default OrganizationContext