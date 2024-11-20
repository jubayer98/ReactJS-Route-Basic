import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ data, selectedCategory, onCategorySelect }) => {

    // Extract unique categories from the JSON data
    // The 'All Products' option is added as the first category
    const categories = ["All Products", ...new Set(data.electronics.map(item => item.category))];

    return (
        <div>
            {/* Container for categories with styling */}
            <div className="bg-base-100 shadow-lg p-4 rounded-lg">
                {/* Map over the categories to create a button for each one */}
                {categories.map((category, index) => (
                    <Link
                        // Dynamic button styling: selected category has a distinct style
                        className={`btn m-2 rounded-full flex flex-cols ${
                            selectedCategory === category ? "bg-purple-500 text-white" : ""
                        }`}
                        key={index}
                        // Calls the onCategorySelect function with the selected category
                        onClick={() => onCategorySelect(category)}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Prop validation to ensure the component receives the correct props
Categories.propTypes = {
    // 'data' should be an object containing an array 'electronics'
    data: PropTypes.shape({
        electronics: PropTypes.arrayOf(
            PropTypes.shape({
                category: PropTypes.string.isRequired // Each item should have a 'category' string
            })
        ).isRequired
    }).isRequired,
    // 'selectedCategory' is a string representing the active category
    selectedCategory: PropTypes.string.isRequired,
    // 'onCategorySelect' is a function to handle category selection
    onCategorySelect: PropTypes.func.isRequired
};

export default Categories;