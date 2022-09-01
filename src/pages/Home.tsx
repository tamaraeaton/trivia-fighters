import Button from 'components/Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameActions } from 'store/game/game.hooks';
import { useOpponentActions } from '../store/opponent/opponent.hooks';
import { useHeroActions } from '../store/hero/hero.hooks';
import { DifficultyType } from '../store/game/game.slice';
import './Home.scss';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { setDifficulty } = useGameActions();
  const { setOpponentsGameHealth, setOpponentAttackValue } =
    useOpponentActions();
  const { setHeroGameHealth } = useHeroActions();

  const handleClick = (difficultyStrength: DifficultyType) => {
    setDifficulty(difficultyStrength);
    setOpponentsGameHealth(difficultyStrength);
    setHeroGameHealth();
    navigate('game');
  };

  return (
    <div className="homePageContainer">
      <h1 className="headline1" data-testid="headline">
        TRIVIA FIGHTERS
      </h1>
      <Button
        classType="btn--easy"
        size="xxl"
        testID="easy"
        onClick={() => handleClick('easy')}
      >
        Easy
      </Button>
      <Button
        classType="btn--medium"
        size="xxl"
        testID="medium"
        onClick={() => handleClick('medium')}
      >
        Medium
      </Button>
      <Button
        classType="btn--seth"
        size="xxl"
        testID="seth"
        onClick={() => handleClick('seth')}
      >
        Seth
      </Button>
    </div>
  );
};

export default Home;
