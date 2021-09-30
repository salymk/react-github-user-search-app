/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import CompanyIcon from '../icon-components/CompanyIcon';
import LocationIcon from '../icon-components/LocationIcon';
import TwitterIcon from '../icon-components/TwitterIcon';
import WebsiteIcon from '../icon-components/WebsiteIcon';

const UserLinks = (props) => (
  <>
    <div className="user-links">
      <ul>
        <li>
          <LocationIcon alt="Location" />
          <p>{props.location}</p>
        </li>
        <li>
          <WebsiteIcon alt="Website link" />
          <a href="https://github.blog">{props.website}</a>
        </li>
        <li>
          <TwitterIcon alt="Twitter" />
          <p>{props.twitter ? props.twitter : 'Not Available'}</p>
        </li>
        <li>
          <CompanyIcon alt="Company" />
          <p>@{props.company}</p>
        </li>
      </ul>
    </div>
  </>
);

export default UserLinks;

UserLinks.propTypes = {
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
