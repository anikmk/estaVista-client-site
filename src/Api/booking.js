
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
  // save booking 

export const saveBooking = async(booking) => {
    const {data} = await axiosSecure.post('/saveBooking',booking)
    return data
}
// update status when user reserved room booked true;
export const updateStatus = async(id,status) => {
    const {data} = await axiosSecure.patch(`/rooms/${id}`,{status})
    return data
}
// get data for guest
export const getBookings = async(email)=>{
  const {data} = await axiosSecure(`/bookings?email=${email}`)
  return data
}

// get data for host
export const getBookingHost = async(email) => {
  const {data} = await axiosSecure(`/bookings/host?email=${email}`)
  return data
}