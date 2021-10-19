import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import useGoogleLogIn from "../Mathods/useGoogleLogIn";
import useError from "./useError";
import useUser from "./useUser";

initializeAuthentication()
function useFirebase() {
    /* added user from custom hook */
    const {user,setUser} = useUser();

    /* catch the error */
    const {err,setErr} = useError()

    /* add google logIn using custom hook */
    const {signInUsignGoogle} = useGoogleLogIn()

    const auth = getAuth()

    function logOut() { 
        
        signOut(auth)
        .then(()=>{
            console.log('inside the logOut')
            setUser({})
         })
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user)
            }
        })
    },[user])

    return {
        user,
        setUser,
        signInUsignGoogle,
        logOut,
        err,
        setErr
    }
}
export default useFirebase;