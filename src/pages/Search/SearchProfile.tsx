import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
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

import PreviewIcon from "@mui/icons-material/Preview";

interface SearchFilters {
  keyword: string;
  category: string;
  inStockOnly: boolean;
}

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

const SearchProfile: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    keyword: "",
    category: "",
    inStockOnly: false,
  });
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, keyword: event.target.value });
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setFilters({ ...filters, category: event.target.value });
  };

  const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, inStockOnly: event.target.checked });
  };
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
  const handleSearch = () => {
    // Perform search logic with filters
    console.log(filters);
    setShowResults(true);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Search Filters
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Keyword"
            variant="outlined"
            value={filters.keyword}
            onChange={handleKeywordChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select
              value={filters.category}
              onChange={handleCategoryChange}
              label="Category"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="books">Books</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.inStockOnly}
                onChange={handleInStockChange}
              />
            }
            label="In Stock Only"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
      {showResults && (
        <div style={{ height: 400, marginTop: 20 }}>
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
                {dummyProfiles
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
                          <PreviewIcon />
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
            count={dummyProfiles.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default SearchProfile;
