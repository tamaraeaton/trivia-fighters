import { FunctionComponent, PropsWithChildren } from 'react';
// import { useGameRound } from 'store/game/game.hooks';
import './Round.scss';

interface RoundPropTypes {
  currentRound: number;
}

const Round: FunctionComponent<PropsWithChildren<RoundPropTypes>> = ({
  currentRound,
}) => {
  // const [currentRound] = useGameRound();
  return (
    <h1 data-testid="round" className="roundCountDisplay">
      ROUND {currentRound}
    </h1>
  );
};

export default Round;
