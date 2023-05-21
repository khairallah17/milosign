import { useState } from 'react'
import GlobalLayout from './GlobalLayout'
import { Link } from 'react-router-dom'
import DomainSettingsHook from '../hooks/DomainSettingsHook'

const DomainLayout = ({ children }) => {

    const { activeNav, setActiveNav } = DomainSettingsHook()

    const nav = [{name: "Domain", to: "/domain/settings"},
                 {name: "Employees", to: "/domain/employees"},
                 {name: "Invite Email", to: "/domain/email"},
                 {name: "Analytics", to: "/domain/analytics"},
                 {name: "Campaign", to:"/domain/campaign"},
                 {name: "company details", to:"/domain/company"}]

  return (
    <GlobalLayout>
        <h1 className='text-xl capitalize font-semibold mb-5'>Domain Settings</h1>

        <ul className='flex gap-7 border-b-2'>
            {
                nav.map(({name, to}, key) => (
                    <Link key={key} to={to} onClick={(e) => setActiveNav(e.target.innerText)} className={activeNav == name ? "border-b-2 border-black" : "border-b-2 border-transparent duration-200 hover:border-black"}>
                        <li>{name}</li>
                    </Link>
                ))
            }
        </ul>

        <div className="domain-settings-content">
            {children}
        </div>

    </GlobalLayout>
  )
}

export default DomainLayout