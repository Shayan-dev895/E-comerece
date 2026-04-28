import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Email Login
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Login
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful ✅");
      navigate("/");
      console.log("LOGIN CLICKED")
    } catch (error) {
      alert(error.message);
      console.log("Login Error:", error.code);
      console.log("Login Error Message:", error.message);
    }
  };

  // GitHub Login
  const loginWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      alert("GitHub Login Successful ✅");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email Inputs */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-red-500 text-white p-3 rounded mb-4"
        >
          Login
        </button>

        {/* Divider */}
        <div className="text-center text-gray-400 mb-4">or</div>

        {/* Social Logins */}
        <div className="flex gap-4">

          <button
            onClick={loginWithGoogle}
            className="flex items-center justify-center gap-2 w-full border p-3 rounded hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500" />
            Google
          </button>

          <button
            onClick={loginWithGithub}
            className="flex items-center justify-center gap-2 w-full border p-3 rounded hover:bg-gray-100"
          >
            <FaGithub />
            GitHub
          </button>

        </div>

      </div>
    </div>
  );
}

export default Signin;