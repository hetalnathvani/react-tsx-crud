import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAPI } from "../../helper/Api";
import { EditEmployee } from "../employee/edit";
import { DeleteEmployee } from "../employee/delete";
import AddProject from "./add";

interface EnhanceTableHeadProps {}

function EnhancedTableHead(props: EnhanceTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Client Name</TableCell>
        <TableCell>Start Date</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

export const ProjectList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getAPI("projects", "").then((res) => {
      setData(res.data.data);
    });
  };

  return (
    <Box>
      <Box sx={{ ml: 4, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Projects listing</Typography>
        <AddProject />
      </Box>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead />
            <TableBody>
              {data?.map((r, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.clientName}</TableCell>
                  <TableCell>{r.startDate}</TableCell>
                  <TableCell>{r.status}</TableCell>
                  <TableCell sx={{ display: "flex" }}>
                    <EditEmployee record={r} />
                    <DeleteEmployee id={r._id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
