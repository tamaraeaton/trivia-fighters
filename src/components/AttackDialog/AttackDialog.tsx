import SwordIcon from '../../assets/images/sword.svg';
import IconButton from 'components/Button/IconButton';
import './AttackDialog.scss';

const AttackDialog = () => {
  return (
    <div className="attackDialogWrapper">
      <IconButton
        children="Light Attack +1"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={1}
      />
      <IconButton
        children="Medium Attack +3"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={2}
      />
      <IconButton
        children="Heavy Attack +5"
        icon={<img src={SwordIcon} alt="shield" width="20px" height="20px" />}
        size="m"
        count={3}
      />
    </div>
  );
};

export default AttackDialog;
