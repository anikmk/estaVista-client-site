/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";


const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useAuth();
    if(loading) return <Loader></Loader>
    if(user) return children
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;