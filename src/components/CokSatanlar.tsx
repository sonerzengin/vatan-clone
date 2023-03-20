import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import CarouselProducts from "./CarouselProducts";

const CokSatanlar = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto flex justify-between mb-5">
        <div className="text-2xl font-bold">Çok Satanlar</div>
        <div className="flex items-center text-[#1564c0]">
          <div className="uppercase mr-1 text-sm  font-semibold">
            Tüm Çok Satanlar{" "}
          </div>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <CarouselProducts />
    </div>
  );
};

export default CokSatanlar;
