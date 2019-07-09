import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { LOADER, HOMEPAGE } from '../helpers/appConstants';
import { isLoggedIn } from '../helpers/authorization';
import ProviderComponent from './GlobalBrands';

const Loader = <section className="loading"><img className="loading-icon" src={LOADER} alt="loader" /></section>;

const UserLogin = lazy(() => import(/* webpackChunkName: "UserLogin" */ './UserLogin/UserLogin'));

const UserLogout = lazy(() => import(/* webpackChunkName: "UserLogout" */ './UserLogout/UserLogout'));

const UserRegistration = lazy(() => import(/* webpackChunkName: "UserRegistration" */ './UserRegistration'));

const Homepage = lazy(() => import(/* webpackChunkName: "Homepage" */ './Homepage/Homepage'));

const Header = lazy(() => import(/* webpackChunkName: "Header" */ './Header/Header'));

const NewsListing  = lazy(() => import(/* webpackChunkName: "NewsListing" */ './Trendings/TrendingListing/TrendingListing'));

const NewsDetail = lazy(() => import(/* webpackChunkName: "NewsDetail" */ './Trendings/TrendingDetails/TrendingDetails'));

const Footer = lazy(()=> import(/* webpackChunkName: "Footer" */ './Footer/Footer'));

const ResetPassword = lazy(() => import(/* webpackChunkName: "ResetPassword" */ './ResetPassword/index'));

const ChangePassword = lazy(() => import(/* webpackChunkName: "ChangePassword" */ './ChangePassword/index'));

const NotFoundPage = lazy(() => import(/* webpackChunkName: "NotFoundPage" */ './Errors/NotFoundPage'));

const ModuleListing = lazy(() => import(/* webpackChunkName: "ModuleListing" */ './ModuleListing/ModuleListing'));

const BrandLanding = lazy(() => import(/* webpackChunkName: "BrandLanding" */ './BrandLanding/BrandLanding'));

const ModuleDetails = lazy(() => import(/* webpackChunkName: "ModuleListing" */ './ModuleDetails/ModuleDetails'));

const ProductsListing = lazy(() => import(/* webpackChunkName: "ProductsListing" */ './Products/ProductsListing/ProductsListing'));

const ProductDetail = lazy(() => import(/* webpackChunkName: "ProductDetail" */ './Products/ProductDetails/ProductDetails'));

const IngredientsListing = lazy(() => import(/* webpackChunkName: "ProductDetail" */ './Ingredients/IngredientsListing/IngredientsListing'));

const IngredientDetail = lazy(() => import(/* webpackChunkName: "IngredientDetail" */ './Ingredients/IngredientsDetails/IngredientsDetails'));

const PrivacyPolicy = lazy(() => import(/* webpackChunkName: "PrivacyPolicy" */ './PrivacyPolicy/PrivacyPolicy'));

const TermsAndConditions = lazy(() => import(/* webpackChunkName: "TermsAndConditions" */ './TermsAndConditions/TermsAndConditions'));

const Videos = lazy(() => import(/* webpackChunkName: "Videos" */ './Videos/VideosListing/Videos'));

const UserProfile = lazy(() => import(/* webpackChunkName: "UserProfile" */ './User/Details/UserDetails'));

const Tools = lazy(() => import(/* webpackChunkName: "Tools" */ './Tools/ToolsListing/Tools'));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={Loader}>
          <Header />
          <div className="main-content col-12">
            <ProviderComponent>
              <Switch>
                <Route exact path="/" render={() => isLoggedIn ? <Redirect to="/home"/> : <Redirect to="/login" />}/>
                <Redirect from="/user/login" to="/login" />
                <Redirect from="/user/logout" to="/logout" />
                <PrivateRoute exact path="/home" component={Homepage} />
                <PublicRoute exact path="/login" component={UserLogin} />
                <PublicRoute exact path="/user/login" />
                <PublicRoute exact path="/reset-password" component={ResetPassword} />
                <PublicRoute exact path="/confirm-password" component={ChangePassword} />
                <PrivateRoute exact path="/news" component={NewsListing} />
                <PrivateRoute exact path="/news/:nid" component={NewsDetail} />
                <PrivateRoute exact path="/logout" component={UserLogout} />
                <PrivateRoute exact path={"/course/:cid"} component={ModuleListing} />
                <PrivateRoute path={'/brand/:id'} component={BrandLanding} />
                <PrivateRoute exact path={"/module/:nid"} component={ModuleDetails} />
                <PrivateRoute exact path={"/user/:uid"} component={UserProfile} />
                <PrivateRoute exact path="/products" component={ProductsListing} />
                <PrivateRoute exact path={"/product/:nid"} component={ProductDetail} />
                <PrivateRoute exact path="/ingredients" component={IngredientsListing} />
                <PrivateRoute exact path={"/ingredient/:nid"} component={IngredientDetail} />
                <PrivateRoute exact path="/videos" component={Videos} />
                <PrivateRoute exact path="/tools" component={Tools} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/terms-and-conditions" component={TermsAndConditions} />
                <Route exact path="/registration" component={UserRegistration} />
                <Route component={NotFoundPage} />
              </Switch>
            </ProviderComponent>
          </div>
          <Footer />
        </Suspense>
      </Router>
    );
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Redirect
          to={{
            pathname: HOMEPAGE,
            state: { from: props.location }
          }}
        />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default App;
