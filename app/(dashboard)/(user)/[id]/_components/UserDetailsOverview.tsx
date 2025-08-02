"use client";
import React from 'react'
import UserDetailsTopBar from './UserDetailsTopBar'
import UserGeneralDetails from './UserGeneralDetails';
import { useUserDetails } from '@/hooks/useUserDetails';

function UserDetailsOverview({ id }: { id: string }) {
  const { data: user, isLoading, isError } = useUserDetails(id);

  if (isLoading) {
    return <div>Loading user details...</div>;
  }

  if (isError || !user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <UserDetailsTopBar user={user} />
      <UserGeneralDetails user={user} />
    </div>
  );
}

export default UserDetailsOverview
