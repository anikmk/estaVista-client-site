/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";


const AdminPrivetRoute = ({children}) => {
    const [role,isLoading] = useRole()
    if(isLoading) return <Loader></Loader>
    if(role === 'admin') return children
    return <Navigate to='/dashboard'></Navigate>
    
};

export default AdminPrivetRoute;