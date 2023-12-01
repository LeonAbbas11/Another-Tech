import React, { useEffect, useState } from 'react'
import img1 from '../Assets/slide1.png'
import img2 from '../Assets/slide2.png'
import img3 from '../Assets/slide3.png'

const Carousel = () => {

    const [img, setImg] = useState(0);

    const nextSlide = () => {
        if(img >= 2){
          setImg(0)
        }else{
          setImg((current)=>current+1)
        }
      }
    
      useEffect(()=>{
        setTimeout(() => {
          nextSlide()
        }, 13000);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [img])
    
  return (
    <div>
        <div className="relative grid container mx-auto mb-5 md:mb-10 h-[200px] md:h-[400px]">
            <div className={`w-full px-5 md:px-0 absolute h-[200px] md:h-[400px] overflow-hidden rounded-lg top-5 md:top-10 duration-1000 transition-all ease-linear ${img === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <img src={img1} alt="carousel" className={`w-full mx-auto h-[200px] md:h-[400px]`} />
            </div>
            <div className={`w-full px-5 md:px-0 absolute h-[200px] md:h-[400px] overflow-hidden rounded-lg top-5 md:top-10 duration-1000 transition-all ease-linear ${img === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <img src={img2} alt="carousel" className={`w-full mx-auto h-[200px] md:h-[400px]`} />
            </div>
            <div className={`w-full px-5 md:px-0 absolute h-[200px] md:h-[400px] overflow-hidden rounded-lg top-5 md:top-10 duration-1000 transition-all ease-linear ${img === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <img src={img3} alt="carousel" className={`w-full mx-auto h-[200px] md:h-[400px]`} />
            </div>
        </div>
    </div>
  )
}

export default Carousel