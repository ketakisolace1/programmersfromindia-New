import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import About from "./pages/About/About";

const Routes = () => {
    return(
        <>
    <Header/>
    <Carousel/>
    <Footer/>
    </>
    );
    
};

export default Routes;