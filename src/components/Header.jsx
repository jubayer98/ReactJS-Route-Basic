import PropTypes from 'prop-types';

const Header = ({coinCount}) => {
    return (
        <div className="sticky top-0 z-10">
            <div className="navbar bg-base-100 flex justify-between mb-4">
                <div className="navbar-start w-[80px] h-[80px]">
                    <img src="/logo.webp" alt="website logo" />
                </div>
                <div>
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-gray-500"><a>Home</a></li>
                        <li className="text-gray-500"><a>Fixture</a></li>
                        <li className="text-gray-500"><a>Teams</a></li>
                        <li className="text-gray-500"><a>Schedules</a></li>
                        <li className="font-bold border-2 rounded-xl"><a>{coinCount} Coin <i className="fa-solid fa-star text-orange-400"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;

// Prop validation
Header.propTypes = {
    coinCount: PropTypes.number.isRequired
};