import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

/* custom function for useign the contextApi */

function useAuth() {
    return useContext(AuthContext)
}
export default useAuth