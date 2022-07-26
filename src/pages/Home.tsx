import { useGameRound } from 'store/game/game.hooks';
import Button from 'components/Button/Button';
import React from 'react';

const Home: React.FunctionComponent = () => {
  const [currentRound, { incrementRound }] = useGameRound();

  return (
    <div>
      <h1>Round: {currentRound}</h1>
      <Button onClick={incrementRound}>Increment Round</Button>
    </div>
  );
};

export default Home;
