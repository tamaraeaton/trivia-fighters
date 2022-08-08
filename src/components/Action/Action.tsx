import { FunctionComponent } from 'react';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import './Action.scss';

export interface ActionProps {
  isReversed: boolean;
  actionState: 'none' | 'block' | 'attack';
  attackValue: number;
}

const Action: FunctionComponent<ActionProps> = ({
  isReversed,
  actionState,
  attackValue,
}) => {
  if (actionState === 'none') {
    return null;
  }
  const isAttack = actionState === 'attack';
  const iconSource = isAttack ? SwordIcon : ShieldIcon;
  return (
    <div>
      {isAttack && (
        <p data-testid="attackvalue" className="attackValue">
          {attackValue}
        </p>
      )}
      <img
        data-testid="attackBlock"
        src={iconSource}
        className={`${isReversed ? 'iconReversed' : undefined}`}
        alt="attack icon"
      />
    </div>
  );
};

export default Action;
