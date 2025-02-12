import React from 'react'
import Title from '../Title'
import Background from '../Background'
import galleryImg from '../../assets/gallery.jpg'
import SwiperGallery from './SwiperGallery'


const Gallery = () => {
  // Add your gallery images here
  const galleryImages = [
    '/gallery/gallery0.jpg',
    '/gallery/gallery1.jpg',
    '/gallery/gallery3.jpg',
    '/gallery/gallery4.jpg',
    '/gallery/gallery2.jpg',
    '/gallery/gallery5.jpg',
    '/gallery/gallery6.jpg',
    '/gallery/gallery7.jpg',
    '/gallery/gallery8.jpg',
    '/gallery/gallery9.jpg',
    '/gallery/gallery10.jpg',
    '/gallery/gallery11.jpg',
    '/gallery/gallery12.jpg',
    '/gallery/gallery13.jpg',
  ]

  return (
    <div>
      <Background backgroundImage={galleryImg} />
      <Title titleEng="Gallery" titleJp="ギャラリー" />
      <div className="gallery-container bg-black/70 min-h-screen p-4">  
      <h1 className='text-white text-7xl font-bold w-full text-center p-10'>Our Memories</h1>
      <div className="swiper-container">
        <SwiperGallery images={galleryImages} />
      </div>
      </div>
    </div>
  )
}

export default Gallery
