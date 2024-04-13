import ScoreSheet from "../score-sheet/ScoreSheet";
import "./GamePage.css";

const GamePage = ({players}) => {
  return <div className="game-page">
    <ScoreSheet players={players}/>
  </div>;
};

export default GamePage;
