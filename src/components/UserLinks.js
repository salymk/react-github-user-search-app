/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import CompanyIcon from '../icon-components/CompanyIcon';
import LocationIcon from '../icon-components/LocationIcon';
import TwitterIcon from '../icon-components/TwitterIcon';
import WebsiteIcon from '../icon-components/WebsiteIcon';
import ThemeContext from '../contexts/theme';

const UserLinks = (props) => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <div className={`user-links ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <ul>
          <li style={{ opacity: props.location ? null : '.5' }}>
            <LocationIcon alt="Location" />
            <p>{props.location ? props.location : ' Not Available'}</p>
          </li>
          <li style={{ opacity: props.website ? null : '.5' }}>
            <WebsiteIcon alt="Website link" />
            <a href={props.website} target="_blank" rel="noreferrer">
              {props.website ? props.website : ' Not Available'}
            </a>
          </li>
          <li style={{ opacity: props.twitter ? null : '.5' }}>
            <TwitterIcon alt="Twitter" />
            <a
              href={`https://twitter.com/${props.twitter}/`}
              target="_blank"
              rel="noreferrer"
            >
              {props.twitter ? props.twitter : ' Not Available'}
            </a>
          </li>
          <li style={{ opacity: props.company ? null : '.5' }}>
            <CompanyIcon alt="Company" />
            <p>{props.company ? props.company : ' Not Available'}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserLinks;

UserLinks.propTypes = {
  location: PropTypes.string,
  website: PropTypes.string,
  twitter: PropTypes.string,
  company: PropTypes.string,
};
