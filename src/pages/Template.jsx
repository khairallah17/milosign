import React from 'react'
import Layout from '../components/Layout'
import { AppsIcons } from '../components/AppsIcons'
import globalContextHook from '../hooks/globalContextHook'

const Template = () => {

  const { templates } = globalContextHook()

  return (
    <Layout>
        
        <div className="w-[500px] p-5 flex gap-10">

          <div className="w-fit h-full">

            <h1 className='uppercase font-bold text-lg tracking-wider'>templates</h1>

            <div className="templates mt-5">

              {
                templates.map((dt, key) => (
                  <div key={key}>
                    {dt.name}
                  </div>
                ))
              }

            </div>

          </div>

        </div>

    </Layout>
  )
}

export default Template