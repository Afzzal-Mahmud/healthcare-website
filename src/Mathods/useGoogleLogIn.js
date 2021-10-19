import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useUser from "../Hooks/useUser";

function useGoogleLogIn() {

    /* use custom user hook for store google signIn data */
    const {setUser} = useUser()
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()
    function signInUsignGoogle() {
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })
    }
    return {signInUsignGoogle}
}

export default useGoogleLogIn;