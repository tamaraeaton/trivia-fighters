import Button from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { difficultySelector } from 'store/game/game.selectors';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { difficulty as difficultyAction } from '../store/game/game.slice';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const difficulty = useAppSelector(difficultySelector);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 className="headline1" data-testid="headline">
        TRIVIA FIGHTERS
      </h1>
      <Button
        classType="btn--easy"
        testID="easy"
        onClick={() => {
          dispatch(difficultyAction('easy'));
          navigate('game');
        }}
      >
        Easy
      </Button>
      <Button
        classType="btn--medium"
        testID="medium"
        onClick={() => {
          dispatch(difficultyAction('medium'));
          navigate('game');
        }}
      >
        Medium
      </Button>
      <Button
        classType="btn--seth"
        testID="seth"
        onClick={() => {
          dispatch(difficultyAction('seth'));
          navigate('game');
        }}
      >
        Seth
      </Button>
    </div>
  );
};

export default Home;
