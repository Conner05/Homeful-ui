import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {FORM_NAMES} from '~/configuration';
import {addCamp} from '~/state/actions';
import View from './view';

class AddCampPage extends Component {
  render() {
    return (
      <View {...this.props} />
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch) => ({
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(addCamp);
  }
});

let form = FORM_NAMES.ADD_CAMP;
let WrappedContainer = connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({form})(AddCampPage)
);

export default WrappedContainer;
