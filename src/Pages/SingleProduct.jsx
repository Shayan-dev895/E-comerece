import { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProductById } from "../Redux/Productslice.js";
import Breadcrums from "./Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { additem } from "../Redux/Cartslice";

function SingleProduct() {
    const dispatch = useDispatch();
    const params = useParams();
    const [quantity, setQuantity] = useState(1);

    const selectproduct = useSelector((state) => selectProductById(state, params.id));

    const orignalprice = selectproduct
        ? Math.round(
            selectproduct.price +
            (selectproduct.price * selectproduct.discountPercentage) / 100
        )
        : 0;

    const handleAddToCart = () => {
        dispatch(additem({ ...selectproduct, quantity: Number(quantity) }));
    };

    return (
        <>
            {selectproduct ? (
                <div className="w-full pb-10">
                    <Breadcrums title={selectproduct.title} />
                    
                    {/* Mobile par grid-cols-1 aur Desktop par grid-cols-2 */}
                    <div className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        
                        {/* 1. IMAGE SECTION */}
                        <div className="w-full flex justify-center items-center bg-gray-50 rounded-2xl p-2">
                            <img 
                                src={selectproduct.thumbnail}
                                className="w-full h-auto max-h-75 md:max-h-full rounded-2xl object-contain"
                                alt={selectproduct.title} 
                            />
                        </div>
                        
                        {/* 2. DETAILS SECTION */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Title: Mobile par text-xl, Desktop par 3xl */}
                            <h1 className="font-bold text-gray-800 text-xl md:text-3xl leading-tight">
                                {selectproduct.title}
                            </h1>

                            {/* Meta Info: Chota text for mobile */}
                            <div className="text-[10px] md:text-xs text-gray-500 tracking-wide font-medium">
                                <span className="bg-gray-100 px-2 py-1 rounded">{selectproduct.brand?.toUpperCase()}</span>
                                <span className="mx-2">/</span> 
                                <span className="bg-gray-100 px-2 py-1 rounded">{selectproduct.category?.toUpperCase()}</span>
                                <span className="mx-2">/</span> 
                                <span>{selectproduct.sku}</span>
                            </div>
                            
                            {/* Pricing: Responsive alignment */}
                            <div className="flex flex-wrap items-center gap-2 font-bold"> 
                                <span className="text-red-500 text-2xl">${Math.round(selectproduct.price)}</span> 
                                <span className="text-gray-400 line-through text-sm">${orignalprice}</span> 
                                <span className="bg-red-100 text-red-600 text-[10px] md:text-xs px-2 py-1 rounded-full">
                                    {selectproduct.discountPercentage}% OFF
                                </span>
                            </div>
                            
                            {/* Description: Line height optimized */}
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {selectproduct.description}
                            </p>

            

                            {/* Add to Cart Button: Full width on 320px mobile */}
                            <div className="mt-4">
                                <button 
                                    onClick={handleAddToCart} 
                                    className="w-full md:w-max flex justify-center items-center gap-2 cursor-pointer bg-red-600 hover:bg-red-700 transition-colors rounded-xl px-8 py-3 text-white font-bold shadow-lg active:scale-95"
                                >
                                    <IoCartOutline className="h-6 w-6"/>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-screen flex justify-center items-center text-xl font-bold">
                    Loading...
                </div>
            )}
        </>
    );
}

export default SingleProduct;