import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { blue, pink } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { FormDialog } from "./formDialog";
import { Title } from "@mui/icons-material";

interface Data {
  name: string;
  project: string;
  city: string;
  education: string;
}

const records: Data[] = [
  {
    name: "Hetal",
    project: "TalentATS",
    city: "Ahmedabad",
    education: "B.E.",
  },
  {
    name: "Daksh",
    project: "Husk",
    city: "Ahmedabad",
    education: "B.E.",
  },
  {
    name: "Akshay",
    project: "SAP",
    city: "Ahmedabad",
    education: "CA",
  },
  {
    name: "Keval",
    project: "Sunrise Detox",
    city: "Ahmedabad",
    education: "M.D.",
  },
];

interface EnhanceTableHeadProps {}

function EnhancedTableHead(props: EnhanceTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Project</TableCell>
        <TableCell>Technologies</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

export const List = () => {
  return (
    <Box sx={{ width: "90%", p: 8 }}>
      <Box sx={{ ml: 4, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Employees listing</Typography>
        <FormDialog />
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
              {records.map((r, index) => (
                <TableRow>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Avatar sx={{ bgcolor: pink[500] }}>
                      {r.name.charAt(0)}
                    </Avatar>
                  </TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.project}</TableCell>
                  <TableCell>{r.city}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon style={{ color: blue["600"] }} />
                    </IconButton>
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
