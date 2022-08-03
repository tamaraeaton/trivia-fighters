import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';

const Game: React.FunctionComponent = () => {
  return (
    <div>
      <Round />
      <HealthBar isReversed={true} maxHealth={150} currentHealth={30} />
    </div>
  );
};

export default Game;
