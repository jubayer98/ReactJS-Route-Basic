import PropTypes from 'prop-types';

import { useEffect, useState } from "react";

const AvailablePlayers = ({onChoosePlayer}) => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch("/players.json")
        .then(response => response.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-3 gap-12">
                {players.map(player => (
                    <div key={player.id} className="card bg-base-100 w-full shadow-xl">
                    <figure>
                    <img className="w-full object-cover h-80"
                        src={player.img}
                        alt="players information" />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title"><i className="fa-solid fa-user"></i> {player.name}</h2>
                    <div className="flex justify-between">
                        <p className="text-gray-500"><i className="fa-regular fa-flag"></i> {player.country}</p>
                        <span className="text-white px-2 rounded-lg bg-gray-500 inline-block">{player.profile}</span>
                    </div>
                    <hr />
                    <p className="font-bold">Rating</p>
                    <p>Batting Position: <span className="text-gray-500">{player.battingPosition}</span></p>
                    <div className="card-actions justify-end">
                        <p>Price: <span className="text-gray-500">$ {player.price}</span></p>
                        <button onClick={() => onChoosePlayer(player)} className="btn btn-warning">Choose Player</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default AvailablePlayers;

// Prop validation
AvailablePlayers.propTypes = {
    onChoosePlayer: PropTypes.func.isRequired
};
