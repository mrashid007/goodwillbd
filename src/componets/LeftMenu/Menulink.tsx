import { Route, Routes } from "react-router-dom";
import SignIn from "../SIgnin/SignIn";
import UserProfile from "../../pages/Profile/userProfile";
import SearchProfile from "../Search/SearchProfile";
import ChangePassword from "../Profile/ChangePassword";
import TopProfile from "../Profile/TopProfile";
import ProfileRegistration from "../Profile/ProfileRegistration";
const Home: React.FC = () => <div>Home</div>;

const Appointment: React.FC = () => <div>Appointment</div>;
const Contact: React.FC = () => <div>Contact</div>;
const Favorites: React.FC = () => <div>Favorites</div>;

const Logout: React.FC = () => <div>Logout</div>;

const Menulink: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<ProfileRegistration />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/search" element={<SearchProfile />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/top-profiles" element={<TopProfile />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Menulink;
