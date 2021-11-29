import React from 'react';

import styles from './Round.module.scss';

export interface RoundProps {
  round: number;
}

export function Round({ round = 1 }: RoundProps) {
  return (
    <div className={styles.Round}>
      <h1 aria-live="polite">Round {round}</h1>
    </div>
  );
}
