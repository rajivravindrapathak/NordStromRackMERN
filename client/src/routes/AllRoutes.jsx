import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Men from "../pages/Men";
import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/ProtectedRoute";

const AllRoutes = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/men" element={<Men />} />
        </Routes>
        {/* <Footer />   */}
      </div>
    </>
  );
};

export default AllRoutes;
