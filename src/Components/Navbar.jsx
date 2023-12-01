import React from 'react'
import logo from '../Assets/at.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ menu }) => {

    const navigate = useNavigate();

  return (
    <div className='shadow-lg px-8 md:px-0'>
        <div className="container mx-auto flex py-3">
            <div className="1 grid w-2/12">
                <button onClick={menu} className='border border-[#FD4C00] text-[#FD4C00] h-max w-max my-auto p-1 rounded-lg hover:scale-[1.1] hover:opacity-70 transition-all duration-300 hover:rotate-180'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>
            <div className="2 logo w-8/12">
                <button onClick={()=>navigate('/')}>
                    <img src={logo} alt="" className='w-[75px] mx-auto' />
                </button>
            </div>
            <div className="3 w-2/12">
                
            </div>
        </div>
    </div>
  )
}

export default Navbar