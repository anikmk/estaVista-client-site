
import axiosSecure from "./axiosSecure"
// save user data in database
export const saveUser = async user => {
    const currentUser = {
        email:user.email,
        role:'guest',
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

// get all users for admin 
export const allUsers = async () => {
    const {data} = await axiosSecure('/users')
    return data
}

// update role 
export const updateRole = async ({email,role}) => {
    const updateUser = {
        email:email,
        role,
        status:'verified'
    }
    const {data} = await axiosSecure.put(`/users/update/${email}`,updateUser)
    return data

}