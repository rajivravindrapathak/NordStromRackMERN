import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/productpage')
        }
    })

    return ( 
        <>
            <p>PublicRoute</p>
            <div>
                { children }
            </div>
        </>
     );
}
 
export default PublicRoute;