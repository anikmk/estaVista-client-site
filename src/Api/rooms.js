
import axiosSecure from "./axiosSecure"

// fetach - get all rooms data in db
export const getRooms = async() => {
    const {data} = await axiosSecure('/rooms')
    return data;
}

// fetch - get single data in db
export const getRoom = async(id) => {
    const {data} = await axiosSecure.get(`/room/${id}`)
    return data;
}
// fetch - get all rooms for host
export const getHostRoom = async email => {
    const {data} = await axiosSecure.get(`/hostRoom/${email}`)
    return data;
}

// save room in database 
export const addRooms = async(roomData)=>{
    const {data} = await axiosSecure.post('/rooms',roomData)
    return data;
}