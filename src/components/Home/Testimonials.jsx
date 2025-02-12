import React, { useState } from 'react'
import Background from './HomeBackground'
import Title from '../Title'
import testimonialImg from '../../assets/testimonials.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 5,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted testimonial:', formData);
    // Reset form
    setFormData({
      name: '',
      comment: '',
      rating: 5,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
    });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      comment: "The best curry I've ever had! The flavors are authentic and the service is excellent.",
      rating: 5,
      date: "June 2023"
    },
    {
      name: "Mike Chen",
      comment: "Their biryani is absolutely incredible. The spices are perfectly balanced and the meat is so tender.",
      rating: 5,
      date: "May 2023"
    },
    {
      name: "Emma Wilson",
      comment: "Love their vegetarian options! The spinach and chickpea curry is my favorite.",
      rating: 4,
      date: "April 2023"
    },
    {
      name: "David Kim",
      comment: "Great atmosphere and even better food. The frozen curry options are perfect for taking home.",
      rating: 5,
      date: "March 2023"
    },
    {
      name: "John Doe",
      comment: "The best curry I've ever had! The flavors are authentic and the service is excellent.",
      rating: 5,
      date: "June 2023"
    }
  ];

  return (
    <div className="relative">
      <Background backgroundImage={testimonialImg} />
      <Title titleEng="Testimonials" titleJp="お客様の声" />
      
      <div className="bg-gradient-to-b from-black/80 to-black/90 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-16 relative">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-lg italic mb-4">"Experience the flavors that our customers love"</p>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1.5,
                slideShadows: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              className="mySwiper px-4 md:px-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="max-w-2xl">
                  <div className="bg-gradient-to-br from-white/90 to-white/80 p-8 rounded-2xl m-4 md:m-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 font-serif">{testimonial.name}</h3>
                        <p className="text-base text-amber-600 font-medium">{testimonial.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-amber-400 drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="absolute top-0 left-0 w-8 h-8 text-amber-400/30 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 text-lg leading-relaxed pl-2">{testimonial.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="relative">
              <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-2 !w-14 !h-14 !bg-amber-400/80 hover:!bg-amber-400 !rounded-full !transition-all cursor-pointer z-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-2 !w-14 !h-14 !bg-amber-400/80 hover:!bg-amber-400 !rounded-full !transition-all cursor-pointer z-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Add New Testimonial Section */}
          <div className="max-w-2xl mx-auto mt-20 px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-400 mb-4">Add Yours To The List</h2>
              <p className="text-white/80 text-lg">Share your dining experience with us</p>
              <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/80 rounded-2xl p-8 shadow-2xl text-black">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">Rating</label>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="focus:outline-none"
                    >
                      <svg 
                        className={`w-8 h-8 ${star <= formData.rating ? 'text-amber-400' : 'text-gray-300'} transition-colors duration-200 hover:text-amber-300`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="comment" className="block text-gray-700 font-semibold mb-2">Your Experience</label>
                <textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-lg h-32 resize-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  required
                  placeholder="Tell us about your dining experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors duration-300 transform hover:scale-[1.02]"
              >
                Submit Your Testimonial
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
