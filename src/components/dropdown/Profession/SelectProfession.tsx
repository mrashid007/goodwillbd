import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SelectProfessionOptions } from "./SelectProfessionOptions";

interface SelectProfessionProps {
  value: SelectProfessionOptions;
  onChange: (value: SelectProfessionOptions) => void;
}

const SelectProfession: React.FC<SelectProfessionProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<SelectProfessionOptions>) => {
    onChange(event.target.value as SelectProfessionOptions);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Profession</InputLabel>
      <Select value={value} onChange={handleChange} name="profession" required>
        {Object.values(SelectProfessionOptions).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectProfession;
