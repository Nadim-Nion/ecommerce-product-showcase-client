import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";

const BasicRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<h6>Hello World</h6>} />
        </Route>
      </Routes>
    </div>
  );
};

export default BasicRoute;
