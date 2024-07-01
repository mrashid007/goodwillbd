import React from "react";
import { SelectProfileCreatedByOptions } from "./SelectProfileCreatedByOptions";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectProfileCreatedByProps {
  value: SelectProfileCreatedByOptions;
  onChange: (value: SelectProfileCreatedByOptions) => void;
}

const SelectLookingFor: React.FC<SelectProfileCreatedByProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (
    event: SelectChangeEvent<SelectProfileCreatedByOptions>
  ) => {
    onChange(event.target.value as SelectProfileCreatedByOptions);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Profile Created By</InputLabel>
      <Select value={value} onChange={handleChange} name="lookingFor" required>
        {Object.values(SelectProfileCreatedByOptions).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLookingFor;
