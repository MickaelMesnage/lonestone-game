import { FC } from 'react';
import { RoundDetails } from '../../../domain/RoundDetails';

type RoundFinishedProps = {
  roundDetails: RoundDetails;
  onPlayAgainButtonClick: () => void;
};

const RoundFinished: FC<RoundFinishedProps> = ({
  roundDetails,
  onPlayAgainButtonClick,
}) => {
  const { roundResult, userAction, computerAction } = roundDetails;

  return (
    <div className='spaced-column'>
      <h2>{roundResult}</h2>
      <p>Tu as joué "{userAction}" alors que l'ordinateur a joué "{computerAction}"</p>
      <button onClick={onPlayAgainButtonClick}>Rejouer</button>
    </div>
  );
};

export default RoundFinished;
