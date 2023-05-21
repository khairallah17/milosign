import React, { useState } from 'react'
import DomainLayout from '../../components/DomainLayout'
import DomainSettingsHook from '../../hooks/DomainSettingsHook'
import ReactModal from 'react-modal'
import { RxCross1 } from "react-icons/rx"
import GoogleWorkspace from "../../assets/googleworkspace.png"
import MicrosoftLogo from "../../assets/microsoft-logo.png"
import toast, { Toaster } from "react-hot-toast"

const Domain = () => {

  const { domain, setDomain } = DomainSettingsHook()

  const [openModal , setOpenModal] = useState(false)
  const [googleModal, setGoogleModal] = useState(false)
  const [microsoftModal, setMicrosoftModal] = useState(false)
  const [currentDomain, setCurrentDomain] = useState(domain)
  const [microsoftButton, setMicrosoftButton] = useState("")
  const [emailService, setEmailService] = useState("Google Workspace")
  const [emailAdmin, setEmailAdmin] = useState("")

  const emailServiceProviders = ["Google Workspace","Microsoft","others"]

  const onClickOpenModal = () => {
    setOpenModal(true)
  }
  
  const onClickCloseModal = () => {
    setOpenModal(false)
  }

  const setNewDomain = () => {
    setDomain(currentDomain)
    setOpenModal(false)
  } 

  const sendInvitation = () => {
    if (emailAdmin.length == 0)
      return toast.error("empty field required")
    toast.success("invitation sent")
    setTimeout(() => {
      setGoogleModal(false)
    }, 1000)
  }

  const integrateDomain = () => {
    const toastId = toast.loading("integration processing !")
    setTimeout(() => {
      toast.dismiss(toastId)
      toast.success("integration completed !")
      setMicrosoftModal(false)
      setMicrosoftButton("")
    }, 2000)
  }

  return (
    <DomainLayout>
        
        <div className="add-domain flex items-center w-full relative py-5 border-b-2">

            <ReactModal isOpen={openModal} overlayClassName="bg-[rgba(0,0,0,0.5)] fixed h-screen w-full top-0" className="h-fit w-fit bg-white rounded-lg border-gray-300 p-5 top-1/3 right-[40%] absolute z-20" >

              <div className="close-button flex w-full justify-end">
                <button onClick={onClickCloseModal}>
                  <RxCross1/>
                </button>
              </div>

              <h1 className='text-center my-3 font-semibold text-lg'>Edit Domain name</h1>

              <div className="domain-name flex flex-col mb-5">
                <label htmlFor="domain" className='text-gray-400 text-sm'>Domain name</label>
                <input type="text" name="domain" id="" placeholder='domain' className='outline-none bg-transparent border-b-2' onChange={(e) => setCurrentDomain(e.target.value)} value={currentDomain} />
              </div>

              <button onClick={setNewDomain} className='capitalize bg-blue-400 rounded-lg w-full p-2 text-white'>save domain</button>
              <button className='capitalize p-2 w-full text-gray-400'>cancel</button>

            </ReactModal>

            <div className="domain-title w-1/2">
              <h3 className='capitalize font-semibold text-lg'>domain</h3>
              <p className='capitalize'>add your domain</p>
            </div>

            <div className="edit-domain flex gap-3 items-center justify-center">
              <p>{domain}</p>
              <button className='text-blue-400' onClick={onClickOpenModal}>Edit</button>
            </div>

        </div>

        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />

        <div className="email-service flex w-full py-5">

          <div className="email-title w-1/2">
            <h3 className='capitalize font-semibold text-lg'>email service</h3>
            <p className='capitalize'>Set the email service used at your organization for an <br />optimized miloSign experience </p>
          </div>

          <div className="edit-email-service flex flex-col gap-5">

            <select name="email service" onChange={(e) => setEmailService(e.target.value)} id="" className='bg-transparent p-4 w-80 border rounded-md'>
              {
                emailServiceProviders.map((email, key) => (
                  <option key={key} value={email}>{email}</option>
                ))
              }
            </select>

            { emailService == "others" ? "" : <button onClick={emailService == "Microsoft" ? () => setMicrosoftModal(true) : () => setGoogleModal(true)} className={emailService == "Microsoft" ? "w-80 bg-[#d32] p-4 text-white rounded-md" : "w-80 bg-blue-500 p-4 text-white rounded-md" }>connect with {emailService} </button> }
            { emailService == "others" ? "" : <div className='text-gray-400 text-sm'>integrate with {emailService.split(" ")[0]} to pull your employees</div> }

            <ReactModal isOpen={googleModal} overlayClassName="bg-[rgba(0,0,0,0.5)] fixed h-screen w-full top-0" className="h-fit w-96 bg-white rounded-lg border-gray-300 p-5 top-1/3 right-[40%] absolute z-20" >

              <div className="close-button flex w-full justify-between py-2">
                <img src={GoogleWorkspace} alt="" className='w-36' />
                <button onClick={() => setGoogleModal(false)}>
                  <RxCross1/>
                </button>
              </div>

              <h1 className='my-3 font-semibold text-lg'>Integrate your domain</h1>

              <p>Send a request to the Google domain admin to complete the integration. The domain admin is usually your company IT, CTO or CEO </p>

              <div className="domain-name flex flex-col mb-5 mt-2">
                <input type="text" name="domain admin" id="" placeholder='domain admin@your domain' className='outline-none bg-transparent border-b-2' onChange={(e) => setEmailAdmin(e.target.value)} value={emailAdmin} />
              </div>

              <button onClick={sendInvitation} className='capitalize bg-blue-400 rounded-lg w-full p-2 text-white'>send invitation</button>

            </ReactModal>

            <ReactModal isOpen={microsoftModal} overlayClassName="bg-[rgba(0,0,0,0.5)] fixed h-screen w-full top-0" className="h-fit w-96 bg-white rounded-lg border-gray-300 p-5 top-1/3 right-[40%] absolute z-20" >

              <div className="close-button flex w-full justify-between py-2">
                <img src={MicrosoftLogo} alt="" className='w-36' />
                <button onClick={() => setMicrosoftModal(false)}>
                  <RxCross1/>
                </button>
              </div>

              <h1 className='my-3 font-semibold text-lg'>Integrate your domain</h1>

              <p>are your the domain admin of {domain}?</p>

              <div className='flex flex-col my-3'>

                <div className="yes flex items-center gap-2">
                  <input type="radio" name="admin" value="yes" onClick={() => setMicrosoftButton("yes")} />
                  <label htmlFor="admin">Yes, I'am</label>
                </div>

                <div className="no flex items-center gap-2">
                  <input type="radio" name="admin" id="no" onClick={() => setMicrosoftButton("no")} />
                  <label htmlFor="admin">Nope / I’m not sure</label>
                </div>

              </div>

              { microsoftButton == "yes" ? <button onClick={integrateDomain} className='capitalize bg-[#d32] rounded-lg w-full p-2 text-white'>Integrate Domain</button> : microsoftButton == "no" ? <><p>Send a request to the Google domain admin to complete the integration. The domain admin is usually your company IT, CTO or CEO </p><div className="domain-name flex flex-col mb-5 mt-2"><input type="text" name="domain admin" id="" placeholder='domain admin@your domain' className='outline-none bg-transparent border-b-2' onChange={(e) => setEmailAdmin(e.target.value)} value={emailAdmin} /></div><button onClick={sendInvitation} className='capitalize bg-blue-400 rounded-lg w-full p-2 text-white'>send invitation</button></> : ""}

            </ReactModal>

          </div>

        </div>

    </DomainLayout>
  )
}

export default Domain