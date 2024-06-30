import { Box, Paper } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import ProfileDetailProps from "../../components/Profile/userProfileProp";

const EditProfile: React.FC<ProfileDetailProps> = ({ profileData }) => {
  console.log(profileData.lookingFor);

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Modify:My Info" value="1" />
              <Tab label="Personal Choice" value="2" />
              <Tab label="Additional Info" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Modify My Info</TabPanel>
          <TabPanel value="2">Personal Choice</TabPanel>
          <TabPanel value="3">Additional Info</TabPanel>
        </TabContext>
      </Box>
    </Paper>
  );
};

export default EditProfile;
