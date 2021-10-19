import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useFirebase from '../../Hooks/useFirebase'
import { Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LogInForm() {
    /* uploding useFirebase Hook */
    const {user,setUser,err,setErr} = useFirebase()
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
                <h2>Please
                {isLogIn ? " Log In "
                : " Sign Up With Your Email and Password"
                }</h2>
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
                    err && <small className='text-danger'>You don't have any account yet please create account</small>
                }
                        <Form.Check onClick={haveAccount} type="checkbox" label="already have an account ?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        { isLogIn ?"Log In" : "Sign Up" }
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default LogInForm;