import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'

const LoadingScreen = ({ children }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },[])

    const navigate = useNavigate()

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-primary-default bg-primary'>
        {
            loading ? <FadeLoader color="#EAB308" /> : navigate("/organization", {replace: true}) 
        }
    </div>
  )
}

export default LoadingScreen