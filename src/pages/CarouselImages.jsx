import React,{ useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronForward } from "react-icons/io5"
import { IoChevronBack } from "react-icons/io5"

import schoolImg1 from '../assets/Images/main1.jpg';
import schoolImg2 from '../assets/Images/main2.png';
import schoolImg3 from '../assets/Images/main3.png';
import schoolImg4 from '../assets/Images/main4.png';
import schoolImg5 from '../assets/Images/main5.png';
import schoolImg6 from '../assets/Images/main6.png';
import schoolImg7 from '../assets/Images/main7.png';
import schoolImg8 from '../assets/Images/main8.png';

const CarouselImages = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="absolute  top-[50%] invisible sm:visible z-50 right-10  bg-white p-2 rounded-md cursor-pointer" onClick={onClick}>
                {/* Add your forward arrow icon or any content here */}
                <IoChevronForward />
            </div>
        );
    };
  
    const PrevArrow = (props) => {
      const { onClick } = props;
      return (
          <div className="absolute  top-[50%] invisible sm:visible z-50  left-10 bg-white p-2 rounded-md cursor-pointer" onClick={onClick}>
              {/* Add your backward arrow icon or any content here */}
              <IoChevronBack />
          </div>
      );
  };
//   invisible sm:visible
      const settings = {
          autoplay: true, // Set to true if you want automatic sliding
          autoplaySpeed: 3500, // Interval in milliseconds  4000(prev)
          // speed: 8000,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: true,
          fade: false,
          // cssEase: "linear",
          beforeChange: (current, next) => setCurrentIndex(next),
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        };
  
        const handleMouseEnter = () => {
          setIsPaused(true);
        };
      
        const handleMouseLeave = () => {
          setIsPaused(false);
        };

  return (
    <>
    {/* <img className='w-[100%] h-60 sm:h-96 sm:ml-0' src={schoolImg} alt='missing'/> */}
     <div className='w-[100%] h-[100vh] bg-red-400 overflow-y-hidden'
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>

       <Slider {...settings} initialSlide={currentIndex} >


        <div className=' bg-red-400 outline-none'>
           
            <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg1} alt='missing'/>
        </div>

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg2} alt='missing'/>
        </div>
        
        {/* <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg3} alt='missing'/>
        </div> */}

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg4} alt='missing'/>
        </div>

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg5} alt='missing'/>
        </div>

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg6} alt='missing'/>
        </div>

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-[100vh]    sm:ml-0' src={schoolImg8} alt='missing'/>
        </div>
       
       </Slider>
       </div>
    </>
  )
}

export default CarouselImages