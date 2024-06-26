import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const SignIn: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    // Here you can implement your login logic, e.g., API calls, authentication
    console.log("Email:", email, "Password:", password);
    // After successful login, you can redirect user to another page
    // For now, let's just log in and stay on the same page
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h2" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
