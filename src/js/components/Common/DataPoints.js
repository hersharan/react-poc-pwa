/* Import Core Libraries */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/* Import Custom Components */
import withDataAction from '../SetDatapoints/SetDatapoints';

class DataPoints extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if(this.props.bookmarkClickable || this.props.favoritesClickable) {
      this.props.handleClick(e);
    }
  }
  // Categories Listing
  render() {
    return (
      <div className="points-artwork">
        {this.props.diamondStatus &&
          <div className="info diamonds-points">{this.props.diamonds}</div>
        }
        {this.props.favoritesStatus &&
          <div
            className={classnames('info hearts-points', {"hearts-filled": this.props.userFavouriteStatus })}
            data-id="favourite"
            data-nid={this.props.nid}
            onClick={this.handleClick}>
            {this.props.favourites}
          </div>
        }
        {this.props.commentStatus &&
          <div
            className='info comment'
            data-id="comment"
            data-nid={this.props.nid}
            onClick={this.handleClick}
          >{this.props.comments}</div>
        }
        {this.props.bookmarkStatus &&
          <div
            className={classnames('info bookmark', {"bookmark-fill": this.props.userBookmarkStatus })}
            data-id="bookmark"
            data-nid={this.props.nid}
            onClick={this.handleClick}
          />
        }
      </div>
    )
  }
}

DataPoints.propTypes = {
  diamondStatus: PropTypes.bool,
  favoritesStatus: PropTypes.bool,
  bookmarkStatus: PropTypes.bool,
  commentStatus: PropTypes.bool,
  diamonds: PropTypes.number,
  favourites: PropTypes.number,
  userBookmarkStatus: PropTypes.bool,
  userFavouriteStatus: PropTypes.bool,
  nid: PropTypes.number,
  favoritesClickable: PropTypes.bool,
  bookmarkClickable: PropTypes.bool,
};

DataPoints.defaultProps = {
  diamondStatus: true,
  favoritesStatus: true,
  bookmarkStatus: true,
  commentStatus: false,
  userBookmarkStatus: false,
  userFavouriteStatus: false,
  diamonds: 0,
  favourites: 0,
  favoritesClickable: true,
  bookmarkClickable: true,
};

export default withDataAction(DataPoints);
