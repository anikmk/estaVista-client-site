
// create payment intent

import axiosSecure from "./axiosSecure"

export const createPaymentIntent = async (price) => {
    try {
      const { data } = await axiosSecure.post('/create-payment-intent', price);
      return data;
    } catch (error) {
      throw new Error(`Error creating payment intent: ${error}`);
    }
  };

export const saveBooking = async(booking) => {
    const {data} = await axiosSecure.post('/saveBooking',booking)
    return data
}
export const updateStatus = async(id) => {
    const {data} = await axiosSecure.patch(`/rooms/${id}`,{status})
    return data
}