import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";

function LogInForm() {
    const location = useLocation()
    const history = useHistory()
    const redirectUrl = location?.state?.from || '/home'
    /* uploding useFirebase Hook */
    const {user,setUser,err,setErr,signInUsignGoogle,setIsLoading,isLoading} = useAuth()
    /* redirecting the url to where user trying to go  */
    const hendleGoogleSignIn = ()=>{
        signInUsignGoogle()
        .then(result => {
            setUser(result.user)
            history.push(redirectUrl)
            // console.log(result.user)
            // console.log(setIsLoading)
        })
        /* need to word after assignment */
        // .finally(()=>{
        //     // setIsLoading(false)
        //     console.log('finally on the state',isLoading)
        // })
    }
    /* usign react hook form */
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
     } = useForm();

     /* check the state */
    const [isLogIn,setIsLogIn] = useState(false)

    
    /* function for create user */
    function CreateUser(email,password) {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
            history.push(redirectUrl)
            console.log(result.user)
        })  
       }
       /* create user end */


    /* function for signIn user */
    function signInUser(email,password) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            history.push(redirectUrl)
        }).catch(error => {
            setErr(error.message)
        })  
       }
       /* SignIn user end */


     function takeValueAndLogIn(data) {
         const userEmail = data.email
         const userPassword = data.password

        {
            isLogIn ?  signInUser(userEmail,userPassword)
                    : CreateUser(userEmail,userPassword)
        }
        console.log(userPassword,userEmail)
     }
     function haveAccount(e) {
         setIsLogIn(e.target.checked)
     }
    return (
        <>
            <Container>
                <h3 className='text-center mb-4'>Please
                {isLogIn ? " Log In "
                : " Sign Up With Email and Password"
                }</h3>
                <Form onSubmit = {handleSubmit(takeValueAndLogIn)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        {...register("email", { required: "email is required",
                        pattern: {
                            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "invalid email"
                        }})}/>
                        {errors.email && (<small className='text-danger'>{errors.email.message}</small>)} <br />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        {...register("password", { required: 'The password must be at least 8 carecter long',
                        minLength : {
                            value: 8,
                            message: "Password should be 8 carecter long"
                        }})}/>
                        {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* if user do not have any account but trying to log in throw this erro */}
                {
                    err && <small className='text-danger'>Make sure you have an account ? or your password is incorrect . please create account</small>
                }
                        <Form.Check onClick={haveAccount} type="checkbox" label="already have an account ?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        { isLogIn ?"Log In" : "Sign Up" }
                    </Button>
                    {/* google sign in button */}
                    <Button onClick={hendleGoogleSignIn} variant="primary" className='ms-4' type="submit">
                        Google Sign In
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default LogInForm;