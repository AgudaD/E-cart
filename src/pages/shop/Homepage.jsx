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
     <div className='w-full grid grid-cols-3 place-items-center space-y-8'>
        {PRODUCTS.map((product) => (
          <Product data={product} /> 
        ))}
     </div>
    </div>
  )
}

export default Homepage
