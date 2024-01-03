import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomDeservation from "../../components/RoomDetails/RoomDeservation";


const RoomDetails = () => {
   const room = useLoaderData()
   console.log(room)
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