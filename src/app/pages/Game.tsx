import React from 'react';
import { Round } from '../components/Round/Round';

import styles from './Game.module.scss';

function Game() {
  return (
    <div className={styles.Game}>
      <div className={styles.round}>
        <Round round={1} />
      </div>
    </div>
  );
}

export default Game;
