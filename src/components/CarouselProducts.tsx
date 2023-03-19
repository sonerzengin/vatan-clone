import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode,Navigation } from "swiper";
import { products } from "../utils/data";
import ProductCard from "./ProductCard";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const CarouselProducts = () => {
  return (
    <div className=" flex items-center">
      <div className="left inline-block">
        <IoMdArrowDropleft />
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        navigation={{
          prevEl: ".left",
          nextEl: ".right",
        }}
        modules={[FreeMode,Navigation]}
      >
        <div className="container mx-auto">
          {products.map((product) => (
            <SwiperSlide>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="right">
        <IoMdArrowDropright />
      </div>
    </div>
  );
};

export default CarouselProducts;
