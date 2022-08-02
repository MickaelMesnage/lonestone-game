import { FC } from 'react';
import computeRoundDetails from '../../../application/computeRoundDetails';
import Action from '../../../domain/Action';
import { RoundDetails } from '../../../domain/RoundDetails';

type RoundInProgressProps = {
  onRoundFinished: (roundDetails: RoundDetails) => void;
};

const RoundInProgress: FC<RoundInProgressProps> = ({ onRoundFinished }) => {
  const onUserAction = (userAction: Action): void => {
    onRoundFinished(computeRoundDetails(userAction));
  };

  return (
    <div className='spaced-column'>
      <h2>Selectionne une action</h2>
      {[Action.PIERRE, Action.FEUILLE, Action.CISEAU].map((item) => (
        <button key={item} onClick={() => onUserAction(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default RoundInProgress;
