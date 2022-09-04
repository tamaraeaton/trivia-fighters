import { FunctionComponent, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import VictoryAvatar from '../../assets/images/fox-knight_victory.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import ShadowGradient from '../../assets/images/shadow-gradient.svg';
import Button from 'components/Button/Button';
import { useGameActions } from '../../store/game/game.hooks';
import './Victory.scss';

interface VictoryPropsType {
  opponentName: string;
}

const Victory: FunctionComponent<PropsWithChildren<VictoryPropsType>> = ({
  opponentName,
}) => {
  const { setResetGame } = useGameActions();
  const navigate = useNavigate();

  const handleClick = () => {
    setResetGame();
    navigate('/');
  };

  return (
    <div className="victoryContainer">
      <h1 id="victory">VICTORY</h1>
      <h2 id="youBeat">You beat the {opponentName}</h2>
      <Button size="s" selected={false} disabled={false} onClick={handleClick}>
        Play Again
      </Button>
      <div id="avatarContainer">
        <img id="shadowGradient" src={ShadowGradient} alt="shadowGradient" />
        <img id="shadowBase" src={ShadowBase} alt="shadowBase" />
        <img id="victoryAvatar" src={VictoryAvatar} alt="victory"></img>
      </div>
    </div>
  );
};

export default Victory;
