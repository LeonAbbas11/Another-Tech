import React, { useState } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';
// import { useNavigate } from 'react-router-dom';

const About = () => {

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
        <p className='text-3xl font-semibold mb-5'>About us</p>
        <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1"></div>
        <div className="wrapper p-5 md:p-0">
            <p className='text-2xl font-semibold my-3'>About Another Tech.</p>
            <p className='text-xl mb-10 w-full xl:w-1/2 mx-auto'>Welcome to Another Tech, where we take pride in being your go-to supplier for top-of-the-line audio amplifiers and radio solutions. As a leading provider in the industry, we are dedicated to delivering unparalleled sound experiences to our valued customers. Whether you're a retailer, audio enthusiast, or business looking to enhance your audio offerings, we have the perfect solutions for you.</p>
            <p className='text-xl mb-10 w-full xl:w-1/2 mx-auto text-start'>Our Commitment :</p>
            <div className="desc mb-10">
                <p className='text-xl mb-3 w-full xl:w-1/2 mx-auto text-start'>1. Premium Quality Products:</p>
                <p className='w-full xl:w-1/2 mx-auto text-start'>At Another Tech, quality is our priority. We source and supply audio amplifiers and radio equipment that meet the highest industry standards. Our products undergo rigorous testing to ensure they deliver exceptional performance and durability.</p>
            </div>
            <div className="desc mb-10">
                <p className='text-xl mb-3 w-full xl:w-1/2 mx-auto text-start'>2. Cutting-Edge Technology:</p>
                <p className='w-full xl:w-1/2 mx-auto text-start'>Stay ahead of the curve with our range of amplifiers that feature the latest in audio technology. From precision sound amplification to advanced radio reception enhancements, our products are designed to provide your customers with an unmatched audio experience.</p>
            </div>
            <div className="desc mb-10">
                <p className='text-xl mb-3 w-full xl:w-1/2 mx-auto text-start'>3. Diverse Product Range:</p>
                <p className='w-full xl:w-1/2 mx-auto text-start'>We understand that every customer has unique needs. That's why we offer a diverse product range to cater to various preferences and requirements. Whether you're looking for compact amplifiers, high-powered audio solutions, or advanced radio receivers, we have you covered.</p>
            </div>
            <div className="desc mb-10">
                <p className='text-xl mb-3 w-full xl:w-1/2 mx-auto text-start'>4. Reliable Supply Chain:</p>
                <p className='w-full xl:w-1/2 mx-auto text-start'>As your trusted supplier, we take pride in maintaining a reliable and efficient supply chain. Our streamlined processes ensure that you receive your orders promptly, allowing you to meet the demands of your customers without delays.</p>
            </div>
            <div className="desc mb-10">
                <p className='text-xl mb-3 w-full xl:w-1/2 mx-auto text-start'>5. Exceptional Customer Support:</p>
                <p className='w-full xl:w-1/2 mx-auto text-start'>Our commitment to customer satisfaction goes beyond the sale. We provide exceptional customer support to assist you with any inquiries, technical issues, or guidance you may need. Your success is our success, and we're here to support you every step of the way.</p>
            </div>
            <div className="desc mb-10">
                <p className='text-xl mb-3 w-full xl:w-1/2 mx-auto text-start'>6. Competitive Pricing:</p>
                <p className='w-full xl:w-1/2 mx-auto text-start'>Enjoy competitive pricing without compromising on quality. We believe in offering cost-effective solutions that add value to your business. Partner with us for affordable yet premium audio amplifiers and radio equipment.</p>
            </div>
            <p className='w-full xl:w-1/2 text-xl font-semibold my-3 text-start'>Whether you're a retailer looking to expand your product offerings or an audio professional seeking the best equipment, Another Tech is your trusted partner in delivering cutting-edge audio solutions. Amplify your customer's experience – choose Another Tech as your preferred amplifier audio and radio supplier.</p>
            <p className='w-full xl:w-1/2 text-xl font-semibold my-3 text-start'>Contact us today to explore our product catalog and take the first step towards enhancing your audio offerings!</p>
        </div>
      </div>
    <Footer />
    <Sidebar show={showMenu} close={()=>handleShow()} />
  </div>
  )
}

export default About