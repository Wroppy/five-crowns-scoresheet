import { Button, Icon, IconButton } from "@mui/material";
import ScoreSheet from "../score-sheet/ScoreSheet";
import "./GamePage.css";
import RefreshIcon from '@mui/icons-material/Refresh';

const GamePage = ({ players, setPage }) => {
  return (
    <div className="game-page">
      <ScoreSheet players={players} />

      <div className="game-page-footer">
        <IconButton>
          <Icon><RefreshIcon/></Icon>
        </IconButton>
        <Button variant="outlined" onClick={() => setPage(1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default GamePage;
