import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
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
import { FC, useState } from "react";
import { deleteAPI } from "../../helper/Api";
import { toast } from "react-toastify";

type DeleteProps = {
  id: string;
};

export const DeleteEmployee: FC<DeleteProps> = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleSubmit = () => {
    deleteAPI(`employees/delete/${id}`).then((res) => {
      if (res.data.status === "Success") {
        toast.success(res.data.message);
        handleClose();
      } else {
        toast.error(res.data.message);
      }
    });
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
          <Button variant="contained" color="error" onClick={handleSubmit}>
            Yes, Delete it !
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
