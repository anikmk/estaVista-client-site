import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRole } from "../Api/rooms";


const useRole = () => {
    const {user,loading} = useAuth();
    const [role,setRole] = useState(null);
    useEffect(()=>{
        getRole(user?.email)
        .then(res=>{
            setRole(res)
        })
    },[user])
    return [role]
};

export default useRole;