import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import Banner from '../components/Banner';
import { handleAddToCart, handleAddToWishlist } from '../utils/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// The ProductDetails component displays detailed information for a specific product
const ProductDetails = () => {
    // Retrieve the product ID from the URL parameters
    const { product_id } = useParams();
    // Define a state variable to store the product details
    const [product, setProduct] = useState(null);

    // Fetch product details when the component mounts or when product_id changes
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                // Fetch product data from a local JSON file
                const response = await fetch('../products.json');
                const productsData = await response.json();
                // Find the specific product in the electronics category based on product_id
                const selectedProduct = productsData.electronics.find(item => item.product_id === product_id);
                // Update the state with the selected product's details
                setProduct(selectedProduct);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProductDetails();
    }, [product_id]); // Dependency array to trigger re-fetch if product_id changes

    // Add product to the cart and show toast notification on success/failure
    const handleAddToCartWithToast = useCallback((product) => {
        const added = handleAddToCart(product);
        if (added) {
            toast.success(`${product.product_title} has been added to the cart.`);
        } else {
            toast.info(`${product.product_title} is already in the cart.`);
        }
    }, []);

    // Add product to the wishlist and show toast notification on success/failure
    const handleAddToWishlistWithToast = useCallback((product) => {
        const added = handleAddToWishlist(product);
        if (added) {
            toast.success(`${product.product_title} has been added to the wishlist.`);
        } else {
            toast.info(`${product.product_title} is already in the wishlist.`);
        }
    }, []);

    // Show loading message until product details are fetched
    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <Banner />
            {/* ToastContainer for displaying toast notifications */}
            <ToastContainer />
            <div className="card lg:card-side bg-base-100 shadow-xl mt-2">
                <figure>
                    {/* Display product image */}
                    <img className='w-full h-80 ml-4'
                        src={product.product_image}
                        alt={product.product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.product_title}</h2>
                    <div>
                        {/* Display product price, description, specifications, and availability */}
                        <p><b>Price:</b> ${product.price}</p>
                        <p><b>Description:</b> {product.description}</p>
                        <p>
                            <b>Specifications:</b>
                            {product.Specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </p>
                        <p><b>Availability:</b> {product.availability ? "In Stock" : "Out of Stock"}</p>
                        <p><b>Ratings:</b> {product.rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        {/* Buttons to add the product to cart and wishlist with toast notifications */}
                        <button onClick={() => handleAddToCartWithToast(product)} className="btn btn-primary">Add to Cart</button>
                        <button onClick={() => handleAddToWishlistWithToast(product)} className="btn btn-error">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;