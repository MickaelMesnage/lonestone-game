import React, { useState } from 'react';
import './App.css';
import { RoundDetails } from './domain/RoundDetails';
import Game from './UI/Game';
import Results from './UI/Results';
import Score from './UI/Score';

const App = () => {
  const [listOfRoundDetails, setListOfRoundDetails] = useState<
    Array<RoundDetails>
  >([]);

  const onNewRoundDetails = (newRoundDetails: RoundDetails) => {
    setListOfRoundDetails([...listOfRoundDetails, newRoundDetails]);
  };

  return (
    <div className="wrapper">
      <div className="game-wrapper">
        <h1>Bienvenue dans le jeu Pierre - Feuille - Ciseau</h1>
        <Score listOfRoundDetails={listOfRoundDetails} />
        <Game onNewRoundDetails={onNewRoundDetails} />
      </div>
      <div className="results-wrapper">
        <Results listOfRoundDetails={listOfRoundDetails} />
      </div>
    </div>
  );
};

export default App;
