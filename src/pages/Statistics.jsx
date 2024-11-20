import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer
} from 'recharts';

// The main component to render statistical data
const Statistics = () => {
    // State to hold fetched electronics data
    const [electronicsData, setElectronicsData] = useState([]);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to track any error that occurs during data fetching
    const [error, setError] = useState(null);

    // useEffect hook to fetch data from products.json on component mount
    useEffect(() => {
        fetch("../products.json")
            .then(response => {
                // Check if response is okay; if not, throw an error
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => {
                // Store electronics data and update loading state
                setElectronicsData(data.electronics);
                setLoading(false);
            })
            .catch(error => {
                // Handle any errors by setting error state
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Conditional rendering for loading and error states
    if (loading) {
        return <div className="text-center mt-10 text-lg text-gray-500">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-lg text-red-500">Error: {error}</div>;
    }

    // Prepare data for charts

    // 1. Calculate total number of products
    const totalProducts = electronicsData.length;

    // 2. Count the number of products in each category
    const categoriesCount = Object.entries(
        electronicsData.reduce((acc, product) => {
            acc[product.category] = (acc[product.category] || 0) + 1;
            return acc;
        }, {})
    ).map(([category, count]) => ({ category, count }));

    // 3. Determine product availability for the pie chart
    const availableProducts = electronicsData.filter(product => product.availability).length;
    const availabilityData = [
        { name: 'In Stock', value: availableProducts },
        { name: 'Out of Stock', value: totalProducts - availableProducts }
    ];

    // 4. Calculate average product rating
    const averageRating = (electronicsData.reduce((sum, product) => sum + product.rating, 0) / totalProducts).toFixed(2);

    return (
        <>
            <Banner />
            <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Gadget Heaven Statistics</h2>
                
                {/* Categories Bar Chart */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Product Categories</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={categoriesCount}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Availability Pie Chart */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Availability</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={availabilityData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {availabilityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#82ca9d' : '#ff6961'} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Average Rating */}
                <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Average Rating</h3>
                    <div className="text-5xl font-bold text-yellow-500">{averageRating}</div>
                    <div className="text-sm text-gray-500">out of 5</div>
                </div>
            </div>
        </>
    );
};

export default Statistics;