import SwordIcon from '../../assets/images/sword.svg';
import IconButton from 'components/Button/IconButton';
import './AttackDialog.scss';

const AttackDialog = () => {
  return (
    <div className="attackDialogWrapper" data-testid="attackDialog">
      <IconButton
        testID="lightAttack"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={1}
      >
        Light Attack +1
      </IconButton>
      <IconButton
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={2}
      >
        Medium Attack +3
      </IconButton>
      <IconButton
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={3}
      >
        Heavy Attack +5
      </IconButton>
    </div>
  );
};

export default AttackDialog;
