
import axiosSecure from "./axiosSecure"
// save user data in database
export const saveUser = async user => {
    const currentUser = {
        email:user.email,
        role:'admin',
        status:'Verified'
    }

    const {data} = await axiosSecure.put(`/users/${user?.email}`,currentUser)
    return data;
}

// get token from server
export const getToken = async email => {

    const {data} = await axiosSecure.post('/jwt',email)
    console.log('token recived from server',data)
    return data;
}

// clear cookie when logout
export const clearCookie = async () => {

    const {data} = await axiosSecure.get('/logout')
    return data;
}