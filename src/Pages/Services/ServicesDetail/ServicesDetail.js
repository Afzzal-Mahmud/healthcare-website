import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

function ServicesDetail() {
    
    const params = useParams();
    const { services,setServices } = useAuth()

    return(
        <div>
            <h3>hello from detail page</h3>
        </div>
    )
}
export default ServicesDetail;