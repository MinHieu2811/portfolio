import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs
} from 'react-icons/io5'
import { DiJava, DiMongodb } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import NextJsIcon from './icons/nextjs'
// Import Swiper styles
import 'swiper/css'
import 'swiper'
import 'swiper/css/pagination'

function TechSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      autoplay
      pagination={{ clickable: true }}
      slidesPerView={3}
      loop
      style={{ margin: '30px 0px' }}
    >
      <SwiperSlide>
        <IoLogoHtml5
          style={{ fontSize: '52px', marginRight: '5px', marginTop: '5px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <IoLogoCss3
          style={{ fontSize: '52px', marginRight: '5px', marginTop: '5px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <IoLogoJavascript
          style={{ fontSize: '52px', marginRight: '5px', marginTop: '5px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <IoLogoReact
          style={{ fontSize: '52px', marginRight: '5px', marginTop: '5px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NextJsIcon
          style={{
            width: '52px',
            height: '52px',
            marginRight: '5px',
            marginTop: '5px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            border: '1px solid'
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <IoLogoNodejs
          style={{ fontSize: '52px', marginRight: '5px', marginTop: '5px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <DiMongodb
          style={{
            fontSize: '32px',
            marginRight: '5px',
            marginTop: '5px'
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <DiJava
          style={{ fontSize: '52px', marginRight: '5px', marginTop: '5px' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SiTypescript
          style={{
            fontSize: '32px',
            marginRight: '5px',
            marginTop: '5px'
          }}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default TechSlider
