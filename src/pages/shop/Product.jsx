import { ShopContext } from "../../context/ShopContext";
import { useContext } from 'react';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)
  
  const cartItemAmount = cartItems[id]

  return (
    <div className="bg-white drop-shadow-sm shadow-md rounded-md ">
      {/* product image */}
      <img src={productImage} alt="" className=" w-80 h-72 rounded-t-md" />

      {/* description */}
      <div className="space-y-2 p-6">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <div className="flex justify-end p-4">
        <button className="border border-gray-900 px-4 py-1.5 rounded-md hover:bg-gray-300 transition-all duration-300 ease-in" onClick={() => addToCart(id)}>
          View {cartItemAmount > 0 && <>(
            {cartItemAmount}
          ) </>}
        </button>
      </div>
    </div>
  );
};
 
export default Product;
