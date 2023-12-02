import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Ampli250 from '../Components/ampli250'
import Ampli400 from '../Components/Ampli400'
import { useParams } from 'react-router-dom'
import Ampli900 from '../Components/Ampli900'
import AmpliKit from '../Components/AmpliKit'

const Detail = () => {

    const [showMenu, setShowMenu] = useState(false);
    const {id} = useParams();
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
                <div className="grid md:flex border p-8 rounded h-full">
                  { id === '1' ?
                    <Ampli250 />
                    :
                    id === '2' ?
                    <Ampli400 />
                    : 
                    id === '3' ?
                    <Ampli900 />
                    : 
                    id === '4' ?
                    <AmpliKit />
                    : null
                  }
                </div>
            </div>
        </div>
        <Footer />
        <Sidebar show={showMenu} close={()=>handleShow()} />
    </div>
  )
}

export default Detail