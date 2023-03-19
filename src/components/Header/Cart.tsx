import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Sepetim from "./Sepetim";
import { useState } from "react";

type State = {
  cart: {
    items: Array<{
      id: number;
      img: string;
      name: string;
      price: number;
      quantity: number;
      totalPrice: number;
    }>;
  };
};

const Cart = () => {
  const [show, setShow] = useState(false);

  const cartItems = useSelector((state: State) => state.cart.items);

  console.log(cartItems);

  return (
    <div>
      <div
        onClick={() => setShow(!show)}
        className="flex items-center text-white relative hover:bg-blue-500 transition-all py-2 px-1 rounded cursor-pointer"
      >
        <div className="mr-2 text-sm font-semibold">Sepetim</div>
        <div className="p-1 rounded-full border border-white">
          <FaShoppingCart />
        </div>
        <div className="text-[10px] bg-white text-blue-400 py-[2px] px-[7px] rounded-full absolute -top-2 -right-4">
          {cartItems.length}
        </div>
      </div>
      {show && (
        <div className="bg-white w-[320px] absolute right-10 rounded-lg">
          {!cartItems
            ? "Sepette ürün yok"
            : cartItems.map((item) => (
                <Sepetim
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
          <div className="p-2 bg-gray-200">
            <div className="px-2 py-4 flex w-full justify-between items-center">
              <div className="text-lg font-semibold text-blue-500">Toplam:</div>

              <div className="text-lg font-semibold text-blue-500">₺27100</div>
            </div>
            <div className="px-2 py-4 bg-green-500 rounded font-semibold text-white text-sm text-center hover:bg-green-400 transition-all cursor-pointer">
              Alışverişi Tamamla
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
