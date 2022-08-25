import SwordIcon from '../../assets/images/sword.svg';
import IconButton from 'components/Button/IconButton';
import './AttackDialog.scss';
import { attackStrength, AttackPowerType } from 'store/game/game.slice';
import { useAppDispatch } from 'store/hooks';
import { useGameActions } from 'store/game/game.hooks';

const AttackDialog = () => {
  const dispatch = useAppDispatch();
  const { setAttackStrength } = useGameActions();
  const handleClick = (attackStrength: AttackPowerType) => {
    setAttackStrength(attackStrength);
  };

  return (
    <div className="attackDialogWrapper" data-testid="attackDialog">
      <IconButton
        testID="lightAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={1}
        // or make a prop to use only on Game page
        // prop can be onSetAttackStrength = 'easy'
        onClick={() => handleClick('light')}
      >
        Light Attack +1
      </IconButton>
      <IconButton
        testID="mediumAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={2}
        onClick={() => handleClick('medium')}
      >
        Medium Attack +3
      </IconButton>
      <IconButton
        testID="heavyAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={3}
        onClick={() => handleClick('heavy')}
      >
        Heavy Attack +5
      </IconButton>
    </div>
  );
};

export default AttackDialog;
