import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useUser from "../Hooks/useUser";

function useGoogleLogIn() {

    /* use custom user hook for store google signIn data */
    const {setUser} = useUser()
    
    const googleProvider = new GoogleAuthProvider()
    function signInUsignGoogle() {

        const auth = getAuth();
        
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })
    }
    return {signInUsignGoogle}
}

export default useGoogleLogIn;