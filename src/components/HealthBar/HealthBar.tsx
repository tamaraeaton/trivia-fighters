import { FunctionComponent } from 'react';
import HealthFull from '../../assets/images/health-full.svg';
import HealthLow from '../../assets/images/health-low.svg';
import './HealthBar.scss';

export interface HealthBarProps {
  isReversed: boolean;
  maxHealth: number;
  currentHealth: number;
  testID?: string;
}

const HealthBar: FunctionComponent<HealthBarProps> = ({
  isReversed,
  maxHealth,
  currentHealth,
  testID,
}) => {
  // currentHealth and maxHealth needs to come from store/selector?
  const healthPercentage = Math.round((currentHealth / maxHealth) * 100);

  return (
    <div
      data-testid={testID}
      className={`healthbarContainer ${
        isReversed ? 'fillerReversed' : undefined
      }`}
    >
      <div
        data-testid="healthBarFill"
        className="filler"
        style={{
          width: `${healthPercentage}%`,
          background:
            healthPercentage < 50
              ? 'linear-gradient(60deg, #ff0000 0%, #960000 100%)'
              : 'linear-gradient(60deg, #007c4d 0%, #00f658 100%)',
        }}
      />
      <div
        className={`${
          isReversed ? 'healthAndScoreReversed' : undefined
        } healthAndScore healthAndScoreFont`}
      >
        {healthPercentage < 50 ? (
          <img
            data-testid="healthLowIcon"
            src={HealthLow}
            alt="health low icon"
          />
        ) : (
          <img
            data-testid="healthFullIcon"
            src={HealthFull}
            alt="health full icon"
          />
        )}

        <span
          data-testid="healthBarLabel"
          className="label"
        >{`${currentHealth}/${maxHealth}`}</span>
      </div>
      <p className="sr-only sr-only-focusable">
        Health is {healthPercentage}%, {currentHealth} of {maxHealth}.
      </p>
    </div>
  );
};

export default HealthBar;
