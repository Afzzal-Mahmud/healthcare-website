import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import useLoading from "../Hooks/useLoading";

function useGoogleLogIn() {
    // const { isLoading, setIsLoading } = useLoading()
    /* use custom user hook for store google signIn data */
    
    const googleProvider = new GoogleAuthProvider()
    function signInUsignGoogle() {
        // setIsLoading(true)
        const auth = getAuth();
        
       return signInWithPopup(auth,googleProvider)

    }
    return {signInUsignGoogle}
}

export default useGoogleLogIn;