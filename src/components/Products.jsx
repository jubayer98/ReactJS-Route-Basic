import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Products = ({ data, selectedCategory }) => {
    // Filter products based on selected category
    const filteredProducts = selectedCategory === "All Products"
        ? data.electronics // Show all electronics if "All Products" is selected
        : data.electronics.filter(product => product.category === selectedCategory); // Filter by category otherwise

    return (
        // Grid container for product cards
        <div className="grid md:grid-cols-3 grid-cols-2 gap-12 m-2">
            {filteredProducts.map((product, index) => (
                // Card for each product
                <div className="card bg-base-100 w-full shadow-xl" key={index}>
                    <figure>
                        <img 
                            className="w-full object-cover h-50"
                            src={product.product_image} // Product image
                            alt={product.product_title} // Alt text with product title
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.product_title}</h2> {/* Product title */}
                        <p>Price: ${product.price}</p> {/* Product price */}
                        <div className="card-actions justify-end">
                            {/* Link to product details page */}
                            <Link to={`/product-details/${product.product_id}`} className="btn btn-primary">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Prop validation for Products component
Products.propTypes = {
    data: PropTypes.shape({
        electronics: PropTypes.arrayOf(
            PropTypes.shape({
                product_id: PropTypes.string.isRequired, // Product ID as a required string
                product_image: PropTypes.string.isRequired, // Product image URL as a required string
                product_title: PropTypes.string.isRequired, // Product title as a required string
                price: PropTypes.number.isRequired, // Product price as a required number
                category: PropTypes.string.isRequired // Category as a required string
            })
        ).isRequired
    }).isRequired, // The 'data' prop must include an 'electronics' array, required in 'data'
    selectedCategory: PropTypes.string.isRequired // 'selectedCategory' must be a string and is required
};

export default Products; // Exporting Products component for use in other parts of the app