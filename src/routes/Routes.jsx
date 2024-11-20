import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"; 
import Statistics from "../pages/Statistics"; 
import Dashboard from "../pages/Dashboard"; 
import Contact from "../pages/Contact"; 
import ErrorPage from "../pages/ErrorPage"; 
import Categories from "../components/Categories"; 
import PageTitle from "../components/PageTitle"; 

import { loader as productLoader } from "../pages/Home"; 
import ProductDetails from "../pages/ProductDetails"; 

// Define routes using createBrowserRouter
const routes = createBrowserRouter([
    {
        path: '/', // Root path for the main layout
        element: <MainLayout />, // MainLayout component serves as the base layout for all child routes
        children: [
            {
                path: '/', // Route for Home page
                element: (
                    <PageTitle title="Home"> {/* Set the page title to "Home" */}
                        <Home /> {/* Render Home component */}
                    </PageTitle>
                ),
                loader: productLoader // Loader function to fetch data for Home page
            },
            {
                path: '/category/:category', // Dynamic route for category pages
                element: (
                    <PageTitle title="Categories"> {/* Set the page title to "Categories" */}
                        <Categories /> {/* Render Categories component */}
                    </PageTitle>
                ),
            },
            {
                path: '/product-details/:product_id', // Dynamic route for individual product details
                element: (
                    <PageTitle title="Product Details"> {/* Set the page title to "Product Details" */}
                        <ProductDetails /> {/* Render ProductDetails component */}
                    </PageTitle>
                ),
            },
            {
                path: '/statistics', // Route for Statistics page
                element: (
                    <PageTitle title="Statistics"> {/* Set the page title to "Statistics" */}
                        <Statistics /> {/* Render Statistics component */}
                    </PageTitle>
                ),
            },
            {
                path: '/dashboard', // Route for Dashboard page
                element: (
                    <PageTitle title="Dashboard"> {/* Set the page title to "Dashboard" */}
                        <Dashboard /> {/* Render Dashboard component */}
                    </PageTitle>
                ),
            },
            {
                path: '/contact', // Route for Contact page
                element: (
                    <PageTitle title="Contact"> {/* Set the page title to "Contact" */}
                        <Contact /> {/* Render Contact component */}
                    </PageTitle>
                ),
            },
            {
                path: '*', // Catch-all route for 404 errors
                element: (
                    <PageTitle title="404 Not Found"> {/* Set the page title to "404 Not Found" */}
                        <ErrorPage /> {/* Render ErrorPage component */}
                    </PageTitle>
                ),
            },
        ]
    },
])

export default routes;
