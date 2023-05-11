import React from 'react'
import { Link } from 'react-router-dom'

const GlobalLayout = ({ children }) => {

    const sideBar = [{name: "organization", to: "/organization"},
                     {name: "Signatures", to: "/signatures/details"}]

  return (
    <div className='flex w-screen h-screen'>

        <div className="sidebar bg-primary text-white">

            <ul className='flex flex-col w-fit'>
                {   
                    sideBar.map(({name, to}, key) => (
                        <li key={key} className='p-3 border-l-8 border-transparent cursor-pointer duration-200 hover:text-yellow-500 hover:border-yellow-500 hover:bg-white'>
                            <Link to={to}>{name}</Link>
                        </li>    
                    ))
                }   
            </ul>

        </div>

        <div className="flex-grow p-5 overflow-scroll max-w-full">
            { children }
        </div>

    </div>
  )
}

export default GlobalLayout