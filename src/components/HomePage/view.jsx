import React from 'react';
import { Link } from 'react-router';

let View = () => (
  <div>
    <ul>
      <li><Link to="packing-list" className="btn btn-large blue darken-3">Pack List </Link></li><br />
      <li><Link to="camp-list" className="btn btn-large blue darken-3">Camp List</Link></li><br />
      <li><Link to="camp-detail" className="btn btn-large blue darken-3">Camp Detail</Link></li><br />
      <li><Link to="add-camp" className="btn btn-large blue darken-3">Add Camp</Link></li><br />
      <li><Link to="add-need" className="btn btn-large blue darken-3">Add Need</Link></li><br />
      <li><Link to="add-person" className="btn btn-large blue darken-3">Add Person</Link></li><br />
      <li><Link to="persons-list" className="btn btn-large blue darken-3">Persons List</Link></li><br />
    </ul>
  </div>
);

export default View;
