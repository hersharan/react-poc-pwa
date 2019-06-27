/*
 Set Datapoints.
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import setDatapointsAction from './setDatapoints.actions';

export default function withDataAction(DataComponent) {
  class SetDatapoints extends Component {
    constructor() {
      super();

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      const { id, nid } = event.target.dataset;

      if (id && id === 'favourite') {
        this.props.setDatapoints(id, nid, !this.props.userFavouriteStatus);
        if (event.target.classList.contains("hearts-filled")) {
          event.target.classList.remove('hearts-filled');
          --event.target.textContent;
        }
        else {
          event.target.classList.add('hearts-filled');
          ++event.target.textContent;
        }
      }
      else if (id && id === 'bookmark') {
        this.props.setDatapoints(id, nid, !this.props.userBookmarkStatus);
        if (event.target.classList.contains("bookmark-fill")) {
          event.target.classList.remove('bookmark-fill');
        }
        else {
          event.target.classList.add('bookmark-fill');
        }
      }
    }

    render() {
      return (
        <DataComponent {...this.props}
          handleClick={this.handleClick}
        />
      )
    }
  }

  const mapStateToProps = (state) => {
    const { settingDatapoints, setDatapoints, datapoints, setDatapointsError } = state.setDatapoints

    return { settingDatapoints, setDatapoints, datapoints, setDatapointsError }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      setDatapoints: (id, nid, status) => dispatch(setDatapointsAction.setDatapoints(id, nid, status)),
    }
  }

  const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SetDatapoints);

  return connectedComponent;
}
