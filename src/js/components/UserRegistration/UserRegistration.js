/**
 * @Todo
 *   1. Break this in to Useful Components w.r.t. API's.
 *   2. Can be converted into proper form with custom validations.
 */
import React, {Component} from "react";
import classnames from "classnames";
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, FormGroup, Label, Input} from "reactstrap";

import SelectiveFilter from '../SelectiveFilter/SelectiveFilter';
import supportActions from '../SupportEmail/support.actions';
import getUserRegistrationAction from './userRegistration.action';
import getBrandListAction from '../BrandList/brandList.actions';
import { inlineLoading } from '../../helpers/utils';
import {LOGIN} from '../../helpers/appConstants';
import '../../../sass/components/userlogin.scss';
import Captcha from './ReCaptcha';

//importing translations
import {
  REGISTER,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  USERNAME,
  SELECT_REGION,
  SELECT_MARKET,
  SELECT_LANGUAGE,
  SELECT_JOB_TITLE,
  REQUIRED,
  INVALID_EMAIL,
  INVALID_USERNAME,
  REGISTRATION_LABEL,
  CANCEL,
  SELECT_RETAILER,
  SELECT_STORE,
  NO_RETAILERS,
  NO_STORES,
  NO_LANGUAGE,
  NO_JOBS_TITLE,
  SELECT_BRAND,
  REGISTRATION_CODE,
  NEED_HELP
} from "../../helpers/translations";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        region: '',
        market: '',
        language: '',
        jobTitle: '',
        code: '',
        tncCheck: false
      },
      errStatus: false,
      msg: '',
      userObject: {},
      regions: {},
      allMarkets: {},
      markets: {},
      retailers: {},
      stores: {},
      languages: {},
      jobTitles: {},
      currentRegion: '',
      currentMarket: '',
      currentRetailer: '',
      currentStores: '',
      currentJob: '',
      currentLanguage: '',
      currentBrand: '',
      brands: {},
      captcha: false,
      activeState: false,
      retailerLabel: SELECT_RETAILER,
      languageLabel: SELECT_LANGUAGE,
      storeLabel: SELECT_STORE,
      jobTitleLabel: SELECT_JOB_TITLE
    };

    this.handleJobtitle = this.handleJobtitle.bind(this);
    this.handleRegion = this.handleRegion.bind(this);
    this.handleRetailer = this.handleRetailer.bind(this);
    this.handleStore = this.handleStore.bind(this);
    this.handleMarket = this.handleMarket.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleBrand = this.handleBrand.bind(this);
    this.handleCaptcha = this.handleCaptcha.bind(this);
    this.getNeedHelp = this.getNeedHelp.bind(this);
  }

  //Saving the data into the state
  handleSubmit = data => {

    // Finalizing Object
    const UserObject = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.username,
      email: data.email,
      region: this.state.currentRegion,
      country: this.state.currentMarket,
      retailer: this.state.currentRetailer,
      store: this.state.currentStores,
      langCode: this.state.currentLanguage,
      jobTitle: this.state.currentJob,
      policyFlag: (this.state.agree1 && this.state.agree2) ? 1 : 0,
      brand: this.state.currentBrand,
      registrationCode: data.code
    }

    this.setState({
      msg: '',
      errStatus: false,
      userObject: UserObject,
      activeState: true,
      userError: false
    });

    this.props.userValidate(UserObject.email, UserObject.userName);
  };

  handleJobtitle(job) {
    this.setState({currentJob: job});
  }

  handleRetailer(retailer) {
    this.props.getStores(retailer);
    this.setState({currentRetailer: retailer});
  }

  handleStore(store) {
    this.setState({currentStore: store});
  }

  handleBrand(brand) {
    this.setState({currentBrand: brand});
  }

  handleRegion(region) {
    if (Number(region) === 0) {
      this.setState({
        activeMarket: false,
        activeRetailer: false,
        activeLanguage: false,
        currentRegion: region,
        currentLanguage: '',
        currentRetailer: '',
        currentStores: '',
        retailerLabel: SELECT_RETAILER,
        languageLabel: SELECT_LANGUAGE,
        storeLabel: SELECT_STORE,
        markets: {},
        languages: {},
        retailers: {},
        stores: {},
      });
    }
    else {
      // Resetting the market filed.
      this.setState({activeMarket: false, markets: {}, currentRegion: region});
      const marketsCloned = this.state.allMarkets.map((item) => Object.assign({}, item));
      const markets = marketsCloned.filter((item) => Number(item.region) === Number(region));
      const currentMarkets = {};

      // Converting into Object.
      markets.forEach((item) => currentMarkets[item.tid] = item.market);
      this.setState({
        markets: currentMarkets,
        activeMarket: true
      });
    }
  }

  handleMarket(market) {
    if (Number(market) === 0) {
      this.setState({
        activeRetailer: false,
        activeLanguage: false,
        currentLanguage: '',
        currentRetailer: '',
        retailerLabel: SELECT_RETAILER,
        languageLabel: SELECT_LANGUAGE,
        languages: {},
        retailers: {},
      });
    }
    else {
      this.props.getRetailers(market);
      this.props.getLanguages(market);
      this.setState({currentMarket: market});
    }
  }

  handleLanguage(language) {
    this.setState({currentLanguage: language});
  }

  handleCancel() {
    document.location = LOGIN;
  }

  toggleCheckbox = (e) => {
    let id = document.getElementById(e.target.id);
    const name = e.target.name;
    const value = id.checked;
    this.setState({
      [name]: value
    })
  }

  createMarkup(data) {
    return { __html: data };
  }

  handleCaptcha(captcha) {
    if (captcha) {
      this.setState({captcha: true});
    }
  }

  componentDidMount() {
    this.props.getRegions();
    this.props.getMarkets();
    this.props.getJobTitles();
    this.props.getBrandList();
    this.props.getGlobalSupportEmail();
  }

  componentWillReceiveProps(nextProps) {
    const {regions, fetchedRegions, fetchingRegions } = nextProps;
    const location = {};
    if (fetchedRegions && !this.state.fetchedRegions) {
      regions.forEach((item) => location[item.tid] = item.name);
      this.setState({
        fetchedRegions: true,
        regions: location
      })
    }
    else if (fetchingRegions) {
      this.setState({fetchedRegions: false})
    }

    // Markets
    const { markets, fetchedMarkets, fetchingMarkets } = nextProps;
    if (fetchedMarkets && !this.state.fetchedMarkets) {
      this.setState({
        fetchedMarkets: true,
        allMarkets: markets
      })
    }
    if (fetchingMarkets) {
      this.setState({fetchedMarkets: false})
    }

    // Retailers
    const { retailers, fetchedRetailers, fetchingRetailers, retailerStatus } = nextProps;
    if (fetchedRetailers && !this.state.fetchedRetailers) {
      this.setState({activeRetailer: false, retailers: {}});
      if (retailerStatus === 204) {
        this.setState({
          activeRetailer: false,
          activeStore: false,
          fetchedRetailers: true,
          retailerLabel: NO_RETAILERS,
          storeLabel: NO_STORES
        });
      }
      else {
        const currentRetailer = {};

        // Converting into Object.
        retailers.forEach((item) => currentRetailer[item.tid] = item.retailer);
        this.setState({
          activeRetailer: true,
          fetchedRetailers: true,
          retailers: currentRetailer,
          retailerLabel: SELECT_RETAILER,
          storeLabel: SELECT_STORE
        });
      }
    }
    if (fetchingRetailers) {
      this.setState({fetchedRetailers: false})
    }

    // Stores
    const { stores, fetchedStores, fetchingStores, storeStatus } = nextProps;
    if (fetchedStores && !this.state.fetchedStores) {
      this.setState({activeStore: false, stores: {}});
      if (storeStatus === 204) {
        this.setState({
          activeStore: false,
          fetchedStores: true,
          storeLabel: NO_STORES
        });
      }
      else {
        const currentStores = {};

        // Converting into Object.
        stores.forEach((item) => currentStores[item.tid] = item.store);
        this.setState({
          activeStore: true,
          fetchedStores: true,
          stores: currentStores,
          storeLabel: SELECT_STORE
        });
      }
    }
    if (fetchingStores) {
      this.setState({fetchedStores: false})
    }

    // Languages
    const { languages, fetchedLanguages, fetchingLanguages, languagesStatus } = nextProps;
    if (fetchedLanguages && !this.state.fetchedLanguages) {
      this.setState({activeLanguage: false, languages: {}});
      if (languagesStatus === 204) {
        this.setState({
          activeLanguage: false,
          fetchedLanguages: true,
          languageLabel: NO_LANGUAGE,
        });
      }
      else {
        const currentLanguages = {};

        // Converting into Object.
        currentLanguages.header_1 = 'Primary Langugaes';
        languages.primary.forEach((item) => currentLanguages[item.languageCode] = item.languageName);
        if (languages.secondary.length !== 0) {
          currentLanguages.header_2 = 'Secondary Langugaes';
          languages.secondary.forEach((item) => currentLanguages[item.languageCode] = item.languageName);
        }
        this.setState({
          activeLanguage: true,
          fetchedLanguages: true,
          languages: currentLanguages,
          languageLabel: SELECT_LANGUAGE,
        });
      }
    }
    if (fetchingLanguages) {
      this.setState({fetchedLanguages: false})
    }

    // Job Titles
    const {jobtitles, fetchedJobTitle, fetchingJobTitle, jobtitlesStatus } = nextProps;
    if (fetchedJobTitle && !this.state.fetchedJobTitle) {
      if (jobtitlesStatus === 204) {
        this.setState({
          fetchedJobTitle: true,
          jobTitles: {},
          jobTitleLabel: NO_JOBS_TITLE,
          activeJobTitle: false
        })
      }
      else {
        const jobs = {};
        jobtitles.forEach((item) => jobs[item.rid] = item.role);
        this.setState({
          fetchedJobTitle: true,
          jobTitles: jobs,
          jobTitleLabel: SELECT_JOB_TITLE,
          activeJobTitle: true
        })
      }
    }
    else if (fetchingJobTitle) {
      this.setState({fetchedJobTitle: false})
    }

    // Registration
    const {registration, fetchedRegistration, fetchingRegistration } = nextProps;

    if (fetchedRegistration && !this.state.fetchedRegistration) {
      this.setState({
        msg: registration.message,
        errStatus: true,
        activeState: true,
        fetchedRegistration: true
      });

      if (registration.status) {
        document.location = '/login?registration=1';
      }
    }
    else if (fetchingRegistration) {
      this.setState({fetchedRegistration: false, activeState: true})
    }

    // Brand List
    const {brandList, fetchedBrandList, fetchingBrandList } = nextProps;

    if (fetchedBrandList && !this.state.fetchedBrandList) {
      const brands = {};
      brandList.results.forEach((item) => brands[item.tid] = item.name);
      this.setState({brands: brands, fetchedBrandList: true});
    }
    else if (fetchingBrandList) {
      this.setState({fetchedBrandList: false})
    }

    // User Validation
    const { userInfo, fetchedUserInfo, fetchingUserInfo, userInfoStatus, UserInfoError } = nextProps;
    if (fetchedUserInfo && !this.state.fetchedUserInfo) {
      if (userInfo.status) {
        this.setState({fetchedUserInfo: true})
        this.props.getRegistration(this.state.userObject);
      }
      else if (userInfoStatus !== 200) {
        if (UserInfoError.data.error === 'UserName') {
          this.setState({userNameError: true});
        }
        else if (UserInfoError.data.error === 'UserEmail') {
          this.setState({userEmailError: true});
        }
        this.setState({activeState: false});
      }
    }
    else if (fetchingUserInfo) {
      this.setState({fetchedUserInfo: false})
    }
  }

  getNeedHelp() {
    const {fetchingSupportEmail, fetchedSupportEmail, supportEmail } = this.props;
    if (fetchingSupportEmail) {
      return (
        <div className="need-help">
          <div className="loader text-center">{inlineLoading()}</div>
        </div>
      )
    }
    else if (fetchedSupportEmail && supportEmail) {
      return (
        <div className={classnames("need-help", { "disabled": supportEmail.length === 0 || supportEmail.URL === '' })}>
          <a href={`mailto:${supportEmail}`}>{NEED_HELP}</a>
        </div>
      )
    }
  }

  render() {
    //eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //eslint-disable-next-line
    const aplhaNumericRegex = /^[a-zA-Z0-9\-_]{0,40}$/;
    const {
      firstName,
      lastName,
      email,
      username,
      region,
      market,
      language,
      jobTitle,
      registrationCode,
      tncCheck,
      code
    } = this.state.form;

    const { fetchingRegions, fetchingLanguages, fetchingJobTitle, fetchingBrandList } = this.props;

    return (
      <>
        <div className='registration-wrapper'>
          <Formik
            initialValues={{
              firstName: firstName,
              lastName: lastName,
              email: email,
              username: username,
              region: region,
              market: market,
              language: language,
              jobTitle: jobTitle,
              registrationCode: registrationCode,
              tncCheck: tncCheck,
              code: code
            }}
            //error handling
            validate={values => {
              let errors = {};
              if (!values.firstName) {
                errors.firstName = REQUIRED;
              }

              if (!values.lastName) {
                errors.lastName = REQUIRED;
              }

              if (!values.code) {
                errors.code = REQUIRED;
              }

              if (!values.email) {
                errors.email = REQUIRED;
              } else if (emailRegex.test(values.email) === false) {
                errors.email = INVALID_EMAIL;
              }

              if (!values.username) {
                errors.username = REQUIRED;
              } else if (aplhaNumericRegex.test(values.username) === false) {
                errors.username = INVALID_USERNAME;
              }

              if (this.state.currentRegion === '') {
                errors.region = REQUIRED;
              }

              if (this.state.currentMarket ==='') {
                errors.market = REQUIRED;
              }

              if (this.state.currentLanguage === '') {
                errors.language = REQUIRED;
              }

              if (this.state.currentJob === '') {
                errors.jobTitle = REQUIRED;
              }

              if (!this.state.currentBrand) {
                errors.brand = REQUIRED;
              }

              return errors;
            }}

            onSubmit={values => {
              this.handleSubmit(values);
            }}
            >
            {/* Form Structure */}
            <Form>
              {this.state.errStatus &&
                <div className="err-msg" dangerouslySetInnerHTML={this.createMarkup(this.state.msg)}></div>
              }
              <Row>
              <h1 className="page-title">{REGISTRATION_LABEL}</h1>
                <Col sm={6} className="first-name field-content">
                  <Field type="text" name="firstName" placeholder={FIRST_NAME} />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error-msg"
                    />
                </Col>
                <Col sm={6} className="last-name field-content">
                  <Field type="text" name="lastName" placeholder={LAST_NAME} />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error-msg"
                    />
                </Col>

                <div className="col-12 col-sm-6 email field-content">
                  <Field type="text" name="email" placeholder={EMAIL} />
                  <ErrorMessage name="email" component="div" className="error-msg" />
                  {this.state.userEmailError &&
                    <div className='error-msg'>Email Id already exist</div>
                  }
                </div>
                <div className="col-12 col-sm-6 username field-content">
                  <Field type="text" name="username" placeholder={USERNAME} />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error-msg"
                    />
                  {this.state.userNameError &&
                    <div className='error-msg'>Username already exist</div>
                  }
                </div>

                <div className="col-12 col-sm-6 location field-content">
                  {fetchingRegions
                    ? <div className="loader text-center">{inlineLoading()}</div>
                    : <SelectiveFilter
                    staticData={this.state.regions}
                    handleSelect={this.handleRegion}
                    allLabel={SELECT_REGION}
                    />
                  }
                  <ErrorMessage name="region" component="div" className="error-msg" />
                </div>
                <div className={classnames("col-12 col-sm-6 market field-content", {"disabled": !this.state.activeMarket})}>
                  <SelectiveFilter
                    staticData={this.state.markets}
                    handleSelect={this.handleMarket}
                    allLabel={SELECT_MARKET}
                    />
                  <ErrorMessage name="market" component="div" className="error-msg" />
                </div>
                {/* <div className={classnames("col-12 col-sm-6 retailer field-content", {"disabled": !this.state.activeRetailer})}>
                  {fetchingRetailers
                    ? <div className="loader text-center">{inlineLoading()}</div>
                    : <SelectiveFilter
                    staticData={this.state.retailers}
                    handleSelect={this.handleRetailer}
                    allLabel={this.state.retailerLabel}
                    />
                  }
                  <ErrorMessage name="retailer" component="div" className="error-msg" />
                </div>
                <div className={classnames("col-12 col-sm-6 store field-content", {"disabled": !this.state.activeStore})}>
                  {fetchingStores
                    ? <div className="loader text-center">{inlineLoading()}</div>
                    : <SelectiveFilter
                    staticData={this.state.stores}
                    handleSelect={this.handleStore}
                    allLabel={this.state.storeLabel}
                    />
                  }
                  <ErrorMessage name="store" component="div" className="error-msg" />
                </div> */}

                <div className={classnames("col-12 col-sm-6 language field-content",{"disabled": !this.state.activeLanguage})}>
                  {fetchingLanguages
                    ? <div className="loader text-center">{inlineLoading()}</div>
                    : <SelectiveFilter
                    staticData={this.state.languages}
                    handleSelect={this.handleLanguage}
                    allLabel={this.state.languageLabel}
                    />
                  }
                  <ErrorMessage name="language" component="div" className="error-msg" />
                </div>

                <div className={classnames("col-12 col-sm-6 job-title field-content", {"disabled": !this.state.activeJobTitle})}>
                  {fetchingJobTitle
                    ? <div className="loader text-center">{inlineLoading()}</div>
                    : <SelectiveFilter
                    staticData={this.state.jobTitles}
                    handleSelect={this.handleJobtitle}
                    allLabel={this.state.jobTitleLabel}
                    />
                  }
                  <ErrorMessage name="jobTitle" component="div" className="error-msg" />
                </div>

                <div className="col-12 col-sm-6 brands field-content">
                  {fetchingBrandList
                    ? <div className="loader text-center">{inlineLoading()}</div>
                    : <SelectiveFilter
                    staticData={this.state.brands}
                    handleSelect={this.handleBrand}
                    allLabel={SELECT_BRAND}
                    />
                  }
                  <ErrorMessage name="brand" component="div" className="error-msg" />
                </div>
                <div className="col-12 col-sm-6 code field-content">
                  <Field type="text" name="code" placeholder={REGISTRATION_CODE} />
                  <ErrorMessage name="code" component="div" className="error-msg" />
                </div>

                <div className="col-12 tnc field-content">
                  <FormGroup check>
                    <Label check for="agree1" className={classnames('my-2', { "active": this.state.agree1 })}>
                      <Input
                        type="checkbox"
                        id="agree1"
                        name="agree1"
                        value={this.state.agree1}
                        onChange={this.toggleCheckbox}
                        />
                      I have read, understand and agree to the <a href="/terms-and-conditions" target="_blank">terms and conditions</a>
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check for="agree2" className={classnames('my-2', { "active": this.state.agree2 })}>
                      <Input type="checkbox" id="agree2" name="agree2" value={this.state.agree2}
                        onChange={this.toggleCheckbox} />{' '}
                      I have read, understand and agree to the privacy policy. Personal data will be used to create and manage your account, including to send transactional emails about your account. Personal data may be stored outside your country of residence. For more information on our privacy practices, your rights and how to exercise these rights,
                      Please see our <a href="/privacy-policy" target="_blank">Privacy Policy.</a>
                    </Label>
                  </FormGroup>
                </div>
                <div className="col-12 captcha text-center field-content">
                  <Captcha handleCaptcha={this.handleCaptcha} />
                </div>
                <div className="col-12 more-link mt-3">
                  <Row>
                    <div className="col-12 my-1 col-sm-6 field-content">
                      <button
                        type="submit"
                        className={classnames(
                          "btn btn-outline-secondary text-uppercase", {"active": this.state.agree1 && this.state.agree2}, {"disabled": (!(this.state.agree1 && this.state.agree2 && this.state.captcha)) || this.state.activeState}
                          )}
                          >
                        {REGISTER}
                      </button>
                    </div>
                    <div className="col-12 my-1 col-sm-6 field-content">
                      <button
                        type="button"
                        className={classnames(
                          "btn btn-outline-secondary text-uppercase"
                          )}
                          onClick={this.handleCancel}
                          >
                        {CANCEL}
                      </button>
                    </div>
                  </Row>
                </div>
              </Row>
            </Form>
          </Formik>
          {this.getNeedHelp()}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const { regions, fetchedRegions, fetchingRegions, fetchingRegionsError } = state.regions;

  const { markets, fetchedMarkets, fetchingMarkets, fetchingMarketsError } = state.markets;

  const { retailers, fetchedRetailers, fetchingRetailers, fetchingRetailersError, retailerStatus } = state.retailers;

  const { stores, fetchedStores, fetchingStores, fetchingStoresError, storeStatus } = state.stores;

  const { languages, fetchedLanguages, fetchingLanguages, fetchingLanguagesError, languagesStatus } = state.languages;

  const { jobtitles, fetchedJobTitle, fetchingJobTitle, jobtitlesStatus } = state.jobtitles;

  const { registration, fetchedRegistration, fetchingRegistration } = state.registration;

  const { brandList, fetchedBrandList, fetchingBrandList } = state.brandList;

  const { userInfo, fetchedUserInfo, fetchingUserInfo, userInfoStatus, UserInfoError } = state.userValidation;

  const { fetchingSupportEmail, fetchedSupportEmail, supportError, supportEmail } = state.support;

  return { regions, fetchedRegions, fetchingRegions, fetchingRegionsError, markets, fetchedMarkets, fetchingMarkets, fetchingMarketsError, retailers, fetchedRetailers, fetchingRetailers, fetchingRetailersError, retailerStatus, stores, fetchedStores, fetchingStores, fetchingStoresError, storeStatus, languages, fetchedLanguages, fetchingLanguages, fetchingLanguagesError, languagesStatus, jobtitles, fetchedJobTitle, fetchingJobTitle, jobtitlesStatus, registration, fetchedRegistration, fetchingRegistration, brandList, fetchedBrandList, fetchingBrandList, userInfo, fetchedUserInfo, fetchingUserInfo, userInfoStatus, fetchingSupportEmail, fetchedSupportEmail, supportError, supportEmail, UserInfoError}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRegions: () => dispatch(getUserRegistrationAction.getRegions()),
    getMarkets: () => dispatch(getUserRegistrationAction.getMarkets()),
    getRetailers: (country) => dispatch(getUserRegistrationAction.getRetailers(country)),
    getStores: (retailer) => dispatch(getUserRegistrationAction.getStores(retailer)),
    getLanguages: (market) => dispatch(getUserRegistrationAction.getLanguages(market)),
    getJobTitles: () => dispatch(getUserRegistrationAction.getJobTitles()),
    getRegistration: (user) => dispatch(getUserRegistrationAction.register(user)),
    getBrandList: () => dispatch(getBrandListAction.getBrandList()),
    userValidate: (email, username) => dispatch(getUserRegistrationAction.userValidate(email, username)),
    getGlobalSupportEmail: () => dispatch(supportActions.getGlobalSupportEmail()),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);

export default connectedComponent;
