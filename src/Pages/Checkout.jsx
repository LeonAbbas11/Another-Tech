import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar';

const Checkout = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShow = async() => {
        try {
          if (showMenu === false) {
            setShowMenu(true);
          }else{
            setShowMenu(false);
          }
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <div>
        <Navbar menu={()=>handleShow()} show={showMenu} />
        <div className="wrapper container mx-auto grid my-10">
            <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1"></div>
            <div className="wrapper p-5 md:p-0">
                <p className='text-xl font font-semibold my-10'>For the purcase process you need to fill the form below and our team or admin will immediately respond to you by email.</p>
                <div className="form grid w-full md:w-3/4 mx-auto border-2 rounded-xl p-4 md:p-10 space-y-6">
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Full Name</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Address</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Country</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>City</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Phone</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Email</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Shipping</p>
                        </div>
                        <div className="w-3/4 grid md:flex spacex-0 md:space-x-28">
                            <div className="flex space-x-3">
                                <input type="radio" name='shipping' />
                                <label htmlFor="DHL">DHL</label>
                            </div>
                            <div className="flex space-x-3">
                                <input type="radio" name='shipping' />
                                <label htmlFor="FEEDEX">FEEDEX</label>
                            </div>
                            <div className="flex space-x-3">
                                <input type="radio" name='shipping' />
                                <label htmlFor="EMS">EMS</label>
                            </div>
                            <div className="flex space-x-3">
                                <input type="radio" name='shipping' />
                                <label htmlFor="ARAMEX">ARAMEX</label>
                            </div>
                        </div>
                    </div>
                    <button className='text-white font-semibold bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] rounded-full py-2 md:w-1/2 md:mx-auto transition-all duration-500 hover:scale-105'>Submit</button>
                </div>
            </div>
        </div>
        <Footer />
        <Sidebar show={showMenu} close={()=>setShowMenu(false)} />
    </div>
  )
}

export default Checkout