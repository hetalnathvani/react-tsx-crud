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
import "./employee.css";

interface EnhanceTableHeadProps {}

function EnhancedTableHead(props: EnhanceTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name & Designation</TableCell>
        <TableCell>Reporting To</TableCell>
        <TableCell>In Org. Since</TableCell>
        <TableCell>Experience</TableCell>
        <TableCell>Technical Skills</TableCell>
        <TableCell>Status</TableCell>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Employees listing
        </Typography>
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
                  <TableCell sx={{ display: "flex", gap: "10px" }}>
                    <Avatar sx={{ bgcolor: pink[500] }}>
                      {r.name.charAt(0)}
                    </Avatar>
                    <div className="d-flex flex-direction-column">
                      <strong>{r.name}</strong>
                      <label className="sub-title">{r.designation}</label>
                    </div>
                  </TableCell>
                  <TableCell>Indrajeet Sengar</TableCell>
                  <TableCell>2.5 yrs</TableCell>
                  <TableCell>5 yrs</TableCell>
                  <TableCell>JavaScript, React.js</TableCell>
                  <TableCell>Available</TableCell>
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
