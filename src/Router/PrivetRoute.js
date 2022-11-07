import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom/dist';
import { AuthContext } from '../Context/AuthProvider';

const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <p className="text-red-500">Loading...</p>
    }
    if(user) {return children}  

    return <Navigate to='../../login' state={{from : location}} replace/> 
};

export default PrivetRoute;