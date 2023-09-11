import React from "react";
import PosNav from '../../components/PosNav/PosNav';
import { useQuery } from '@apollo/client';
import { ME } from '../../utils/queries';
import Auth from "../../utils/auth";
import PosServerProfile from '../../components/PosServerProfile/PosServerProfile';

const Profile = () => {
  const { loading, data } = useQuery(ME);
  console.log(data)
  const profile = data?.me || {};
  console.log(profile)

  if (loading) {
    // RETURNS A LOADING SCREEN IF DATA LOADING
    return <div>Loading...</div>;
  }

  if (!profile?.firstName) {
    return (
      <h4>
        You need to be logged in to see your profile page.
      </h4>
    );
  }

  if (Auth.loggedIn()) {
    return (
      <div className="container">
        <PosNav profile = {profile}/>
        <PosServerProfile profile = {profile}/>
      </div>
    );
  };
}

export default Profile;
