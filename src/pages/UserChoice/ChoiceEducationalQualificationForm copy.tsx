import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import EducationalQualificationTable from "../../components/Profile/EducationalQualificationTable";

interface Qualification {
  degree: string;
  institution: string;
  year: string;
  result: string;
}

const EducationalQualificationForm: React.FC = () => {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState("");
  const [qualifications, setQualifications] = useState<Qualification[]>([]);

  const handleAddQualification = () => {
    const newQualification: Qualification = {
      degree,
      institution,
      year,
      result,
    };
    setQualifications([...qualifications, newQualification]);
    setDegree("");
    setInstitution("");
    setYear("");
    setResult("");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h2" gutterBottom>
        Add Educational Qualification
      </Typography>
      <Box component={Paper} sx={{ padding: 2, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Institution"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Result"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddQualification}
              disabled={!degree || !institution || !year}
            >
              Add Qualification
            </Button>
          </Grid>
        </Grid>
      </Box>
      <EducationalQualificationTable qualifications={qualifications} />
    </Container>
  );
};

export default EducationalQualificationForm;
