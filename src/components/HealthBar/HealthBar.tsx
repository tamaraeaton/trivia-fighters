import React, { FunctionComponent } from 'react';
import HealthFull from '../../assets/images/health-full.svg';
import HealthLow from '../../assets/images/health-low.svg';

const containerStyles = {
  height: 20,
  width: '100%',
  backgroundColor: '#e0e0de',
  borderRadius: 50,
  margin: 50,
};

const labelStyles = {
  padding: 5,
  color: 'white',
  fontWeight: 'bold',
};

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

  const fillerStyles = {
    height: '100%',
    width: `${healthPercentage}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    // textAlign: 'right',
  };

  if (healthPercentage < 50) {
    fillerStyles.backgroundColor = 'red';
  }

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {healthPercentage < 50 ? (
            <img src={HealthLow} />
          ) : (
            <img src={HealthFull} />
          )}
          <span style={labelStyles}>{`${healthPercentage}%`}</span>
        </div>
      </div>
    </>
  );
};

export default HealthBar;
