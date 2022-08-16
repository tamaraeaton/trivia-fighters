import SwordIcon from '../../assets/images/sword.svg';
import IconButton from 'components/Button/IconButton';
import './AttackDialog.scss';
import { useAppDispatch } from 'store/hooks';
import { attackStrength } from '../../store/game/game.slice';

// onClick button and it will show question dialog with the message of 'Light' 'Medium' 'Heavy'

const AttackDialog = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="attackDialogWrapper" data-testid="attackDialog">
      <IconButton
        testID="lightAttack"
        children="Light Attack +1"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={1}
        onClick={() => dispatch(attackStrength())}
      />
      <IconButton
        children="Medium Attack +3"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={2}
        onClick={() => dispatch(attackStrength())}
      />
      <IconButton
        children="Heavy Attack +5"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={3}
        onClick={() => dispatch(attackStrength())}
      />
    </div>
  );
};

export default AttackDialog;
