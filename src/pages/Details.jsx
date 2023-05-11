import React from 'react'
import Layout from '../components/Layout'
import globalContextHook from '../hooks/globalContextHook'
import { AiOutlinePlus } from "react-icons/ai"
import { FcCameraAddon } from "react-icons/fc"
import { Link } from 'react-router-dom'

const Details = () => {

    const { name,
            setName,
            title,
            setTitle,
            company,
            setCompany,
            phone,
            setPhone,
            mobile,
            setMobile,
            website,
            setWebsite,
            email,
            setEmail,
            address,
            setAddress,
            setActiveLink,
            image,
            setImage } = globalContextHook()

    const classInput = "border-b-2 border-gray-300 py-2 outline-none w-fit"

    const inputs = [{ text: "name", value: name, func: setName },
                    { text: "title", value: title, func: setTitle },
                    { text: "company", value: company, func: setCompany },
                    { text: "phone", value: phone, func: setPhone },
                    { text: "mobile", value: mobile, func: setMobile },
                    { text: "website", value: website, func: setWebsite },
                    { text: "email", value: email, func: setEmail },
                    { text: "address", value: address, func: setAddress }]

    const uploadImage = (e) => {

        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setImage(reader.result)
        }
        reader.onerror = () => {
            console.log("error ==> ", error)
        }

    }

  return (
    <Layout>

            <div className="w-[500px] p-5 flex gap-10">

                <div className="w-fit h-full">

                    <h1 className='uppercase font-bold text-lg tracking-wider'>signature details</h1>

                    <div className='mt-5 flex flex-col gap-5'>

                        {

                            inputs.map(({text, value, func}, key) => (
                                <input key={key} type="text" name={text} id="" placeholder={text.toUpperCase()} value={value} onChange={(e) => func(e.target.value)} className={classInput}/>
                            ))

                        } 

                        <button className='capitalize flex items-center gap-1 text-blue-500 mt-2'>
                            <AiOutlinePlus className=' text-blue-500' />
                            add a field
                        </button>

                        <Link to="/social" onClick={() => setActiveLink("social")} className='capitalize flex items-center gap-1 text-blue-500'>
                            <AiOutlinePlus className=' text-blue-500' />
                            add social profiles
                        </Link>

                    </div> 

                </div>

                <div className="flex-grow relative">
                    <button className=''>
                        
                    </button>
                    <input type="file" name="image" onChange={(e) => uploadImage(e)} placeholder='hello' id="" className="inputfile" />
                    <label htmlFor="image" className='capitalize border-dashed border-2 border-gray-200 !flex flex-col items-center justify-center h-36 w-36'>
                        <FcCameraAddon className='text-3xl' />
                        upload image
                    </label>
                </div>

            </div>

    </Layout>
  )
}

export default Details