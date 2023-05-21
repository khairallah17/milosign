import { HiOutlinePencil } from "react-icons/hi"
import { BsCardImage } from "react-icons/bs"
import { AiOutlineShareAlt, AiOutlineAppstoreAdd } from "react-icons/ai"
import { CgTemplate } from "react-icons/cg"
import { RiPaintLine } from "react-icons/ri"
import { IoCaretBackOutline } from "react-icons/io5"
import { GrReturn } from "react-icons/gr"
import { Link } from 'react-router-dom'
import globalContextHook from '../hooks/globalContextHook'

const nav = [{ text: "details", icon: <HiOutlinePencil className='text-4xl'/> },
             { text: "images", icon: <BsCardImage className='text-4xl'/> },
             { text: "social", icon: <AiOutlineShareAlt className='text-4xl'/> },
             { text: "template", icon: <CgTemplate className='text-4xl'/> },
             { text: "design", icon: <RiPaintLine className='text-4xl'/> },
             { text: "apps", icon: <AiOutlineAppstoreAdd className='text-4xl'/> }]

const SideBar = () => {

    const { activeLink, setActiveLink } = globalContextHook()

    const switchActiveState = (name) =>{

        const filtred = nav.filter(nv => {
            if (name == nv.text)
                return nv
        })

        setActiveLink(filtred[0].text)

    }

  return (
    <div className='w-fit h-full bg-primary text-white shadow-2xl'>
        <ul className='flex flex-col items-center justify-between h-full'>
            <div className="upper flex flex-col items-center justify-center">
            {

                nav.map(({text, icon} ,key) => (
                    <li key={key} onClick={() => switchActiveState(text)} className={`${activeLink == text ? "bg-white text-yellow-500 border-yellow-500" : ""} border-l-8 border-transparent duration-200 w-full`}>
                        <Link to={`/signatures/${text}`} className='flex flex-col items-center justify-center gap-2 py-5 px-4'>
                            {icon}
                            <p className='capitalize text-lg'>{text}</p>
                        </Link>
                    </li>
                ))

            }
            </div>
            <div className="lower flex items-center justify-center py-5 border-l-8 border-transparent duration-200 w-full hover:bg-white hover:text-yellow-500 hover:border-yellow-500">
                <Link to="/">
                    <li className="p-2 flex items-center justify-between gap-4">
                        <IoCaretBackOutline className="text-3xl"/>
                    </li>
                </Link>
            </div>
        </ul>
    </div>
  )
}

export default SideBar