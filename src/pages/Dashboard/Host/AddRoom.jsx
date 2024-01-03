import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../Api/Utils";
import useAuth from "../../../hooks/useAuth";


const AddRoom = () => {
    const {user,loading} = useAuth();
    const [dates,setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })
    const handleSubmit = async event =>{
        event.preventDefault()
        const form = event.target;
        const location = form.location.value;
        const category = form.location.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];
        const image_url = await imageUpload(image);
        const host = {
            name: user.displayName,
            image:user?.photoURl,
            email:user?.email
        }  
        const roomData = { location,category,title,to,from,price,guests,bathrooms,description,bedrooms,image:image_url?.data?.display_url,host}
        console.table(roomData)
    }

    const handleDates = ranges =>{
        setDates(ranges.selection)
        console.log(ranges)
    }
    return (
        <div>
            <Helmet>
                <title>AddRoom | Dashboard</title>
            </Helmet>
            {/* form */}
            <AddRoomForm
            handleSubmit={handleSubmit}
            handleDates={handleDates}
            dates={dates}
            loading={loading}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;