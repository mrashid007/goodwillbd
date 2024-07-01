import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { ItemName } from "../../models/ItemName";
import ProfessionTable from "../../components/choice/ProfessionTable";

const ChoiceProfessionForm: React.FC = () => {
  const [name, setName] = useState("");
  const [professionNames, setProfessionNames] = useState<ItemName[]>([]);

  const handleAddProfessionName = () => {
    const newProfession: ItemName = {
      name,
    };
    setName("");
    setProfessionNames([...professionNames, newProfession]);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Professions
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
            onClick={handleAddProfessionName}
          >
            Add Profession
          </Button>
        </Grid>
      </Grid>
      <ProfessionTable professionItems={professionNames} />
    </Paper>
  );
};

export default ChoiceProfessionForm;
