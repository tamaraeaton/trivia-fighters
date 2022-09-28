import Button from 'components/Button/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameUI } from 'store/game/game.hooks';
import { useOpponent } from '../store/players/opponent/opponent.hooks';
import { DifficultyType } from '../store/game/game.slice';
import './Home.scss';

const helpMessage =
  'Seth has more health, so it will take longer to have victory over him.  Easy will not take as long.';

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { setDifficulty } = useGameUI();

  const { setOpponentsGameHealth } = useOpponent();
  const [showHelpBubble, setShowHelpBubble] = useState(false);

  const handleClick = (difficultyStrength: DifficultyType) => {
    setDifficulty(difficultyStrength);
    setOpponentsGameHealth(difficultyStrength);
    navigate('game');
  };

  return (
    <div className="homePageContainerWrapper">
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
      <div className="helpContainerHome">
        <div className="helpButtonHome">
          <Button
            size="xs"
            onClick={() => setShowHelpBubble((prev) => !prev)}
            selected={showHelpBubble}
          >
            ?
          </Button>
          {showHelpBubble && (
            <div className="helpBubbleHome">
              <p>{helpMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
