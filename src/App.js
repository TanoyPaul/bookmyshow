// import logo from './logo.svg';
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// HOC
import DefaultHOC from "./HOC/default.hoc";
import MovieHOC from "./HOC/movie.hoc";
//component
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/movie.page";

import DefaultLayout from "./layouts/default.layout"


function App () {
  return (
    <>

        <DefaultLayout>
        <DefaultHOC path = "/" exact  Component = {HomePage} />
        </DefaultLayout>  


        
        <MovieHOC path = "/movie/:id" exact Component = {MoviePage} />
       
       

      
       
       
        
    </>

                                  
  );
}

export default App;