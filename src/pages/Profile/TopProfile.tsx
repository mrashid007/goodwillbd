import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Dummy data with profile images
const dummyProfiles = [
  {
    id: 1,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 7,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 8,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 9,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 10,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 11,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 12,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 13,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 14,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 15,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 16,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 17,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 18,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 19,
    name: "John Doe",
    contact: "+1 123 456 7890",
    email: "john.doe@example.com",
    profession: "Software Engineer",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 20,
    name: "Jane Smith",
    contact: "+1 987 654 3210",
    email: "jane.smith@example.com",
    profession: "Graphic Designer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  // Add more dummy profiles as needed
];

const TopProfile: React.FC = () => {
  const [profiles] = useState(dummyProfiles);
  const [filters, setFilters] = useState({
    name: "",
    profession: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, name: event.target.value });
  };

  const handleProfessionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters({ ...filters, profession: event.target.value });
  };

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      profile.profession
        .toLowerCase()
        .includes(filters.profession.toLowerCase())
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Top Profiles
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Search by Name"
            variant="outlined"
            value={filters.name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Search by Profession"
            variant="outlined"
            value={filters.profession}
            onChange={handleProfessionChange}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Profession</TableCell>
              <TableCell>Profile Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProfiles
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell>{profile.name}</TableCell>
                  <TableCell>{profile.contact}</TableCell>
                  <TableCell>{profile.email}</TableCell>
                  <TableCell>{profile.profession}</TableCell>
                  <TableCell>
                    <img
                      src={profile.profileImage}
                      alt={profile.name}
                      style={{ width: 50, borderRadius: "50%" }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      //   onClick={() => handleDeleteProfile(profile.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredProfiles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default TopProfile;
