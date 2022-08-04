import React, { FunctionComponent } from 'react';
import HealthFull from '../../assets/images/health-full.svg';
import HealthLow from '../../assets/images/health-low.svg';

const containerStyles = {
  // display: 'flex',
  height: 30,
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
    // display: 'flex',
    height: '100%',
    width: `${healthPercentage}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',

    // transform: 'translate(120px, 50%)',
    // transform: 'rotateY(180deg)',
    // justifyContent: 'left',
    // alignItems: 'left',
    // alignText: 'right',
    // float: 'right',
  };

  if (healthPercentage < 50) {
    fillerStyles.backgroundColor = 'red';
  }

  // if(isReversed === true) {

  // }

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {healthPercentage < 50 ? (
            <img src={HealthLow} />
          ) : (
            <img src={HealthFull} />
          )}
          <span style={labelStyles}>{`${healthPercentage}/100`}</span>
        </div>
      </div>
    </>
  );
};

export default HealthBar;
