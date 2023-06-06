import { ShopContext } from "../../context/ShopContext";
import { useContext } from 'react';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)
  
  const cartItemAmount = cartItems[id]

  return (
    <div className="bg-white drop-shadow-sm shadow-md p-8 rounded-md space-y-4">
      {/* product image */}
      <img src={productImage} alt="" className="w-48 h-auto" />

      {/* description */}
      <div className="space-y-2 ">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <div className="flex justify-end">
        <button className="border border-gray-900 px-4 py-1.5 rounded-md hover:bg-gray-300 transition-all duration-300 ease-in" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>(
            {cartItemAmount}
          ) </>}
        </button>
      </div>
    </div>
  );
};
 
export default Product;
