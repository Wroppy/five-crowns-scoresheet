import { Modal } from "@mui/material";
import "./AddScore.css";
import { useEffect } from "react";

const AddScore = ({ scores, open, setOpen, playerIndex, scoreIndex }) => {
  //
  useEffect(() => {}, [open]);

  console.log(scores);

  return (
    <Modal className="modal" open={open} onClose={() => setOpen(false)}>
      <div className="add-score-modal">
        <div className="score-heading">
          {scores.length > 0 && (
            <span>
              Add score for {scores[playerIndex]["name"]} on round{" "}
              {scoreIndex + 3}
            </span>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddScore;
