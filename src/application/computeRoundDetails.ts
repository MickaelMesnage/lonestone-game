import Action from '../domain/Action';
import { RoundDetails } from '../domain/RoundDetails';
import RoundResult from '../domain/RoundResult';

const randomComputerAction = (): Action =>
  [Action.CISEAU, Action.FEUILLE, Action.PIERRE][Math.floor(Math.random() * 3)];

const computeRoundResult = (
  userAction: Action,
  computerAction: Action
): RoundResult => {
  if (userAction === computerAction) {
    return RoundResult.DRAW;
  } else if (
    (userAction === Action.PIERRE && computerAction === Action.CISEAU) ||
    (userAction === Action.FEUILLE && computerAction === Action.PIERRE) ||
    (userAction === Action.CISEAU && computerAction === Action.FEUILLE)
  ) {
    return RoundResult.WIN;
  }
  return RoundResult.LOST;
};

const computeRoundDetails = (userAction: Action): RoundDetails => {
  const computerAction = randomComputerAction();

  return {
    userAction,
    computerAction,
    roundResult: computeRoundResult(userAction, computerAction),
  };
};

export default computeRoundDetails;