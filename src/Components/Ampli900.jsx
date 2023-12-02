import React from 'react'
import product from '../Assets/900 1.png'
import product2 from '../Assets/900 2.png'
import product3 from '../Assets/900 3.jpeg'
import product4 from '../Assets/900 4.png'
import { useNavigate } from 'react-router-dom'

const Ampli900 = () => {

    const navigate = useNavigate();

  return (
    <div className='space-y-10'>
    <div className="grid xl:flex">
      <div className="w-full md:w-1/2 grid">
          <p className='text-2xl font-semibold md:hidden mb-10'>VHF AMPLIFIER 900 WATT BUILD IN POWER SUPPLY</p>
          <img src={product} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
      </div>
      <div className="w-full md:w-1/2 text-start grid">
          <p className='text-3xl font-semibold hidden md:block'>Amplifier 250 watt</p>
          <p className='text-2xl font-semibold mt-10 mb-5'>Description :</p>
          <p className='text-xl font-semibold'>900 watt amplifier with a large display but enough in a ham operating rack with a digital screen and additional screen features and is made with a power supply and various security such as input and temperature protection and also LPF.</p>
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
          <p className='text-xl font-semibold my-auto'>The front display is equipped with a digital screen and there is a screen set button and to adjust the volt it is also provided.The right side is the TX on/off button and the left side is the AC on/off button.</p>
      </div>
    </div>
    <div className="grid xl:flex">
      <div className="w-full md:w-1/2 grid">
          <img src={product4} alt="" className='w-1/2 xl:w-4/12 m-auto'/>
      </div>
      <div className="w-full md:w-1/2 text-start grid my-5">
          <p className='text-xl font-semibold my-auto'>Kit used The transistor uses 4 pcs of sat 380 with 250 watts of power each and uses a 2 level LPF to balance the frequency as well as adequate jumpers for 900 watt performance and is equipped with input and temperature protection. The transistor section has cooling so it is safer for all new parts. for pcbs designed for power strength and the headset is installed on the PCB so that those who want to insert it into the box don't need to think anymore about the cooling process.</p>
      </div>
    </div>
    <p className='text-xl font-semibold mt-10'>Price : <span className='text-xl font-extrabold text-red-600'>$ 675.0</span></p>
    <button onClick={()=>navigate('/checkout/3')} className='w-3/4 md:w-1/4 rounded-full py-1 transition-all duration-500 hover:scale-110 bg-[#FD4C00] text-white mt-10 mx-auto text-lg md:text-xl font-semibold'>Buy now</button>
  </div>
  )
}

export default Ampli900