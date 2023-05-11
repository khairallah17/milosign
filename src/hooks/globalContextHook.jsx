import { useContext } from 'react'
import globalContext from '../context/globalContext'

const globalContextHook = () => {
  return (
    useContext(globalContext)
  )
}

export default globalContextHook