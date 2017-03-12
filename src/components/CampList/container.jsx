import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ajaxFetchCampList} from '~/state/actions';
import {getCampList} from '~/state/selectors';
import View from './view';

class CampList extends Component {
  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(ajaxFetchCampList);
  }

  render() {
    return (
      <View campList={this.props.campList} />
    );
  }
}

let mapStateToProps = (state) => ({
  campList: getCampList(state)
});

let WrappedContainer = connect(mapStateToProps)(CampList);

export default WrappedContainer;
