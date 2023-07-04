import React from 'react'
import GlobalLayout from '../components/GlobalLayout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import Modal from '../components/Modal'
import { AnimatePresence } from 'framer-motion'
import AddCampaign from './AddCampaign/AddCampaign'
import { Toaster } from 'react-hot-toast'

const Campaigns = () => {


    const [groups, setGroups] = useState(["group1","group2","group3"])
    const [CampaingModal, setCampaignModal] = useState(false)

    const status = ["all", "live", "paused", "ended", "draft", "startingin the future"]

  return (
    <GlobalLayout>

        <div className="upper-campaing flex w-full items-center justify-between">
            <h1 className='text-2xl font-bold'>Campaign</h1>
            <div className="buttons flex gap-3 items-center">
                <Link to="/domain/campaign" className='capitalize text-blue-500'>campaign settings</Link>
                <button onClick={() => setCampaignModal(true)} className='capitalize bg-blue-500 p-2 rounded-lg text-white'>add campaign</button>
            </div>
        </div>

        <AnimatePresence
            initial={false}
        >
            { 
                CampaingModal && 
                <Modal modalOpen={CampaingModal} className="" handleClose={() => setCampaignModal(false)}>
                    <AddCampaign/>
                </Modal>
            }
        </AnimatePresence>

        <div className="search-filters flex items-center justify-between">

            <div className="flex mt-5 gap-5">

                <div className="status-filter flex flex-col gap-1">
                    <label htmlFor="status" className='capitalize text-gray-400'>status</label>
                    <select name="status" id="" className='capitalize bg-transparent w-24'>
                        {
                            status.map(sts => (
                                <option className='' value={sts}>{sts}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="groupps-filter flex flex-col gap-1">
                    <label htmlFor="groups" className='capitalize text-gray-400'>groups</label>
                    <select name="groups" id="" className='capitalize bg-transparent w-24'>
                        {
                            groups.map(grp => (
                                <option value={grp}>{grp}</option>
                            ))
                        }
                    </select>
                </div>
                        
            </div>

            <div className="search-name border-b-2 flex">
                <input type="text" name='name' placeholder='search by name'  className='outline-none'/>
                <AiOutlineSearch className='text-gray-400 text-lg cursor-pointer' />
            </div>

        </div>        

        <div className="campaigns-table mt-10">
            <table className=' table-auto w-full'>
                <thead className='border-b-2 p-2'>
                    <tr>
                        <td className='py-3 capitalize font-bold text-lg'>campaign name</td>
                        <td className='py-3 capitalize font-bold text-lg'>status</td>
                        <td className='py-3 capitalize font-bold text-lg'>dates</td>
                        <td className='py-3 capitalize font-bold text-lg'>assigned to</td>
                        <td className='py-3 capitalize font-bold text-lg'>priority</td>
                        <td className='py-3 capitalize font-bold text-lg'>views</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='py-3 capitalize'>campaign 1</td>
                        <td className='py-3 capitalize text-green-500'>live</td>
                        <td className='py-3 capitalize'>not selected</td>
                        <td className='py-3 capitalize'>all groups</td>
                        <td className='py-3 capitalize'>regular</td>
                        <td className='py-3 capitalize'>0</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Toaster
            position="bottom-right"
            reverseOrder={false}
        />

    </GlobalLayout>
  )
}

export default Campaigns