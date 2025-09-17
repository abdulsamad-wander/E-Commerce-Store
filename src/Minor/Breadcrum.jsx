import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadcrum = ({title}) => {
    const navigate = useNavigate()
  return (
    <div className='max-w-screen mx-auto my-10'>
      <h1 className='font-semibold text-lg dark:text-white/90'><span className='cursor-pointer hover:text-blue-500' onClick={()=>navigate('/')}>Home</span> <span>/</span> <span className='cursor-pointer hover:text-blue-500' onClick={()=> navigate('/products')}>Products</span> <span>/</span> <span className='cursor-default'>{title}</span></h1>
    </div>
  )
}

export default Breadcrum
