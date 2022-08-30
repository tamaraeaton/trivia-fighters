import SwordIcon from '../../assets/images/sword.svg';
import IconButton from 'components/Button/IconButton';
import './AttackDialog.scss';
import { attackStrength } from 'store/game/game.slice';
import { useAppDispatch } from 'store/hooks';

const AttackDialog = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="attackDialogWrapper" data-testid="attackDialog">
      <IconButton
        testID="lightAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="l"
        count={1}
        onClick={() => dispatch(attackStrength('light'))}
      >
        Light Attack +1
      </IconButton>
      <IconButton
        testID="mediumAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="l"
        count={2}
        onClick={() => dispatch(attackStrength('medium'))}
      >
        Medium Attack +3
      </IconButton>
      <IconButton
        testID="heavyAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="l"
        count={3}
        onClick={() => dispatch(attackStrength('heavy'))}
      >
        Heavy Attack +5
      </IconButton>
    </div>
  );
};

export default AttackDialog;
