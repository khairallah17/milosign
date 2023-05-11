import { HiOutlinePencil } from "react-icons/hi"
import { BsCardImage } from "react-icons/bs"
import { AiOutlineShareAlt, AiOutlineAppstoreAdd } from "react-icons/ai"
import { CgTemplate } from "react-icons/cg"
import { RiPaintLine } from "react-icons/ri"
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
        <ul className='flex flex-col items-center justify-center'>
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
        </ul>
    </div>
  )
}

export default SideBar