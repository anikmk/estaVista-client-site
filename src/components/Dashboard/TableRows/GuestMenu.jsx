import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "../Sidebar/MenuItem";


const GuestMenu = () => {
    return (
        <>
        <MenuItem
             icon={BsFillHouseAddFill}
             label='guest room'
             address='addRoom'

           />
           <MenuItem
             icon={BsFillHouseAddFill}
             label='My Listings'
             address='myListings'

           />
           <MenuItem
             icon={BsFillHouseAddFill}
             label='Manage Bookings'
             address='manageBookings'

           /> 
     </>
    );
};

export default GuestMenu;