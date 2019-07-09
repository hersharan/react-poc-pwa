import React from 'react';
import {Col, Row} from 'reactstrap';

import {MARKET_LABEL, JOB_TITLE_LABEL} from '../../../helpers/translations';
import NotFoundPage from '../../Errors/NotFoundPage';
import Avatar from '../../../../images/defaults/avatar.png';
import '../../../../sass/components/userprofile.scss';

const UserProfile = (props) => {
  const userDetails = localStorage.getItem('user');
  const user = JSON.parse(userDetails);

  return (
    <div className="user-profile">
      <Row>
        <Col xs={12} className="user-picture">
          <div className="profile-image">
            <img src={user.userPicture ? user.userPicture : Avatar} alt='user-profile' />
          </div>
        </Col>
        <Col xs={12} className="user-data">
          <div className="name profile-data">
            {user.firstName &&
              <div className="first">
                {user.firstName}
              </div>
            }
            {user.lastName &&
              <div className="last">
                {user.lastName}
              </div>
            }
          </div>
          {user.jobTitle &&
            <div className="job-title label-data profile-data">
              <span className="label">{JOB_TITLE_LABEL}</span>
              <div className="field-content">
                {user.jobTitle}
              </div>
            </div>
          }
          {user.markets &&
            <div className="market label-data profile-data">
              <span className="label">{MARKET_LABEL}</span>
              <div className="field-content">
                {user.markets.map((itm) => itm.name).join(', ')}
              </div>
            </div>
          }
        </Col>
      </Row>
    </div>
  )
}

const UserDetails = (props) => {
  const userDetails = localStorage.getItem('user');
  const user = JSON.parse(userDetails);
  if (Number(props.match.params.uid) === Number(user.uid)) {
    return <UserProfile />
  }
  else {
    return <NotFoundPage />
  }
}

export default UserDetails;