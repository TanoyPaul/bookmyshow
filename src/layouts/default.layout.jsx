import React from "react";
// components
import Navbar from "../components/Navbar/navbar.component"
import HeroCarousel from "../components/heroCarousel/HeroCarousel.component";


const DefaultLayout = (props) => {
    return (
        <>
         <Navbar />
         <HeroCarousel />
        {props.children}
        </>      
    ) ;
    } ;

export default DefaultLayout;