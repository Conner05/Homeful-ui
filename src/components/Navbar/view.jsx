import React from 'react';
import { Link } from 'react-router';

let View = () => (
  <nav>
    <div className="nav-wrapper green darken-2">
      <Link to='/' className="brand-logo">Homeful</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default View;
