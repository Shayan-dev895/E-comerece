import { MapPin, Menu, X } from "lucide-react"; // Added Menu & X
import { FaCaretDown } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Nav() {
    const location = false;
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false); // For Profile Dropdown
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For Mobile Sidebar
    const dropdownRef = useRef();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        setOpen(false);
        setIsMenuOpen(false);
        navigate("/signin");
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="bg-white shadow-md sticky top-0 z-100">
            <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 flex justify-between items-center">
                
                {/* Left: Hamburger + Logo */}
                <div className="flex items-center gap-2">
                    <button 
                        className="md:hidden p-1" 
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                    
                    <Link to={"/"} className="flex items-center">
                        <h1 className="font-bold text-xl sm:text-2xl">
                            <span className="text-red-500">Z</span>-Electro
                        </h1>
                    </Link>

                    {/* Address - Hidden on Mobile (320px) */}
                    <div className="hidden md:flex items-center gap-1 cursor-pointer ml-4 text-sm text-gray-600">
                        <MapPin size={18} className="text-red-700" />
                        <span>{location ? "" : "Add Address"}</span>
                        <FaCaretDown />
                    </div>
                </div>

                {/* Center: Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-7 font-medium">
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.path}
                                to={link.path} 
                                className={({ isActive }) =>
                                    isActive ? "border-b-2 border-red-600 text-red-600" : "text-black hover:text-red-600 transition"
                                }
                            >
                                <li>{link.name}</li>
                            </NavLink>
                        ))}
                    </ul>
                </nav>

                {/* Right: Cart & Auth */}
                <div className="flex items-center gap-3 sm:gap-5">
                    <Link to={"/cart"} className="relative p-1">
                        <IoCartOutline className="h-6 w-6 sm:h-7 sm:w-7" />
                        {cartItems.length > 0 && (
                            <span className="bg-red-600 absolute top-0 -right-1 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="relative" ref={dropdownRef}>
                            <div
                                onClick={() => setOpen(!open)}
                                className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer text-sm font-semibold shadow-sm"
                            >
                                {user.email?.charAt(0).toUpperCase()}
                            </div>
                            {open && (
                                <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-100 rounded-xl p-3 z-50">
                                    <p className="text-[12px] text-gray-500 truncate mb-2">{user.email}</p>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full bg-gray-100 hover:bg-red-50 text-red-600 font-medium py-2 rounded-lg text-sm transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="hidden sm:flex gap-2">
                            <button onClick={() => navigate("/signin")} className="text-sm font-medium px-4 py-1.5 rounded-lg border border-gray-200">Login</button>
                            <button onClick={() => navigate("/signup")} className="text-sm font-medium px-4 py-1.5 rounded-lg bg-red-500 text-white shadow-md shadow-red-200">Signup</button>
                        </div>
                    )}
                </div>
            </div>

            {/* --- Mobile Sidebar (Drawer) --- */}
            <div className={`fixed inset-0 bg-black/50 z-110 transition-opacity ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`} onClick={() => setIsMenuOpen(false)}>
                <div 
                    className={`fixed top-0 left-0 h-full w-65 bg-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-5 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="font-bold text-xl"><span className="text-red-500">Z</span>-Electro</h1>
                            <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
                        </div>

                        <div className="flex items-center gap-2 mb-6 p-3 bg-gray-50 rounded-lg text-sm">
                            <MapPin size={18} className="text-red-700" />
                            <span>Add Address</span>
                        </div>

                        <ul className="flex flex-col gap-5 text-lg font-medium">
                            {navLinks.map((link) => (
                                <NavLink 
                                    key={link.path} 
                                    to={link.path} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) => isActive ? "text-red-600" : "text-gray-800"}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </ul>

                        {!user && (
                            <div className="mt-auto flex flex-col gap-3">
                                <button onClick={() => {navigate("/signin"); setIsMenuOpen(false)}} className="w-full py-3 rounded-xl border border-gray-200 font-semibold">Login</button>
                                <button onClick={() => {navigate("/signup"); setIsMenuOpen(false)}} className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold">Signup</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;