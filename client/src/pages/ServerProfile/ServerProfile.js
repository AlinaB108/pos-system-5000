import React from "react";
import './ServerProfile.css';
import PosServerNav from '../../components/PosServerNav/PosServerNav';
import PosServerProfile from '../../components/PosServerProfile/PosServerProfile';

const Profile = () => {
  return (
    <div className="container">
      <PosServerNav />
      <PosServerProfile />
    </div>
  );
};

export default Profile;
