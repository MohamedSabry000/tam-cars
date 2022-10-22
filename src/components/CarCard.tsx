import { useState, useEffect } from 'react'
import EmptyLoveIcon from '../assets/emptyLove.png'
import FullLoveIcon from '../assets/fullLove.png'
import MemberIcon from '../assets/member.png'
import Recycle2Icon from '../assets/recycle2.png'

function CarCard({car}: {car: any}) {
  const [love, setLove] = useState(false)
  return (
    <div className="rounded-lg p-5 bg-white">
      <div className="grid grid-cols-10 mb-0">
        <div className="flex items-left col-span-8">
          <h3 className='font-bold pt-3 pb-0'>
            {car.title}
          </h3>
        </div>
        <div className='flex items-end col-span-2' onClick={_=> setLove(prev => !prev)}>
          <img src={!love? EmptyLoveIcon: FullLoveIcon} alt="" className='self-center ml-auto mr-0' />
        </div>
      </div>
      <p className="mt-0 text-gray-500">{car.size}</p>
      <img src={car.image} alt="" />
      <div className="grid grid-cols-10 mt-5">
        <div className="flex items-left col-span-6">
          <img src={MemberIcon} alt="" className='mr-2' />
            <span className='ml-2 mr-2'>{car.riderNums}</span>

          <img src={Recycle2Icon} alt="" className='ml-2 mr-2'/>
          <span className='ml-2 mr-2'>{car.type}</span>

        </div>
        <div className='flex items-end col-span-4' onClick={_=> setLove(prev => !prev)}>
          <p className="text-left ml-auto mr-0">${car.rent}<span className="text-gray-500">/d</span></p>
        </div>
      </div>
    </div>
  )
}

export default CarCard