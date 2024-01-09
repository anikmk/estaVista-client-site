import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "../Sidebar/MenuItem";


const AdminMenu = () => {
    return (
        <>
        <MenuItem
             icon={BsFillHouseAddFill}
             label='Manage Users'
             address='manageUsers'

           />
           <MenuItem
             icon={BsFillHouseAddFill}
             label='My Listings'
             address='myListings'

           />
     </>
    );
};

export default AdminMenu;