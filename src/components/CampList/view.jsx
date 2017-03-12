import React from 'react';
import styles from './styles.scss';

let View = ({campList}) => (
  <div className={styles.container}>
    Camp List {JSON.stringify(campList)}

    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src="http://images.popmatters.com/news_art/t/tentless.jpg"/>
              <span className="card-title">campName</span>
            </div>
            <div className="card-action center-align">
              <a href="https://www.google.com/webhp?sourceid=chrome-instant&rlz=1C5CHFA_enUS735US735&ion=1&espv=2&ie=UTF-8#q=google+maps+nashville&*">Directions</a>
              <a href="#">Needs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default View;
