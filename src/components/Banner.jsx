import { useLocation, useNavigate } from 'react-router-dom';

const Banner = () => {
    // Use the `useLocation` hook to get the current URL path
    const location = useLocation();
    // Use the `useNavigate` hook to programmatically navigate between routes
    const navigate = useNavigate();

    // Function to determine the banner content based on the current route
    const getBannerContent = () => {
        switch (location.pathname) {
            case '/':
                // Content for the home page banner
                return {
                    title: 'Discover the Latest Tech Gadgets for Every Need!',
                    subtitle: 'Your ultimate destination for innovative gadgets that make life easier, smarter, and more fun.',
                    buttons: [
                        { 
                            text: 'Product Statistics', 
                            className: 'btn rounded-full', 
                            onClick: () => navigate('/statistics') 
                        }
                    ],
                    heightClass: 'min-h-[40vh]'
                };
            case '/statistics':
                // Content for the statistics page banner
                return {
                    title: 'Detailed Statistics at Your Fingertips',
                    subtitle: 'Analyze trends and insights to make informed decisions.',
                    buttons: [],
                    heightClass: 'min-h-[40vh]'
                };
            case '/dashboard':
                // Content for the dashboard page banner
                return {
                    title: 'Welcome to Your Dashboard',
                    subtitle: 'Manage your preferences easily.',
                    buttons: [],
                    heightClass: 'min-h-[40vh]'
                };
            case '/contact':
                // Content for the contact page banner
                return {
                    title: 'Get in Touch with Us',
                    subtitle: 'We are here to assist you. Reach out for any inquiries.',
                    buttons: [],
                    heightClass: 'min-h-[40vh]'
                };
            default:
                // Check if the current path is for a product details page
                if (location.pathname.startsWith('/product-details/')) {
                    return {
                        title: 'Explore Product Details',
                        subtitle: 'Get detailed insights about your selected product.',
                        buttons: [
                            { 
                                text: 'Back to Shop', 
                                className: 'btn rounded-full', 
                                onClick: () => navigate('/') 
                            }
                        ],
                        heightClass: 'min-h-[40vh]'
                    };
                }
                
                // Fallback content for undefined or non-existent routes
                return {
                    title: 'Page Not Found',
                    subtitle: 'The page you are looking for does not exist.',
                    buttons: [],
                    heightClass: 'min-h-[50vh]'
                };
        }
    };

    // Destructure the content returned from `getBannerContent`
    const { title, subtitle, buttons, heightClass } = getBannerContent();

    return (
        // Banner container with background color and dynamic height class
        <div className={`hero bg-purple-500 ${heightClass} flex justify-center items-start`}>
            <div className="hero-content text-center text-white pt-10">
                <div className="max-w-full">
                    {/* Banner title */}
                    <h1 className="text-5xl font-bold">{title}</h1>
                    {/* Banner subtitle */}
                    <p className="py-6">{subtitle}</p>
                    {/* Buttons, if any, rendered dynamically based on content */}
                    <div className="flex gap-4 justify-center">
                        {buttons.map((button, index) => (
                            <button 
                                key={index} 
                                className={button.className} 
                                onClick={button.onClick}
                            >
                                {button.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;