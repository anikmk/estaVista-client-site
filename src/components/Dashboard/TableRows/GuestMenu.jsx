import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "../Sidebar/MenuItem";


const GuestMenu = () => {
    return (
        <>
        <MenuItem
             icon={BsFillHouseAddFill}
             label='My Booking'
             address='myBooking'

           />
           
     </>
    );
};

export default GuestMenu;