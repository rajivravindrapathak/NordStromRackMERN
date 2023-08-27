import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const AllRoutes = () => {
    return ( 
        <>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={ <HomePage />} />
                    <Route path="/signup" element={ <SignUp />} />
                    <Route path="/login" element={ <Login />} />
                    <Route path="/productpage" element={ <ProductPage />} />
                    <Route path="/productdetailpage" element={ <ProductDetailPage />} />
                </Routes>
                <Footer />
            </div>
        </>
     );
}
 
export default AllRoutes;