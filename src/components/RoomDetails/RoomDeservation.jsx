/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Loader from "../Shared/Loader";
import { useState, useEffect } from "react";
import Calander from "./Calander";

const RoomDeservation = ({ room }) => {
  const [loader, setLoader] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (room?.from && room?.to && room?.price) {
      const totalDays = parseInt(formatDistance(new Date(room.to), new Date(room.from)).split(' ')[0]);
      const calculatedTotalPrice = totalDays * room.price;
      setTotalPrice(calculatedTotalPrice);
      setLoader(false);
    }
  }, [room]);

  const [value,setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key:"selection",

  })

  return (
    <div className="border rounded-xl bg-white overflow-hidden">
      {loader ? (
        <Loader />
      ) : (
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
            <Button label={'Reserve'}></Button>
          </div>
          <hr />
          <div className="flex font-semibold item-center justify-between p-4">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomDeservation;
