import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../Api/Utils";
import useAuth from "../../../hooks/useAuth";
import { addRooms } from "../../../Api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddRoom = () => {
    const {user} = useAuth();
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [uploadButtonText,setUploadButtonText] = useState('Uploadd Image')
    const [dates,setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })
    const handleSubmit = async event =>{
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const location = form.location.value;
        const category = form.category.value;
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
        // save data in db
        try{
           
           const data = await addRooms(roomData)
           setUploadButtonText('Uploaded!')
           toast.success('Room Added Succesfully')
           console.log("save room in db------>",data)
           navigate('/dashboard/myListings')
           
        }
        catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    const handleDates = ranges =>{
        setDates(ranges.selection)
        console.log(ranges)
    }
    const handleImageChange = image =>{
        setUploadButtonText(image.name)
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
            uploadButtonText={uploadButtonText}
            handleImageChange={handleImageChange}
            ></AddRoomForm>
        </div>
    );
};

export default AddRoom;