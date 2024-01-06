
// create payment intent

import axiosSecure from "./axiosSecure"

export const createPaymentIntent = async(price) => {
        const {data} = await axiosSecure.post('/create-payment-intent',price)
        return data
}

export const saveBooking = async(booking) => {
    const {data} = await axiosSecure.post('/saveBooking',booking)
    return data
}
export const updateStatus = async(id) => {
    const {data} = await axiosSecure.patch(`/room/${id}`,status)
    return data
}