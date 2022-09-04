import { FunctionComponent, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import DefeatAvatar from '../../assets/images/fox-knight_defeated.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import Button from 'components/Button/Button';
import { useGameActions } from '../../store/game/game.hooks';
import './Defeat.scss';

interface DefeatPropsType {
  opponentName: string;
}
const Defeat: FunctionComponent<PropsWithChildren<DefeatPropsType>> = ({
  opponentName,
}) => {
  const { setResetGame } = useGameActions();
  const navigate = useNavigate();

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
