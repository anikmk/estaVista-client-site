import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomDeservation from "../../components/RoomDetails/RoomDeservation";

const RoomDetails = () => {
    const {id} = useParams()
    const [room,setRoom] = useState({})
    const [loader,setLoader] = useState(false)
    useEffect(()=>{
        setLoader(true)
        fetch('/rooms.json')
        .then(res=>res.json())
        .then(data=>{
            const singleRoom = data.find(room=>room._id === id)
            setRoom(singleRoom);
            setLoader(false);
        })
    },[id])
    if(loader) return <Loader></Loader>
    return (
        <div>
            <Helmet> ( <title>{`${room?.title}`}</title> )</Helmet>
            <Container>
                <div>
                    <div className="flex flex-col gap-5">
                      <Header room={room}></Header>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-5 mt-8">
                        <RoomInfo room={room}></RoomInfo>
                        <div className="md:col-span-3 order-first md:order-last">
                            {/* room deservations */}
                            <RoomDeservation room={room}></RoomDeservation>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RoomDetails;