import React, { useState, useEffect } from 'react'
import CarCard from '../components/CarCard'
import carApi from '../utils/getDataFromAPI'
import Arrange1Icon from '../assets/arrange1.png'
import FilterIcon from '../assets/filter.png'
import { Link, useParams } from 'react-router-dom'

function Cars() {
  const [data, setData] = useState([])
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  const {search} = useParams()

  useEffect(() => {
    carApi.get('cars').then(res => {
      if(search){
        setData(res.data.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase())))
      }
      else
        setData(res.data)
    })

  }, [search])
  return (
    <div className='h-full'>
      <h1 className="font-bold text-3xl">Booking</h1>
      <div className="">
        <div className="grid grid-cols-4 gap-5">
          <div className="mb-3 mt-4 text-gray-500 col-span-2 align-middle">
            <div className='relative inline-block'>
              <button
                id="newBtn"
                data-dropdown-toggle="newBtn"
                className="inline-flex pl-4 pr-4 items-center bg-white p-2 text-sm font-medium text-gray-500 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button"
                onClick={_=> setShow1(prev => !prev)}
              >
                New
                <svg className="ml-4 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="newBtn" className="absolute top-11 left-3 z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                style={{display: show1&&!show2? 'block': 'none'}}
              >
                <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">

                </ul>
              </div>
            </div>
            <div className='relative inline-block'>
              <button
                id="dropdownAvatarNameButton"
                data-dropdown-toggle="dropdownAvatarName"
                className="flex pl-4 pr-4 ml-4 items-center bg-white p-2 text-sm font-medium text-gray-500 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                type="button"
                onClick={_=> setShow2(prev => !prev)}
              >
                <span className="sr-only">Open user menu</span>
                Bonnie Green
                <svg className="ml-4 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              <div
                id="dropdownAvatarName"
                className="top-11 left-3 z-10 w-44 absolute z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                style={{display: show2&&!show1? "block":"none"}}
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                  {
                    // data.map((item, index) => (
                    //   <li key={index}>
                    //     <div
                    //       className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    //       onClick={filter(item.type)}
                    //     >
                    //       {item.type}
                    //     </div>
                    //   </li>
                    // ))
                  }
                </ul>
              </div>


            </div>
          </div>
          <div className="flex justify-end  col-span-2 align-middle">
            <img src={Arrange1Icon} alt="" className="h-14" />
            <img src={FilterIcon} alt="" className="h-11" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {
              data.map((car, index) => <CarCard car={car} key={index} />)
            }
          </div>
      </div>
    </div>
  )
}

export default Cars