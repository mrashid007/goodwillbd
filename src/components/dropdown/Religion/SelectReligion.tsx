import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SelectReligionOptions } from "./SelectReligionOptions";

interface SelectReligionProps {
  value: SelectReligionOptions;
  onChange: (value: SelectReligionOptions) => void;
}

const SelectReligion: React.FC<SelectReligionProps> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent<SelectReligionOptions>) => {
    onChange(event.target.value as SelectReligionOptions);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Religion</InputLabel>
      <Select value={value} onChange={handleChange} name="religion" required>
        {Object.values(SelectReligionOptions).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectReligion;
