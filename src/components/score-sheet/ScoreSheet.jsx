import { useState, useEffect } from "react";
import "./ScoreSheet.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ScoreSheet = ({ players }) => {
  const getScoreSheetModel = () => {
    let model = []
    // A player by 13 rounds score sheet
    for (let player of players) {
      model.push({ name: player, scores: Array(13).fill(2) });
    }

    setScore(model);
  };

  useEffect(() => {
    getScoreSheetModel();
  }, [players]);

  const [score, setScore] = useState([]);

  // Table layout
  return <div className="score-sheet">
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Round 1</TableCell>
            <TableCell align="right">Round 2</TableCell>
            <TableCell align="right">Round 3</TableCell>
            <TableCell align="right">Round 4</TableCell>
            <TableCell align="right">Round 5</TableCell>
            <TableCell align="right">Round 6</TableCell>
            <TableCell align="right">Round 7</TableCell>
            <TableCell align="right">Round 8</TableCell>
            <TableCell align="right">Round 9</TableCell>
            <TableCell align="right">Round 10</TableCell>
            <TableCell align="right">Round 11</TableCell>
            <TableCell align="right">Round 12</TableCell>
            <TableCell align="right">Round 13</TableCell>
            <TableCell align="right">Total</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {score.map((player, playerIndex) => (
            <TableRow key={playerIndex}>
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              {player.scores.map((score, index) => (
                <TableCell key={index} align="right">{score}</TableCell>
              ))}
            <TableCell>
              {player.scores.reduce((acc, score) => acc + score, 0)}
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};

export default ScoreSheet;
