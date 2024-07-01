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
import { ItemName } from "../../models/ItemName";

interface ProfessionTableProps {
  professionItems: ItemName[];
}

const ProfessionTable: React.FC<ProfessionTableProps> = ({
  professionItems,
}) => {
  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        Preferred Profession
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {professionItems.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProfessionTable;
