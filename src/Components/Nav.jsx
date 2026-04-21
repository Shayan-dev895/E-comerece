import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router"; // Agar react-router-dom hai to wo likhein
import { useSelector } from "react-redux"; // Redux se data lene ke liye

function Nav() {
    const location = false;

    // Redux store se cart items ki length nikalna
    // state.cart wahi hai jo aapne store.js mein reducer ka naam rakha tha
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems)

    return (
        <div className="bg-white py-0 shadow-2xl">
            <div className="max-w-5xl mx-auto py-3 flex justify-between items-center ">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link to={"/"}>
                        <h1 className="font-bold text-2xl">
                            <span className="text-red-500 font-sans">Z</span>-Electro
                        </h1>
                    </Link>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <MapPin className="text-red-700" />
                        <span>{location ? "" : "Add Address"}</span>
                        <FaCaretDown />
                    </div>
                </div>

                {/* Menu */}
                <nav className="flex gap-7 items-center">
                    <div>
                        <ul className="flex gap-7 text-xl">
                            <NavLink to={"/"} className={({isActive}) => isActive ? "border-b-3 transition-all border-red-600" : "text-black"}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to={"/product"} className={({isActive}) => isActive ? "border-b-3 transition-all border-red-600" : "text-black"}>
                                <li>Product</li>
                            </NavLink>
                            <NavLink to={"/about"} className={({isActive}) => isActive ? "border-b-3 transition-all border-red-600" : "text-black"}>
                                <li>About</li>
                            </NavLink>
                            <NavLink to={"/contact"} className={({isActive}) => isActive ? "border-b-3 transition-all border-red-600" : "text-black"}>
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </div>

                    {/* Cart Icon with Dynamic Badge */}
                    <Link to={"/cart"} className="relative">
                        <IoCartOutline className="h-6 w-6" />
                        {cartItems.length > 0 && (
                            <span className="bg-red-600 px-2 rounded-2xl absolute -top-4 -right-3 text-white text-sm">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Nav;