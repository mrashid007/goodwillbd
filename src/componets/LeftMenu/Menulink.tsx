import { Route, Routes } from "react-router-dom";
import SignIn from "../SIgnin/SignIn";
import UserProfile from "../Profile/userProfile";
import SearchProfile from "../Search/SearchProfile";
import ChangePassword from "../Profile/ChangePassword";
import TopProfile from "../Profile/TopProfile";
import ProfileRegistration from "../Profile/ProfileRegistration";
import Favorite from "./../Favorite/Favorite";
import SignUp from "../Signup/SignUp";

const profileData = {
  lookingFor: "Partner",
  name: "John Doe",
  religion: "Christianity",
  casteSocialOrder: "N/A",
  education: "Masters in Computer Science",
  profession: "Software Engineer",
  dateOfBirth: "1990-01-01",
  fatherName: "Michael Doe",
  motherName: "Jane Doe",
  country: "USA",
  division: "California",
  district: "Los Angeles",
  upazilaCity: "Los Angeles",
  village: "N/A",
  location: "123 Main St",
  residencyStatus: "Citizen",
  email: "john.doe@example.com",
  phoneNo: "1234567890",
  guardianPhoneNo: "0987654321",
  profilePicturePreview: "https://via.placeholder.com/400",
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
