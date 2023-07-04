import React from 'react'
import DomainLayout from '../../components/DomainLayout'
import DomainSettingsHook from '../../hooks/DomainSettingsHook'
import { Link } from 'react-router-dom'

const InviteEmail = () => {

  const { 
    setActiveNav,
    emailSubject, setEmailSubject,
    emailSender, setEmailSender,
    askEmployeeToReview, setAskEmployeeToReview,
    manual, dispatchManual } = DomainSettingsHook()

  setActiveNav("Invite Email")

  const classInput = "border-2 rounded-md bg-transparent p-2 w-72 outline-none"

  return (
    <DomainLayout>

      <div className="email-subject-sender flex py-5 border-b-2">

        <div className="email-subject-sender-text w-1/2">
          <h1 className="font-bold">
            Email subject & sender
          </h1>
          <p className='w-3/4'>Set the email subject and sender</p>
        </div>

        <div className="flex flex-col gap-6">

          <div className="email-subject flex flex-col gap-2">
            <label htmlFor='email subject' className='font-bold'>Subject</label>
            <input type="text" name="email subject" className={classInput} value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} id="" />
          </div>

          <div className="sender flex flex-col gap-2">
            <label htmlFor="email sender" className='font-bold' >Email Sender</label>
            <input type="text" name="email sender" className={classInput} value={emailSender} onChange={(e) => setEmailSender(e.target.value)} id="" />
          </div>

        </div>

      </div>

      <div className="email-body flex py-5 border-b-2">

        <div className="email-body-text w-1/2">
          <h1 className='font-bold' >Email body</h1>
          <p>Configure the email body sent to your employees</p>
        </div>

        <div className="flex flex-col gap-1">
          
          <div className="ask-review flex gap-2 items-center">
            <input checked={askEmployeeToReview}  onChange={() => setAskEmployeeToReview(!askEmployeeToReview)} type="checkbox" name="employe review" id="" />
            <label htmlFor="employe review">Ask employee to review & edit their details</label>
          </div>

          <div className="share-manual flex gap-2 items-center mb-2">
            <input type="checkbox" name="share manual" checked id="" />
            <label htmlFor="share manual">Share manual installation instructions for:</label>
          </div>

          <div className="share-options flex flex-col gap-2 ml-5">

            <div className="manual-ios flex -tems-center gap-2">
              <input type="checkbox" checked={manual.ios} onChange={() => dispatchManual({type: "IOS", value: manual.ios})} name="ios manual" id="" />
              <label htmlFor="ios manual">iOS Mail (iPhone/iPad)</label>
            </div>

            <div className="mac-mail flex gap-2 items-center">
              <input type="checkbox" name="mac mail" checked={manual.mac} onChange={() => dispatchManual({type: "MAC", value: manual.mac})} id="" />
              <label htmlFor="mac mail">Mac Mail</label>
            </div>

            <div className="personal-gmail flex gap-2 items-center">
              <input type="checkbox" name="personal gmail" checked={manual.personalGmail} onChange={() => dispatchManual({ type: "GMAIL", value: manual.personalGmail })} />
              <label htmlFor="personal gmail">Personal Gmail <span className='text-gray-400 text-xs' >gmail.com addresses</span></label>
            </div>

            <div className="outlook flex gap-2 items-center">
              <input type="checkbox" name="outlook" checked={manual.outlook} onChange={() => dispatchManual({ type: "OUTLOOK", value: manual.outlook })} id="" />
              <label htmlFor="outlook">Outlook</label>
            </div>

          </div>

        </div>

      </div>

      <div className="email-preview flex py-5 ">

        <div className="email-subject-sender-text w-1/2">
          <h1 className="font-bold">
          Email Preview
          </h1>
          <p className='w-3/4'>A preview of the invite email sent to your employees is <br /> available here. Changes you make in this page will be <br /> reflected in the preview</p>
        </div>

        <div className="email-text bg-gray-100 text-gray-500 p-8">
          Hi, <br/>
          <br />
          Great news! We have created a new  email signature for the entire company!<br/>
          <br/>
          You can review your signature &amp; edit your details in your <Link to="" className='text-blue-500 underline'>signature page</Link>.<br/>
          <br/>
          Instructions how to add your signature to Outlook desktop, Mac Mail, iPhone, HTML or Gmail are available <Link to="" className='text-blue-500 underline'>here</Link>. <br/>
          <br/>
          Enjoy emailing!<br/>
          Milo
        </div>

      </div>

    </DomainLayout>
  )
}

export default InviteEmail