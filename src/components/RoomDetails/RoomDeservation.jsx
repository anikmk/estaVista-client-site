import Button from "../Button/Button";
import Calander from "./Calander";


const RoomDeservation = ({room}) => {
    return (
        <div className="border rounded-xl bg-white overflow-hidden">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold"> ${room?.price} </div>
                <div className="font-light">Night</div>

            </div>
            <hr />
            <div className="flex justify-center item-center">
            <Calander></Calander>
            </div> 
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
        </div>
    );
};

export default RoomDeservation;