import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./PreGamePage.css";

const PreGamePage = () => {
  
  return (
    <div className="pre-game-page">
      <div className="pre-game-page-heading">
        <TextField
          type="text"
          placeholder="Add player name"
          label="Add player name"
          variant="outlined"
          size="small"
          className="add-player-field"
        />
        <Button variant="outlined">Add Player</Button>
      </div>
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
        <Button className="start-game-button" variant="outlined">Start Game</Button>
      </div>
    </div>
  );
};

export default PreGamePage;
