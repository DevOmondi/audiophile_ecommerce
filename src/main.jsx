import React from "react";
import ReactDOM from "react-dom/client";
// import HomePage from "./pages/home/components/HomePage.jsx";
import App from "./App.jsx";
import CategoryPage from "./pages/category/components/CategoryPage.jsx";
import ProductDetailPage from "./pages/productDetail/components/ProductDetailPage.jsx";
import CheckoutPage from "./pages/checkout/components/CheckoutPage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
    element: <CheckoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
