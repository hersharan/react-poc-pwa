/*
 * Provide Points On View Content.
 *
 * @Todo
 *  Need to optimize componentWillReceiveProps section.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAuthorization } from '../../../helpers/authorization';

import { filterData } from '../../../helpers/utils';
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

        // Comparing previous nids with new nids initially or on showmore.
        if (this.state.fetching) {
          const nodeStringFormat = nextProps.results.map(nodeId => 'id[]=' + nodeId.nid).join('&');
          const {cid} = this.props.match.params;
          // Fetching userActivity for new results.
          this.setState({fetching: false, updatedActivities: false});
          fetch(`/lm/api/v1/userActivitiesLevel?_format=json&categoryId=${cid}&${nodeStringFormat}`, config)
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
                const filter = filterData(nextProps.results, data.userActivity);
                const nids = that.getActivities(filter);
                that.setState({
                  activity: filter,
                  data: nids,
                  updatedActivities: true,
                  levelActivity: data.levelDetail
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
        <PassedComponent  {...this.props}
          updatedActivities={this.state.updatedActivities}
          results={this.state.activity}
          levelActivity={this.state.levelActivity}
        />
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
