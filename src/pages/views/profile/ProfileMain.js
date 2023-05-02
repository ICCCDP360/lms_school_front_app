import React from "react";
import ProfileContent from "./ProfileContent";
// import ProfileHeader from "./profileHeader";
import ProfileHeader from "./ProfileHeader";

function ProfileMain() {
  return (
    <div className="profile-main-container-data">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}

export default ProfileMain;
