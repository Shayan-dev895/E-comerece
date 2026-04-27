import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeitem, increaseQty, decreaseQty, clearcart } from "../Redux/Cartslice";
import { useNavigate } from "react-router";

function Cart() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const cartitems = useSelector((state) => state.cart.items);

    const totalPrice = cartitems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const handleCheckout = () => {
        dispatch(clearcart()); // cart empty
        alert("Order Completed 🎉");
        navigate("/product")

    };

    return (
        <div className="max-w-6xl mx-auto mt-10 px-2 sm:px-4">

            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                My Cart ({cartitems.length})
            </h1>

            {/* EMPTY STATE */}
            {cartitems.length === 0 && (
                <h2 className="text-center text-gray-500 text-xl">
                    Your cart is empty 🛒
                </h2>
            )}

            {/* CART ITEMS - Strictly Horizontal on 320px */}
            <div className="space-y-4">
                {cartitems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-100 p-2 sm:p-5 rounded-lg flex items-center justify-between gap-2 shadow-sm"
                    >
                        {/* Image aur Title Group */}
                        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-12 h-12 sm:w-20 sm:h-20 rounded-md bg-white object-contain"
                            />

                            <div className="min-w-0">
                                <h2 className="text-[11px] sm:text-base font-medium truncate sm:w-64">
                                    {item.title}
                                </h2>
                                <p className="text-red-500 font-semibold text-[10px] sm:text-sm">
                                    ${item.price}
                                </p>
                            </div>
                        </div>

                        {/* Quantity aur Delete Group */}
                        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
                            {/* QUANTITY */}
                            <div className="bg-red-500 text-white flex rounded-md overflow-hidden text-[10px] sm:text-base">
                                <button
                                    onClick={() => dispatch(decreaseQty(item.id))}
                                    className="px-1.5 py-1 sm:px-3 sm:py-1 hover:bg-red-600"
                                >
                                    -
                                </button>
                                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-red-500 border-x border-red-400">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() => dispatch(increaseQty(item.id))}
                                    className="px-1.5 py-1 sm:px-3 sm:py-1 hover:bg-red-600"
                                >
                                    +
                                </button>
                            </div>

                            {/* DELETE */}
                            <FaTrash
                                onClick={() => dispatch(removeitem(item.id))}
                                className="text-red-500 cursor-pointer text-sm sm:text-base hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* BOTTOM SECTION */}
            {cartitems.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-10">

                    {/* DELIVERY FORM */}
                    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Delivery Info
                        </h2>

                        <div className="space-y-3">
                            <input placeholder="Full Name" className="w-full p-2 border rounded-md text-sm" />
                            <input placeholder="Address" className="w-full p-2 border rounded-md text-sm" />

                            <div className="flex gap-3">
                                <input placeholder="State" className="w-1/2 p-2 border rounded-md text-sm" />
                                <input placeholder="PostCode" className="w-1/2 p-2 border rounded-md text-sm" />
                            </div>

                            <div className="flex gap-3">
                                <input placeholder="Country" className="w-1/2 p-2 border rounded-md text-sm" />
                                <input placeholder="Phone no" className="w-1/2 p-2 border rounded-md text-sm" />
                            </div>

                            <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full font-bold hover:bg-red-600">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* BILL */}
                    <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Bill details
                        </h2>

                        <div className="flex justify-between mb-2 text-sm">
                            <span>Items total</span>
                            <span>${totalPrice}</span>
                        </div>

                        <div className="flex justify-between mb-2 text-sm">
                            <span>Delivery</span>
                            <span className="text-green-500 font-bold">FREE</span>
                        </div>

                        <div className="flex justify-between mb-3 text-sm">
                            <span>Handling</span>
                            <span>$5</span>
                        </div>

                        <hr className="mb-3 border-gray-300" />

                        <div className="flex justify-between font-bold text-base sm:text-lg mb-4">
                            <span>Grand total</span>
                            <span>${totalPrice + 5}</span>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-red-500 text-white py-3 rounded-md font-bold hover:bg-red-600 mb-3"
                        >
                            Proceed to Checkout
                        </button>

                        {/* CLEAR CART */}
                        <button
                            onClick={() => dispatch(clearcart())}
                            className="w-full text-xs text-red-500 hover:underline"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;