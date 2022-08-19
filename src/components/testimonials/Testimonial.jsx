import React from 'react'
import './testimonial.css'
import Avatar1 from '../../assets/testimony/ava1.png';
import Avatar2 from '../../assets/testimony/ava2.png';
import Avatar3 from '../../assets/testimony/ava3.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const data = [
  {
    id: 1,
    name: 'Ankan Kumar',
    image: Avatar3,
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium.'
  },
  {
    id: 2,
    name: 'Pravin Mohite',
    image: Avatar1,
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium.'
  },
  {
    id: 3,
    name: 'Mustafa Fernandes',
    image: Avatar2,
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium.'
  },
]

const clients = data.map((item) => {
  return <SwiperSlide>
    <article className='testimonial' key={item.id}>
      <div className="client__avatar">
        <img src={item.image} alt="" />
      </div>
      <h5 className="client__name">{item.name}</h5>
      <small className='client__review'>
        {item.review}
      </small>
    </article>
    </SwiperSlide>
})

const Testimonial = () => {
  return (
   <section id='testimonials'>
    <h5>What people are saying</h5>
    <h2>Testimonials</h2>
    
    
    <Swiper
      className="container testimonials__container"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      modules={[Pagination]}>
      {clients}
    </Swiper>    
   </section>
  )
}

export default Testimonial