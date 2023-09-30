// Import necessary icons and components
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

const Header = () => {
    // Access the global state and dispatch function from the context
    const [{ basket, user }, dispatch] = useStateValue();

    // Function to handle user authentication and sign out
    const handleAuthentication = () => {
        if (user) {
            auth.signOut(); // Sign the user out if they are currently logged in
        }
    };

    return (
        // Header container with flex layout and styling
        <div className="flex h-[60px] items-center bg-[#131921] sticky top-0 z-100">
            {/* Amazon logo linked to the homepage */}
            <Link to='/'>
                <img className="w-[100px] object-cover mx-[20px] mt-[10px]"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            {/* Search bar */}
            <div className="flex flex-1 items-center rounded">
                <input className="h-[40px] p-[10px] w-[90%]" type="text" />
                <SearchIcon
                    sx={{ fontSize: '40px', cursor: "pointer" }}
                    className='p-[5px] h-[40px] bg-[#cd9842]'
                />
            </div>

            {/* Right-side navigation */}
            <div className="flex justify-evenly">
                {/* Link to login page or user account */}
                <Link to={!user && "/login"} className="">
                    <div className="flex flex-col mx-[10px] text-white">
                        {/* Display user's name or "Guest" */}
                        <span className="text-white">
                            Hello {!user ? "Guest" : user?.email}
                        </span>
                        {/* Display "Sign In" or "Sign Out" */}
                        <span className="text-white" onClick={handleAuthentication}>
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                {/* Returns and orders section */}
                <div className="flex flex-col mx-[20px] text-white">
                    <span className="text-[15px]">Returns</span>
                    <span className="text-[15px] font-semibold">$Order</span>
                </div>

                {/* Prime membership section */}
                <div className="flex flex-col mx-[20px] text-white">
                    <span className="text-[15px]">Your</span>
                    <span className="text-[15px] font-semibold">Prime</span>
                </div>

                {/* Shopping cart icon and basket count */}
                <div className='flex items-center text-white'>
                    <Link to='/checkout'>
                        <ShoppingCartIcon sx={{ fontSize: '35px', marginTop: '6px' }} />
                        {/* Display the number of items in the basket */}
                        <span className='m-4 text-2xl'>
                            {basket?.length}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
