import { useState, useEffect } from 'react'
import DomainLayout from '../../components/DomainLayout'
import axios from 'axios'

const Campaign = () => {

  const [timezones, setTimeZones] = useState([])

  useEffect(() => {

    const fetchtimeZones = async () => {

      try {
        
        const { data } = await axios.get("http://worldtimeapi.org/api/timezone")
        setTimeZones(data)

      } catch (err) {
        console.log("Error ==> ", err.message)
      }
  
    }

    fetchtimeZones()

  },[])

  return (
    <DomainLayout>
      <div className="campaign-details flex w-full justify-between py-5">

        <div className="timezone-title w-1/2">
          <h1 className='capitalize font-bold text-lg'>time zone</h1>
          <p>Campaigns will be automatically added/removed from email <br />signatures in accordance with your timezone selection</p>
        </div>

        <div className="timezones w-1/2">
          <select name="" id="" className='bg-transparent border-2 p-2 w-56 rounded-md'>
            {
              timezones.map((time, key) => (
                <option key={key} value={time}>{time}</option>
              ))
            }
          </select>
        </div>

      </div>
    </DomainLayout>
  )
}

export default Campaign