import PropTypes from 'prop-types';

const SelectedPlayers = ({ player, onRemovePlayer }) => {
    return (
        <div className="border-2 p-4 flex justify-between items-center mb-2">
            <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                    <img className="w-full h-full object-cover" src={player.img} alt={player.name} />
                </div>
                <div>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <p><span className="font-medium">Batting Position:</span> {player.battingPosition}</p>
                </div>
            </div>
            <div>
                <button onClick={() => onRemovePlayer(player.id)} className="text-red-500">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayers;

// Prop validation
SelectedPlayers.propTypes = {
    onRemovePlayer: PropTypes.func.isRequired,
    player: PropTypes.arrayOf(PropTypes.string).isRequired
};
