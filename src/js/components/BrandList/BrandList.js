import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { inlineLoading } from '../../helpers/utils';
import SelectiveFilter from '../SelectiveFilter/SelectiveFilter';
import {GlobalBrandsConsumer, GlobalBrands} from '../GlobalBrands';

class BrandList extends Component {
  static contextType = GlobalBrands;
  constructor(props) {
    super(props);

    this.brandList = this.brandList.bind(this);
  }

  brandList() {
    const parsed = queryString.parse(window.location.search);
    const { brand } = parsed;
    const brandId = brand ? brand : 0;

    if (this.context[0] !== 'load' && this.context[0] !== 'nodata') {
      let userBrandsDetails = {};
      const userObj  = localStorage.getItem('user');
      const brands = Object.assign({}, this.context);
      const userDetails = JSON.parse(userObj);
      const role = userDetails.role;
      if (role.length !==0 ) {
        const roles = role.map((item) => item.rid);
        if (roles.indexOf('administrator') !== -1
          || roles.indexOf('el_nyo_global_education_system_admin') !== -1) {
          userBrandsDetails = this.context;
        }
        else {
          const userBrands = userDetails.brands;
          userBrands.forEach((item) => userBrandsDetails[item] = brands[item]);
        }
      }

      return (
        <SelectiveFilter
          staticData={userBrandsDetails}
          handleSelect={this.props.getBrandId}
          selected={brandId}
        />
      );
    }
    else if(this.context[0] === 'load') {
      return <div className="text-center">{inlineLoading()}</div>
    }
  }

  // Categories Listing
  render() {
    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <div className="brand-categories">
              {this.brandList()}
            </div>
          )
        }}
      </GlobalBrandsConsumer>
    )
  }
}

BrandList.propTypes = {
  getBrandId: PropTypes.func.isRequired,
  defaultBrand: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default BrandList;
