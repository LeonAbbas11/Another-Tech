import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import product1 from '../Assets/booster 250 watt.jpg'
import product2 from '../Assets/booster vhf 400 watt.png'
import product3 from '../Assets/booster vhf 900 watt.png'
import product4 from '../Assets/kit vhf 1000 watt.jpg'
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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
        <div className="wrapper container mx-auto grid mb-10 mt-5">
          <p className='text-3xl font-semibold mb-5'>Products</p>
          <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1"></div>
          <div className="wrapper p-5 md:p-0">
            <p className='text-2xl font-semibold my-3'>Anothertech Solution amplifier audio and radio.</p>
            <p className='text-xl mb-10 w-full xl:w-1/2 mx-auto'>Are you ready to elevate your audio experience to new heights? Look no further! Our exclusive Amplifier Audio and Radio Offer bring you cutting-edge technology and unmatched performance to transform the way you listen. Whether you're an audiophile, a radio enthusiast, or someone who simply appreciates crystal-clear sound, this offer is designed for you.</p>
            <div className="grid md:flex mb-10 md:mb-20 space-y-10 md:space-y-0">
              <div className="w-full md:w-1/2 grid">
                <div className="w-full md:w-3/4 grid m-auto border rounded-lg p-5">
                  <img src={product1} alt="" className='h-[175px] md:h-[300px] m-auto' />
                </div>
                <p className='mt-5 text-xl font-semibold'>Amplifier 250 watt amplifier only</p>
                <p>$250 include shipping cost</p>
                <button onClick={()=>navigate('/detail/1')} className='py-1 w-3/4 xl:w-1/4 rounded-full border mx-auto mt-5 transition-all duration-500 hover:scale-110 hover:bg-[#FD4C00] hover:text-white'>See more...</button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full md:w-3/4 m-auto grid border rounded-lg p-5">
                  <img src={product2} alt="" className='h-[175px] md:h-[300px] m-auto' />
                </div>
                <p className='text-xl font-semibold mt-5'>Amplifier 400 watt vhf 144-148 Mhz building power supply</p>
                <p>$450 include shipping cost</p>
                <button onClick={()=>navigate('/detail/2')} className='py-1 w-3/4 xl:w-1/4 rounded-full border mx-auto mt-5 transition-all duration-500 hover:scale-110 hover:bg-[#FD4C00] hover:text-white'>See more...</button>
              </div>
              </div>
              <div className="grid md:flex mb-0 md:mb-10 space-y-10 md:space-y-0">
              <div className="w-full md:w-1/2 grid">
                <div className="w-full md:w-3/4 grid m-auto border rounded-lg p-5">
                  <img src={product3} alt="" className='h-[175px] md:h-[300px] m-auto' />
                </div>
                <p className='mt-5 text-xl font-semibold'>Amplifier 900 watt vhf 144-148 Mhz building power supply</p>
                <p>$650 include shipping cost</p>
                <button onClick={()=>navigate('/detail/3')} className='py-1 w-3/4 xl:w-1/4 rounded-full border mx-auto mt-5 transition-all duration-500 hover:scale-110 hover:bg-[#FD4C00] hover:text-white'>See more...</button>
              </div>
              <div className="w-full md:w-1/2 grid">
                <div className="w-full md:w-3/4 m-auto grid border rounded-lg p-5">
                  <img src={product4} alt="" className='h-[175px] md:h-[300px] m-auto' />
                </div>
                <p className='mt-5 text-xl font-semibold'>Kit amplifier 800-900 watt vhf 144-148 mhz just enter the casing</p>
                <p>$400 include shipping cost</p>
                <button onClick={()=>navigate('/detail/4')} className='py-1 w-3/4 xl:w-1/4 rounded-full border mx-auto mt-5 transition-all duration-500 hover:scale-110 hover:bg-[#FD4C00] hover:text-white'>See more...</button>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      <Sidebar show={showMenu} close={()=>handleShow()} />
    </div>
  )
}

export default Products