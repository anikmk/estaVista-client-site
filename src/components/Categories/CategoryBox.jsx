import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'


const CategoryBox = ({label,icon:Icon,selected}) => {
    const [params,setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = () => {
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
        }
            const updateQuery = {...currentQuery,category:label}
            const url = qs.stringifyUrl({
                url:'/',
                query:updateQuery
            })
            navigate(url)
        }
    params.get('category')
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-3 border-b-2 cursor-pointer hover:text-neutral-700 transition p-3 ${selected ? "border-b-black":"border-b-base-100"}`}>
            <div>{<Icon size={26}></Icon>}</div>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;