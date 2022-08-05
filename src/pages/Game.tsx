import HealthBar from 'components/HealthBar/HealthBar';
import Round from '../components/Round/Round';
import Avatar from '../components/Avatar/Avatar';
import FoxKnight from '../assets/images/fox-knight.svg';
import Shadow from '../assets/images/shadow-gradient.svg';

const Game: React.FunctionComponent = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <HealthBar
          testID="playerHealthBar"
          isReversed={false}
          maxHealth={100}
          currentHealth={100}
        />
        <Round />
        <HealthBar
          testID="opponentHealthBar"
          isReversed={true}
          maxHealth={150}
          currentHealth={60}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar alt="dragon" name="You" character={FoxKnight} shadow={Shadow} />
      </div>
    </>
  );
};

export default Game;
