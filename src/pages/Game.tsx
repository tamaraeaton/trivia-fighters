import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';

const Game: React.FunctionComponent = () => {
  return (
    <div style={{ display: 'flex' }}>
      <HealthBar isReversed={true} maxHealth={150} currentHealth={100} />
      <Round />
      <HealthBar isReversed={true} maxHealth={150} currentHealth={60} />
    </div>
  );
};

export default Game;

// transform: matrix(1, 2, 3, 4, 5, 6);
// transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
// transform: translate(120px, 50%);
// transform: scale(2, 0.5);
// transform: rotate(0.5turn);
// transform: skew(30deg, 20deg);
// transform: scale(0.5) translate(-100%, -100%);
// transform: perspective(17px);
