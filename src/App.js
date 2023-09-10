// import logo from './logo.svg';
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// HOC
import DefaultHOC from "./HOC/default.hoc";
//component
import HomePage from "./Pages/Home.Page";

import DefaultLayout from "./layouts/default.layout";


function App () {
  return (
    <>
        {/* This took too much time to be fixed ! */}
        <DefaultLayout>  
        <DefaultHOC path = "/" exact  Component = {HomePage} />
        </DefaultLayout>
        
        
    </>
  

                                  
  );
}

export default App;