import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import invoice1 from '../Assets/invoice 1.png'
import invoice2 from '../Assets/invoice 2.png'
import invoice3 from '../Assets/invoice 3.png'
import resi1 from '../Assets/resi 1.png'
import resi2 from '../Assets/resi 2.png'
import resi3 from '../Assets/resi 3.png'

const Testimony = () => {

    const [showMenu, setShowMenu] = useState(false);
    // const navigate = useNavigate();
  
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
        <p className='text-3xl font-semibold mb-5'>Testimony</p>
        <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1"></div>
        <div className="wrapper p-5 md:p-0">
            <p className='text-2xl font-semibold my-3'>Welcome to our Testimonials page.</p>
            <p className='text-xl mb-10 w-full xl:w-1/2 mx-auto'>The voices of our satisfied customers share their experiences and insights. Discover firsthand the impact our products/services have had on individuals and businesses alike. These testimonials are a testament to the quality, reliability, and excellence that define our commitment to customer satisfaction.</p>
            <div className="grid space-y-10">
                <img src={invoice1} alt="" className='mx-auto w-full md:w-3/4 border-b-2 pb-10' />
                <img src={invoice2} alt="" className='mx-auto w-full md:w-3/4 border-b-2 pb-10' />
                <img src={invoice3} alt="" className='mx-auto w-full md:w-3/4 border-b-2 pb-10' />
                <img src={resi1} alt="" className='mx-auto w-full md:w-3/4 border-b-2 pb-10' />
                <img src={resi2} alt="" className='mx-auto w-full md:w-3/4 border-b-2 pb-10' />
                <img src={resi3} alt="" className='mx-auto w-full md:w-3/4 border-b-2 pb-10' />
            </div>
        </div>
      </div>
    <Footer />
    <Sidebar show={showMenu} close={()=>handleShow()} />
  </div>
  )
}

export default Testimony