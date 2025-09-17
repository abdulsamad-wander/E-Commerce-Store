import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const errPage = useRouteError();
  console.log(errPage)
  return (
    <div className='bg-black min-h-screen flex justify-center flex-col items-center'>
      <h1 className='text-6xl font-bold text-red-600'>404 </h1>
      <p className='text-2xl mt-4 text-white'>{errPage&& <p>{errPage.data}</p>}</p>
      <a href="/" className='mt-6 text-blue-500 underline'> Go back to home</a>
    </div>
  )
}

export default Error
