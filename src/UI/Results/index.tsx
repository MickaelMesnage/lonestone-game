import { FC } from 'react';
import { RoundDetails } from '../../domain/RoundDetails';
import RoundResult from '../../domain/RoundResult';
import './style.css';

type ResultsProps = {
  listOfRoundDetails: Array<RoundDetails>
};

const Results: FC<ResultsProps> = ({ listOfRoundDetails }) => (
    <div className='card results'>
      <h2>Historique des mains</h2>
      <ul>
        {listOfRoundDetails.map(({ userAction, computerAction, roundResult}) => (
          <li className={`${roundResult === RoundResult.WIN && 'win'}`}>
            <span>Joueur: {userAction} - Ordinateur: {computerAction}</span>
            {roundResult === RoundResult.WIN && <span> | + 1pt</span>}
          </li>
        ))}
      </ul>
    </div>
);

export default Results;
