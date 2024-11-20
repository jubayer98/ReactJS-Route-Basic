import { Outlet } from "react-router-dom"; 
import Footer from "../components/Footer"; 
import Navbar from "../components/Navbar"; 

/**
 * MainLayout Component
 * 
 * This layout component structures the main application layout with a
 * navigation bar, dynamic content area for nested routes, and a footer.
 */
const MainLayout = () => {
    return (
        <div className="overflow-x-scroll"> {/* Enable horizontal scrolling if content overflows */}
            {/* Navbar */}
            <Navbar /> {/* Navbar component displayed at the top of the page */}

            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-288px)] w-11/12 mx-auto">
                <Outlet /> {/* Outlet for rendering nested routes dynamically */}
            </div>

            {/* Footer */}
            <Footer /> {/* Footer component displayed at the bottom of the page */}
        </div>
    );
};

export default MainLayout; // Exporting MainLayout component for use in other parts of the app