import { FaStar, FaRegHeart } from 'react-icons/fa' // Changed import to FaRegHeart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AppContext } from '../../../App'
import NoLogin from '../../NoLogin/noLogin'
import toast, { Toaster } from 'react-hot-toast';

export default function Com({ information, numberStart, img, price, offer }) {
  const { usernameLogin, setUsernameLogin, BASE_URL } = useContext(AppContext)

  const notify = () => (usernameLogin.username != undefined ? toast.success('!با موفقیت اضافه شد') : toast.error('!ابتدا وارد شوید'));

  const handleClick = async (url) => {
    if (usernameLogin.username != undefined) {
      try {
        const U = `${BASE_URL}add${url}?img=${img}&username=${usernameLogin.username}`;
        console.log(U);

        const response = await fetch(U);

        if (!response.ok) {
          console.log("Response not ok");
          return; // You might want to return early if the response is not okay.  
        }

        // Await the JSON conversion and store it in a variable  
        const jsonResponse = await response.json();
        setUsernameLogin(jsonResponse.user)

        console.log(jsonResponse.user);

      } catch (error) {
        console.log("Error:", error);
      }
    } else <NoLogin />

  }

  return (
    <div className=' w-[400px] h-[350px] choping-card items-center justify-center text-center shadow-md hover:scale-105 transition-all rounded-smp-3 mx-3 my-1'>
      <div className='img-section flex flex-col items-center justify-center relative'>
        <img className='rounded w-[60%]' src={`${BASE_URL}image?id=${img}`} alt={information} />
        {offer && (
          <span className='bg-orange-600 text-gray-200 px-2 py-1 rounded-md text-center right-1 top-1 absolute'>
            پیشنهاد ویژه
          </span>
        )}
        <div className='flex gap-1 absolute top-3 left-3'>
          {Array.from({ length: numberStart }).map((_, index) => (
            <FaStar key={index} className='text-yellow-500' />
          ))}
        </div>
      </div>
      <div className='title my-1 font-normal'>
        <h4>{information}</h4>
      </div>
      <div className='buttons mx-5 my-4 flex px-3 flex-row justify-between'>
        <div className='left flex gap-1 text-gray-500'>
          <div
            className='extend-btn cursor-pointer group flex items-center justify-center hover:w-20 h-10 w-10 text-gray-800 bg-green-600 rounded-full transition-all duration-300'
            onClick={() => { handleClick('Shop'); notify() }}
          >
            <FontAwesomeIcon icon={faShoppingCart} className='text-gray-200' />
            <span
              className='hidden group-hover:inline ml-2 text-gray-200 '
            >
              خرید
            </span>
          </div>
          <Toaster position='bottom-left' />
          <div className='extend-btn cursor-pointer group flex items-center justify-center hover:w-20 h-10 w-10 text-gray-800 bg-green-600 rounded-full transition-all duration-300'
            onClick={() => { handleClick('Interest'); notify() }}
          >
            <FontAwesomeIcon icon={faHeart} className='text-gray-200' />
            <span
              className='hidden group-hover:inline ml-2 text-gray-200'
            >
              علاقه
            </span>
          </div>

          <Toaster position='bottom-left' />
        </div>
        <div className='flex gap-1 items-center'>
          <span className='font-black text-gray-700'> هزار تومان </span>
          <span className='font-black text-gray-700'>{price}</span>
        </div>
      </div>
    </div>
  )
}
