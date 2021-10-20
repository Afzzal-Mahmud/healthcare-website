import React from "react";
// import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import useLoading from "../Hooks/useLoading";

function PrivateRoute({children,...rest}) {
    const {user,isLoading} = useAuth()
    // const {isLoading} = useLoading()
   
    return(
        <Route
        {...rest}
        render={({location})=>user.email ? children 
        :<Redirect 
        to={
            {
                pathname:'/login',
                state:{from : location}
            }
        }
        ></Redirect>}
       >

       </Route>
    )
}
export default PrivateRoute;
