import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Review = () => {
    const projects = [
        {
            id: 1,
            details: 'Easy Harvesting nequi porro est qui dolorem ipsum',
            title: 'Endre Rasel',
            image: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38='
        },

        {
            id: 2,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Melica',
            image: 'https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI='
        },
        {
            id: 3,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Mr.Jack',
            image: 'https://media.istockphoto.com/id/1313461425/photo/headshot-of-friendly-senior-man.jpg?s=612x612&w=0&k=20&c=-8A-Kn5fkdg4MvjaVDQ3kAaugD3lFPH-eHL-3svHOVo='
        },
        {
            id: 4,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Selin',
            image: 'https://media.istockphoto.com/id/1475804411/photo/smiling-young-hispanic-self-employed-woman-standing-in-studio-with-laptop-in-hand.jpg?s=612x612&w=0&k=20&c=qehkYQHBmPxLOWJZIFmdqjJQgxtTd7BJhUEbH2Y0HIQ='
        }
        ,
        {
            id: 5,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Ayeda',
            image: 'https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=qmOTkGstKj1qN0zPVWj-n28oRA6_BHQN8uVLIXg0TF8='
        }
        ,
        {
            id: 4,
            details: 'The majority have suffered alteration in some form inject humour',
            title: 'Demir',
            image: 'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk='
        }
    ];
    return (
        <div className='py-12'>
            <h1 className='text-2xl font-semibold'>Customer Review</h1>
            <Swiper
               breakpoints={{
                0: {
                    slidesPerView:1,
                    spaceBetween:10,
                },
                480: {
                    slidesPerView:1,
                    spaceBetween:10,
                },
                768: {
                    slidesPerView:2,
                    spaceBetween:10,
                },
              
                1200: {
                    slidesPerView:4,
                    spaceBetween:10,
                }
            }}
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                className='mySwiper mt-5 rounded-box items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    projects.map(project => (
                        <SwiperSlide className="group h-[400px] card w-full mt-12 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 bg-violet-400">
                            <div className="">
                                <img className="md:h-[200px] w-[150px] h-[150px] mx-auto rounded-full md:w-[200px] object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute text-left inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 transition-all duration-1000 group-hover:translate-y-0">
                                <h1 className="font-dmserif text-3xl font-bold text-white mb-6">{project.title}</h1>
                                <p className="mb-14 text-lg italic  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{project.details}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Review;