/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import { useState, } from "react";
import Calander from "./Calander";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomDeservation = ({ room }) => {
  console.log(room)
  const {user} = useAuth()
  let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
      setIsOpen(false)
  }
    // total days
      const totalDays = parseInt(formatDistance(new Date(room.to), new Date(room.from)).split(' ')[0]);
    // total price
      const totalPrice = totalDays * room.price;
    
  const [value,setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key:"selection",

  })
  const [bookingInfo,setBookingInfo] = useState({
    guest:{
      name:user?.displayName,
      email:user?.email,
      image:user?.photoURL,
    },
    host:room?.host?.email,
    location:room?.location,
    price:totalPrice,
    to:value.endDate,
    from:value.startDate,
    title:room?.title,
    roomId: room?._id,
    image:room?.image
  })

  return (
    <div className="border rounded-xl bg-white overflow-hidden">
        <>
          <div className="flex items-center gap-1 p-4">
            <div className="text-2xl font-semibold"> ${room?.price} </div>
            <div className="font-light">Night</div>
          </div>
          <hr />
          <div className="flex justify-center item-center">
           <Calander value={value}></Calander>
          </div>
          <div className="p-4">
            <Button disabled={room.host.email === user.email || room.booked} onClick={()=>setIsOpen(true)} label={'Reserve'}></Button>
          </div>
          <hr />
          <div className="flex font-semibold item-center justify-between p-4">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
        </>
     
      <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={bookingInfo}></BookingModal>
    </div>
  );
};

export default RoomDeservation;
