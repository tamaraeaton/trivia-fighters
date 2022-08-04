import { FunctionComponent } from 'react';
import HealthFull from '../../assets/images/health-full.svg';
import HealthLow from '../../assets/images/health-low.svg';
import './HealthBar.css';

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
  const healthPercentage = Math.round((currentHealth / maxHealth) * 100);

  return (
    <>
      <div className="healthbarContainer">
        <div
          test-id={testID}
          className={`${isReversed ? 'fillerReversed' : undefined} filler`}
          style={{
            width: `${healthPercentage}%`,
            background:
              healthPercentage < 50
                ? 'linear-gradient(60deg, #ff0000 0%, #960000 100%)'
                : 'linear-gradient(60deg, #007c4d 0%, #00f658 100%)',
          }}
        ></div>
        <div
          test-id={testID}
          className={`${
            isReversed ? 'healthAndScoreReversed' : undefined
          } healthAndScore`}
        >
          {healthPercentage < 50 ? (
            <img src={HealthLow} />
          ) : (
            <img src={HealthFull} />
          )}

          <span className="label">{`${healthPercentage}/100`}</span>

          {/*TODO: <p className="screenReader">
            Health is {healthPercentage}%, {currentHealth} of {maxHealth}.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default HealthBar;
