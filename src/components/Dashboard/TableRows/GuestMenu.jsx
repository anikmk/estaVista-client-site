
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import useRole from '../../../hooks/useRole'
import MenuItem from '../Sidebar/MenuItem'
import HostModal from '../../Modal/HostRequestModal'
import { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { requestForHost } from '../../../Api/auth'
import toast from 'react-hot-toast'
const GuestMenu = () => {
    const {user} = useAuth()
  const [role] = useRole()
  const [isOpen,setIsOpen] = useState(false)
  const modalHandler = async() => {
    console.log('became a host')
    // resquest for host to admin
    try{
        const data = await requestForHost(user?.email)
        if(data.modifiedCount > 0){
            toast.success('Requested for host')
        }
        else{toast.error('Plesse wait for admin aproval')}
    }
    catch(err){
        console.log(err.message)
    }
    finally{
        setIsOpen(false)
    }
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Bookings'
        address='my-bookings'
      />

      {role === 'guest' && (
        <div onClick={()=>setIsOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )}
      <HostModal isOpen={isOpen} modalHandler={modalHandler} closeModal={closeModal}></HostModal>
    </>
  )
}

export default GuestMenu