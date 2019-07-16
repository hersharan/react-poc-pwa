import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import cookies from "react-cookies";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";

import primaryNavigation from "./primaryNavigation.actions";
import "../../../sass/components/primary-navigation.scss";
import HeadingLoader from "../Loaders/HeadingLoader";
import { LOGOUT } from "../../helpers/translations";
import UpArrow from '../../../images/up_arrow.svg';
import DownArrow from '../../../images/down_arrow.svg';
import {getStorageLimit} from '../../helpers/utils';

class PrimaryNavigation extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      show: true,
      width: window.innerWidth,
      current: '',
      menuId: 0,
      menuTree: [],
      fetched: false,
      open: false,
    };

    this.renderPrimaryNavigation = this.renderPrimaryNavigation.bind(this);
    this.getMenuTemplate = this.getMenuTemplate.bind(this);
    this.handleOrientation = this.handleOrientation.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.getItemTemplate = this.getItemTemplate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.props.getPrimaryNavigations();
    this.handleOrientation();
    this.props.getStorageLimit();
    this.setState({
      token: cookies.load("access_token"),
    });
  }

  handleOrientation = () => {
    let self = this;
    window.addEventListener("resize", function() {
      self.setState({
        width: window.innerWidth
      });
    });
  };

  handleToggle(e) {
    e.preventDefault();
    let id = Number(e.target.dataset.id);
    id === this.state.menuId ? this.setState({menuId: 0}) : this.setState({menuId: id});
  }

  componentWillReceiveProps(nextProps) {
    const { fetchedPrimaryNavigations, primaryNavigations, fetchingPrimaryNavigations } = nextProps;

    if (fetchedPrimaryNavigations && primaryNavigations.length !== 0 && this.state.fetched) {
      this.setState({fetched: false});
      // Copying Into different array;
      let menu = JSON.parse(JSON.stringify(primaryNavigations));

      let menuTree = menu.filter((item) => {
        return item.parent === 0;
      });

      // Structuring 'primaryNavigations' results into menu tree.
      menu.forEach((value, index) => {
        // Extracting Parent Item
        menuTree.forEach((data, key) => {
          if (data.Id === menu[index].parent) {
            if (Object.prototype.hasOwnProperty.call(data, 'child')) {
              menuTree[key]['child'].push(menu[index]);
            }
            else {
              menuTree[key].child = [menu[index]];
            }
          }
        })
      });

      this.setState({menuTree: menuTree})
    }
    else if (fetchingPrimaryNavigations) {
      this.setState({fetched: true});
    }
  }

  renderPrimaryNavigation() {
    const {menuTree} = this.state;
    return (
      <div className={classnames("main-nav", { "d-none": !this.props.show && (this.state.width <= 768) })}>
        <nav role="navigation" className="navbar navbar-light navbar-expand-xl justify-content-end">
          {this.getMenuTemplate(menuTree, 0)}
        </nav>
      </div>
    );
  }

  getItemTemplate(item) {
    return (
      <li key={item.Id*2} className="nav-item">
        <a href={item.href}
          data-tid={item.targetId}
          data-id={item.Id}
          onClick={item.child ? this.handleToggle : () => true}
          className={classnames({
            "active-link": item.href === window.location.pathname || window.location.pathname.indexOf(`${item.href}/`) === 0
          })}
        >
        {item.name}
        </a>
        {item.child && (
          <span
            className="caret"
            data-id={item.Id}
            onClick={this.handleToggle}
            style={{backgroundImage: this.state.menuId === item.Id ? `url(${UpArrow})`: `url(${DownArrow})`}}>Down</span>
        )}
        {item.child && this.getMenuTemplate(item.child, item.Id)}
      </li>
    )
  }

  getMenuTemplate(items, parentId) {
    return (
      <>
        <ul key={parentId} data-id={parentId} className={classnames("navbar-nav", {'has-child': parentId !== 0}, {'open': this.state.menuId === parentId})}>
          {items.map((item, idx) => {
            let href = "/";
            switch (item.content) {
              case "home":
                href = "/home";
                break;

              case "scentcourses":
                href = `${item.targetId ? `/course/${item.targetId}` : '/courses'}`
                break;

              case "news":
                href = "/news";
                break;

              case "products":
                href = "/products";
                break;

              case "ingredients":
                href = "/ingredients";
                break;

              case "videos":
                href = "/videos";
                break;

              case "tools":
                href = "/tools";
                break;

              case 'brand':
                href = `${item.targetId ? `/brand/${item.targetId}` : '/brand'}`
                break;

              default:
                href = "/";
            }

            item.href = href;

            // Getting Item Wrapped
            return this.getItemTemplate(item)
          })}
          {this.state.token &&
            this.state.token !== undefined &&
            this.state.width <= 768 &&
            parentId === 0 && (
              <li key="logout" className="nav-item">
                <Link to="/logout">{LOGOUT}</Link>
              </li>
            )}
        </ul>
      </>
    );
  }

  renderLoader() {
    let limit = 4;
    let loaders = [];
    for (let i = 0; i < limit; i++) {
      loaders.push(
        <li key={i} className="nav-item mw-200">
          <HeadingLoader height={100} width={400} />
        </li>
      );
    }

    return (
      <div className={classnames("main-nav col-12", { "d-none": !this.props.show && (this.state.width <= 768) })}>
        <nav role="navigation" className="navbar navbar-light navbar-expand-xl justify-content-end">
          {
            <div className="sitenav">
              <ul className="navbar-nav">{loaders}</ul>
            </div>
          }
        </nav>
      </div>
    );
  }

  render() {
    const { fetchingPrimaryNavigations } = this.props;
    return (
      <>
        <div className="text-center">{this.props.storage.msg}</div>
        {fetchingPrimaryNavigations
          ? this.renderLoader()
          : this.renderPrimaryNavigation()}
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    fetchingPrimaryNavigations,
    fetchedPrimaryNavigations,
    primaryNavigations,
    storage
  } = state.primaryNavigations;

  return {
    fetchingPrimaryNavigations,
    fetchedPrimaryNavigations,
    primaryNavigations,
    storage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPrimaryNavigations: () => dispatch(primaryNavigation.getPrimaryNavigations()),
    getStorageLimit: ()=> dispatch(getStorageLimit()),
  };
};

const connectedPrimaryNavigations = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryNavigation);

export { connectedPrimaryNavigations as PrimaryNavigation };
