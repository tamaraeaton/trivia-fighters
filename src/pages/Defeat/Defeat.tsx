import { FunctionComponent, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import DefeatAvatar from '../../assets/images/fox-knight_defeated.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import Button from 'components/Button/Button';
import { useGameUI } from '../../store/game/game.hooks';
import { useOpponent } from 'store/opponent/opponent.hooks';
import './Defeat.scss';

const Defeat: FunctionComponent<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const { useGameActions } = useGameUI();
  const { setResetGame } = useGameActions();
  const { useOpponentDetails } = useOpponent();
  const { opponentName } = useOpponentDetails();

  const handleClick = () => {
    setResetGame();
    navigate('/');
  };

  return (
    <div className="defeatContainer">
      <h1 id="gameOver">GAME OVER</h1>
      <h2 id="youLost">You lost to {opponentName}!</h2>
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
