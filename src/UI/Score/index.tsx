import { FC } from 'react';
import { RoundDetails } from '../../domain/RoundDetails';
import RoundResult from '../../domain/RoundResult';

type ScoreProps = {
  listOfRoundDetails: Array<RoundDetails>
};

const Score: FC<ScoreProps> = ({ listOfRoundDetails }) => (
  <h2>
    {`score: ${listOfRoundDetails.filter((r) => r.roundResult === RoundResult.WIN).length} / ${listOfRoundDetails.length}`}
  </h2>
);

export default Score;
