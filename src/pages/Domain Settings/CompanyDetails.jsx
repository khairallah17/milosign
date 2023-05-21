import React from 'react'
import DomainLayout from '../../components/DomainLayout'
import DomainSettingsHook from '../../hooks/DomainSettingsHook'
import { RxCross1 } from "react-icons/rx"

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
    setCompanyLogo } = DomainSettingsHook()

    const inputClass = "outline-none border p-2 w-80 rounded-md"

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
    </DomainLayout>
  )
}

export default CompanyDetails