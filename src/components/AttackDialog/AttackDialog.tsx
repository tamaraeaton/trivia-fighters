import SwordIcon from '../../assets/images/sword.svg';
import IconButton from 'components/Button/IconButton';
import './AttackDialog.scss';
import { AttackPowerType } from 'store/game/game.slice';
import { useGameActions } from 'store/game/game.hooks';

const AttackDialog = () => {
  const { setAttackStrength } = useGameActions();

  const handleClick = (attackStrength: AttackPowerType) => {
    setAttackStrength(attackStrength);
  };

  return (
    <div className="attackDialogWrapper" data-testid="attackDialog">
      <IconButton
        testID="lightAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="l"
        count={1}
        onClick={() => handleClick('light')}
      >
        Light Attack +1
      </IconButton>
      <IconButton
        testID="mediumAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="l"
        count={2}
        onClick={() => handleClick('medium')}
      >
        Medium Attack +3
      </IconButton>
      <IconButton
        testID="heavyAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="l"
        count={3}
        onClick={() => handleClick('heavy')}
      >
        Heavy Attack +5
      </IconButton>
    </div>
  );
};

export default AttackDialog;
