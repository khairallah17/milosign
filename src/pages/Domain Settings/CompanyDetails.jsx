import React from 'react'
import DomainLayout from '../../components/DomainLayout'
import DomainSettingsHook from '../../hooks/DomainSettingsHook'
import { RxCross1 } from "react-icons/rx"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { BsTwitter, BsYoutube } from "react-icons/bs"
import { FiInstagram } from "react-icons/fi"

const CompanyDetails = () => {

  const { companyName,
    setCompanyName,
    companyAddress,
    setCompanyAddress,
    companyWebsite,
    setCompanyWebsite,
    companyPhone,
    setCompanyPhone,
    companyFax,
    setCompanyFax,
    companyFacebook,
    setCompanyFacebook,
    companyLinkedIn,
    setCompanyLinkedIn,
    companyTwitter,
    setCompanyTwitter,
    companyInstagram,
    setCompanyInstagram,
    companyYoutube,
    setCompanyYoutube,
    companyCustomFields,
    setCompanyCustomFields,
    companyLogo,
    setCompanyLogo,
    setActiveNav } = DomainSettingsHook()

    const inputClass = "outline-none border p-2 w-80 rounded-md"
    const socialClass = "w-54 border-2 p-2 rounded-lg outline-none"

    const socialLinks = [{icon: <FaFacebookF className=' text-white text-xl'/>, name: "facebook", value: companyFacebook, func: setCompanyFacebook},
                         {icon: <FaLinkedinIn className=' text-white text-xl'/>, name: "linkedin", value: companyLinkedIn, func: setCompanyLinkedIn},
                         {icon: <BsTwitter className='text-white text-xl' />, name: "twitter", value: companyTwitter, func: setCompanyTwitter},
                         {icon: <FiInstagram className='text-white text-xl'/>, name: "instagram", value: companyInstagram, func: setCompanyInstagram},
                         {icon: <BsYoutube className="text-white text-xl"/>, name:  "youtube", value: companyYoutube, func: setCompanyYoutube}]

    setActiveNav("company details")

    const uploadImage = (e) => {

      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
          setCompanyLogo(reader.result)
      }
      reader.onerror = () => {
          console.log("error ==> ", error)
      }

  }

  return (
    <DomainLayout>

      <div className="company-info flex justify-between py-10 border-b-2">
        <h1 className='capitalize font-bold w-1/2'>company info</h1>
        <div className="info-inputs w-1/2 flex flex-col gap-4">

          <div className="company-name flex flex-col gap-2">
            <label htmlFor="company name" className='capitalize font-medium'>company name</label>
            <input type="text" name="company name" id="" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={inputClass} />
          </div>

          <div className="company-website flex flex-col gap-2">
            <label htmlFor="company website" className='capitalize font-medium'>company website</label>
            <input type="text" name="company website" id="" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} className={inputClass} />
          </div>

          <div className="company-adress flex flex-col gap-2">
            <label htmlFor="company address" className='capitalize font-medium'>company address</label>
            <input type="text" name='company address' value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} className={inputClass} />
          </div>

          <div className="company-phone flex flex-col gap-2">
            <label htmlFor="company phone" className='capitalize font-medium'>company phone</label>
            <input type="text" name="company phone" value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} className={inputClass} />
          </div>

          <div className="company-fax flex flex-col gap-2">
            <label htmlFor="company fax" className='capitalize font-medium'>company fax</label>
            <input type="text" name="company fax" value={companyFax} onChange={(e) => setCompanyFax(e.target.value)} className={inputClass} />
          </div>

          <div className="company-logo flex flex-col gap-2">
            <label htmlFor="company logo" className='capitalize font-medium'>company logo</label>
            <input type="file" name="company logo" id="" onChange={(e) => uploadImage(e)} />
            <div className="company-logos relative">
              {
                companyLogo ? <><div className="remove-image w-5 h-5 rounded-full absolute left-20 -top-1 bg-gray-600 cursor-pointer flex items-center justify-center text-white" onClick={() => setCompanyLogo(null)}>
                  <RxCross1 className='text-xs font-bold' />
                </div><img src={companyLogo} alt="" className='w-24 h-24 border rounded-lg' /></> : ""
              }
            </div>
          </div>

        </div>
      </div>

      <div className="company-social-links flex justify-between py-10 border-b 2">
            
        <h1 className='capitalize font-semibold text-lg w-1/2'>company social links</h1>

        <div className="social-links-inputs w-1/2 flex flex-col gap-4">
            
          {
            socialLinks.map(({icon, name, value, func}, key) => (
              <div key={key} className="facebook flex items-center gap-2">
            
                <div className="facebook-logo rounded-lg p-2 w-fit bg-black">
                  {icon}
                </div>

                <input type="text" name={name} className={socialClass} value={value} onChange={(e) => func(e.target.value)} placeholder={`company ${name} link`} />

              </div>
            ))
          }

        </div>

      </div>

    </DomainLayout>
  )
}

export default CompanyDetails