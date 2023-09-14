import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const validateToken = async () => {
        try {
            const response = await axios.post('/get-user-by-id', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            } )
            if(response.data.success) {
                setLoading(false)
            } else {
                setLoading(false)
                localStorage.removeItem("token")
                navigate('/login')
            }
        } catch (error) {
            setLoading(false)
            localStorage.removeItem("token")
            navigate('/login')
        }
    }

    useEffect(() => {
        if(localStorage.getItem("token")) {
            validateToken()
        } else {
            navigate('/login')
        }
    }, [])

    return ( 
        <>  
            {loading ? <div>loading...</div> : <> { children }</>}
        </>
    );
}
 
export default ProtectedRoute;