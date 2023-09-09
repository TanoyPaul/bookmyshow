import React from "react";
// components
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";


const DefaultLayout = () => {
    return (
        <>
         <Navbar />
         <HeroCarousel />
        
        </>      
    ) ;
    } ;

export default DefaultLayout;