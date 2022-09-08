import { FunctionComponent } from 'react';
import './ActionDialog.scss';
import IconButton from '../Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import { useGameUI } from '../../store/game/game.hooks';
import { useOpponent } from '../../store/opponent/opponent.hooks';

const ActionDialog: FunctionComponent = () => {
  const { difficulty, setActionToBlock, setActionToAttack } = useGameUI();
  const { setOpponentAttackValue } = useOpponent();

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
