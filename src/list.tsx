import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";

interface Data {
  name: string;
  city: string;
  education: string;
}

const records: Data[] = [
  {
    name: "Hetal",
    city: "Ahmedabad",
    education: "B.E.",
  },
  {
    name: "Jayani",
    city: "Ahmedabad",
    education: "B.E.",
  },
  {
    name: "Akshay",
    city: "Ahmedabad",
    education: "CA",
  },
  {
    name: "Keval",
    city: "Ahmedabad",
    education: "M.D.",
  },
];

export const List = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>City</td>
            <td>Education</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {records.map((r, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{r.name}</td>
              <td>{r.city}</td>
              <td>{r.education}</td>
              <td>
                <IconButton>
                  <EditIcon style={{ color: grey["50"] }} />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
