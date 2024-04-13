import { Button, Icon, IconButton, Toolbar, Tooltip } from "@mui/material";
import ScoreSheet from "../score-sheet/ScoreSheet";
import "./GamePage.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const GamePage = ({ setPlayers, players, setPage }) => {

  const [view, setView] = useState(false);

  // Resets the game
  const resetGame = () => {
    // Adds a new player and deletes it to update the state
    setPlayers([...players, "player"]);
    setPlayers(players.slice(0, players.length - 1));
  };

  return (
    <div className="game-page">
      <ScoreSheet players={players} view={view}/>

      <div className="game-page-footer">
        <div>
          <IconButton onClick={resetGame}>
            <RefreshIcon />
          </IconButton>
          <Tooltip title={view ? "Show Score": "Hide Score"} placement="top">
          <IconButton onClick={() => setView(!view)}>
            {view ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
          </Tooltip>
        </div>
        <Button variant="outlined" onClick={() => setPage(1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default GamePage;
