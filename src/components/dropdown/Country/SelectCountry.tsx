import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SelectCountryOptions } from "./SelectCountryOptions";

interface SelectCountryProps {
  value: SelectCountryOptions;
  onChange: (value: SelectCountryOptions) => void;
}
const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent<SelectCountryOptions>) => {
    onChange(event.target.value as SelectCountryOptions);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Nationality</InputLabel>
      <Select value={value} onChange={handleChange} name="Nationality" required>
        {Object.values(SelectCountryOptions).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCountry;
