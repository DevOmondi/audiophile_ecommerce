import { useState, createContext } from "react";
import HomePage from "./pages/home/components/HomePage";
import CategoryPage from "./pages/category/components/CategoryPage";
import ProductDetailPage from "./pages/productDetail/components/ProductDetailPage";
import CartModal from "./pages/cart/components/CartModal";
import CheckoutPage from "./pages/checkout/components/CheckoutPage";
import CheckoutModal from "./pages/checkout/components/CheckoutModal";
import MobileMenu from "./pages/MobileMenu";
// App context
export const appContext = createContext();
function App() {
  // Modals state management
  const [checkoutModalIsopen, setCheckoutModalIsopen] = useState(false);
  const [cartModalIsopen, setCartModalIsopen] = useState(false);
  // Context object
  const contextObject = {
    checkoutModalIsopen: checkoutModalIsopen,
    cartModalIsopen: cartModalIsopen,
    setCartModalIsopen: setCartModalIsopen,
    setCheckoutModalIsopen: setCheckoutModalIsopen,
  };
  console.log("Context object is:", contextObject);
  return (
    <appContext.Provider value={contextObject}>
      <div className="font-manrope">
        <HomePage />
        <CategoryPage/> 
        <ProductDetailPage />
        <CartModal />
        <CheckoutPage />
        <CheckoutModal />
        <MobileMenu />
      </div>
    </appContext.Provider>
  );
}

export default App;
