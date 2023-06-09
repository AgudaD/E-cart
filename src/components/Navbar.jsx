import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import logo from '../assets/FemabLogo.svg'

const Navbar = () => {
  return (
    <div className="bg-[#D73D45] text-white flex justify-between items-center px-4 py-8">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-3xl">Femab</Link>
        {/* <img src={logo} alt="" className="w-16" /> */}
      </div>
      <div className="flex items-center gap-3">
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={32} color="white"/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
