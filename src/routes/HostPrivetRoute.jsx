import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";


// eslint-disable-next-line react/prop-types
const HostPrivetRoute = ({children}) => {
    const [role,isLoading] = useRole()
    if(isLoading) return <Loader></Loader>
    if(role === 'host') return children
    return <Navigate to='/dashboard'></Navigate>
};

export default HostPrivetRoute;