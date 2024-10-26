const Footer = () => {
    return (
        <div>
            <footer className="footer bg-slate-900 text-base-content p-10 flex flex-col items-center gap-10 pt-20">
                <img className="w-[80px] h-[80px]" src="/logo.webp" alt="website logo" />
                <div className="flex flex-col text-gray-200 lg:flex-row w-full justify-between items-start gap-10 container mx-auto px-4">
                    <nav className="flex-1">
                        <h6 className="footer-title">Services</h6>
                        <p className="w-80">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav className="flex-1">
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover block">Home</a>
                        <a className="link link-hover block">Services</a>
                        <a className="link link-hover block">About</a>
                        <a className="link link-hover block">Contact</a>
                    </nav>
                    <form className="flex-1">
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-gray-200">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="w-full border-t border-gray-200"></div>
                <p className="text-gray-200">2024 | Cricket Manager | All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;