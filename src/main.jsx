import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./pages/home/components/HomePage.jsx";
import CategoryPage from "./pages/category/components/CategoryPage.jsx";
import ProductDetailPage from "./pages/productDetail/components/ProductDetailPage.jsx";
import CheckoutPage from "./pages/checkout/components/CheckoutPage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoryPage />,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>
  },
  {
    path: "/app",
    element: <App/>
  }
]);
// import App from './App.jsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
