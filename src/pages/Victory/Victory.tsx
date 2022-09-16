import { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VictoryAvatar from '../../assets/images/fox-knight_victory.svg';
import ShadowBase from '../../assets/images/shadow.svg';
import ShadowGradient from '../../assets/images/shadow-gradient.svg';
import Button from 'components/Button/Button';
import { useGameUI } from '../../store/game/game.hooks';
import { useOpponent } from 'store/players/opponent/opponent.hooks';
import './Victory.scss';

const Victory: FunctionComponent = () => {
  const navigate = useNavigate();
  const { setResetGame, difficulty } = useGameUI();
  const { opponentName } = useOpponent();

  useEffect(() => {
    if (!difficulty) {
      navigate('/');
    }
  }, [difficulty, navigate]);

  const handleClick = () => {
    setResetGame();
    navigate('/');
  };

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">VICTORY</h1>
      <h2 className="pagePreface">You beat the {opponentName}!</h2>
      <Button size="s" onClick={handleClick}>
        Play Again
      </Button>
      <div className="victoryDefeatAvatarContainer">
        <img
          id="shadowGradient"
          className="avatarShadowScale"
          src={ShadowGradient}
          alt="shadowGradient"
        />
        <img id="shadowBase" src={ShadowBase} alt="shadowBase" />
        <img
          data-testid="victoryAvatar"
          id="victoryAvatar"
          src={VictoryAvatar}
          alt="victory"
        ></img>
      </div>
    </div>
  );
};

export default Victory;
