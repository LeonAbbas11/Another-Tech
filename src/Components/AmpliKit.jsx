import React from 'react'
import product from '../Assets/900 4.png'
import { useNavigate } from 'react-router-dom'

const AmpliKit = () => {

    const navigate = useNavigate();

  return (
    <div className='space-y-10'>
      <div className="grid xl:flex">
        <div className="w-full md:w-1/2 grid">
            <p className='text-2xl font-semibold md:hidden mb-10'>KIT AMPLIFIER VHF 144-148 MHZ 900 WATT READY TO GO IN BOX</p>
            <img src={product} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
        </div>
        <div className="w-full md:w-1/2 text-start grid">
            <p className='text-3xl font-semibold hidden md:block'>KIT AMPLIFIER VHF 144-148 MHZ</p>
            <p className='text-2xl font-semibold mt-10 mb-5'>Description :</p>
            <p className='text-xl font-semibold'>The transistor uses 4 pcs of sat 380 with 250 watts of power each and uses a 2 level LPF to balance the frequency as well as adequate jumpers for 900 watt performance and is equipped with input and temperature protection.</p>
            <p className='text-xl font-semibold'>The transistor section has cooling so it is safer for all new parts. for pcbs designed for power strength and the headset is installed on the PCB so that those who want to insert it into the box don't need to think anymore about the cooling process.</p>
        </div>
      </div>
      <p className='text-xl font-semibold mt-10'>Price : <span className='text-xl font-extrabold text-red-600'>$ 425.0</span></p>
      <button onClick={()=>navigate('/checkout/4')} className='w-3/4 md:w-1/4 rounded-full py-1 transition-all duration-500 hover:scale-110 bg-[#FD4C00] text-white mt-10 mx-auto text-lg md:text-xl font-semibold'>Buy now</button>
    </div>
  )
}

export default AmpliKit