import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {FORM_NAMES} from '~/configuration';
import {addNeed} from '~/state/actions';
import View from './view';

class AddNeed extends Component {
  render() {
    return (
      <View {...this.props} />
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch) => ({
  dispatch,
  handlers: {
    form: {
      onSubmit: (event) => {
        event.preventDefault();
        dispatch(addNeed);
      }
    }
  }
});

let form = FORM_NAMES.ADD_NEED;
let WrappedContainer = connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({form})(AddNeed)
);

export default WrappedContainer;
