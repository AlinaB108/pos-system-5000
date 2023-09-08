import React from "react";
import './Profile.css';
import PosNav from '../../components/PosNav/PosNav';
import PosManagerProfile from '../../components/PosManagerProfile/PosManagerProfile';

const Profile = () => {
  return (
    <div className="container">
      <PosNav />
      <PosManagerProfile />
    </div>
  );
};

export default Profile;
