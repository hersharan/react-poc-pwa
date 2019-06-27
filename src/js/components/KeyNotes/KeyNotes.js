import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getKeynotesActions from './keyNotes.action';
import ListingLoader from '../Loaders/ListingLoader';
import Template from '../Templates/Template';

class KeyNotes extends Component {
  constructor(props) {
    super(props);

    this.keyNotesTemplate = this.keyNotesTemplate.bind(this);
  }

  componentDidMount() {
    this.props.getKeynotes(this.props.type, this.props.items);
  }

  keyNotesTemplate() {
    const { fetchingKeynotes, fetchedKeynotes, keynotes } = this.props;

    if (fetchingKeynotes) {
      return <ListingLoader />
    }
    else if(fetchedKeynotes && keynotes && keynotes.results.length !== 0) {
      return (
        <>
          <div className="keynotes info">
            <h2 className="section-title">{this.props.header}</h2>
            <Template
              items={keynotes.results}
              type={this.props.type}
              showSubTitle={this.props.showSubTitle}
            />
          </div>
        </>
      )
    }
  }

  render() {
    return (
      <>
        {this.keyNotesTemplate()}
      </>
    )
  }
}


function mapStateToProps(state) {
  const { fetchingKeynotes, fetchedKeynotes, keynotes,  keynotesError } = state.keynotes;

  return { fetchingKeynotes, fetchedKeynotes, keynotes,  keynotesError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeynotes: (type, nids) => dispatch(getKeynotesActions.getKeynotes(type, nids)),
  }
}

KeyNotes.propTypes = {
  header: PropTypes.string,
  type: PropTypes.string,
  showSubTitle: PropTypes.bool,
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(KeyNotes);

export default connectedComponent
