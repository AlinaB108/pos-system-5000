import React from "react";
import PosServerProfile from '../../components/PosServerProfile/PosServerProfile';
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [profile] = useOutletContext();
  
  if (!profile?.firstName) {
    return (
      <h4>
        You need to be logged in to see your profile page.
      </h4>
    );
  }

  if (profile?.firstName) {
    return (
      <div className="container">
        <PosServerProfile profile={profile}/>
      </div>
    );
  };
}

export default Profile;

