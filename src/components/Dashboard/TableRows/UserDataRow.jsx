import { useState } from "react"
import UpdateUserModal from "../../Modal/UpdateUserModal"
import { updateRole } from "../../../Api/auth";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const UserDataRow = ({ user,refetch }) => {
    const [isOpen,setIsOpen] = useState(false);
    const modalHandler = async (role) => {
        try{
            const data = await updateRole({email:user?.email,role})
            toast.success('User Role Updated')
            refetch()
            console.log(data)
        }
        catch(err){
            toast.error(err.message)
        }
        finally{setIsOpen(false)}
    }
    return (
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {user?.status ? (
            <p
              className={`${
                user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
              } whitespace-no-wrap`}
            >
              {user.status}
            </p>
          ) : (
            <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
          )}
        </td>
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span onClick={()=>setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Update Role</span>
          </span>
          {/* Modal */}
          <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal>
        </td>
      </tr>
    )
  }
  
  export default UserDataRow