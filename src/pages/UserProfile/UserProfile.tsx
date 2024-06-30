import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";
import ProfilePercentage from "../../components/Profile/ProfilePercentage";
import * as React from "react";

interface ProfileDetailProps {
  profileData: {
    lookingFor: string;
    name: string;
    religion: string;
    casteSocialOrder: string;
    education: string;
    profession: string;
    dateOfBirth: string;
    fatherName: string;
    motherName: string;
    country: string;
    division: string;
    district: string;
    upazilaCity: string;
    village: string;
    location: string;
    residencyStatus: string;
    email: string;
    phoneNo: string;
    guardianPhoneNo: string;
    profilePicturePreview: string | ArrayBuffer | null;
  };
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profileData }) => {
  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 900, margin: "20px auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Avatar
              src={profileData.profilePicturePreview as string}
              alt="Profile"
              sx={{ width: 150, height: 150, marginBottom: 2 }}
            />
            <Typography variant="h4" gutterBottom>
              {profileData.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={3} width="100%">
            <Typography variant="h6" gutterBottom>
              Profile Completed
            </Typography>
            <ProfilePercentage />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Looking For:</strong> {profileData.lookingFor}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Religion:</strong> {profileData.religion}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Caste/Social Order:</strong> {profileData.casteSocialOrder}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Education:</strong> {profileData.education}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Profession:</strong> {profileData.profession}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Date of Birth:</strong> {profileData.dateOfBirth}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Father's Name:</strong> {profileData.fatherName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Mother's Name:</strong> {profileData.motherName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Country:</strong> {profileData.country}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Division:</strong> {profileData.division}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>District:</strong> {profileData.district}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Upazila/City:</strong> {profileData.upazilaCity}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Village:</strong> {profileData.village}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Location:</strong> {profileData.location}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Residency Status:</strong> {profileData.residencyStatus}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Email:</strong> {profileData.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Phone No:</strong> {profileData.phoneNo}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            <strong>Guardian Phone No:</strong> {profileData.guardianPhoneNo}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileDetail;
