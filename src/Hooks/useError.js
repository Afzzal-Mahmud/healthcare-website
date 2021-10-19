import { useState } from "react";

function useError() {
    const [err,setErr] = useState('')
    return {err,setErr}
}
export default useError;