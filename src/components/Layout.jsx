import React from 'react'
import SideBar from './SideBar'
import Cards from './Cards'

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex'>
        <SideBar/>
        <div className="flex-grow w-full flex">
            <div className="w-[500px] p-5 flex gap-10 max-h-full overflow-scroll">
                {children}
            </div>
            <div className="flex-grow bg-slate-200 flex items-center justify-center">
                <Cards/>
            </div>
        </div>
    </div>
  )
}

export default Layout