import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "Ahmed",
    comment: "الخدمة كانت ممتازة والتجربة سهلة جدًا!",
  },
  {
    name: "Sara",
    comment: "أحببت التصميم وسهولة الاستخدام 💖",
  },
  {
    name: "Omar",
    comment: "أفضل تجربة لي في موقع تعليمي 👏",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Users Say</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p>"{item.comment}"</p>
              <h4>- {item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
