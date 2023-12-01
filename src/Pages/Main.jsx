import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Sidebar from '../Components/Sidebar'
import ic1 from '../Assets/icon1.png'
import ic2 from '../Assets/icon2.png'
import ic3 from '../Assets/icon3.png'
import product from '../Assets/product.png'
import product1 from '../Assets/product 1.png'
import exp1 from '../Assets/exp1.png'
import exp2 from '../Assets/exp2.png'
import exp3 from '../Assets/exp3.png'
import exp4 from '../Assets/exp4.png'
import Footer from '../Components/Footer'

const Main = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showExp, setShowExp] = useState(1);

  const nextSlide = () => {
    if(showExp >= 3){
      setShowExp(0)
    }else{
      setShowExp((current)=>current+1)
    }
  }

  useEffect(()=>{
    setTimeout(() => {
      nextSlide()
    }, 13000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showExp])

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
    <div className=''>
        <Navbar menu={()=>handleShow()} show={showMenu} />
        <Carousel />
        <div className="icons container grid mx-auto px-5 md:px-0">
          <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1 md:p-2 my-10 md:my-20"></div>
          <div className="mobile md:hidden mb-10 space-y-6">
            <p className='text-2xl font-semibold'>Another Tech Present.</p>
            <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima explicabo expedita blanditiis asperiores aliquam neque ipsa quia, quae non? Assumenda alias voluptatem nulla provident. Vel?</p>
          </div>
          <div className="wraps grid space-y-5 md:space-y-0 md:flex">
            <div className="box rounded-lg p-6 shadow-2xl mx-auto md:mx-0 w-[200px] md:w-[300px]">
              <img src={ic1} alt="" className='w-full' />
              <p className='text-2xl font-sans mt-5'>Guaranted</p>
            </div>
            <div className="box rounded-lg p-6 shadow-2xl w-[200px] md:w-[300px] mx-auto">
              <img src={ic2} alt="" className='w-full' />
              <p className='text-2xl font-sans mt-5'>Easy Buy</p>
            </div>
            <div className="box rounded-lg p-6 shadow-2xl mx-auto md:mx-0 w-[200px] md:w-[300px]">
              <img src={ic3} alt="" className='w-full' />
              <p className='text-2xl font-sans mt-5'>Trusted</p>
            </div>
          </div>
        </div>
        <div className="wrapperdesc px-5 md:px-0">
          <div className="description container border-2 p-5 rounded mx-auto mt-20 mb-5">
            <div className="grid md:flex p-4 md:p-10">
              <div className="w-full md:w-1/2">
                <img src={product} alt="" />
              </div>
              <div className="w-full md:w-1/2 px-4 md:px-20 grid">
                <p className='my-auto font-semibold text-lg md:text-2xl text-center md:text-start'>VHF amplifier 144-148 MHz for 2 meters band which has been tested for the national competition where this product was made. This product has been tested as much as possible to maintain good quality.</p>
              </div>
            </div>
            <div className="mid border-t-2 my-6 md:my-0"></div>
            <div className="grid md:flex p-4 md:p-10">
              <div className="w-full md:hidden">
                <img src={product1} alt="" className='w-full mx-auto' />
              </div>
              <div className="w-full md:w-1/2 px-4 md:px-20 grid">
                <p className='my-auto font-semibold text-lg md:text-2xl text-center md:text-start'>Apart from VHF 144 MHz, we also build other types of amps such as 220 MHz UHF HF CB and we also sell kits so you can develop your own amp design.</p>
              </div>
              <div className="w-1/2 hidden md:block">
                <img src={product1} alt="" className='w-3/4 mx-auto' />
              </div>
            </div>
          </div>
        </div>
        <div className="wrappershipping px-5 md:px-0">
          <div className="shipping container border-2 p-5 rounded mx-auto mb-20">
            <div className="grid md:flex p-4 md:p-10">
              <div className="w-full md:w-1/2 relative grid h-[200px] md:h-[350px] overflow-hidden rounded-lg mb-10 md:mb-0">
                <img src={exp1} alt="" className={`transition-all h-[200px] md:w-full md:h-[350px] duration-700 absolute rounded-lg ${showExp === 0 ? 'opacity-100' : 'opacity-0'}`} />
                <img src={exp2} alt="" className={`transition-all h-[200px] md:w-full md:h-[350px] duration-700 absolute rounded-lg ${showExp === 1 ? 'opacity-100' : 'opacity-0'}`} />
                <img src={exp3} alt="" className={`transition-all h-[200px] md:w-full md:h-[350px] duration-700 absolute rounded-lg ${showExp === 2 ? 'opacity-100' : 'opacity-0'}`} />
                <img src={exp4} alt="" className={`transition-all h-[200px] md:w-full md:h-[350px] duration-700 absolute rounded-lg ${showExp === 3 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <div className="w-full md:w-1/2 grid pl-0 md:pl-20">
                <p className='my-auto font-semibold text-lg md:text-2xl text-center md:text-start'>Fast delivery process using trusted international courier services with proven security with clear insurance, no need to worry about goods being damaged or not arriving.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Sidebar show={showMenu} close={()=>handleShow()} />
    </div>
  )
}

export default Main