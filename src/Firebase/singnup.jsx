import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
                    Create Account
                </h2>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />

                {/* Button */}
                <button
                    onClick={signup}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
                >
                    Signup
                </button>

                {/* Footer text */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account? <span className="text-red-500 cursor-pointer" onClick={()=>navigate("/signin")}>Login</span>
                </p>

            </div>
        </div>
    );
}

export default Signup;