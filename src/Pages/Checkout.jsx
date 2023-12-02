import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Loading from '../Components/Loading'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Checkout = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip_code: '',
        country: '',
        shipping: '',
        product: id === '1' ? 'Amplifier 250 watt' : id === '2' ? 'Amplifier 400 watt vhf 144-148 Mhz' : id === '3' ? 'VHF AMPLIFIER 900 WATT' : 'KIT AMPLIFIER VHF 144-148 MHZ 900 WATT',
        price: id === '1' ? 275 : id === '2' ? 475 : id === '3' ? 675 : 425
    })
    console.log(form);

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      };

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

    const handleCheckout = (e) => {
        e.preventDefault();
        try {
            Swal.fire({
                title: "Are you sure with this order?",
                text: "Make sure all data is correct!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#FD4C00",
                cancelButtonColor: "#FD4C00",
                confirmButtonText: "Yes"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    setIsLoading(true);
                    await axios.post(`${process.env.REACT_APP_API}checkout`, form)
                    setIsLoading(false)
                    Swal.fire({
                        title: "Success!",
                        text: "Your order has been proccess, our team will send you an email",
                        icon: "success"
                  });
                }
              });
              navigate('/')
        } catch (error) {
            setIsLoading(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
            setIsLoading(false);
        }
    }

  return (
    <div>
        <Navbar menu={()=>handleShow()} show={showMenu} />
        <div className="wrapper container mx-auto grid my-10">
            <div className="line bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] p-1"></div>
            <div className="wrapper p-5 md:p-0">
                <p className='text-xl font font-semibold my-10'>For the purcase process you need to fill the form below and our team or admin will immediately respond to you by email.</p>
                <div className="form grid w-full md:w-3/4 mx-auto border-2 rounded-xl p-4 md:p-10">
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Full Name</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" name='name' onChange={handleChange} value={form.name} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Email</p>
                        </div>
                        <div className="w-3/4">
                            <input type="email" name='email' onChange={handleChange} value={form.email} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Phone</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" name='phone' onChange={handleChange} value={form.phone} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Address</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" name='address' onChange={handleChange} value={form.address} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>City</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" name='city' onChange={handleChange} value={form.city} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Zip Code</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" name='zip_code' onChange={handleChange} value={form.zip_code} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Country</p>
                        </div>
                        <div className="w-3/4">
                            <input type="text" name='country' onChange={handleChange} value={form.country} className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2' />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Shipping</p>
                        </div>
                        <select name='shipping' onChange={handleChange} value={form.shipping} className="w-3/4 rounded border-2 outline-none px-2 md:text-lg md:py-2">
                            <option value="">Choose shipping</option>
                            <option value="DHL">DHL</option>
                            <option value="FEEDEX">FEEDEX</option>
                            <option value="EMS">EMS</option>
                            <option value="ARAMEX">ARAMEX</option>
                        </select>
                    </div>
                    <div className="flex mt-7">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Product</p>
                        </div>
                        <div className="w-3/4">
                            <div className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2 text-start'>
                                <p>{form.product}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-7">
                        <div className="w-1/4">
                            <p className='text-start font-semibold text-sm md:text-lg'>Price</p>
                        </div>
                        <div className="w-3/4">
                            <div className='rounded border-2 w-full outline-none px-2 md:text-lg md:py-2 text-start'>
                                <p>$ {form.price}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleCheckout} className='text-white font-semibold my-10 bg-gradient-to-r from-[#fd4c00ce] to-[#FD4C00] rounded-full py-2 md:w-1/2 md:mx-auto transition-all duration-500 hover:scale-105'>Submit</button>
                </div>
            </div>
        </div>
        <Footer />
        <Sidebar show={showMenu} close={()=>setShowMenu(false)} />
        { isLoading === true ?
        <Loading />
        :
        null }
    </div>
  )
}

export default Checkout