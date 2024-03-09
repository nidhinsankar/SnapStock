import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth.tsx";
import Store from "./pages/Store.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Checkout from "./pages/Checkout.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import AddProduct from "./pages/AddProduct.tsx";
import Admin from "./pages/Admin.tsx";
import UserDetail from "./pages/UserDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    element: <App />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/userdetail",
        element: <UserDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
