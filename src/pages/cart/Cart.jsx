import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className="p-6">
      <div className="text-center">
        <h1 className="font-semibold font-helvetica text-2xl">CART ITEMS</h1>
      </div>

      {/* cart items */}
      <div className="space-y-8">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>


    {totalAmount > 0 ? 
      <div className="flex flex-col items-center mt-6 space-y-3">
        <p className="text-center">Subtotal: ${totalAmount}</p>
        <div className="flex items-center gap-3">
          <button className="border-2 border-black rounded-md px-4 py-1" onClick={() => navigate("/")}>Continue Shopping</button>
          <button className="border-2 border-black rounded-md px-4 py-1">Checkout</button>
        </div>
      </div> : <p>Empty Cart</p>
    }
    </div>
  );
};

export default Cart;
