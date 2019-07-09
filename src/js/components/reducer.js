/* Importing Core Library */
import { combineReducers } from 'redux';

import primaryNavigations from './PrimaryNavigation/primaryNavigation.reducer';
import userLogin from './UserLogin/userLogin.reducer';
import trendingListing from './Trendings/TrendingListing/trendingListing.reducer';
import trendingDetails from './Trendings/TrendingDetails/trendingDetails.reducer';
import setDatapoints from './SetDatapoints/setDatapoints.reducer';
import homepageTrending from './Homepage/Trending/trending.reducer';
import homepageLevels from './Homepage/LearningLevels/learningLevels.reducer';
import footer from './Footer/footer.reducer';
import resetForget from './ResetPassword/reset.reducer';
import errors from './Errors/errors.reducer';
import moduleListing from './ModuleListing/moduleListing.reducer';
import support from './SupportEmail/support.reducer';
import brandLanding from './BrandLanding/brandLanding.reducer';
import moduleDetails from './ModuleDetails/moduleDetails.reducer';
import productsListing from './Products/ProductsListing/productsListing.reducer';
import productDetails from './Products/ProductDetails/productDetails.reducer';
import ingredientDetails from './Ingredients/IngredientsDetails/ingredientsDetails.reducer';
import privacyPolicy from './PrivacyPolicy/privacyPolicy.reducer';
import termsAndCondition from './TermsAndConditions/termsAndConditions.reducer';
import brandList from './BrandList/brandList.reducer';
import userDetails from './User/Details/userDetails.reducer';
import userFlag from './PrivacyPopup/privacyPopup.reducer';
import ingredientsListing from './Ingredients/IngredientsListing/ingredientsListing.reducer';
import featuredCarousel from './Carousel/featuredCarousel.reducer';
import keynotes from './KeyNotes/keyNotes.reducer';
import videosListing from './Videos/VideosListing/videos.reducer';
import homepageSpotlight from './Homepage/Spotlight/spotlight.reducer';
import videoDetails from './Videos/VideoDetails/videoDetails.reducer';
import toolsListing from './Tools/ToolsListing/tools.reducer';
import toolDetails from './Tools/ToolDetails/toolDetails.reducer';
import {regions, markets, retailers, stores, languages, jobtitles, registration, userValidation} from './UserRegistration/userRegistration.reducer';

const rootReducer = combineReducers({
  userLogin,
  trendingListing,
  trendingDetails,
  setDatapoints,
  homepageTrending,
  homepageLevels,
  primaryNavigations,
  footer,
  resetForget,
  errors,
  moduleListing,
  support,
  brandLanding,
  moduleDetails,
  productsListing,
  privacyPolicy,
  termsAndCondition,
  brandList,
  userDetails,
  userFlag,
  productDetails,
  ingredientsListing,
  featuredCarousel,
  ingredientDetails,
  keynotes,
  videosListing,
  homepageSpotlight,
  videoDetails,
  toolsListing,
  toolDetails,
  regions,
  markets,
  retailers,
  stores,
  languages,
  jobtitles,
  registration,
  userValidation
});

export default rootReducer;
