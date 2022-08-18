import { FunctionComponent } from 'react';
import './ActionDialog.scss';
import IconButton from '../Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';

const ActionDialog: FunctionComponent = () => {
  return (
    <div className="actionDialogWrapper" data-testid="actionDialog">
      <IconButton
        testID="attack"
        icon={<img src={SwordIcon} alt="sword" width="20px" height="20px" />}
        size="s"
      >
        Attack
      </IconButton>
      <IconButton
        icon={<img src={ShieldIcon} alt="shield" width="20px" height="20px" />}
        size="s"
      >
        Block
      </IconButton>
    </div>
  );
};

export default ActionDialog;
