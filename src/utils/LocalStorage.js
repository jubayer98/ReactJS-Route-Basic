// Function to add a product to the shopping cart
export const handleAddToCart = (product) => {
    // Retrieve the current cart from localStorage, or initialize an empty array if it doesn't exist
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product already exists in the cart by matching the product_id
    const existingProduct = cart.find(item => item.product_id === product.product_id);

    if (existingProduct) {
        // If the product is already in the cart, return false to indicate it wasn't added again
        return false;
    } else {
        // If the product is new, add it to the cart with an initial quantity of 1
        cart.push(product);
        
        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Return true to indicate the product was successfully added to the cart
        return true;
    }
};

// Function to add a product to the wishlist
export const handleAddToWishlist = (product) => {
    // Retrieve the current wishlist from localStorage, or initialize an empty array if it doesn't exist
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if the product already exists in the wishlist by matching the product_id
    const existingProduct = wishlist.find(item => item.product_id === product.product_id);

    if (existingProduct) {
        // If the product is already in the wishlist, return false to indicate it wasn't added again
        return false;
    } else {
        // If the product is new, add it to the wishlist
        wishlist.push(product);
        
        // Save the updated wishlist back to localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        // Return true to indicate the product was successfully added to the wishlist
        return true;
    }
};
