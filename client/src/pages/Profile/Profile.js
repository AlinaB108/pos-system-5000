import React from "react";
import PosNav from '../../components/PosNav/PosNav';
// import PosManagerProfile from '../../components/PosManagerProfile/PosManagerProfile';
import PosServerProfile from '../../components/PosServerProfile/PosServerProfile';

const Profile = () => {
  return (
    <div className="container">
      <PosNav />
      {/* <PosManagerProfile /> */}
      <PosServerProfile />
    </div>
  );
};

export default Profile;
