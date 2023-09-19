/* hoc -> higher order components
       -> transforms component into another component
       -> for adding additional functionalities to the existing components
*/

import React from "react";
import { Route, Routes } from "react-router-dom";
// Layouts

const DefaultHOC = ( { component:  Component , ...rest }) => {
    return (
        // component 
        // props -> path exact
        <>         
          <Routes>
          < Route 
          {...rest}
          component = {(props) => {     
               
                
                 <Component {...props} />
               
               
          }}
          />
          </Routes>
        </>
    )
}

export default DefaultHOC;
    