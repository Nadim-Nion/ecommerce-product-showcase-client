import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import ProductDetails from "../pages/HomePage/ProductDetails";

const BasicRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default BasicRoute;
