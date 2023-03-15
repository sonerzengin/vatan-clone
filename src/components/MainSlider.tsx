import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { CSSProperties } from 'react';
const img1 = require('../assets/598x507.png');
const img2 = require('../assets/293x507.png');

interface SwiperStyle extends CSSProperties {
  '--swiper-navigation-color'?: string;
  '--swiper-pagination-color'?: string;
}

interface Slide {
    id: number;
    img: string;
  }

const MainSlider = () => {
  const slides: Slide[] = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img2,
  },
];

  return (
    <div className="container mx-auto bg-blue-500 max-h-[507px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        freeMode={true}
        pagination={{ clickable: true }}
        slidesPerView={2}
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as SwiperStyle
        }
        loop={true}
      >
        {slides.map((slide, key) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt="bareli abla"
              className="w-full"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
