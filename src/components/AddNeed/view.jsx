import React from 'react';

let View = () => (
  <div className="container">
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Details of Need" id="details_of_need" type="text" className="validate" />
            <label htmlFor="details_of_need">Details of Need</label>
          </div>
        </div>

        <div className="input-field inline">
          <p>this.props.campName Camp X (fix this)</p>
        </div>

        <div className="row">
          <div className="input-field col s12">
              <input id="assignee" type="text" className="validate" />
              <label htmlFor="assignee">Assignee (optional)</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="quantity" type="number" className="validate" />
            <label htmlFor="quantity">Quantity (optional)</label>
          </div>
        </div>

        <a className="btn-floating btn-large waves-effect waves-light green"><i className="material-icons">done</i></a>
      </form>
    </div>
  </div>
);

export default View;
