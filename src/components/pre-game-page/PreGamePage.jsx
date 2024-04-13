import { IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./PreGamePage.css";
import { useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

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

  const deletePlayer = (index) => {
    const newPlayers = players.filter((player, i) => i !== index);
    setPlayers(newPlayers);
  };

  const startGame = () => {
    localStorage.setItem("players", JSON.stringify([...players, playerName]));
  }

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
        <Button variant="outlined" type="submit">
          Add Player
        </Button>
      </form>
      <div className="pre-game-page-body">
        <div className="player-list-viewer">
          <h2>Players</h2>
          {players.length === 0 && <p>No players added yet</p>}
          <div className="player-list">
            {players.map((player, index) => (
              <div className="player-card" key={index}>
                <IconButton onClick={() => deletePlayer(index)}>
                  <DeleteOutlinedIcon/>
                </IconButton>
                <span>{player}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pre-game-page-footer">
        <Button onClick={startGame} className="start-game-button" variant="outlined">
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default PreGamePage;
