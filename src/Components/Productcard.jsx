import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

function Productcard({ item }) {
  
  const navigate=useNavigate()
  return (
    
    <div className="border h-full flex flex-col p-3 border-gray-100 cursor-pointer transition-all rounded-2xl hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      
      <img
        src={item.thumbnail}
        alt={item.title}
        
        className="h-40 object-contain mx-auto"
      />

      {/* Content */}
      <div className="flex flex-col grow justify-between mt-3">
        
        <h1 className="line-clamp-2 font-semibold min-h-12">
          {item.title}
        </h1>

        <p className="font-bold text-gray-800 text-lg mt-2">
          ${item.price}
        </p>

        <button onClick={()=>navigate(`/product/${item.id}`)} className="mt-3 bg-red-600 w-full flex justify-center items-center gap-1 text-lg px-3 py-2 text-white rounded-md">
          <IoCartOutline className="h-6 w-6" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Productcard;