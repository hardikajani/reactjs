import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync, selectItems, selectLoading, selectError,selectSearchUser } from '../app/userDetailSlice';
import { RootState } from '../app/store';
import CustomModal from './CustomModal';

function Users() {
  
  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  
  const dispatch = useDispatch<any>();
  const items = useSelector((state: RootState) => selectItems(state));
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));
  const searchUser = useSelector((state: RootState) => selectSearchUser(state));

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = items.slice(firstIndex, lastIndex)  
  
  useEffect(() => {
    
    dispatch(fetchUsersAsync());
    
  }, []);

  if (loading === 'pending') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlePrevPage = ()=>{
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = ()=>{
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
    }
  }

  

  return (
    <>
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
      {showModal && <CustomModal id={id} setShowModal={setShowModal} />}
      {records && 
      records
        .filter((user)=>{
          if(searchUser.length === 0){
            return user
          } else{
            return user.name.first.toLowerCase().includes(searchUser)
          }
        }).map((user) => (
        <div key={user.email} className="rounded-md border bg-gray-400" onClick={() => [setId(user.id.value), setShowModal(true)]}>
          <img
            src={user.picture.medium}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <div className="inline-flex items-center text-lg font-semibold">
              <span>{user.name.first}</span>&nbsp;  
              <span>{user.name.last}</span>  
            </div>
            <p className="mt-3 text-sm text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      ))}
      
    </div>
    <div className="mt-2 flex items-center justify-center">
    <div className="space-x-2">
      <button
        type="button"
        onClick={handlePrevPage}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        ← Previous
      </button>
      <button
        type="button"
        onClick={handleNextPage}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Next →
      </button>
    </div>
    </div>
      
      
    </>
  )
}

export default Users;