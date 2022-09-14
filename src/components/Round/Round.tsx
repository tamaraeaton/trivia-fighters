import { FunctionComponent, PropsWithChildren } from 'react';
import './Round.scss';

interface RoundPropTypes {
  currentRound: number;
}

const Round: FunctionComponent<PropsWithChildren<RoundPropTypes>> = ({
  currentRound,
}) => {
  return (
    <h1 data-testid="round" className="roundCountDisplay">
      ROUND {currentRound}
    </h1>
  );
};

export default Round;
