import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { additem } from "../Redux/Cartslice";


function Productcard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(additem(item));
  };

  return (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="border h-full flex flex-col p-2 sm:p-3 border-gray-100 cursor-pointer transition-all rounded-xl hover:shadow-xl bg-white"
    >
      <div className="h-32 sm:h-40 w-full flex items-center justify-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain mx-auto"
        />
      </div>

      <div className="flex flex-col grow justify-between mt-3">
        <h1 className="line-clamp-2 font-semibold text-sm sm:text-base min-h- sm:min-h-12 leading-tight">
          {item.title}
        </h1>

        <p className="font-bold text-gray-800 text-base sm:text-lg mt-1 sm:mt-2">
          ${item.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="mt-3 bg-red-600 w-full flex justify-center items-center gap-1 text-[12px] sm:text-lg py-2 text-white rounded-md active:scale-95"
        >
          <IoCartOutline className="h-4 w-4 sm:h-6 sm:w-6" />
          <span className="hidden sm:inline">Add to cart</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </div>
  );
}

export default Productcard;