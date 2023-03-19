import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux/es/hooks/useSelector';


type State = {
  cart: {
    items: Array<string>
  };
};

const Cart = () => {
  const cartItems = useSelector((state: State) => state.cart.items);

  return (
    <div className='flex items-center text-white relative'>
      <div className='mr-2 text-sm font-semibold'>Sepetim</div>
      <div className='p-1 rounded-full border border-white'><FaShoppingCart /></div>
      <div className='text-[10px] bg-white text-blue-400 py-[2px] px-[7px] rounded-full absolute -top-2 -right-4'>{cartItems.length}</div>
    </div>
  )
}

export default Cart
