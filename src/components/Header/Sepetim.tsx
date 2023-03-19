import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { cartActions } from "../../features/cart-slice";

interface SepetimProps {
  id: number;
  img: string;
  price: number;
  name: string;
  quantity: number;
}

interface RootState {
  cart: {
    allTotal: number;
  };
}

const Sepetim: React.FC<SepetimProps> = ({
  id,
  img,
  price,
  quantity,
  name,
}) => {
  const allTotal = useSelector((state: RootState) => state.cart.allTotal);
  const dispatch = useDispatch();

  const handleRemover = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="flex flex-col  border-b">
      <div className=" py-3 flex items-center px-3 w-full">
        <div onClick={handleRemover} className=" text-[11px] p-1 px-2 mr-4 bg-gray-200 rounded cursor-pointer">
          x
        </div>
        <div className="basis-2/3 flex gap-x-2">
          <img src={img} alt="sss" className="w-16" />
          <div className="flex flex-col">
            <div className="text-[11px]">{name}</div>
            <div className="text-[11px] text-blue-500 font-semibold flex items-center">
              <div>₺{price}</div> <div className="text-gray-400 ml-2 ">x{quantity}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sepetim;
