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
} from "@mui/material";

interface SearchFilters {
  keyword: string;
  category: string;
  inStockOnly: boolean;
}

const SearchProfile: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    keyword: "",
    category: "",
    inStockOnly: false,
  });

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, keyword: event.target.value });
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setFilters({ ...filters, category: event.target.value });
  };

  const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, inStockOnly: event.target.checked });
  };

  const handleSearch = () => {
    // Perform search logic with filters
    console.log(filters);
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
    </div>
  );
};

export default SearchProfile;
