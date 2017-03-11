import React from 'react';
import Test from '~/components/test';
import styles from './styles.scss';

let View = ({campList}) => (
  <div className={styles.container}>
    something goes here... {JSON.stringify(campList)}
  </div>
);

export default View;
