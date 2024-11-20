import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Products from "../components/Products";

export const loader = async () => {
    const response = await fetch('../products.json');
    return response.json();
};

const Home = () => {
    const data = useLoaderData();

    const [selectedCategory, setSelectedCategory] = useState("All Products");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };


    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* Image */}
            <div className="bg-poster m-2 bg-cover rounded-lg bg-center w-9/12 h-96 flex justify-center items-center mx-auto">

            </div>
            {/* Dynamic Products Categories */}
            <div className="flex flex-col items-center mt-4">
                <h2 className="text-2xl font-bold">Explore Cutting Edge Gadgets</h2>
                <div className="flex justify-between w-full mt-2 gap-4">
                    <div className="w-1/5 flex items-start justify-center">
                        <Categories data={data} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
                    </div>
                    <div className="w-4/5 flex items-center justify-center">
                        <Products data={data} selectedCategory={selectedCategory} />
                    </div>
                </div>
            </div>
            {/* Dynamic Products Show */}
        </div>
    );
};

export default Home;