import { Button, Dialog } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export const FormDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openAddEmployeeForm = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        onClick={openAddEmployeeForm}
        style={{ backgroundColor: grey["50"], color: grey["800"] }}
      >
        <AddIcon />
        Add Employee
      </Button>

      <Dialog open={open} onClose={handleClose}></Dialog>
    </div>
  );
};
