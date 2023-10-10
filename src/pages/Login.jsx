// Import necessary React hooks and components
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// Import Firebase authentication module
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Define the Login component
function Login() {
    // Initialize state variables for email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Get a function to navigate between routes
    const navigate = useNavigate();

    // Function to handle sign-in when the Sign In button is clicked
    const signIn = (e) => {
        e.preventDefault();
        // Attempt to sign in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // If sign-in is successful, navigate to the home page
                if (user) {
                    navigate('/')
                }
            })
            .catch((error) => console.log(error.message));
    };

    // Function to handle registration when the Create your Amazon Account button is clicked
    const register = (e) => {
        e.preventDefault();
        // Attempt to create a new user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                if (user) {
                    navigate("/")
                    // If registration is successful, navigate to the home page
                }
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="bg-white h-[100vh] flex flex-col items-center">
            {/* Amazon logo with a link to the home page */}
            <Link to="/">
                <img
                    className="my-[20px] object-contain w-[100px] mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>
            {/* Login form */}
            <div className="w-[300px] h-fit flex flex-col border border-gray-300 p-[20px]">
                <h1 className="font-semibold mb-[20px] text-[25px] ">Sign-in</h1>

                <form>
                    {/* Email input field */}
                    <h5 className="mb-[5px] ">E-mail</h5>
                    <input
                        className="h-[30px] mb-[10px] bg-white w-[98%] border-t-2 border-r-2 border-l-2 border-b-2 border-black-500"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Password input field */}
                    <h5 className="mb-[5px]">Password</h5>
                    <input
                        className="h-[30px] mb-[10px] bg-white w-[98%] border-t-2 border-r-2 border-l-2 border-b-2 border-black-500"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Sign In button */}
                    <button
                        type="submit"
                        onClick={signIn}
                        className="bg-[#f0c14b] rounded-sm w-[100%] h-[30px] border mt-[10px] border-t-2 border-r-2 border-b-2 border-yellow-500 border-opacity-100"
                    >
                        Sign In
                    </button>
                </form>

                {/* Terms and conditions */}
                <p className="mt-[15px] text-[12px] ">
                    By signing in, you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice, and our
                    Interest-Based Ads Notice.
                </p>

                {/* Create your Amazon Account button */}
                <button
                    onClick={register}
                    className="rounded-sm w-[100%] h-[40px]  border mt-[10px] border-gray-700 bg-gray-200"
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
