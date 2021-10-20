import { useState } from "react"

function useLoading() {

        /* fixing userRedirect on Log in */
        const [isLoading,setIsLoading] = useState(true)  
        return { isLoading,setIsLoading }

}
export default useLoading