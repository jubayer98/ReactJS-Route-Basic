const Newsletter = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-orange-200 via-gray-200 to-violet-200 rounded-3xl p-10 shadow-lg w-full max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Subscribe to our Newsletter</h2>
                    <p className="text-center text-gray-500 mb-8">Get the latest updates and news right in your inbox!</p>
                    <div className="flex justify-center">
                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full rounded-l-lg"
                            />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;