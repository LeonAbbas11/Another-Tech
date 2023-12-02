import React from 'react'
import product from '../Assets/250 1.jpg'
import product2 from '../Assets/250 2.png'
import product3 from '../Assets/250 3.png'
import { useNavigate } from 'react-router-dom'

const Ampli250 = () => {

  const navigate = useNavigate();

  return (
    <div className='space-y-10'>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <p className='text-2xl font-semibold md:hidden mb-10'>AMPLIFIER 250 WATT</p>
            <img src={product} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid">
            <p className='text-3xl font-semibold hidden md:block'>Amplifier 250 watt</p>
            <p className='text-2xl font-semibold mt-10 mb-5'>Description :</p>
            <p className='text-xl font-semibold'>This amplifier uses aluminum material which cools the transistors inside and uses a headshing measuring 20cm long, 15cm high, 20cm wide. This amp is not equipped with a screen.</p>
        </div>
      </div>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <img src={product2} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid my-5">
            <p className='text-xl font-semibold my-auto'>This amplifier uses aluminum material which cools the transistors inside and uses a headshing measuring 20cm long, 15cm high, 20cm wide. This amp is not equipped with a screen.</p>
        </div>
      </div>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <img src={product3} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid my-5">
            <p className='text-xl font-semibold my-auto'>This amplifier uses aluminum material which cools the transistors inside and uses a headshing measuring 20cm long, 15cm high, 20cm wide. This amp is not equipped with a screen.</p>
        </div>
      </div>
      <p className='text-xl font-semibold mt-10'>Price : <span className='text-xl font-extrabold text-red-600'>$ 275.0</span></p>
      <button onClick={()=>navigate('/checkout/1')} className='w-3/4 md:w-1/4 rounded-full py-1 transition-all duration-500 hover:scale-110 bg-[#FD4C00] text-white mt-10 mx-auto text-lg md:text-xl font-semibold'>Buy now</button>
    </div>
  )
}

export default Ampli250

