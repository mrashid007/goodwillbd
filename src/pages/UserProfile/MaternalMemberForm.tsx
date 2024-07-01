import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { FamilyMember } from "../../models/FamilyMember";
import MaternalMemberTable from "../../components/Profile/MaternalMemberTable";

const MaternalMemberForm: React.FC = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [sequence, setSequence] = useState(0);
  const [maternalMembers, setMaternalMembers] = useState<FamilyMember[]>([]);

  const handleAddMaternalMember = () => {
    const newFamilyMember: FamilyMember = {
      name,
      relation,
      occupation,
      education,
      sequence,
    };
    setName("");
    setRelation("");
    setOccupation("");
    setEducation("");
    setSequence(0);
    setMaternalMembers([...maternalMembers, newFamilyMember]);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Maternal Relatives
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Relationship"
            name="relationship"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Occupation"
            name="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddMaternalMember}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <MaternalMemberTable maternalMember={maternalMembers} />
    </Paper>
  );
};

export default MaternalMemberForm;
