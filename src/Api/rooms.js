
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
    const {data} = await axiosSecure(`/hostRoom/${email}`)
    return data;
}
// fetch - get user role from data base
export const getRole = async email => {
    const {data} = await axiosSecure.get(`/user/${email}`)
    return data.role;
}

// save room in database 
export const addRooms = async(roomData)=>{
    const {data} = await axiosSecure.post('/rooms',roomData)
    return data;
}