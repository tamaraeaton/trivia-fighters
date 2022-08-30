import { FunctionComponent } from 'react';
import './ActionDialog.scss';
import IconButton from '../Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import { useAppDispatch } from '../../store/hooks';
import { attack, block } from 'store/game/game.slice';

const ActionDialog: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="actionDialogWrapper" data-testid="actionDialog">
      <IconButton
        testID="attack"
        icon={<img src={SwordIcon} alt="sword" width="20px" height="20px" />}
        size="xl"
        onClick={() => dispatch(attack())}
      >
        Attack
      </IconButton>
      <IconButton
        testID="block"
        icon={<img src={ShieldIcon} alt="shield" width="20px" height="20px" />}
        size="xl"
        onClick={() => dispatch(block())}
      >
        Block
      </IconButton>
    </div>
  );
};

export default ActionDialog;
