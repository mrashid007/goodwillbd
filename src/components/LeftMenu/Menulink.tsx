import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/Login/SignIn";
import UserProfile from "../../pages/UserProfile/UserProfile";
import SearchProfile from "../../pages/Search/SearchProfile";
import ChangePassword from "../../pages/UserPassword/ChangePassword";
import TopProfile from "../../pages/Profile/TopProfile";
//import ProfileRegistration from "../../pages/Profile/ProfileRegistration";

import Favorite from "../Favorite/Favorite";
import SignUp from "../../pages/Signup/SignUp";
import femal_avatar from "../../assets/female_avatar.png";
import ProfileRegistration from "../../pages/Profile/ProfileRegistration";
import EditProfile from "../../pages/UserProfile/EditProfile";

const profileData = {
  lookingFor: "Partner",
  name: "Jahin Siddika",
  religion: "Islam",
  casteSocialOrder: "N/A",
  education: "Masters in Computer Science",
  profession: "Software Engineer",
  dateOfBirth: "1990-01-01",
  fatherName: "Michael Doe",
  motherName: "Safia Khatun",
  country: "BD",
  division: "Dhaka",
  district: "Dhaka",
  upazilaCity: "Dhaka",
  village: "N/A",
  location: "123 Main St",
  residencyStatus: "Citizen",
  email: "john.doe@example.com",
  phoneNo: "1234567890",
  guardianPhoneNo: "0987654321",
  profilePicturePreview: femal_avatar,
};

const Home: React.FC = () => <div>Home</div>;
const Appointment: React.FC = () => <div>Appointment</div>;
const Contact: React.FC = () => <div>Contact</div>;
const Logout: React.FC = () => <div>Logout</div>;

const Menulink: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<ProfileRegistration />} />
      <Route
        path="/profile"
        element={<UserProfile profileData={profileData} />}
      />
      <Route
        path="/edit-profile"
        element={<EditProfile profileData={profileData} />}
      />
      <Route path="/search" element={<SearchProfile />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/top-profiles" element={<TopProfile />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-Up" element={<SignUp />} />
    </Routes>
  );
};

export default Menulink;
