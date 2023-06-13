import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/shop/Homepage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContext";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
