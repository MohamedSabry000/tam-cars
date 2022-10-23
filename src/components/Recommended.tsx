import { useState, useEffect } from 'react'
import RecommendedCard from './RecommendedCard'
import API from '../utils/getDataFromAPI'

function Recommended() {
  const [data, setData] = useState([])
  useEffect(() => {
    API.get('recommendations').then(res => {
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