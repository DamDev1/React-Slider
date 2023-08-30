import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
    return (
        <Swiper style={{height: "100vh"}}>
            <SwiperSlide className='sild'>
                <h1>SLIDE ONE</h1>
            </SwiperSlide>
            <SwiperSlide  className='sild'>
                <h1>SLIDE TWO</h1>
            </SwiperSlide>
            <SwiperSlide  className='sild'>
                <h1>SLIDE THREE</h1>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
