import React, { useState } from "react";
import "./styles.css";
import getThemes from "../../data/index.jsx";

function HomeScreen({ onStartGame }) {
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(""); // Nenhum tema por padrão
  const themes = getThemes();

  const handleAddPlayer = () => {
    const trimmedName = playerName.trim();
    if (!trimmedName) return;
    setPlayers((prevPlayers) => [...prevPlayers, trimmedName]);
    setPlayerName("");
  };

  // Adiciona o jogador ao pressionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddPlayer();
    }
  };

  const handleStartGame = () => {
    if (players.length === 0) return;

    if (!selectedTheme) {
      const confirmStart = window.confirm(
        "Você não escolheu um tema. Deseja continuar? Um tema será selecionado aleatoriamente."
      );
      if (!confirmStart) return;

      const randomTheme = themes[Math.floor(Math.random() * themes.length)].key;
      setSelectedTheme(randomTheme);
    }

    onStartGame(players, selectedTheme || themes[Math.floor(Math.random() * themes.length)].key);
  };

  return (
    <div className="home-screen">
      <h1>Bem-vindo ao <span className="highlight">Timeline Shuffle!</span></h1>
      <div className="player-input">
        <input
          type="text"
          placeholder="Digite o nome do jogador"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={handleAddPlayer}>Adicionar Jogador</button>
      </div>

      <div className="player-list">
        <h2>Jogadores Adicionados:</h2>
        {players.length === 0 ? (
          <p>Nenhum jogador adicionado.</p>
        ) : (
          <ul>
            {players.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="theme-selection">
        <label htmlFor="theme">Escolha um tema:</label>
        <select
          id="theme"
          value={selectedTheme}
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          <option value="">Temas</option>
          {themes.map((theme) => (
            <option key={theme.key} value={theme.key}>
              {theme.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="start-button"
        onClick={handleStartGame}
        disabled={players.length === 0}
      >
        Iniciar Jogo
      </button>
    </div>
  );
}

export default HomeScreen;
