import { useState } from 'react'
import EnergyIcon from '../assets/statistics/energy.png'
import FluidIcon from '../assets/statistics/fluid.png'
import RangeIcon from '../assets/statistics/range.png'
import TireIcon from '../assets/statistics/tire-wear.png'

const statistics = [
  {
    icon:EnergyIcon,
    title: "Energy",
    range: '45%',
  },
  {
    icon: RangeIcon,
    title: "Range",
    range: "157k%"
  },
  {
    icon: FluidIcon,
    title: "Break Fluid",
    range: "9%"
  },
  {
    icon: TireIcon,
    title: "Tire Wear",
    range: "25%"
  }
]

function Statistics() {
  const [clicked, setClicked] = useState(0)
  return (
    <div className="grid grid-cols-4 gap-5">
      {
        statistics.map((stat: any, index: number) => {
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

            </div>
          )
        })
      }
    </div>
  )
}

export default Statistics