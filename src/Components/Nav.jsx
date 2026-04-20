import { MapIcon, MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
function Nav() {
    const location = false
    return (
        <div className="bg-white py-0 shadow-2xl">
            <div className="  max-w-5xl mx-auto py-3 flex justify-between items-center ">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link to={"/"}><h1 className="font-bold text-2xl"><span className="text-red-500 font-sans">Z</span>-Electro</h1></Link>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <MapPin className="text-red-700" />
                        <span>
                            {location ? "" : "Add Adress"}
                        </span>
                        <FaCaretDown />
                    </div>

                </div>
                {/* menu */}
                <nav className="flex gap-7 items-center">
                    <div>
                        <ul className="flex gap-7 text-xl">
                            <NavLink to={"/"} className={({isActive})=>isActive?"border-b-3 transition-all border-red-600":"text-black"}><li>Home</li></NavLink>
                            <NavLink to={"/product"} className={({isActive})=>isActive?"border-b-3 transition-all border-red-600":"text-black"}><li>Product</li></NavLink>
                            <NavLink to={"/about"} className={({isActive})=>isActive?"border-b-3 transition-all border-red-600":"text-black"}><li>About</li></NavLink>
                            <NavLink to={"/contact"} className={({isActive})=>isActive?"border-b-3 transition-all border-red-600":"text-black"}><li>Contact</li></NavLink>

                        </ul>
                    </div>
                    <Link to={"/cart"} className="relative">
                    <IoCartOutline className="h-6 w-6"/>
                    <span className="bg-red-600 px-2 rounded-2xl absolute -top-4 -right-3 text-white">0</span>
                    </Link>
                </nav>
            </div>
        </div>

    )
}
export default Nav;