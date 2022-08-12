import { FunctionComponent } from 'react';
import './ActionDialog.scss';
import IconButton from '../Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import { useAppDispatch } from 'store/hooks';
import { block, attack } from '../../store/game/game.slice';

const ActionDialog: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="actionDialogWrapper" data-testid="actionDialog">
      <IconButton
        children="Attack"
        icon={<img src={SwordIcon} alt="sword" width="20px" height="20px" />}
        size="s"
        onClick={() => dispatch(attack(attack))}
      />
      <IconButton
        children="Block"
        icon={<img src={ShieldIcon} alt="shield" width="20px" height="20px" />}
        size="s"
        onClick={() => dispatch(block(block))}
      />
    </div>
  );
};

export default ActionDialog;
