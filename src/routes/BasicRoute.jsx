import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import ProductDetails from "../pages/HomePage/ProductDetails";
import CheckOut from "../pages/HomePage/CheckOut";
import Orders from "../pages/HomePage/Orders";

const BasicRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
};

export default BasicRoute;
