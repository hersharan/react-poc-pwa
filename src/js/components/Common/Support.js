/* Import Core Libraries */
import React, { Component } from 'react';

import '../../../sass/components/static-content.scss';
import { removeDrupalToolbar } from '../../helpers/utils';

class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      preview: 0,
      nid: 0
    };

  }

  componentDidMount() {
    removeDrupalToolbar();
  }



  render() {
    return (
      <div className="tnc-wrapper static-content">
        <h1 className="page-title">Contact Us</h1>
        The Estée Lauder Companies is a global organization with wholly-owned or majority-owned and operated offices in more than 50 countries and territories. As a company committed to quality and excellence we pride ourselves on providing the highest level of consumer care and being responsive to enquiries.

        <div className="description">

          <h3>Contact Information</h3>

          Main Office
          ELCA Cosmetics Pvt Ltd
          #302, 3rd Floor, Nirman Kendra,
          Dr. E. Moses Road, Famous Studio Lane
          Mahalaximi, Mumbai 400 011 – India
          Tel: +91-22-61479800
          Fax: +91-22-61479898

        <div>
            Media Contacts :
          <a href="mailto">hersharan.kaur@srijan.net</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Support;