import { useState } from "react"

function useServices() {
    const [services,setServices] = useState([])
    return {services,setServices}
}
export default useServices;