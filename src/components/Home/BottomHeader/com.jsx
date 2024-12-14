import { FaStar, FaRegHeart } from "react-icons/fa"; // Changed import to FaRegHeart  
import { MdShoppingCart } from "react-icons/md"; // Imported MdShoppingCart  
import { IoHeartSharp } from "react-icons/io5"; // Keep this if you want to retain IoHeartSharp  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Com({ information, numberStart, img, price, offer }) {
    return (
        <div className=" w-[400px] h-[350px] choping-card items-center justify-center text-center shadow-md hover:scale-105 transition-all rounded-smp-3 mx-3 my-1">
            <div className="img-section flex flex-col items-center justify-center relative">
                <img className="rounded w-[60%]" src={img} alt={information} />
                {offer && (
                    <span className="bg-orange-600 text-gray-200 px-2 py-1 rounded-md text-center right-1 top-1 absolute">
                        پیشنهاد ویژه
                    </span>
                )}
                <div className="flex gap-1 absolute top-1 left-1">
                    {Array.from({ length: numberStart }).map((_, index) => (
                        <FaStar key={index} className="text-yellow-500" />
                    ))}
                </div>
            </div>
            <div className="title my-1 font-normal">
                <h4>{information}</h4>
            </div>
            <div className="buttons mx-5 my-4 flex px-3 flex-row justify-between">
                <div className="left flex gap-1 text-gray-500">
                    <div className="extend-btn cursor-pointer group flex items-center justify-center hover:w-20 h-10 w-10 text-gray-800 bg-green-600 rounded-full transition-all duration-300">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-gray-200" />
                        <span className="hidden group-hover:inline ml-2 text-gray-200">خرید</span>
                    </div>
                    <div className="extend-btn cursor-pointer group flex items-center justify-center hover:w-20 h-10 w-10 text-gray-800 bg-green-600 rounded-full transition-all duration-300">
                        <FontAwesomeIcon icon={faHeart} className="text-gray-200" />
                        <span className="hidden group-hover:inline ml-2 text-gray-200">علاقه</span>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="font-black text-gray-700"> هزار تومان </span>
                    <span className="font-black text-gray-700">{price}</span>
                </div>
            </div>
        </div>
    );
}