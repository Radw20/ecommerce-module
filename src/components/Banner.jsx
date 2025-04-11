import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/2c9281eddfb0e4be229b")
      .then((response) => {
        setBanners(response.data.banners);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  return (
    <div className="banner-section">
          <h2 className="banner-heading">Banner Section</h2> {/* ✅ العنوان */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={banners.length > 1}
        className="custom-swiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide">
              <img src={banner.image} alt={banner.title} />
              <div className="banner-content">
              <h2>Unbeatable Deals, Just a Click Away!</h2>
              <p>Shop the latest trends with exclusive discounts and fast delivery.</p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
