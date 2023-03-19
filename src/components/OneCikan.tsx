import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ProductCard from "./ProductCard";
import { products } from "../utils/data";

const OneCikan = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto flex justify-between mb-5">
        <div className="text-2xl font-bold">Öne Çıkan Ürünler</div>
        <div className="flex items-center text-[#1564c0]">
          <div className="uppercase mr-1 text-sm  font-semibold">
            Tüm ÖNE çIKANLAR{" "}
          </div>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OneCikan;
