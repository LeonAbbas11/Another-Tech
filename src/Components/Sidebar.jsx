import React from 'react'
import lil from '../Assets/logo white.png'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ show, close }) => {

  const navigate = useNavigate();

  return (
    <div className={`fixed border-2 -top-1 w-3/4 md:w-1/4 h-screen bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] transition-all duration-300 ${show === true ? '-left-1' : '-left-[500px] md:-left-[800px]'}`}>
        <div className="close grid">
          <button className='text-white ml-auto mr-5 mt-5 transition-all duration-300 hover:scale-105 hover:rotate-180' onClick={close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </button>
        </div>
        <div className="wrapper p-3">
          <div className="flex">
            <img src={lil} className='w-[80px]' alt="lil at" />
            <p className='text-white font-semibold text-xl mt-auto mb-5'>Another Tech</p>
          </div>
          <div className="grid text-white mt-10 space-y-5">
            <button className='text-white transition-all duration-500 hover:scale-105 w-max pl-5 hover:font-semibold' onClick={()=>navigate('/product')}>Our Products</button>
            <button className='text-white transition-all duration-500 hover:scale-105 w-max pl-5 hover:font-semibold' onClick={()=>navigate('/about-us')}>About Us</button>
            {/* <button className='text-white transition-all duration-500 hover:scale-105 w-max pl-5 hover:font-semibold' onClick={()=>navigate('/product')}>Contact Us</button> */}
            <button className='text-white transition-all duration-500 hover:scale-105 w-max pl-5 hover:font-semibold' onClick={()=>navigate('/testimony')}>Testimony</button>
          </div>
        </div>
    </div>
  )
}

export default Sidebar