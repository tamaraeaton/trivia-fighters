import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import DefeatAvatar from '../../assets/images/fox-knight_defeated.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import Button from 'components/Button/Button';
import { useGameUI } from '../../store/game/game.hooks';
import { useOpponent } from 'store/players/opponent/opponent.hooks';
import './Defeat.scss';

const Defeat: FunctionComponent = () => {
  const navigate = useNavigate();
  const { setResetGame } = useGameUI();
  const { opponentName } = useOpponent();

  const handleClick = () => {
    setResetGame();
    navigate('/');
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">GAME OVER</h1>
      <h2 className="pagePreface">You lost to {opponentName}!</h2>
      <Button size="s" onClick={handleClick}>
        Play Again
      </Button>
      <div className="victoryDefeatAvatarContainer">
        <img
          data-testid="defeatAvatar"
          id="defeatAvatar"
          src={DefeatAvatar}
          alt="defeated"
        />
        <img id="shadowBase" src={ShadowBase} alt="shadowBase" />
      </div>
    </div>
  );
};

export default Defeat;
