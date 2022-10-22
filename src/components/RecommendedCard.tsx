import React from 'react'
import RecycleIcon from '../assets/recycle.png'
import Recycle2Icon from '../assets/recycle2.png'
import InfoIcon from '../assets/info.png'
import StormIcon from '../assets/storm.png'

function RecommendedCard({item}: {item: any}) {
  return (
    <div className="rounded-lg p-5" style={{background: item.bgColor}}>
      <div className='flex font-bold'>
        <img src={RecycleIcon} alt="" className="inline-block mr-2 " />
        {item.percentage}% Recommended
      </div>
      <img src={item.car} alt="" />
      <h3 className="font-bold mt-4 mb-4">
        {item.title}
      </h3>
      <div className="grid grid-cols-2 text-gray-500">
        <div className="flex items-left">
          <img src={Recycle2Icon} alt="" className='mr-2' />
            <span className='ml-2 mr-2'>{item.buyNumber}k</span>

          <img src={InfoIcon} alt="" className='ml-2 mr-2'/>
          <img src={StormIcon} alt="" className='ml-2 mr-2'/>
        </div>
        <div className='flex items-end'>
          <p className="text-left ml-auto mr-0">${item.rent}/h</p>
        </div>
      </div>
    </div>
  )
}

export default RecommendedCard