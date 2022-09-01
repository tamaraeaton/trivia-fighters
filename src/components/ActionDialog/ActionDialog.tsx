import { FunctionComponent } from 'react';
import './ActionDialog.scss';
import IconButton from '../Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import { useGameActions } from '../../store/game/game.hooks';
import { useOpponentActions } from '../../store/opponent/opponent.hooks';
import { useGameSelectors } from '../../store/game/game.hooks';

const ActionDialog: FunctionComponent = () => {
  const { setActionToBlock, setActionToAttack } = useGameActions();
  const { setOpponentAttackValue } = useOpponentActions();
  const { difficulty } = useGameSelectors();

  return (
    <div className="actionDialogWrapper" data-testid="actionDialog">
      <IconButton
        testID="attack"
        icon={<img src={SwordIcon} alt="sword" width="20px" height="20px" />}
        size="xl"
        onClick={() => {
          setActionToAttack();
          if (difficulty !== undefined) {
            setOpponentAttackValue(difficulty);
          }
        }}
      >
        Attack
      </IconButton>
      <IconButton
        testID="block"
        icon={<img src={ShieldIcon} alt="shield" width="20px" height="20px" />}
        size="xl"
        onClick={() => {
          setActionToBlock();
          if (difficulty !== undefined) {
            setOpponentAttackValue(difficulty);
          }
        }}
      >
        Block
      </IconButton>
    </div>
  );
};

export default ActionDialog;
