import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function PaginationSlide() {
    return (
        <Swiper
            style={{background: "red", height: "100vh"}}
            pagination={true} modules={[Pagination]} className="mySwiper"

        >
            <SwiperSlide className='pig'><h1>Hello world</h1></SwiperSlide>
            <SwiperSlide className='pig'><h1>Hello world</h1></SwiperSlide>
            <SwiperSlide className='pig'><h1>Hello world</h1></SwiperSlide>
        </Swiper>
    )
}

export default PaginationSlide
