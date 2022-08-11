import Button from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { difficultySelector } from 'store/game/game.selectors';
import { useAppSelector } from 'store/hooks';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const difficulty = useAppSelector(difficultySelector);

  return (
    <div>
      <h1 className="headline1" data-testid="headline">
        TRIVIA FIGHTERS
      </h1>
      <Button
        classType="btn--easy"
        testID="easy"
        onClick={() => navigate('/game', { state: { difficulty: 'easy' } })}
      >
        Easy
      </Button>
      <Button
        classType="btn--medium"
        testID="medium"
        onClick={() => navigate('/game', { state: { difficulty: 'medium' } })}
      >
        Medium
      </Button>
      <Button
        classType="btn--seth"
        testID="seth"
        onClick={() => navigate('/game', { state:{ difficulty('seth') } })}
      >
        Seth
      </Button>
    </div>
  );
};

export default Home;
