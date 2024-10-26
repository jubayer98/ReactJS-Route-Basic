import PropTypes from 'prop-types';

const ToggleButtons = ({ isActive, handleIsActiveState, selectedCount }) => {
    return (
        <div className="flex justify-between items-center mb-5">
            <div className="flex justify-between gap-5">
                {isActive.available && (
                    <h3 className="text-xl font-semibold">Available Players</h3>
                )}
                {!isActive.available && (
                    <h3 className="text-xl font-semibold">
                        Selected Players ({selectedCount}/6)
                    </h3>
                )}
            </div>
            <div className="flex gap-5 mt-4">
                <button
                    onClick={() => handleIsActiveState("available")}
                    className={`${isActive.available ? "btn btn-primary" : "btn"}`}
                >
                    Available
                </button>
                <button
                    onClick={() => handleIsActiveState("selected")}
                    className={`${!isActive.available ? "btn btn-primary" : "btn"}`}
                >
                    Selected ({selectedCount})
                </button>
            </div>
        </div>
    );
};

export default ToggleButtons;

// Prop validation
ToggleButtons.propTypes = {
    isActive: PropTypes.shape({
        available: PropTypes.bool.isRequired,
        status: PropTypes.oneOf(['available', 'selected']).isRequired,
    }).isRequired,
    handleIsActiveState: PropTypes.func.isRequired,
    selectedCount: PropTypes.number.isRequired,
};
