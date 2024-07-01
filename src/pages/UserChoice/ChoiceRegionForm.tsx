import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { ItemName } from "../../models/ItemName";
import RegionTable from "../../components/choice/RegionTable";

const ChoiceRegionForm: React.FC = () => {
  const [name, setName] = useState("");
  const [regionNames, setRegionNames] = useState<ItemName[]>([]);

  const handleAddRegionName = () => {
    const newRegion: ItemName = {
      name,
    };
    setName("");
    setRegionNames([...regionNames, newRegion]);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Region / District
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddRegionName}
          >
            Add Profession
          </Button>
        </Grid>
      </Grid>
      <RegionTable regionItems={regionNames} />
    </Paper>
  );
};

export default ChoiceRegionForm;
