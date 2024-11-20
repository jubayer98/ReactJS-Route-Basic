import { BsCart4 } from "react-icons/bs"; // Icon for the cart
import { FaRegHeart } from "react-icons/fa"; // Icon for the wishlist
import { Link, useLocation } from "react-router-dom"; // For navigation and location detection
import { useEffect, useState } from "react"; // React hooks for state and lifecycle

// Navbar component handles the header navigation bar, cart, and wishlist icons with counts
const Navbar = () => {
    const location = useLocation(); // Current path location
    const isHomePage = location.pathname === '/'; // Check if the path is home page

    const [cartCount, setCartCount] = useState(0); // State for the cart item count
    const [wishlistCount, setWishlistCount] = useState(0); // State for the wishlist item count

    // Update counts from localStorage when component mounts
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart items from localStorage
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Retrieve wishlist items from localStorage

        setCartCount(cart.length); // Set the count of cart items
        setWishlistCount(wishlist.length); // Set the count of wishlist items
    }, []);

    return (
        <div className={`navbar ${isHomePage ? 'bg-purple-500' : 'bg-base-100'} w-11/12 mx-auto`}>
            <div className="navbar-start">
                {/* Dropdown menu for small screens */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                {/* Logo and name link */}
                <Link to='/' className={`btn btn-ghost text-xl ${isHomePage ? 'text-white' : 'text-black'}`}>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Menu for large screens */}
                <ul className={`menu menu-horizontal px-1 font-bold flex gap-8 items-center ${isHomePage ? 'text-white' : 'text-black'}`}>
                    <Link to='/' className={location.pathname === '/' ? 'text-white-500' : isHomePage ? 'text-white' : 'text-black'}>
                        Home
                    </Link>
                    <Link to='/statistics' className={location.pathname === '/statistics' ? 'text-purple-500' : isHomePage ? 'text-white' : 'text-black'}>
                        Statistics
                    </Link>
                    <Link to='/dashboard' className={location.pathname === '/dashboard' ? 'text-purple-500' : isHomePage ? 'text-white' : 'text-black'}>
                        Dashboard
                    </Link>
                    <Link to='/contact' className={location.pathname === '/contact' ? 'text-purple-500' : isHomePage ? 'text-white' : 'text-black'}>
                        Contact
                    </Link>
                </ul>
            </div>
            <div className={`navbar-end mr-5 items-center gap-4 text-3xl ${isHomePage ? 'text-white' : 'text-black'}`}>
                {/* Cart icon with count */}
                <div className="relative">
                    <BsCart4 className="rounded-l p-1" />
                    {cartCount > 0 && (
                        <span className="absolute bottom-3 left-5 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </div>
                {/* Wishlist icon with count */}
                <div className="relative">
                    <FaRegHeart className="rounded-l p-1" />
                    {wishlistCount > 0 && (
                        <span className="absolute bottom-3 left-5 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            {wishlistCount}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;