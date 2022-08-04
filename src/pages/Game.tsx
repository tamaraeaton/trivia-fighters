import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';

const Game: React.FunctionComponent = () => {
  return (
    <div style={{ display: 'flex' }}>
      <HealthBar
        testID="healthFull"
        isReversed={false}
        maxHealth={150}
        currentHealth={100}
      />
      <Round />
      <HealthBar
        testID="healthLow"
        isReversed={true}
        maxHealth={150}
        currentHealth={60}
      />
    </div>
  );
};

export default Game;
