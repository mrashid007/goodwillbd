import React from "react";
import { SelectLookingForOptions } from "./SelectLookingForOptions";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface SelectLookingForProps {
  value: SelectLookingForOptions;
  onChange: (value: SelectLookingForOptions) => void;
}

const SelectLookingFor: React.FC<SelectLookingForProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent<SelectLookingForOptions>) => {
    onChange(event.target.value as SelectLookingForOptions);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Looking For</InputLabel>
      <Select value={value} onChange={handleChange} name="lookingFor" required>
        {Object.values(SelectLookingForOptions).map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLookingFor;
