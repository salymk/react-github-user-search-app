/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const UserContainer = ({ children }) => <>{children}</>;

export default UserContainer;

UserContainer.propTypes = {
  children: PropTypes.any,
};
