import React from 'react';
import UserHeader from './UserHeader';
import UserStats from './UserStats';

const UserContainer = () => (
  <div className="user-container">
    <UserHeader />
    <div>
      <p className="bio">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>

      <div className="user-meta-info">
        <UserStats />
        <UserStats />
      </div>
    </div>
  </div>
);

export default UserContainer;
