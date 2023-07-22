import { useReducer } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo-lg.png"
import Reveal from '../components/Annimation/Reveal'
import { AiOutlineGoogle } from "react-icons/ai"
import { BsMicrosoft } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Login = () => {

    const navigate = useNavigate()

    const [credentials, dispatchCredentials] = useReducer((credentials, action) => {

        switch(action.type) {
            case "EMAIL": return {...credentials, email: action.value};
            case "PASSWORD": return {...credentials, password: action.value}
        }

    },{
        email: "",
        password: ""
    })

    const login = () => {
        if (!credentials.email)
            return toast.error("Email field is empty!", {
                position: toast.POSITION.TOP_RIGHT
            })
        else if (!credentials.password)
            return toast.error("Password field is empty", {
                position: toast.POSITION.TOP_RIGHT
            })
        else
            navigate("/load", {replace: true})
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen text-white flex-col bg-primary-blue' >
        
        <Reveal delay={0.25}>
            <img className='w-40' src={Logo} alt="" />
        </Reveal>

        <div className="login-type flex flex-col gap-4">

            <Reveal delay={0.5}>
                <div className="login-google">
                    <button className='capitalize bg-white  px-6 py-2 gap-12 flex items-center justify-between duration-200 hover:shadow-lg w-72 min-w-72 max-w-72'>
                        <AiOutlineGoogle className='text-blue-500' />
                        <p className='text-blue-500 font-bold w-3/4 text-left'>login with google</p>
                    </button>
                </div>
            </Reveal>

            <Reveal delay={0.75}>
                <div className="login-microsoft">
                    <button className='capitalize bg-white  px-6 py-2 gap-12 flex items-center justify-between duration-200 hover:shadow-lg w-72 min-w-72    max-w-72'>
                        <BsMicrosoft className=' text-orange-400' />
                        <p className='text-orange-400 font-bold w-3/4 text-left'>login with microsoft</p>
                    </button>
                </div>
            </Reveal>

        </div>

        <form action="" className="login-form my-3">

            <Reveal delay={1}>
                <div className="email flex flex-col w-72 gap-2 mb-3">
                    <label htmlFor="email">email</label>
                    <input className='bg-transparent focus:border-yellow-500 duration-200 outline-none border-b-2' type="email" name="email" value={credentials.email} onChange={(e) => dispatchCredentials({type: "EMAIL", value: e.target.value})} id="" />
                </div>

                <div className="password flex flex-col w-72 gap-2 mb-6">
                    <label htmlFor="password">Password</label>
                    <input className='bg-transparent focus:border-yellow-500 duration-200 outline-none border-b-2' type="password" name="password" value={credentials.password} onChange={(e) => dispatchCredentials({type: "PASSWORD", value: e.target.value})} id="" />
                </div>
            </Reveal>

            <Reveal delay={1.25}>
                <button onClick={login} type='button' className='flex w-72 justify-center bg-white text-blue-400 py-2 hover:shadow-lg duration-200'>
                    login
                </button>
            </Reveal>

        </form>

        <ToastContainer/>

    </div>
  )
}

export default Login