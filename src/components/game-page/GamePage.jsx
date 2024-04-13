import { Button, Icon, IconButton } from "@mui/material";
import ScoreSheet from "../score-sheet/ScoreSheet";
import "./GamePage.css";
import RefreshIcon from '@mui/icons-material/Refresh';

const GamePage = ({setPlayers, players, setPage }) => {
  // Resets the game
  const resetGame = () => {
    // Adds a new player and deletes it to update the state
    setPlayers([ ...players, "player" ]);
    setPlayers(players.slice(0, players.length - 1));
  };

  return (
    <div className="game-page">
      <ScoreSheet players={players} />

      <div className="game-page-footer">
        <IconButton onClick={resetGame}>
          <RefreshIcon/>
        </IconButton>
        <Button variant="outlined" onClick={() => setPage(1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default GamePage;
