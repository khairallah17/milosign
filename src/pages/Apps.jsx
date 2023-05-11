import React from 'react'
import Layout from '../components/Layout'
import { AppsIcons } from '../components/AppsIcons'
import globalContextHook from '../hooks/globalContextHook'

const Apps = () => {

  const enhanceSignature = [{ text: "styled signoff", image: AppsIcons.signOff },
                          { text: "disclaimer", image: AppsIcons.gavel },
                          { text: "quote", image: AppsIcons.quote },
                          { text: "green footer", image: AppsIcons.leaf },
                          { text: "video", image: AppsIcons.video },
                          { text: "instagram gallery", image: AppsIcons.instagram },
                          { text: "image gallery", image: AppsIcons.imageGallery }]

  const callToAction = [{ text: "online scheduler", image: AppsIcons.calendar },
                        { text: "online payments", image: AppsIcons.credit },
                        { text: "social buttons", image: AppsIcons.like },
                        { text: "predesigned banners", image: AppsIcons.layers },
                        { text: "custom button", image: AppsIcons.arrowRight },
                        { text: "upload my banner", image: AppsIcons.picture },
                        { text: "sales event", image: AppsIcons.sale },
                        { text: "HTML", image: AppsIcons.program },
                        { text: "video conference", image: AppsIcons.video },
                        { text: "give feedback", image: AppsIcons.star },
                        { text: "join a webinar", image: AppsIcons.conference },
                        { text: "join newsletter", image: AppsIcons.envelope },
                        { text: "download app", image: AppsIcons.mobile },
                        { text: "post a job offer", image: AppsIcons.userSearch }]

  const { setActiveLink } = globalContextHook()

  setActiveLink("apps")

  return (
    <Layout>
      <div className="w-[500px] p-5 flex gap-10">

        <div className="w-fit h-full">

          <h1 className='uppercase font-bold text-lg tracking-wider mb-5'>enhance your signature</h1>

          <div className="enhance-signature flex flex-wrap mb-10">

            {

              enhanceSignature.map(({text, image}, key) => (
                <button type='button' key={key} className='capitalize font-bold text-gray-500 text-sm flex w-[190px] p-2 items-center gap-3 bg-gray-100 border-gray-200 border-2 m-2'>
                  <img className='w-10' src={image} alt="" />
                  {text}
                </button>
              ))

            }

          </div>

          <h1 className='uppercase font-bold text-lg tracking-wider mb-5'>call to action</h1>

          <div className="enhance-signature flex flex-wrap mb-10">

            {

              callToAction.map(({text, image}, key) => (
                <button type='button' key={key} className='capitalize font-bold text-gray-500 text-sm flex w-[190px] p-2 items-center gap-3 bg-gray-100 border-gray-200 border-2 m-2'>
                  <img className='w-10' src={image} alt="" />
                  {text}
                </button>
              ))

            }

          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Apps