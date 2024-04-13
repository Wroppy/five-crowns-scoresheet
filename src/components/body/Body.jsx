import "./Body.css";
import PreGamePage from "../pre-game-page/PreGamePage";
import { useState } from "react";
import GamePage from "../game-page/GamePage";

const Body = () => {
  const [page, setPage] = useState(1);
  const [players, setPlayers] = useState([]); // [[player1, player2, player3, player4

  return (
    <div className="body">
      {page === 1 && <PreGamePage setPage={setPage} players={players} setPlayers={setPlayers} />}
      {page === 2 && <GamePage players={players} />}
    </div>
  );
};

export default Body;
