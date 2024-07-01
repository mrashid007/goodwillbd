import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import FamilyMemberTable from "../../components/Profile/FamilyMemberTable";
import { FamilyMember } from "../../models/FamilyMember";

const FamilyMemberForm: React.FC = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [sequence, setSequence] = useState(0);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);

  const handleAddFamilyMember = () => {
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
    setFamilyMembers([...familyMembers, newFamilyMember]);
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Member
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
            onClick={handleAddFamilyMember}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <FamilyMemberTable familyMembers={familyMembers} />
    </Paper>
  );
};

export default FamilyMemberForm;
