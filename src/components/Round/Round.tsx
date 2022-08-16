import { FunctionComponent } from 'react';
import { useGameRound } from 'store/game/game.hooks';
import './Round.scss';

const Round: FunctionComponent = () => {
  const [currentRound] = useGameRound();
  return (
    <h1 data-testid="round" className="roundCountDisplay">
      ROUND {currentRound}
    </h1>
  );
};

export default Round;
