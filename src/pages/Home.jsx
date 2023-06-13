import logo from '../assets/FemabLogo.svg'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Home = () => {
  return (
    <div>
      <div className=" bg-chairset bg-no-repeat bg-contain h-[35rem] text-black">
        <div className="flex justify-between items-center p-8">
          <div className="flex items-center gap-3">
            <Link to="/">
                <img src={logo} alt="" className="w-16" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/homepage" className="text-xl font-semibold">Shop</Link>
            <Link to="/cart">
              <ShoppingCart size={32} color="black" />
            </Link>
          </div>
        </div>
        <div className='px-8 flex justify-center items-center'>
            <p className='text-4xl text-white max-w-[30rem]'>Welcome to the world of extraordinary living- Welcome to Femab</p>
        </div>
      </div>
      <div className='text-center mb-6'>
        <p className='italic text-2xl text-[#464779] font-semibold'>Our Services</p>
        <p className='text-gray-400 text-lg'>When it comes to real estate properties, we're happy all the way</p>
      </div>

      <div className='flex justify-center items-center gap-6 px-8 mb-12'>
        <div className='bg-white max-w-[25rem] h-[25rem] p-4 space-y-6 text-center rounded-md shadow-lg drop-shadow-lg'>
            <p>LOGO</p>
            <p>Buy a house</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, voluptas non aspernatur rerum architecto soluta excepturi unde nostrum quam fuga enim amet repellat qui modi porro beatae nam totam aut!
            </p>
        </div>
        <div className='bg-white max-w-[25rem] h-[25rem] p-4 space-y-6 text-center rounded-md shadow-lg drop-shadow-lg'>
            <p>LOGO</p>
            <p>Rent a truck</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, voluptas non aspernatur rerum architecto soluta excepturi unde nostrum quam fuga enim amet repellat qui modi porro beatae nam totam aut!
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
