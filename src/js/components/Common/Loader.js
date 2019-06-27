/*
 Provide a loader.
*/
import React, { Component } from 'react';
import { LOADER } from '../../helpers/appConstants';

class Loader extends Component {
  // Categories Listing
  render() {
    return(
      <section className="loading">
        <img
          className="loading-icon"
          src={LOADER}
          alt="loader"
        />
      </section>
    )
  }
}

export default Loader;
