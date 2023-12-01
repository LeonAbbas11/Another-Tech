import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import product from '../Assets/booster vhf 400 watt.png'

const Detail = () => {

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
            <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1 mb-10"></div>
            <div className="wrapper px-5 md:px-0">
                <div className="grid md:flex border p-8 rounded h-[800px] md:h-[500px]">
                    <div className="w-full md:w-1/2 grid">
                        <p className='text-2xl font-semibold md:hidden mb-10'>Amplifier 250 watt</p>
                        <img src={product} alt="" className='w-3/4 m-auto'/>
                    </div>
                    <div className="w-full md:w-1/2 text-start grid">
                        <p className='text-2xl font-semibold hidden md:block'>Amplifier 250 watt</p>
                        <p className='text-xl font-semibold mt-10 mb-5'>Description :</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ex nemo at vitae suscipit delectus temporibus molestias laboriosam porro perferendis explicabo, corporis quam quia exercitationem dolores expedita sequi, laudantium nam soluta enim repudiandae quo voluptates? Voluptate vitae voluptatibus necessitatibus unde nihil, tenetur eos eius sint. Dolorum nihil tempore suscipit ut.</p>
                        <p className='text-xl font-semibold mt-10'>Price :</p>
                        <p className='text-xl font-extrabold text-red-600'>$450.0</p>
                        <button className='w-3/4 md:w-1/2 rounded-full py-1 transition-all duration-500 hover:scale-110 bg-[#FD4C00] text-white mt-10 mx-auto text-lg md:text-xl font-semibold'>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <Sidebar show={showMenu} close={()=>handleShow()} />
    </div>
  )
}

export default Detail