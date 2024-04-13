import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./PreGamePage.css";
import { useState } from "react";

const PreGamePage = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const addPlayer = (e) => {
    e.preventDefault();
    // Checks if the player name is empty after trimming the spaces
    if (!playerName.trim()) {
      setPlayerName(playerName.trim());
      return;
    }
    setPlayers([...players, playerName]);
    setPlayerName("");
  };

  return (
    <div className="pre-game-page">
      <form className="pre-game-page-heading" onSubmit={addPlayer}>
          <TextField
            type="text"
            placeholder="Add player name"
            label="Add player name"
            variant="outlined"
            size="small"
            className="add-player-field"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <Button variant="outlined" type="submit">Add Player</Button>
      </form>
      <div className="pre-game-page-body">
        <div className="player-list">
          <h2>Players</h2>
          <ul>
            <li>Player 1</li>
            <li>Player 2</li>
            <li>Player 3</li>
          </ul>
        </div>
      </div>
      <div className="pre-game-page-footer">
        <Button className="start-game-button" variant="outlined">
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default PreGamePage;
