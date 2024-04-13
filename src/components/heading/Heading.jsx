import {Button} from '@mui/material';
import "./Heading.css";

const Heading = () => {
  return ( <div className="heading">
    <div className="heading-text">
      5 Crowns Score Sheet
    </div>

    <Button size="large" className="restart-game-button" variant="outlined">
      Restart Game
    </Button>

  </div> );
}

export default Heading;