import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Homeful</h1>
        <p>Welcome to the homeful dashboard</p>
        <ul>
          <li><Link to="pack-list" className="btn btn-large blue darken-3">Pack List </Link></li><br />
          <li><Link to="camp-list" className="btn btn-large blue darken-3">Camp List</Link></li><br />
          <li><Link to="camp-detail" className="btn btn-large blue darken-3">Add Camp</Link></li><br />
          <li><Link to="add-camp" className="btn btn-large blue darken-3">Add Need</Link></li><br />
          <li><Link to="add-person" className="btn btn-large blue darken-3">Add Person</Link></li><br />
        </ul>
      </div>

    );
  }
}

export default Home;
