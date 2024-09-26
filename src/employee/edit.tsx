import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import { FC, useState } from "react";
import { blue } from "@mui/material/colors";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export type Data = {
  name: string;
  email: string;
  project: string;
  city: string;
  education: string;
};

type ListProps = {
  testProp: String;
  records: Data[];
};

export const EditEmployee: FC<ListProps> = ({
  testProp,
  records,
}): JSX.Element => {
  console.log(testProp);
  console.log(records);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openAddEmployeeForm = () => {
    setOpen(true);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={openAddEmployeeForm}>
          <EditOutlinedIcon style={{ color: blue["600"] }} />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: () => {
            handleSubmit();
          },
        }}
      >
        <DialogTitle>Add Employee Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="project"
            name="project"
            label="Projects Assigned"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="technologies"
            name="technologies"
            label="Technologies"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
