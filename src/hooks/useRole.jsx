
import useAuth from "./useAuth";
import { getRole } from "../Api/rooms";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const {user,loading} = useAuth();
    // const [role,setRole] = useState(null);
    // const [loading,setLoading] = useState(true)
    // useEffect(()=>{
    //     getRole(user?.email)
    //     .then(res=>{
    //         setRole(res)
    //         setLoading(false)
    //     })
    // },[user])
    // return [role,loading]
    const {data:role,isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey:['role'],
        queryFn:async()=> await getRole(user?.email)
    })
    return [role,isLoading]
};
export default useRole;