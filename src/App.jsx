import React, { useState } from "react";
import "./App.css";
import Game from "./screens/game/index";
import HomeScreen from "./screens/home/index"; // Certifique-se de que o caminho está correto

function App() {
  const [players, setPlayers] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("art"); // Tema padrão

  const handleStartGame = (playersList, theme) => {
    setPlayers(playersList);
    setSelectedTheme(theme);
  };

  const resetAppState = () => {
    setPlayers(null);
    setSelectedTheme("");
  };
  

  return (
    <div>
      {players ? (
        <Game players={players} selectedTheme={selectedTheme} onRestartGame={resetAppState} />
      ) : (
        <HomeScreen onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
