import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './SwiperGallery.css'

const SwiperGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[500px] w-full mb-4"
        slidesPerView={1.5}
        centeredSlides={true}
        effect={'slide'}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="opacity-40 transition-opacity duration-300 px-10">
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[100px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="opacity-30 transition-opacity duration-300 swiper-slide-thumb">
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer glass-effect"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperGallery 