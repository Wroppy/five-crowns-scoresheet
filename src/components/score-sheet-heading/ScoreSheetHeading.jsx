import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import "./ScoreSheetHeading.css";

const ScoreSheetHeading = () => {
  return (<div className="score-sheet-heading">
    <TextField label="Add player name" variant="outlined" size="small" className="add-player-field"/>
    <Button variant="outlined">
      Add Player
    </Button>

  </div> );
}
 
export default ScoreSheetHeading;