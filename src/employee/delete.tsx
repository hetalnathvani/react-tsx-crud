import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

export const DeleteEmployee = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box>
      <Tooltip title="Delete">
        <IconButton
          aria-describedby={"aksjklasd"}
          type="button"
          onClick={handleClick}
        >
          <DeleteOutlineOutlinedIcon sx={{ color: red[500] }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} sx={{ textAlign: "center" }}>
        <DialogTitle>
          <ErrorOutlineOutlinedIcon
            sx={{
              color: red[500],
              fontSize: 40,
              background: red[50],
              padding: 2,
              marginTop: 2,
              borderRadius: 10,
            }}
          />
        </DialogTitle>
        <DialogTitle>Remove Employee ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are going to delete this employee. Are you sure ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            No, Keep it.
          </Button>
          <Button variant="contained" color="error">
            Yes, Delete it !
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
