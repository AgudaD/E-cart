import { PRODUCTS } from '../../products';
import Product from "./Product";

const Homepage = () => {
  return (
    <div>
      {/* shoptitle */}
      <div className="text-center mt-6">
        <p className='font-semibold font-helvetica text-2xl'>Real Estate</p>
      </div>

      {/* products */}
     <div className='w-full grid grid-cols-3 gap-y-10 place-items-center'>
        {PRODUCTS.map((product) => (
          <Product data={product} /> 
        ))}
     </div>
    </div>
  )
}

export default Homepage
