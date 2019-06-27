/*
 Set Datapoints.
*/
import React, { Component } from 'react';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

export default function withTranslation(TranslatedComponent) {
  class Translation extends Component {
    constructor() {
      super();

      this.state = {
        data: []
      }
    }

    componentDidMount() {
      fetch(`/api/v1/translationKey?_format=json`, config)
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
              that.setState({
                data: data,
              });
            });
          }
        })
    }

    render() {
      return (
        <TranslatedComponent {...this.props} translations={this.state.data} />
      )
    }
  }

  return Translation;
}
