import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SelectLookingFor from "../../components/dropdown/LookingFor/SelectLookingFor";
import { SelectLookingForOptions } from "../../components/dropdown/LookingFor/SelectLookingForOptions";
import SelectProfileCreatedBy from "../../components/dropdown/ProfileCreatedBy/SelectProfileCreatedBy";
import { SelectProfileCreatedByOptions } from "../../components/dropdown/ProfileCreatedBy/SelectProfileCreatedByOptions";
import { SelectProfessionOptions } from "../../components/dropdown/Profession/SelectProfessionOptions";
import SelectProfession from "../../components/dropdown/Profession/SelectProfession";
import { SelectReligionOptions } from "../../components/dropdown/Religion/SelectReligionOptions";
import SelectReligion from "../../components/dropdown/Religion/SelectReligion";
import { SelectCountryOptions } from "../../components/dropdown/Country/SelectCountryOptions";
import SelectCountry from "../../components/dropdown/Country/SelectCountry";
// import SelectLookingFor from "../../components/dropdown/LookingFor/SelectLookingFor";
// import { SelectLookingForOptions } from "../../components/dropdown/LookingFor/SelectLookingForOptions";

const ProfileRegistration: React.FC = () => {
  const [formValues, setFormValues] = useState({
    lookingFor: "",
    name: "",
    religion: "",
    casteSocialOrder: "",
    profession: "",
    dateOfBirth: "",
    fatherName: "",
    motherName: "",
    country: "",
    division: "",
    district: "",
    upazilaCity: "",
    village: "",
    location: "",
    residencyStatus: "",
    email: "",
    confirmEmail: "",
    phoneNo: "",
    guardianPhoneNo: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
    profilePicture: null as File | null,
    profilePicturePreview: "" as string | ArrayBuffer | null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [profileCreateBy, setProfileCreateBy] =
    useState<SelectProfileCreatedByOptions>(SelectProfileCreatedByOptions.Self);

  const handleProfileCreatedBySelectChange = (
    value: SelectProfileCreatedByOptions
  ) => {
    setProfileCreateBy(value);
  };

  const [lookingFor, setLookingFor] = useState<SelectLookingForOptions>(
    SelectLookingForOptions.Select
  );

  const handlelookingForSelectChange = (value: SelectLookingForOptions) => {
    setLookingFor(value);
  };

  const [profession, setProfession] = useState<SelectProfessionOptions>(
    SelectProfessionOptions.Select
  );

  const handleProfessionSelectChange = (value: SelectProfessionOptions) => {
    setProfession(value);
  };

  const [religion, setReligion] = useState<SelectReligionOptions>(
    SelectReligionOptions.Select
  );

  const handleReligionSelectChange = (value: SelectReligionOptions) => {
    setReligion(value);
  };

  const [nationality, setNationality] = useState<SelectCountryOptions>(
    SelectCountryOptions.Bangladesh
  );

  const handleNationalitySelectChange = (value: SelectCountryOptions) => {
    setNationality(value);
  };

  const [presentCountry, setSetPresentCountry] = useState<SelectCountryOptions>(
    SelectCountryOptions.Bangladesh
  );

  const handlePresentCountrySelectChange = (value: SelectCountryOptions) => {
    setSetPresentCountry(value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormValues({
          ...formValues,
          profilePicture: file,
          profilePicturePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFormValues({
        ...formValues,
        profilePicture: null,
        profilePicturePreview: null,
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formValues);
    // Reset form after submission if needed
    // setFormValues({ ...initialValues });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Profile Registration
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SelectProfileCreatedBy
                value={profileCreateBy}
                onChange={handleProfileCreatedBySelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectLookingFor
                value={lookingFor}
                onChange={handlelookingForSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectProfession
                value={profession}
                onChange={handleProfessionSelectChange}
              />
              {/* <TextField
                fullWidth
                label="Profession"
                name="profession"
                value={profession}
                onChange={handleProfessionSelectChange}
                required
              /> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectReligion
                value={religion}
                onChange={handleReligionSelectChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Caste-Social Order</InputLabel>
                <Select
                  value={formValues.casteSocialOrder}
                  //onChange={handleSelectChange}
                  name="casteSocialOrder"
                  required
                >
                  {/* Options dependent on religion */}
                  {/* Example: For testing purpose, assuming basic options */}
                  {formValues.religion === "Islam" ? (
                    <>
                      <MenuItem value="Sunni">Sunni</MenuItem>
                      <MenuItem value="Shia">Shia</MenuItem>
                    </>
                  ) : formValues.religion === "Christianity" ? (
                    <>
                      <MenuItem value="Catholic">Catholic</MenuItem>
                      <MenuItem value="Protestant">Protestant</MenuItem>
                    </>
                  ) : (
                    <MenuItem value="Other">Other</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                name="dateOfBirth"
                value={formValues.dateOfBirth}
                onChange={handleInputChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Father's Name"
                name="fatherName"
                value={formValues.fatherName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mother's Name"
                name="motherName"
                value={formValues.motherName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectCountry
                value={nationality}
                onChange={handleNationalitySelectChange}
              />
            </Grid>
          </Grid>
          <Divider
            textAlign="center"
            variant="middle"
            sx={{
              margin: "20px",
              padding: "10px 0",
            }}
          >
            <Chip
              label="Present Address"
              size="medium"
              sx={{
                backgroundColor: "#32a89e",
              }}
            />
          </Divider>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SelectCountry
                value={presentCountry}
                onChange={handlePresentCountrySelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Division"
                name="division"
                value={formValues.division}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="District"
                name="district"
                value={formValues.district}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Upazila/City"
                name="upazilaCity"
                value={formValues.upazilaCity}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Village"
                name="village"
                value={formValues.village}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formValues.location}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Residency Status</InputLabel>
                <Select
                  value={formValues.residencyStatus}
                  //onChange={handleSelectChange}
                  name="residencyStatus"
                  required
                >
                  <MenuItem value="Citizen">Citizen</MenuItem>
                  <MenuItem value="Permanent Resident">
                    Permanent Resident
                  </MenuItem>
                  <MenuItem value="Temporary Resident">
                    Temporary Resident
                  </MenuItem>
                  <MenuItem value="Student Visa">Student Visa</MenuItem>
                  <MenuItem value="Work Visa">Work Visa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="email"
                label="Confirm Email"
                name="confirmEmail"
                value={formValues.confirmEmail}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="tel"
                label="Phone No"
                name="phoneNo"
                value={formValues.phoneNo}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="tel"
                label="Guardian Phone No"
                name="guardianPhoneNo"
                value={formValues.guardianPhoneNo}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formValues.termsAgreed}
                    onChange={handleCheckboxChange}
                    name="termsAgreed"
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-picture-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="profile-picture-upload">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
                Upload Profile Picture
              </label>
              {formValues.profilePicturePreview && (
                <img
                  src={formValues.profilePicturePreview as string}
                  alt="Profile Preview"
                  style={{
                    maxWidth: "100%",
                    height: "100px",
                    marginTop: "10px",
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!formValues.termsAgreed}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ProfileRegistration;
