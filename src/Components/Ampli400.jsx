import React from 'react'
import product from '../Assets/400 1.png'
import product2 from '../Assets/400 2.png'
import product3 from '../Assets/400 3.jpeg'
import product4 from '../Assets/400 4.png'
import { useNavigate } from 'react-router-dom'

const Ampli400 = () => {

    const navigate = useNavigate();

  return (
    <div className='space-y-10'>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <p className='text-2xl font-semibold md:hidden mb-10'>AMPLIFIER 400 WATT VHF 144-148 Mhz BUILDING POWER DUPPLY</p>
            <img src={product} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid">
            <p className='text-3xl font-semibold hidden md:block'>Amplifier 400 watt</p>
            <p className='text-2xl font-semibold mt-10 mb-5'>Description :</p>
            <p className='text-xl font-semibold'>The 400 watt amplifier has been built up with a power supply in one package and uses a digital screen so you can control the current more freely and is also equipped with on and off TX and most importantly uses LPF and input protection so you don't need to worry about excessive input. and also install temperature protection so that there will be no overheating.</p>
        </div>
      </div>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <img src={product2} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid my-5">
            <p className='text-xl font-semibold my-auto'>The connector at the back for the radio and antenna uses PL259 but can be requested according to the radio's needs.</p>
        </div>
      </div>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <img src={product3} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid my-5">
            <p className='text-xl font-semibold my-auto'>The front display is equipped with a digital screen and there is a screen set button and to adjust the volt it is also provided. The right side is the TX on/off button and the left side is the AC on/off button..</p>
        </div>
      </div>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <img src={product4} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid my-5">
            <p className='text-xl font-semibold my-auto'>Relay In the amp, several important parts are used, including relay for input protection The jumper itself is to reduce current or reduce excessive current for transistors or LDMOS, use 4 pcs of sat380 because 1 unit of sat380 produces 250 watts and for the power supply it uses delta electronic which has been adjusted to 27 volts with an amperage of 40 watts and an LPF is installed near the relay and protection input so that if the input is more the amplifier will turn off .</p>
        </div>
      </div>
      <p className='text-xl font-semibold mt-10'>Price : <span className='text-xl font-extrabold text-red-600'>$ 475.0</span></p>
      <button onClick={()=>navigate('/checkout/2')} className='w-3/4 md:w-1/4 rounded-full py-1 transition-all duration-500 hover:scale-110 bg-[#FD4C00] text-white mt-10 mx-auto text-lg md:text-xl font-semibold'>Buy now</button>
    </div>
  )
}

export default Ampli400