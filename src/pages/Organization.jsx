import React from 'react'
import GlobalLayout from '../components/GlobalLayout'
import { BsTrash, BsSend, BsSearch } from "react-icons/bs"
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from "react-icons/ai"
import OrganizationHook from "../hooks/OrganizationHook"

const Organization = () => {

  const buttons = ["Export", "Add Employees"]
  const settinsButtons  = [{ text: "invite", icon: <BsSend className='text-blue-400' /> },
                           { text: "enable", icon: <AiOutlineCheckCircle className='text-blue-400' /> },
                           { text: "disable", icon: <AiOutlineMinusCircle className='text-blue-400' /> },
                           { text: "delete", icon: <BsTrash className='text-red-400' /> }]

  const { organizationGroups,
          organizationSignature } = OrganizationHook()

  return (
    <GlobalLayout>
    
      <h1 className='font-bold text-2xl'>Manage Users</h1>
      <p>active users:</p>
      <p>invited users:</p>
      
      <div className="buttons-settings flex gap-2 justify-end">
        {

          buttons.map((btn, key) => (
            <button key={key} type="button" className='text-white bg-blue-500 duration-200 hover:bg-blue-400 p-2 rounded-md'>
              {btn}
            </button>
          ))

        }
      </div>

      {/* <div className="settings flex items-end justify-between py-3">
        
        <div className="settings-left flex gap-3">
          {

            settinsButtons.map(({text, icon}, key) => (
              <button key={key} className='flex gap-2 items-center border p-2 rounded-md bg-gray-100 duration-200 hover:bg-gray-200'>
                  {icon}
                  {text}
              </button>
            ))

          }
        </div>

        <div className="settings-right flex gap-3">

          <div className="show flex flex-col gap-1">
            <label htmlFor="show">show:</label>
            <select name="show" id="" className='bg-transparent border p-2'>
              <option value="All Signatures">All Signatures</option>
            </select>
          </div>

          <div className="filter-users flex flex-col gap-1">
            <label htmlFor="filter-users" className='capitalize'>filter users:</label>
            <select name="filter users" id="" className='bg-transparent border p-2'>
              <option value="no filter">No filter</option>
            </select>
          </div>

          <div className="search flex flex-col gap-1">
            <label htmlFor="search" className='capitalize'>search:</label>
            <div className="search-input border flex items-center px-1">
              <input type="text" name="search" className='p-2 outline-none' id="" />
              <BsSearch className='text-gray-300' />
            </div>
          </div>

        </div>

      </div> */}

      <div className="filters">

      </div>

      <div className="users-table w-full mt-5">
        <table className='w-full table-fixed border-spacing-2'>
          <thead className='border-b-2'>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Employee</td>
              <td>Assigned</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>mohammed khairallah</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>

    </GlobalLayout>
  )
}

export default Organization