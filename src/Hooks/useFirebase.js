import initializeAuthentication from "../Firebase/firebase.init";
import useGoogleLogIn from "../Mathods/useGoogleLogIn";
import useUser from "./useUser";

initializeAuthentication()
function useFirebase() {
    /* added user from custom hook */
    const {user,setUser} = useUser();

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
    }
}