import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FamilyMember } from "../../models/FamilyMember";

interface PaternalMemberTableProps {
  paternalMembers: FamilyMember[];
}

const PaternalMemberTable: React.FC<PaternalMemberTableProps> = ({
  paternalMembers,
}) => {
  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        Paternal Relatives
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Relation</TableCell>
              <TableCell>Occupation</TableCell>
              <TableCell>Education</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paternalMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.relation}</TableCell>
                <TableCell>{member.occupation}</TableCell>
                <TableCell>{member.education}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PaternalMemberTable;
