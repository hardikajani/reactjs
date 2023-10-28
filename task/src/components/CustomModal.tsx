import { useSelector } from "react-redux";
import { selectItems} from '../app/userDetailSlice';
import { RootState } from '../app/store';

function CustomModal({ id, setShowModal }) {
  const items = useSelector((state: RootState) => selectItems(state));
  const singleUsers = items.filter((user) => user.id.value === id);
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
              <h3 className="text-3xl font=semibold">More Info</h3>
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={() => setShowModal(false)}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <h1 className="text-lg font-semibold">{singleUsers[0].name.first} {singleUsers[0].name.last}</h1>

              <h6 className="mt-3 font-medium">Date of birth: {singleUsers[0].dob.date}</h6>
              <h6 className="mt-3 font-medium">Phone number: {singleUsers[0].phone} </h6>
              <p className="mt-3 text-sm text-gray-600">
                Address : {singleUsers[0].location.street.number}, {singleUsers[0].location.street.name}, {singleUsers[0].location.city},{singleUsers[0].location.state},{singleUsers[0].location.postcode},   
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomModal;
