import {
  Avatar,
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
import { pink } from "@mui/material/colors";
import AddEmployee from "./add";
import { DeleteEmployee } from "./delete";
import { EditEmployee } from "./edit";
import { useEffect, useState } from "react";
import { getAPI } from "../../helper/Api";

interface EnhanceTableHeadProps {}

function EnhancedTableHead(props: EnhanceTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Project</TableCell>
        <TableCell>City</TableCell>
        <TableCell>Education</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

export const EmployeeList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getAPI("employees", "").then((res) => {
      setData(res.data.data);
    });
  };

  return (
    <Box>
      <Box sx={{ ml: 4, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Employees listing</Typography>
        <AddEmployee />
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
                  <TableCell>
                    <Avatar sx={{ bgcolor: pink[500] }}>
                      {r.name.charAt(0)}
                    </Avatar>
                  </TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.email}</TableCell>
                  <TableCell>{r.projects}</TableCell>
                  <TableCell>{r.city}</TableCell>
                  <TableCell>{r.education}</TableCell>
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
