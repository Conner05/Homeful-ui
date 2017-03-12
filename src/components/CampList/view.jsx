import React from 'react';
import styles from './styles.scss';

let View = ({campList}) => (
  <div className={styles.container}>
    something goes here... {JSON.stringify(campList)}
  </div>
);

export default View;
