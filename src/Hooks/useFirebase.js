import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import useGoogleLogIn from "../Mathods/useGoogleLogIn";
import useError from "./useError";
import useUser from "./useUser";
import useServices from './useServices';

initializeAuthentication()
function useFirebase() {
    /* added user from custom hook */
    const {user,setUser} = useUser();

    /* use services custom hook */
    const {services,setServices} = useServices()
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
        setErr,
        services,
        setServices
    }
}
export default useFirebase;