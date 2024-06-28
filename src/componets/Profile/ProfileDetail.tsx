import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

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
      style={{ padding: 20, maxWidth: 800, margin: "20px auto" }}
    >
      <Typography variant="h4" gutterBottom>
        Profile Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Looking For: {profileData.lookingFor}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Name: {profileData.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Religion: {profileData.religion}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Caste/Social Order: {profileData.casteSocialOrder}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Education: {profileData.education}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Profession: {profileData.profession}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Date of Birth: {profileData.dateOfBirth}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Father's Name: {profileData.fatherName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Mother's Name: {profileData.motherName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Country: {profileData.country}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Division: {profileData.division}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            District: {profileData.district}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Upazila/City: {profileData.upazilaCity}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Village: {profileData.village}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Location: {profileData.location}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Residency Status: {profileData.residencyStatus}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Email: {profileData.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Phone No: {profileData.phoneNo}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Guardian Phone No: {profileData.guardianPhoneNo}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            <img
              src={profileData.profilePicturePreview as string}
              alt="Profile"
              style={{ width: "400px", height: "400px", objectFit: "cover" }}
            />
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileDetail;
