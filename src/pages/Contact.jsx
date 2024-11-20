import Banner from "../components/Banner";

const Contact = () => {
    return (
        <div>
            <Banner /> {/* Displaying the Banner component at the top of the page */}
            
            {/* Contact form container with styling for max width, margin, padding, background, shadow, and rounded corners */}
            <div className="max-w-full mt-2 mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2> {/* Contact form title */}

                <form className="form-control space-y-4"> {/* Form with spaced fields */}
                    {/* Full Name Field */}
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="input input-bordered w-full" // Styled input field for full name
                    />

                    {/* Email Field */}
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full" // Styled input field for email
                    />

                    {/* Subject Field */}
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter the subject"
                        className="input input-bordered w-full" // Styled input field for subject
                    />

                    {/* Message Field */}
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea
                        placeholder="Enter your message"
                        className="textarea textarea-bordered w-full" // Styled textarea for message
                        rows="4"
                    ></textarea>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;