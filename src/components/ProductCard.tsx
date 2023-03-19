import React, { useState, useEffect } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Products } from "../utils/data";
import { cartActions } from "../features/cart-slice";
import { useDispatch } from "react-redux/es/exports";

interface Props {
  product: Products;
}

const ProductCard = ({ product }: Props) => {
  const [number, setNumber] = useState<number | null>(null);
  const [added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(Math.random() * 10) + 1;
      setNumber(newNumber);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img
    }))
    setAdded(true)
  }


  return (
    <div className="relative flex flex-col border border-[#2196f3] items-center group overflow-hidden p-5 h-[400px]">
      {product.id === number && (
        <div className="absolute z-10 top-0 py-2 w-full flex text-white bg-[#2196f3] cursor-pointer justify-center">
          <div className="text-[10px] uppercase font-semibold">
            Az Önce Bir Adet Satıldı
          </div>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center  group-hover:scale-110 transition-all overflow-hidden">
        <img src={product.img} alt="Urun Gorsel" className="p-8" />
      </div>
      <div className="flex-1 text-center">
        <div className="text-[11px] flex items-center justify-center text-gray-400 font-semibold mb-2">
          <div className="text-yellow-400 flex items-center">
            <AiFillStar />
            {product.rating}
          </div>{" "}
          ({product.comment} Yorum)
        </div>
        <div className="text-[11px] text-gray-400 font-semibold mb-1">
          PA-91961
        </div>
        <a
          href={product.dest_url}
          target={product.target}
          rel="noopener noreferrer"
        >
          <div className="text-xs uppercase text-gray-600 font-semibold mb-2">
            {product.title}
          </div>
        </a>
        <div className="text-3xl text-[#2196f3] font-bold mb-2">
          ₺{product.price}
        </div>
        {product.stock2orLess && (
          <div className="text-[11px] text-red-600 font-semibold">
            Yalnızca 2 Ürün Kaldı
          </div>
        )}
        {product.samedayshipping && (
          <div className="text-[10px] uppercase text-gray-500 font-semibold px-3 py-2 bg-gray-300 inline-block rounded-md">
            Bugün Kargoda
          </div>
        )}
        <div className="absolute bottom-0 w-full left-0 hidden group-hover:flex text-white bg-[#2196f3] cursor-pointer">
          <div className="basis-1/5 flex justify-center items-center bg-[#1564c0] py-3 font-semibold">
            <BsArrowLeftRight />
          </div>
          <div onClick={addToCartHandler} className="basis-4/5 text-sm font-semibold flex justify-center items-center bg-[#2196f3] py-3">
            {!added ? 'Sepete Ekle': 'Sepete Eklendi'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
