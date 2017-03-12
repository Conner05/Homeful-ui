import React from 'react';
import {Field} from 'redux-form';

let View = ({handleSubmit}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field component="input" type="text" name="Name" placeholder="Name" />
      <Field component="input" type="text" name="Latitude" placeholder="Latitude" />
      <Field component="input" type="text" name="Longitude" placeholder="Longitude" />
      <Field component="input" type="text" name="Notes" placeholder="Notes" />
      <input type="submit" value="Add Camp" />
    </form>
  </div>
);

export default View;
