import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { MinusCircle, PlusCircle } from "phosphor-react";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="bg-white drop-shadow-md shadow-lg p-8 rounded-md space-y-4">
      <img src={productImage} alt="" className="w-48 h-auto" />

      <div className="space-y-3">
        <p>{productName}</p>
      </div>
      <p>${price}</p>

      <div className="flex items-center gap-3">
          <MinusCircle className="cursor-pointer" size={22} onClick={() => (removeFromCart(id))} />
          <input className="bg-gray-300 px-2 w-12 text-center" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}  />
          <PlusCircle className="cursor-pointer" size={22} onClick={() => (addToCart(id))} />
      </div>
    </div>
  );
};

export default CartItem;
