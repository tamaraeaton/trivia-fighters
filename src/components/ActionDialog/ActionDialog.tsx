import { FunctionComponent } from 'react';
import './ActionDialog.scss';
import IconButton from '../Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';

const ActionDialog = () => {
  return (
    <div className="actionDialogWrapper">
      <IconButton
        children="Attack"
        icon={<img src={SwordIcon} alt="sword" width="20px" height="20px" />}
        size="s"
      />
      <IconButton
        children="Block"
        icon={<img src={ShieldIcon} alt="shield" width="20px" height="20px" />}
        size="s"
      />
    </div>
  );
};

export default ActionDialog;
