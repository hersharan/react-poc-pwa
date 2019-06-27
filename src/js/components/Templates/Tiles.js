/*
 *  Importing Core Libraries
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Card, CardTitle, CardLink, CardSubtitle, Col, Row } from "reactstrap";
import { GlobalBrandsConsumer, GlobalBrands } from "../GlobalBrands";

/*
 *  Importing Custom Libraries.
 */
import { BANNER_DEFAULT } from "../../helpers/appConstants";
import LazyImages from "../Common/LazyImages";

class LevelTemplate extends Component {
  static contextType = GlobalBrands;
  constructor(props) {
    super(props);

    this.createMarkup = this.createMarkup.bind(this);
    this.getRenderResults = this.getRenderResults.bind(this);
  }

  createMarkup(data) {
    return { __html: data };
  }

  getRenderResults() {
    const { items, type, showBrandTitle } = this.props;
    let link = "/";

    if (typeof type !== "undefined") {
      switch (type) {
        case "courses":
          link = `/course/`;
          break;

        case "module":
          link = `/module/`;
          break;

        default:
          link = "/";
          break;
      }
    }

    if (items && items.length !== 0) {
      return items.map((item, idx) => {
        return (
          <Col key={idx} xs={12} lg={6} className="list-item">
            <Card className="listing-block">
              <CardLink
                href={`${link}${item.categoryId || item.nid}`}
                className={classnames({ completed: item.status })}
              >
              <LazyImages
                defaultImage={BANNER_DEFAULT}
                src={item.imageSmall ? item.imageSmall : BANNER_DEFAULT}
                imageLarge={
                  item.imageLarge ? item.imageLarge : BANNER_DEFAULT
                }
                imageMedium={
                  item.imageMedium ? item.imageMedium : BANNER_DEFAULT
                }
              />
              </CardLink>
              {item.displayTitle && (
                <CardTitle tag="h2">
                  <CardLink
                    href={`${link}${item.categoryId || item.nid}`}
                    dangerouslySetInnerHTML={this.createMarkup(
                      item.displayTitle
                    )}
                  />
                </CardTitle>
              )}
              {showBrandTitle &&
                (item.brand !== 0 && (
                  <CardSubtitle tag="h3" className="brand-title">
                    {this.context[item.brand]}
                  </CardSubtitle>
                ))}
              {item.subTitle && this.props.showSubTitle && (
                <CardSubtitle className="sub-title">
                  <CardLink
                    href={`${link}${item.categoryId || item.nid}`}
                    dangerouslySetInnerHTML={this.createMarkup(item.subTitle)}
                  />
                </CardSubtitle>
              )}
            </Card>
          </Col>
        );
      });
    }
  }

  render() {
    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <div className="section-content col-12">
              <Row className="tiles-structure">{this.getRenderResults()}</Row>
            </div>
          );
        }}
      </GlobalBrandsConsumer>
    );
  }
}

LevelTemplate.propTypes = {
  items: PropTypes.array.isRequired,
  noDataLabel: PropTypes.string,
  showBrandTitle: PropTypes.bool
};

LevelTemplate.defaultProps = {
  showBrandTitle: true
};

export default LevelTemplate;
