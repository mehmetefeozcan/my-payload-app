'use client'

import React, { useEffect, useState } from 'react'
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
}

const Carousel: React.FC<CarouselProps> = ({ children, className, autoPlay = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  const slides = React.Children.toArray(children).filter(Boolean)

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        setCurrentSlide(swiperInstance.realIndex)
      })
    }
  }, [swiperInstance])

  const getLineClass = (index: number) => {
    return `transition-all duration-300 rounded-xl h-1 mx-1 ${
      index === currentSlide ? 'w-20 bg-darkBlue' : 'w-5 bg-grayMiddle opacity-10'
    }`
  }

  return (
    <div className={`${className} relative w-full bg-transparent`}>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={autoPlay ? { delay: 3000, disableOnInteraction: false } : false}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        resizeObserver={false}
      >
        {slides.map((child, index) => (
          <SwiperSlide key={index} virtualIndex={index} className={'p-0'}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {
        <div className={`absolute z-10 bottom-8 left-1/2 flex -translate-x-1/2 transform`}>
          {slides.map((_, index) => (
            <div key={index} className={getLineClass(index)} />
          ))}
        </div>
      }
    </div>
  )
}

export default Carousel
