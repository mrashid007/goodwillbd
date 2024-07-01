import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { EducationalRecord } from "../../models/EducationalRecord";

interface QualificationTableProps {
  qualifications: EducationalRecord[];
}

const EducationalQualificationTable: React.FC<QualificationTableProps> = ({
  qualifications,
}) => {
  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        Educational Qualifications
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Degree</TableCell>
              <TableCell>Institution</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {qualifications.map((qualification, index) => (
              <TableRow key={index}>
                <TableCell>{qualification.degree}</TableCell>
                <TableCell>{qualification.institution}</TableCell>
                <TableCell>{qualification.year}</TableCell>
                <TableCell>{qualification.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EducationalQualificationTable;
