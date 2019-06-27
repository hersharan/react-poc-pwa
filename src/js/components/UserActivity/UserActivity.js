/*
 * Provide Points On View Content.
 *
 * @Todo
 *  Need to optimize componentWillReceiveProps section.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAuthorization } from '../../helpers/authorization';

import { filterData } from '../../helpers/utils';
const config = getAuthorization();

export default function withUserActivity(PassedComponent) {
  class UserActivity extends Component {
    constructor() {
      super();
      this.state = {
        activity: [],
        status: false,
        showMore: false,
        data: [],
        fetching: true,
        updatedActivities: false
      }

      this.getActivities = this.getActivities.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.results && nextProps.results.length !== 0) {
        this.setState({
          activity: nextProps.results
        });
        // Fetching nids from results
        const nodes = this.getActivities(nextProps.results);
        // Comparing previous nids with new nids initially or on showmore.
        if (this.state.fetching) {
          const nodeStringFormat = nodes !== undefined ? nodes.map(nodeId => 'id[]=' + nodeId).join('&') : '';

          // Fetching userActivity for new results.
          this.setState({fetching: false, updatedActivities: false});
          const countStatus = nextProps.countEnable ? `&commentCount=1` : '';
          fetch(`/lm/api/v1/userActivities?_format=json&${nodeStringFormat}${countStatus}`, config)
          .then((response) => {
            this.setState({fetching: true});
            // Prevent page from error.
            if (response.status !== 200) {
              this.setState({
                status: true
              })
            }
            else {
              const that = this;
              response.json()
              .then(function(data) {
                const filter = filterData(nextProps.results, data);
                const nids = that.getActivities(filter);
                that.setState({
                  activity: filter,
                  data: nids,
                  updatedActivities: true
                });
              });
            }
          })
        }
        else {
          this.setState({
            updatedActivities: true
          });
        }
      }
    }

    getActivities(data) {
      return data.map((item) => {
        return item.nid;
      });
    }

    render() {
      return (
        <PassedComponent  {...this.props} updatedActivities={this.state.updatedActivities} results={this.state.activity} />
      )
    }
  }

  UserActivity.propTypes = {
    results: PropTypes.array,
  }

  UserActivity.defaultProps = {
    results: [],
  };

  return UserActivity;
}
