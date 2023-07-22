import React from 'react'
import GlobalLayout from './GlobalLayout'
import CompanyDetailsHook from '../hooks/CompanyDetailsHook'
import { Link } from 'react-router-dom'

const CompanyDetailsLayout = ({ children }) => {

    const { setCompanyNav, companyNav } = CompanyDetailsHook()

    const nav = [
        {name: "comapany info", title: "info", to: "/company/infos"},
        {name: "company social links", title: "links", to: "/company/social"},
    ]

  return (
    <GlobalLayout>
        <h1 className='text-xl capitalize font-semibold mb-5'>Domain Details</h1>

        <ul className='flex gap-7 border-b-2'>
            {
                nav.map(({name, to, title}, key) => (
                    <Link key={key} to={to} onClick={(e) => setCompanyNav(e.target.title)} className={companyNav == title ? "border-b-2 border-black" : "border-b-2 border-transparent duration-200 hover:border-black"}>
                        <li title={title} >{name}</li>
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

export default CompanyDetailsLayout