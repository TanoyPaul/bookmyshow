import React from "react";
// components
import MovieNavbar from "../components/Navbar/movienavbar.component"


const MovieLayout = (props) => {
    return (
        <>
         <MovieNavbar />
         
        {props.children}
        </>      
    ) ;
    } ;

export default MovieLayout;