
import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';

import footerActions from './footer.actions';
import HeadingLoader from '../Loaders/HeadingLoader';
import '../../../sass/components/footer.scss';
import { COPYRIGHT, LOGOUT, NEED_HELP_FOOTER } from '../../helpers/translations';
import supportActions from '../SupportEmail/support.actions';

class FooterRender extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      width: window.innerWidth,
      token: null,
    }

    this.renderFooter = this.renderFooter.bind(this);
    this.getMenuitems = this.getMenuitems.bind(this);
    this.handleOrientation = this.handleOrientation.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }

  componentDidMount() {
    this.props.getFooter();
    this.props.getUserSupportEmail();
    this.handleOrientation();
    this.setState({
      token: cookies.load('access_token')
    })
  }

  handleOrientation = () => {
    let self = this;
    window.addEventListener("resize", function () {
      self.setState({
        width: window.innerWidth
      })
    });
  }

  renderFooter() {
    const { fetchedFooter, footer } = this.props;
    if (fetchedFooter && footer.length !== 0 && footer.privacyMenu && footer.privacyMenu.length !== 0) {
      return (
        <div className="footer">
          {this.getMenuitems()}
        </div>
      )
    }
  }

  getMenuitems() {
    return (
      <ul>
        {this.props.footer.privacyMenu.map((item, idx) => {
          let href = '/';
          switch (item.content) {
            case 'tnc':
              href = '/terms-and-conditions';
              break;
            case 'privacypolicy':
              href = '/privacy-policy';
              break;
            default:
              href = item.URL && item.URL !== '' ? item.URL : '/';
          }

          return (
            <li key={idx} className="nav-item">
              <a href={href} data-tid={item.targetId}>{item.name}</a>
            </li>
          )
        })}
        {(this.props.supportEmail && this.props.supportEmail !== '') && <li key={'need_help'} className="nav-item">
          <a href={`mailto:${this.props.supportEmail}`}>{NEED_HELP_FOOTER}</a>
        </li>}
        {this.state.token && this.state.token !==undefined && this.state.width > 768 && <li key='logout' className="nav-item">
          <Link to="/logout">{LOGOUT}</Link>
        </li>}
      </ul>
    )
  }

  renderLoader() {
    return (
      <HeadingLoader height={10} width={200} />
    )
  }

  render() {
    const { fetchingFooter, fetchingSupportEmail } = this.props;

    return (
      <>
        {(fetchingFooter || fetchingSupportEmail) ? this.renderLoader() : this.renderFooter()}
        <p className="copyright-text">&copy;{COPYRIGHT}</p>
      </>
    )
  }
}

function mapStateToProps(state) {
  const { fetchingFooter, fetchedFooter, error, footer } = state.footer;

  const { fetchingSupportEmail, fetchedSupportEmail, supportError, supportEmail } = state.support;

  return { fetchingFooter, fetchedFooter, error, footer, fetchingSupportEmail, fetchedSupportEmail, supportError, supportEmail }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFooter: () => dispatch(footerActions.getFooter()),
    getUserSupportEmail: () => dispatch(supportActions.getUserSupportEmail()),
    getGlobalSupportEmail: ()=> dispatch(supportActions.getGlobalSupportEmail())
  }
}

const connectedFooter = connect(mapStateToProps, mapDispatchToProps)(FooterRender);

export { connectedFooter as FooterRender }
