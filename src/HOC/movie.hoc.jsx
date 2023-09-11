/* hoc -> higher order components
       -> transforms component into another component
       -> for adding additional functionalities to the existing components
*/

import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieLayout from "../layouts/movie.layout";
// Layouts

const MovieHOC = ( { component:  Component , ...rest }) => {
    return (
        // component 
        // props -> path exact
        <>
          
          < Routes >
          
          < Route 
          {...rest}
          component = {(props) => {   
                              
            <MovieLayout>
               <Component {...props} />
            </MovieLayout>

          }}
          />
          
          </Routes>
          
        </>
    )
}

export default MovieHOC;
    