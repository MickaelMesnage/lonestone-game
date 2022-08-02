import React, { useState, FC } from 'react';
import { RoundDetails } from '../../domain/RoundDetails';
import RoundFinished from './RoundFinished';
import RoundInProgress from './RoundInProgress';

type GameProps = {
  onNewRoundDetails: (roundDetails: RoundDetails) => void;
};

const Game: FC<GameProps> = ({ onNewRoundDetails }) => {
  const [roundDetails, setRoundDetails] = useState<RoundDetails | null>();

  const onPlayAgainButtonClick = () => {
    setRoundDetails(null);
  };

  const onRoundFinished = (newDoundDetails: RoundDetails) => {
    setRoundDetails(newDoundDetails);
    onNewRoundDetails(newDoundDetails);
  }

  return (
    <div className="card" style={{height: "14rem"}}>
      {roundDetails ? (
        <RoundFinished
          roundDetails={roundDetails}
          onPlayAgainButtonClick={onPlayAgainButtonClick}
        />
      ) : (
        <RoundInProgress onRoundFinished={onRoundFinished} />
      )}
    </div>
  );
};

export default Game;
