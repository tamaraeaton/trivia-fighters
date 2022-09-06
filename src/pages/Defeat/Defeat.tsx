import { FunctionComponent, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import DefeatAvatar from '../../assets/images/fox-knight_defeated.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import Button from 'components/Button/Button';
import { useGameActions, useGameSelectors } from '../../store/game/game.hooks';
import './Defeat.scss';

const Defeat: FunctionComponent<PropsWithChildren> = () => {
  const { setResetGame } = useGameActions();
  const { difficulty } = useGameSelectors();
  const navigate = useNavigate();

  const opponentNamePerDifficulty = () => {
    let name = 'Wizard Pig';
    let testID = 'wizardPig';

    switch (difficulty) {
      case 'medium':
        name = 'Barbarian Bunny';
        testID = 'barbarianBunny';
        break;
      case 'seth':
        name = 'Dragon Seth';
        testID = 'dragonSeth';
        break;
    }
    return name;
  };

  const handleClick = () => {
    setResetGame();
    navigate('/');
  };
  return (
    <div className="defeatContainer">
      <h1 id="gameOver">GAME OVER</h1>
      <h2 id="youLost">You lost to {opponentNamePerDifficulty()}!</h2>
      <Button size="s" selected={false} disabled={false} onClick={handleClick}>
        Play Again
      </Button>
      <div id="avatarContainer">
        <img id="avatar" src={DefeatAvatar} alt="defeated" />
        <img id="shadowBase" src={ShadowBase} alt="shadowBase" />
      </div>
    </div>
  );
};

export default Defeat;
