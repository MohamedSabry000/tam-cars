import { useState, useEffect } from 'react'
import RecommendedCard from './RecommendedCard'
import API from '../utils/getDataFromAPI'

const recs = [
  {percentage: 64, car: "https://i.ibb.co/NKBZsTk/car.png", title: "Mini Cooper", buyNumber: 132, rent: 32, bgColor: "#E1DFA4"},
  {percentage: 74, car: "https://i.ibb.co/NKBZsTk/car.png", title: "Porsche 911 Carrera", buyNumber: 130, rent: 28, bgColor: "#E3ECF1"},
  {percentage: 74, car: "https://i.ibb.co/NKBZsTk/car.png", title: "Porsche 911 Carrera", buyNumber: 130, rent: 28, bgColor: "#F4E3E5"}
]
function Recommended() {
  const [data, setData] = useState(recs)
  useEffect(() => {
    API.get('/recommendations').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      {
        data.map((rec: any, index: number) => <RecommendedCard item={rec} />)
      }
    </div>
  )
}

export default Recommended