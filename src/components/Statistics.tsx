import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';

import API from '../utils/getDataFromAPI'

import 'react-circular-progressbar/dist/styles.css';

function Statistics() {
  const [data, setData] = useState([])
  const [clicked, setClicked] = useState(0)

  useEffect(() => {
    API.get('statistics').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <div className="grid grid-cols-4 gap-5">
      {
        data.map((stat: any, index: number) => {
          return (
            <div
            style={clicked === index? {background: "#A162F7", color: "#FFF"} : {}}
            onClick={_ => setClicked(index)}
            className="rounded-lg items-center justify-center text-center dark:bg-gray-800 dark:border-gray-700 bg-white p-3 cursor-pointer"
            >
              <img
                className="p-8 rounded-full self-center m-auto pb-2"
                src={stat.icon}
                alt=""
              />
              <h3 className="font-bold text-lg mb-5">
                {stat.title}
              </h3>
              <div className="flex justify-center items-center p-10">
              <CircularProgressbar 
                value={stat.range} 
                text={`${stat.range}%`} 
                styles={buildStyles({ 
                  rotation: 0.75, 
                  pathColor: clicked === index? "#FFF" : stat.color,
                  textColor: '#000',
                })}
              />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Statistics