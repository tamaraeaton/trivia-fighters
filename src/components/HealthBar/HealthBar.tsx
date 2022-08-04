import { isAbsolute } from 'node:path';
import { relative } from 'node:path/win32';
import React, { FunctionComponent } from 'react';
import HealthFull from '../../assets/images/health-full.svg';
import HealthLow from '../../assets/images/health-low.svg';
import './HealthBar.css';

interface HealthBarProps {
  isReversed: boolean;
  maxHealth: number;
  currentHealth: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const HealthBar: FunctionComponent<HealthBarProps> = ({
  isReversed,
  maxHealth,
  currentHealth,
  onClick,
}) => {
  const healthPercentage = Math.round((currentHealth / maxHealth) * 100);

  return (
    <>
      <div className="container">
        <div
          className={`${isReversed ? 'fillerReversed' : undefined} filler`}
          style={{
            width: `${healthPercentage}%`,
            backgroundColor: healthPercentage < 50 ? 'red' : 'green',
          }}
        ></div>
        <div
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
        </div>
      </div>
    </>
  );
};

export default HealthBar;

//TODO: screen reader only container
/* 
“Health is XX%, [currentHealth] of [maxHealth]”
 */
