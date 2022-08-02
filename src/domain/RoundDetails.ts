import Action from './Action';
import RoundResult from './RoundResult';

export type RoundDetails = {
  userAction: Action;
  computerAction: Action;
  roundResult: RoundResult;
};
