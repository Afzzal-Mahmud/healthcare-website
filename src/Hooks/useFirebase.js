import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import useGoogleLogIn from "../Mathods/useGoogleLogIn";
import useError from "./useError";
import useUser from "./useUser";
import useServices from './useServices';
// import useLoading from "./useLoading";

initializeAuthentication()
function useFirebase() {
    /* added user from custom hook */
    const {user,setUser} = useUser();

    /* use services custom hook */
    const {services,setServices} = useServices()
    /* catch the error */
    const {err,setErr} = useError()
       
    /* fixing userRedirect on Log in */
    // const {isLoading,setIsLoading} = useLoading()

    /* add google logIn using custom hook */
    const {signInUsignGoogle} = useGoogleLogIn()

    const auth = getAuth()

    function logOut() { 
        // setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
         })
        //  .finally(()=> setIsLoading(false))
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            // setIsLoading(false)
        })
    },[])

    return {
        user,
        setUser,
        signInUsignGoogle,
        logOut,
        err,
        setErr,
        services,
        setServices,
        // setIsLoading,
        // useLoading
    }
}
export default useFirebase;