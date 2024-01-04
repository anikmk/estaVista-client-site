import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "../Sidebar/MenuItem";


const AdminMenu = () => {
    return (
        <>
        <MenuItem
             icon={BsFillHouseAddFill}
             label='Add Room'
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

export default AdminMenu;