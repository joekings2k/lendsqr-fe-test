import React from 'react'
import UserDetailsTopBar from './UserDetailsTopBar'
import UserGeneralDetails from './UserGeneralDetails';

function UserDetailsOverview() {
  return (
    <div>
      <UserDetailsTopBar />
      <UserGeneralDetails />
    </div>
  );
}

export default UserDetailsOverview