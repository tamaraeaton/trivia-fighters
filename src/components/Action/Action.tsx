import { FunctionComponent } from 'react';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import './Action.scss';

export interface ActionProps {
  isReversed?: boolean;
  actionState: 'none' | 'block' | 'attack';
  attackValue?: number;
  testID: string;
}

const Action: FunctionComponent<ActionProps> = ({
  isReversed,
  actionState,
  attackValue,
  testID,
}) => {
  if (actionState === 'none') {
    return null;
  }

  const isAttack = actionState === 'attack';
  const isBlock = actionState === 'block';
  const iconSource = isAttack
    ? SwordIcon
    : isBlock && !isReversed
    ? ShieldIcon
    : SwordIcon;

  return (
    <div data-testid={testID}>
      {(isAttack || isReversed) && (
        <p data-testid={`${testID}-attackvalue`} className="attackValue">
          {attackValue}
        </p>
      )}
      {iconSource && (
        <img
          data-testid={`${testID}-icon`}
          src={iconSource}
          className={isReversed ? 'iconReversed' : undefined}
          alt="attack/block icon"
        />
      )}
    </div>
  );
};

export default Action;
