import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";


const Rooms = () => {
    const [rooms,setRooms] = useState([]);
    const [loader,setLoader] = useState(false)
    const [params,setParams] = useSearchParams();
    const category = params.get('category')
    useEffect(()=>{
        setLoader(true);
        fetch('rooms.json').then(res=>res.json())
        .then(data=>{
            if(category){
                const filtered = data.filter(room=>room.category === category)
                setRooms(filtered)
            }
            else{setRooms(data)}
            setLoader(false);
        })
    },[category])
    if(loader)return <Loader></Loader>
    return (
        <Container>
        {
            rooms.length > 0 ? <div className=" pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {
                rooms.map(room=><Card key={room._id} card={room}></Card>)
            }
        </div>
        :
        <div className="flex items-center justify-center min-h-[calc(100vh-236px)]">
            <Heading title='no rooms available in the category' center={true} subtitle='please select other category'></Heading>
        </div>
        }
        </Container>
    );
};

export default Rooms;