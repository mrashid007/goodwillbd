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

interface RegionTableTableProps {
  regionItems: ItemName[];
}

const RegionTable: React.FC<RegionTableTableProps> = ({ regionItems }) => {
  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        Preferred Region / District
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regionItems.map((member, index) => (
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

export default RegionTable;
