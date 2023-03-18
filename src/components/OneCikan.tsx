import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const OneCikan = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto flex justify-between">
      <div className="text-2xl font-bold">Öne Çıkan Ürünler</div>
      <div className="flex items-center text-[#1564c0]">
        <div className="uppercase mr-1 text-sm  font-semibold">Tüm ÖNE çIKANLAR </div>
        <HiOutlineArrowNarrowRight />
      </div>
      </div>
    </div>
  );
};

export default OneCikan;
