import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import ToggleButtons from "./components/ToggleButtons/ToggleButtons";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  //available/selected player toggle state
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  });

  //coin and selected players state
  const [coinCount, setCoinCount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // handle available/selected player toggle button
  const handleIsActiveState = (status) => {
    setIsActive({
      available: status === "available",
      status: status
    });
  };

  //claim credit/coin information
  const claimFreeCredit = () => {
    setCoinCount(prevCount => {
      if (prevCount >= 10000000) {
        toast.error("You cannot add anymore!");
        return prevCount;
      } else {
        const newCount = prevCount + 5000000;
        toast.success("Free credit added!");
        return newCount > 10000000 ? 10000000 : newCount;
      }
    });
  };

  //add player from the available state to selected player state
  const addPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can only select a maximum of 6 players.");
    } else if (selectedPlayers.some((p) => p.id === player.id)) {
      toast.error(`${player.name} is already in your selection.`);
    } else if (coinCount < player.price) {
      toast.error(`You do not have enough coins to select ${player.name}.`);
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setCoinCount((prevCount) => prevCount - player.price);
      toast.success(`${player.name} added to your selection!`);
    }
  };

  //remove player from the selected player state
  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    setCoinCount((prevCount) => prevCount + player.price);
    toast.success(`${player.name} removed from your selection!`);
  };

  // showing available players when Add More Players button from selected player state
  const showAvailablePlayers = () => {
    handleIsActiveState("available");
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto px-4">
        <Header coinCount={coinCount} />
        <Banner onClaimCredit={claimFreeCredit} />
        <ToggleButtons 
          isActive={isActive} 
          handleIsActiveState={handleIsActiveState} 
          selectedCount={selectedPlayers.length}
        />
        
        <div className="mb-[200px]">
          {isActive.available ? (
            <AvailablePlayers onChoosePlayer={addPlayer} />
          ) : (
            <div>
              {selectedPlayers.length > 0 ? (
                <>
                  {selectedPlayers.map((player) => (
                    <SelectedPlayers key={player.id} player={player} onRemovePlayer={() => removePlayer(player)} />
                  ))}
                  {/* Add More Players button */}
                  <button 
                    onClick={showAvailablePlayers} 
                    className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                  >
                    Add More Players
                  </button>
                </>
              ) : (
                <p>No players selected yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <Footer />
        <div className="absolute top-[-180px] left-1/2 transform -translate-x-1/2">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default App;
