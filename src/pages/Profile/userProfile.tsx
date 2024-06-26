import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material"; // Import Theme from @mui/styles

import ProfileImage from "./../../assets/react.svg"; // Adjust path to your profile image

// Define styled components with styles
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: "auto",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const UserProfile: React.FC = () => {
  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={2}>
          <Grid item>
            <StyledAvatar alt="User Avatar" src={ProfileImage} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  John Doe
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Web Developer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque.
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default UserProfile;
