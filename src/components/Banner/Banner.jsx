import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banner = () => {
    return (
        <div className='w-full font-poppins'>
            <Carousel className='w-full'
                autoplay={true}
                infiniteLoop={true}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}>
                <div className='w-full relative flex items-center px-5  left-0 top-0 min-h-[500px] md:h-[600px]'>
                    <div style={{
                        backgroundImage: "linear-gradient(to right, #070707, rgba(21, 21, 21, 0)), url('./img/laptop3.jpg')"
                    }} className="md:flex bg-cover bg-center items-center grid grid-cols-1 md:gap-32 gap-20 w-full absolute left-0 top-0 h-full">
                        <div className=''>
                            <h1 className=' absolute top-8 left-2 md:text-2xl text-xl font-semibold text-white'>SAMSUNG</h1>
                        </div>
                        <div className='text-center w-full'>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" data-aos-duration="1000" className='text-white ml-2 space-y-3 w-full p-4 '>
                                <div className='space-x-2 font-poppins inline-flex items-center bg-violet-800 px-3 py-1'>
                                    <p><span>Up</span><br></br><span>To</span></p>
                                    <p className='md:text-3xl text-lg font-semibold'>TK. 1,25,500 OFF</p>
                                </div>
                                <p className='w-full font-poppins text-lg md:text-2xl font-semibold mx-auto'>On Flagship Smartlaptop</p>
                                <p>
                                    <span className='md:text-3xl text-xl font-extrabold'>0% EMI</span><br></br>
                                    <span className='text-xl'>Facility Available</span>
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" data-aos-duration="1000"  className='w-full relative bottom-10 md:top-20 md:bottom-0'>
                            <div className='border border-gray-600 absolute right-2 -bottom-12 md:-bottom-28 px-2 py-1 md:px-4 md:py-2'>
                                <div>
                                    <i className="fas fa-shield-alt text-2xl"></i>
                                    <p className='text-white'>
                                        <span className='md:text-xl font-semibold'>OFFICIAL</span><br></br>
                                        <span className='md:text-lg'>WARENTY</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full relative flex items-center px-5  left-0 top-0 min-h-[500px] md:h-[600px]'>
                    <div style={{
                        backgroundImage: "linear-gradient(to right, #070707, rgba(21, 21, 21, 0)), url('./img/laptop4.jpg')"
                    }} className="md:flex bg-cover bg-center items-center grid grid-cols-1 md:gap-32 gap-20 w-full absolute left-0 top-0 h-full">
                        <div className=''>
                            <h1 className=' absolute top-8 left-2 md:text-2xl text-xl font-semibold text-white'>ASUS</h1>
                        </div>
                        <div className='text-center w-full'>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" data-aos-duration="1000" className='text-white ml-2 space-y-3 w-full p-4 '>
                                <div className='space-x-2 font-poppins inline-flex items-center bg-violet-800 px-3 py-1'>
                                    <p><span>Up</span><br></br><span>To</span></p>
                                    <p className='md:text-3xl text-lg font-semibold'>TK. 1,25,500 OFF</p>
                                </div>
                                <p className='w-full font-poppins text-lg md:text-2xl font-semibold mx-auto'>On Flagship Smartlaptop</p>
                                <p>
                                    <span className='md:text-3xl text-xl font-extrabold'>0% EMI</span><br></br>
                                    <span className='text-xl'>Facility Available</span>
                                </p>
                            </div>
                        </div>
                        <div className='w-full relative bottom-10 md:top-20 md:bottom-0'>
                            <div className='border border-gray-600 absolute right-2 -bottom-12 md:-bottom-28 px-2 py-1 md:px-4 md:py-2'>
                                <div>
                                    <i className="fas fa-shield-alt text-2xl"></i>
                                    <p className='text-white'>
                                        <span className='md:text-xl font-semibold'>OFFICIAL</span><br></br>
                                        <span className='md:text-lg'>WARENTY</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full relative flex items-center px-5 left-0 top-0 min-h-[500px] md:h-[600px]'>
                    <div style={{
                        backgroundImage: "linear-gradient(to right, #070707, rgba(21, 21, 21, 0)), url('./img/laptop5.jpg')"
                    }} className="md:flex bg-cover bg-center items-center grid grid-cols-1 md:gap-32 gap-20 w-full absolute left-0 top-0 h-full">
                        <div className=''>
                            <h1 className=' absolute left-2 top-8 md:text-2xl text-xl font-semibold text-white'>LENOVO</h1>
                        </div>
                        <div className='text-center w-full'>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" data-aos-duration="1000" className='text-white ml-2 space-y-3 w-full p-4 '>
                                <div className='space-x-2 font-poppins inline-flex items-center bg-violet-800 px-3 py-1'>
                                    <p><span>Up</span><br></br><span>To</span></p>
                                    <p className='md:text-3xl text-lg font-semibold'>TK. 1,25,500 OFF</p>
                                </div>
                                <p className='w-full font-poppins text-lg md:text-2xl font-semibold mx-auto'>On Flagship Smartlaptop</p>
                                <p>
                                    <span className='md:text-3xl text-xl font-extrabold'>0% EMI</span><br></br>
                                    <span className='text-xl'>Facility Available</span>
                                </p>
                            </div>
                        </div>
                        <div className='w-full relative bottom-10 md:top-20 md:bottom-0'>
                            <div className='border border-gray-600 absolute right-2 -bottom-12 md:-bottom-28 px-2 py-1 md:px-4 md:py-2'>
                                <div>
                                    <i className="fas fa-shield-alt text-2xl"></i>
                                    <p className='text-white'>
                                        <span className='md:text-xl font-semibold'>OFFICIAL</span><br></br>
                                        <span className='md:text-lg'>WARENTY</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;