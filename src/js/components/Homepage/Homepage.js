/*
  Homepage component.

  Redux Store Props:
    fetchedLevelsList: <Boolean> flag to specify if api has fetched levels,
    fetchedProductList: <Boolean> flag to specify if api has fetched products,
    fetchedSpotlight: <Boolean> flag to specify if api has fetched spotlight,
    fetchedTrending: <Boolean> flag to specify if api has fetched trending stories,
    levels: <Arrary> the list of fetched levels,
    products: <Arrary> the list of fetched products,
    spotlight: <Arrary> the list of fetched spotlight,
    trending: <Arrary> the list of fetched trending stories,
    error: <String/ANY> a message from api detailing about error encountered.
*/
import React, { Component } from 'react';
import HomepageTrending from './Trending/Trending';
import HomepageLevels from './LearningLevels/LearningLevels';
import HomepageSpotlight from './Spotlight/Spotlight';
import {GlobalBrandsConsumer} from '../GlobalBrands';
import '../../../sass/components/homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <div className="homepage">
              <HomepageSpotlight />
              <HomepageLevels />
              <HomepageTrending />
            </div>
          )}
        }
      </GlobalBrandsConsumer>
    )
  }
}

export default Homepage;
