
import { Helmet } from 'react-helmet-async'
import { getHostRoom } from '../../../Api/rooms';
import useAuth from '../../../hooks/useAuth';
import RoomDataRow from '../../../components/Dashboard/TableRows/RoomDataRow';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Shared/Loader';


const MyListings = () => {
    const {user,loading} = useAuth();
    console.log(user.email)
    const {data:rooms=[],isLoading} = useQuery({
      queryKey:user?.email,
      enabled:!loading,
      queryFn:async () => await getHostRoom(user?.email),

    })
console.log(rooms)
    if(isLoading) return <Loader></Loader>
    
  return (
    <>
      <Helmet>
        <title>My Listings</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                {/* Room row data */}
                {
                    rooms.map(room=><RoomDataRow key={room._id}
                    room={room}></RoomDataRow>)
                }
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyListings