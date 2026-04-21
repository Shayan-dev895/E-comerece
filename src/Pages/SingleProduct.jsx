import { useState } from "react"; // 1. useState import kiya
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProductById } from "../redux/ProductSlice";
import Breadcrums from "./Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { additem } from "../Redux/Cartslice";

function SingleProduct() {
    const dispatch = useDispatch();
    const params = useParams();
    const [quantity, setQuantity] = useState(1); // 2. Quantity state banayi

    const selectproduct = useSelector((state) => selectProductById(state, params.id));

    const orignalprice = selectproduct
        ? Math.round(
            selectproduct.price +
            (selectproduct.price * selectproduct.discountPercentage) / 100
        )
        : 0;

    // 3. Add to cart function handle karne ke liye
    const handleAddToCart = () => {
        // Hum product ke saath quantity bhej rahe hain
        dispatch(additem({ ...selectproduct, quantity: Number(quantity) }));
    };

    return (
        <>
            {selectproduct ? (
                <div className=" px-auto pb-4 md:px-0">
                    <Breadcrums title={selectproduct.title} />
                    <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
                        {/* img */}
                        <div className=" w-full">
                            <img src={selectproduct.thumbnail}
                                className="h-fit rounded-2xl w-full object-cover"
                                alt="" />
                        </div>
                        
                        {/* details */}
                        <div className="flex flex-col gap-6">
                            <h1 className="font-bold text-gray-600 md:text-3xl">{selectproduct.title}</h1>
                            <div>
                                <span>{selectproduct.brand?.toUpperCase()}</span> / 
                                <span>{selectproduct.category?.toUpperCase()}</span> / 
                                <span>{selectproduct.sku}</span>
                            </div>
                            
                            <div className="font-bold cursor-pointer"> 
                                <span className="text-red-500">${Math.round(selectproduct.price)}</span> 
                                <span className="px-1 line-through">${orignalprice}</span> 
                                <span className="bg-red-500 p-2 rounded-4xl text-white">{selectproduct.discountPercentage}% discount</span>
                            </div>
                            
                            <p>{selectproduct.description}</p>

                            {/* 4. Quantity Input Section */}
                            <div className="flex items-center gap-4">
                                <label className="font-bold">Quantity:</label>
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="w-16 border-2 border-gray-300 rounded-lg p-1 text-center focus:border-red-500 outline-none"
                                />
                            </div>

                            <div>
                                <button 
                                    onClick={handleAddToCart} 
                                    className="flex gap-1 cursor-pointer bg-red-500 rounded-xl p-2 text-white items-center"
                                >
                                    <span><IoCartOutline className="h-6 w-6"/></span>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <div>Loading...</div>}
        </>
    );
}

export default SingleProduct;