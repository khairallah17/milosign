import { useState } from 'react'
import Signature from "../assets/signature.png"
import Image from "../assets/profile-img.jpg"
import Facebook from "../assets/social icons/facebook.png"
import Instagram from "../assets/social icons/instagram.png"
import LinkedIn from "../assets/social icons/linkedin.png"
import Twitter from "../assets/social icons/twitter.png"
import globalContextHook from '../hooks/globalContextHook'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { toast, ToastContainer } from 'react-toastify'
import DomainSettingsHook from "../hooks/DomainSettingsHook"
import Logo from "../assets/logo-lg.png"
import { BiPhone } from "react-icons/bi"
import { TbWorld } from "react-icons/tb"
import { FaRegEnvelope, FaLocationDot } from "react-icons/fa"

const Cards = () => {

    const { name,
            title,
            company,
            phone,
            mobile,
            website,
            email,
            address,
            social,
            image,
            setTemplates,
            templateColor,
            fontSize,
            imageSize,
            imageLink,
            imageShape,
            imagePosition,
            spaceFromContent,
            lineSpacing } = globalContextHook()
    const { companyGroups } = DomainSettingsHook()

    const [showModal, setShowModal] = useState(false)
    const [templateName, setTemplateName] = useState("")
    const [templateGroup, setTemplateGroup] = useState("")

    const template = {
        signature: Signature,
        image,
        title,
        email,
        phone,
        website,
        address,
        social,
        name: templateName,
        group: templateGroup
    }

    const notification = (message, type) => {
        toast(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: type
        });
    }

    const createNewTemlate =  () => {
        console.log(templateName)
        console.log(templateGroup)
        if (!templateName || !templateGroup)
            return notification("Empty fields require!", "error")
        notification("Template created successfully!", "success")
        setShowModal(false)
        setTemplates({type: "ADD", template: template, index: 0})
    }

    const inputClass = "border-2 rounded-md border-gray-200 outline-none px-2 py-1"

  return (
    <div className=' flex flex-col gap-5 items-end'>

        {
            showModal &&
            <Modal title={"Create New Template"} modalOpen={showModal} handleClose={() => setShowModal(false)} className={"w-96"} >
                <div className='create-new-template flex flex-col gap-4 px-2'>

                    <div className="template-name flex flex-col gap-2">
                        <label htmlFor="name">Template name</label>
                        <input type="text" name="name" onChange={(e) => setTemplateName(e.target.value)} value={templateName} className={inputClass} />
                    </div>
                    <div className='template-group flex flex-col gap-2'>
                        <label htmlFor="group">Assign To</label>
                        <select name="group" className={inputClass} onChange={(e) => setTemplateGroup(e.target.value)}>
                            {
                                companyGroups.map((grp, key) => (
                                    <option value={grp} key={key}>
                                        {grp}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <button className='bg-green-400 duration-200 hover:bg-green-500 text-white py-2 rounded-md' onClick={createNewTemlate}>
                        Create Template
                    </button>

                </div>
            </Modal>
        }

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        <ToastContainer />
                
        <div className="card">
            <div className="header w-full h-8 rounded-t-2xl p-[6px] px-3 bg-gray-400 flex gap-1 items-center">
                <div className="circle w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="circle w-4 h-4 bg-gray-200 rounded-full"></div>
                <div className="circle w-4 h-4 bg-gray-200 rounded-full"></div>
            </div>

            <div className="footer p-2 bg-white rounded-b-2xl flex flex-col min-w-[800px] w-[800px] gap-3">
                
                <div className='border-b-2 text-gray-400 border-gray-300 flex items-center pb-2 gap-2'> 
                    To: <span className=' border-2 p-1 rounded-full px-2'>Mohammed khairallah</span> 
                </div>

                <div className='border-b-2 text-gray-400 border-gray-300 flex items-center pb-2 gap-2 capitalize'> 
                    subject: check out my new email signature
                </div>

                <div className="signature mt-5 p-5">
                    <img src={Signature} style={{marginTop: spaceFromContent}} alt="hand signature image" className='w-36 mb-5' />

                    <div className="signature-info flex">

                        <Link to={"https://"+imageLink} target='_blank' className={`image border-r-2 pr-5 flex flex-col max-w-[300px] ${imagePosition}`}>
                            <img src={image || Logo} style={{width: imageSize, borderRadius: imageShape}} alt="signature user image" />
                        </Link>

                        <div className="user-info pl-5 flex flex-col gap-2 w-[90%] max-w-[90%]">

                            <h1 className='flex flex-col text-gray-400'>
                                <span className={`font-bold mb-2`} style={{color: templateColor, fontSize: fontSize, marginBottom: lineSpacing, fontSize: (fontSize)}}>{name || "Mohammed khairallah"}</span>
                                <span>{title || "Full Stack developer"}</span>
                            </h1>
                            
                            <div className="phone-email-website flex flex-wrap w-full gap-2 items-center">
                                <p style={{fontSize: (fontSize - 2)}} className=''>
                                    <span>
                                        <span className='font-bold' style={{color: templateColor}}>Mobile </span>
                                        {phone || "+212-931-0000"}
                                    </span>
                                </p>
                                <div className='h-3 w-[1px] bg-gray-400'></div>
                                <p style={{fontSize: (fontSize - 2)}} className=''>
                                    <span>
                                        <span className='font-bold' style={{color: templateColor}}>Website </span>
                                        {website || "www.mohammedkhairallah.com"}
                                    </span>
                                </p>
                                <div className='h-3 w-[1px] bg-gray-400'></div>
                                <p style={{fontSize: (fontSize - 2)}} className=''>
                                    <span>
                                        <span className='font-bold' style={{color: templateColor}}>Email </span>
                                        {email || "contact@med.com"}
                                    </span>
                                </p>
                                <div className='h-3 w-[1px] bg-gray-400'></div>
                                <p style={{fontSize: (fontSize - 2)}} className=''>
                                    <span>
                                        <span className='font-bold' style={{color: templateColor}}>Address </span>
                                        {address || "1937 Fieldcrest road, NY 10011"}
                                    </span>
                                </p>
                            </div>


                            <div className="social-icons flex items-center gap-3 w-full flex-wrap">

                                <Link to={social.facebook} target="_blank">
                                    <img src={Facebook} alt="" className='w-8'/>
                                </Link>
                                <Link to={social.instagram} target="_blank">
                                    <img src={Instagram} alt="" className='w-8'/>
                                </Link>
                                <Link to={social.twitter} target="_blank">
                                    <img src={Twitter} alt="" className='w-8'/>
                                </Link>
                                <Link to={social.linkedIn} target="_blank">
                                    <img src={LinkedIn} alt="" className='w-8'/>
                                </Link>

                            </div>


                        </div>

                    </div>

                    <button type="button" className="w-full app border-dashed border-2 mt-5 p-5 text-gray-400 text-center">
                        add an app here (disclaimer, banner...)
                    </button>

                </div>
            
            </div>
        </div>

        <button className='w-fit capitalize bg-green-400 duration-200 hover:bg-green-500 p-2 px-14 rounded-md text-white font-bold' onClick={() => setShowModal(true)}>
            create template
        </button>

    </div>
  )
}

export default Cards