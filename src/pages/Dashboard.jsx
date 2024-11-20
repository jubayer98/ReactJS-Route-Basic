import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    // State to store cart items, wishlist items, current view, and total price
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [view, setView] = useState('cart'); // Default view is 'cart'
    const [totalPrice, setTotalPrice] = useState(0); // State to store total price

    useEffect(() => {
        // Retrieve cart and wishlist items from local storage when component mounts
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setCartItems(storedCart);
        setWishlistItems(storedWishlist);
    }, []);

    useEffect(() => {
        // Calculate total price whenever cartItems changes
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    }, [cartItems]);

    // Function to delete an item from the cart
    const deleteFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1); // Remove item at the specified index
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
    };

    // Function to delete an item from the wishlist
    const deleteFromWishlist = (index) => {
        const updatedWishlist = [...wishlistItems];
        updatedWishlist.splice(index, 1); // Remove item at the specified index
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update local storage
    };

    // Function to move an item from wishlist to cart
    const addToCartFromWishlist = (item, index) => {
        // Add item to cartItems and remove from wishlistItems
        const updatedCart = [...cartItems, item];
        const updatedWishlist = [...wishlistItems];
        updatedWishlist.splice(index, 1);

        setCartItems(updatedCart);
        setWishlistItems(updatedWishlist);

        // Update local storage with the new cart and wishlist
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        // Show success toast notification
        toast.success("Item added to cart");
    };

    // Function to sort cart items by price in ascending order
    const sortCartByPrice = () => {
        const sortedCart = [...cartItems].sort((a, b) => a.price - b.price);
        setCartItems(sortedCart);
    };

    // Function to handle purchase action
    const handlePurchase = () => {
        if (cartItems.length === 0) {
            // If no items in cart, show an error toast
            toast.error("No items in the cart to purchase.");
            return;
        }

        // Clear cart, reset total price, and update local storage
        setCartItems([]);
        setTotalPrice(0);
        localStorage.removeItem('cart');

        // Show success toast notification
        toast.success("Purchase successful!");
    };

    return (
        <div>
            <Banner />
            <ToastContainer />
            <div className="m-2 w-9/12 h-auto flex flex-col justify-center items-center mx-auto p-4">

                {/* Buttons to toggle between Cart and Wishlist views */}
                <div className="flex space-x-4 mb-6">
                    <button
                        onClick={() => setView('cart')}
                        className={`btn rounded-full ${view === 'cart' ? 'bg-purple-500 text-white' : ''}`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => setView('wishlist')}
                        className={`btn rounded-full ${view === 'wishlist' ? 'bg-purple-500 text-white' : ''}`}
                    >
                        Wishlist
                    </button>
                </div>

                {/* Conditionally render Cart or Wishlist based on selected view */}
                {view === 'cart' ? (
                    // Display Cart Items
                    <div className="w-full mb-8">
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className="text-lg font-semibold">Cart Items</h3>
                            </div>
                            <div className='flex items-center gap-4'>
                                <h3 className='text-lg font-semibold'>Total Price: ${totalPrice.toFixed(2)}</h3>
                                <button className='btn btn-accent' onClick={sortCartByPrice}>Sort By Price</button>
                                <button className='btn btn-neutral' onClick={handlePurchase}>Purchase</button>
                            </div>
                        </div>
                        {cartItems.length > 0 ? (
                            // Display each cart item with details
                            <div className="w-full mt-2 border-collapse">
                                <div className='mt-2 space-y-4'>
                                    {cartItems.map((item, index) => (
                                        <div className='flex justify-start gap-4 shadow-md' key={index}>
                                            <div className='w-32'>
                                                <img className="rounded-lg" src={item.product_image} alt="" />
                                            </div>
                                            <div>
                                                <h2 className='text-xl font-bold'>{item.product_title}</h2>
                                                <p>{item.description}</p>
                                                <p><b>Price:</b> ${item.price}</p>
                                                <button
                                                    className='btn btn-error'
                                                    onClick={() => deleteFromCart(index)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Display message if cart is empty
                            <p className="text-gray-500 mt-2">No items in cart.</p>
                        )}
                    </div>
                ) : (
                    // Display Wishlist Items
                    <div className="w-full">
                        <h3 className="text-lg font-semibold">Wishlist Items</h3>
                        {wishlistItems.length > 0 ? (
                            // Display each wishlist item with details
                            <div className="w-full mt-2 border-collapse">
                                <div className='mt-2 space-y-4'>
                                    {wishlistItems.map((item, index) => (
                                        <div className='flex justify-start gap-4 shadow-md' key={index}>
                                            <div className='w-32'>
                                                <img className="rounded-lg" src={item.product_image} alt="" />
                                            </div>
                                            <div>
                                                <h2 className='text-xl font-bold'>{item.product_title}</h2>
                                                <p>{item.description}</p>
                                                <p><b>Price:</b> ${item.price}</p>
                                                <div className='space-x-2'>
                                                    <button
                                                        className='btn btn-success'
                                                        onClick={() => addToCartFromWishlist(item, index)}
                                                    >
                                                        Add to Cart
                                                    </button>
                                                    <button
                                                        className='btn btn-error'
                                                        onClick={() => deleteFromWishlist(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Display message if wishlist is empty
                            <p className="text-gray-500 mt-2">No items in wishlist.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;