import PropTypes from 'prop-types';

const Banner = ({onClaimCredit}) => {
    return (
        <div>
            <div
                className="relative bg-cover bg-no-repeat rounded-3xl w-full h-[25rem] mb-10 pt-12"
                style={{
                    backgroundImage: "url(/banner.webp)",
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl"></div>
                <div className="relative flex items-center justify-center h-full text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold text-orange-300">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 text-orange-100">Beyond Boundaries; Beyond Limit!</p>
                        <button onClick={onClaimCredit} className="btn btn-primary">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// Prop validation
Banner.propTypes = {
    onClaimCredit: PropTypes.func.isRequired
};