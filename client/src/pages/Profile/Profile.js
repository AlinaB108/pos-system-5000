import React from "react";
import './Profile.css';
import PosNav from '../../components/PosNav/PosNav';
import PosServerProfile from '../../components/PosServerProfile/PosServerProfile';

const Profile = () => {
  return (
    <div className="container">
      <PosNav />
      <PosServerProfile />
    </div>
  );
};

export default Profile;
