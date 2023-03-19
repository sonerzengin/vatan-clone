import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { CSSProperties } from "react";

const img1 = require("../assets/598x507.png");
const img2 = require("../assets/293x507.png");

interface SwiperStyle extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
}

interface Slide {
  id: number;
  img1: string;
  img2: string;
}

const MainSlider = () => {
  const slides: Slide[] = [
    {
      id: 1,
      img1: img1,
      img2: img2,
    },
    {
      id: 2,
      img1: img1,
      img2: img2,
    },
    {
      id: 3,
      img1: img1,
      img2: img2,
    },
    {
      id: 4,
      img1: img1,
      img2: img2,
    },
    {
      id: 5,
      img1: img1,
      img2: img2,
    },
  ];

  return (
    <div className="bg-[#1564c0] flex items-center mt-12 py-5">
      <div className="prev inline-block">
        <IoMdArrowDropleft />
      </div>
      <div className="container mx-auto flex items-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          style={
            {
              paddingBottom: "2.5rem",
              "--swiper-pagination-color": "#FFFFFF",
            } as SwiperStyle
          }
          centeredSlides={true}
          slidesPerView={1}
          effect={"coverflow"}
          grabCursor={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex justify-between items-center">
                <div>
                  <img src={slide.img1} alt="slide-img" loading="lazy" />
                </div>
                <div className="flex gap-x-2">
                  <img src={slide.img2} alt="" />
                  <img src={slide.img2} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="next">
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

export default MainSlider;
