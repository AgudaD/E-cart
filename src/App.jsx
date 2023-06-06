import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/shop/Homepage";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
