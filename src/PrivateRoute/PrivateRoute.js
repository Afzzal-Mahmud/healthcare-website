import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useLoading from "../Hooks/useLoading";

function PrivateRoute({children,...rest}) {
    const {user,isLoading} = useAuth()
    // const {isLoading} = useLoading()
    if(isLoading){
        // console.log(isLoading)
        return (
            <>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
            </>
        )
    }
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
