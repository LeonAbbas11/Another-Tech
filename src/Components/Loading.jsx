import React from 'react'
import logo from '../Assets/loading2.png'

const Loading = () => {
  return (
    <div className='fixed h-screen w-full top-0 left-0 grid'>
        <div className="wrapper p-10 border rounded-lg m-auto bg-white flex shadow-2xl">
            <img src={logo} alt="" className='animate-spin h-[75px]' />
            <p className='text-3xl font-semibold my-auto ml-5'>Loading. . . .</p>
        </div>
    </div>
  )
}

export default Loading