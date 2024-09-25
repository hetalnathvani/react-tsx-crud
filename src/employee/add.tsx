import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FC, useState } from "react";

interface ListProps {
  testProp: String;
}

export const AddEmployee: FC<ListProps> = ({ testProp }): JSX.Element => {
  console.log(testProp);
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
      <Button onClick={openAddEmployeeForm}>
        <AddIcon />
        Add Employee
      </Button>

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
