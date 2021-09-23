import React from 'react';
import CompanyIcon from '../icon-components/CompanyIcon';
import LocationIcon from '../icon-components/LocationIcon';
import TwitterIcon from '../icon-components/TwitterIcon';
import WebsiteIcon from '../icon-components/WebsiteIcon';

const UserLinks = () => (
  <>
    <div className="user-links">
      <ul>
        <li>
          <LocationIcon alt="Location" />
          <p>San Francisco</p>
        </li>
        <li>
          <WebsiteIcon alt="Website link" />
          <p>https://github.blog</p>
        </li>
        <li>
          <TwitterIcon alt="Twitter" />
          <p>Not Available</p>
        </li>
        <li>
          <CompanyIcon alt="Company" />
          <p>@github</p>
        </li>
      </ul>
    </div>
  </>
);

export default UserLinks;
