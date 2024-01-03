
// get all rooms data in db

import axiosSecure from "./axiosSecure"
export const getRooms = async() => {
    const {data} = await axiosSecure('/rooms')
    return data;
}

// get single data in db
export const getRoom = async(id) => {
    const {data} = await axiosSecure.get(`/room/${id}`)
    return data;
}