import { DataContext } from '@/contextt/DataContext'
import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const {data} = useContext(DataContext);
   let getUnique = (data, property)=>{
      let newVal = data?.map((e)=>{
        return e[property]
      })
      newVal = [...new Set(newVal)];
      return newVal
    }
    const cateOnlyData = getUnique(data, "category");
    const navigate = useNavigate()
  
  // console.log(cateOnlyData)
  
  return (
    <div className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
      <div className='max-w-7xl py-7 md:px-16 px-4  justify-around text-white grid grid-cols-2 md:grid-cols-4 gap-2'>
        {cateOnlyData?.map((item, idx)=>{
          return <div key={idx}>
            <button onClick={()=>navigate(`/category/${item}`)} className='text-white/100 cursor-pointer bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-sans font-semibold rounded-lg text-sm px-3 py-1 md:py-2 text-center me-2 mb-2 uppercase line-clamp-1'>{item}</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Categories
