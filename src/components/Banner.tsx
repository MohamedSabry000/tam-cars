import React from 'react'
import BannerIcon from '../assets/banner.png'
import Banner2Icon from '../assets/banner2.png'

function Banner() {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-4 mt-5 overflow-hidden">
      <div className="col-span-7 rounded-sm" style={{background: "#FFE0BA"}}>
        <div className='grid grid-cols-2 p-5 pt-0 pb-0 pr-0'>
          <div className="self-center">
            <h3 className='font-bold text-3xl' >
              Apply for a car Loan!
            </h3>
            <p>
             This is a sample of a generated text
            </p>
            <button className="p-3 pl-5 pr-5 rounded-lg text-white mt-10 " style={{background: "#0F2837"}} >
              Discover More
            </button>
          </div>
          <img className="h-64" src={BannerIcon} alt="" />
        </div>
      </div>
      <div className="col-span-5 relative">
        <img className="h-80 w-full absolute -top-10 -left-10 -right-9" src={Banner2Icon} alt="" />

      </div>
    </div>
  )
}

export default Banner