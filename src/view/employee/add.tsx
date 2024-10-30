import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postAPI } from "../../helper/Api";
import { toast } from "react-toastify";

const AddEmployee = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openAddEmployeeForm = () => {
    setOpen(true);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be minimum 2")
      .max(100, "Name must not be more than 100 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    projects: Yup.string().required(),
    designation: Yup.string().required(),
    joiningDate: Yup.date().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      projects: "",
      city: "",
      education: "",
      designation: "",
      joiningDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: Object) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: Object) => {
    postAPI("employees/add", values).then((res) => {
      if (res.data.status === "Success") {
        toast.success(res.data.message);
        handleClose();
      } else {
        toast.error(res.data.message);
      }
    });
  };

  return (
    <div>
      <Button onClick={openAddEmployeeForm}>
        <AddIcon />
        Add Employee
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee Form</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              type="text"
              margin="dense"
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="text"
              margin="dense"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="dense"
              id="projects"
              name="projects"
              label="Projects Assigned"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.projects}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.projects && Boolean(formik.errors.projects)}
              helperText={formik.touched.projects && formik.errors.projects}
            />
            <TextField
              margin="dense"
              id="city"
              name="city"
              label="City"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextField
              margin="dense"
              id="education"
              name="education"
              label="Education"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* Designation field  */}
            <TextField
              margin="dense"
              id="designation"
              name="designation"
              label="Designation"
              type="text"
              fullWidth
              select
              variant="standard"
              value={formik.values.designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.designation && Boolean(formik.errors.designation)
              }
              helperText={
                formik.touched.designation && formik.errors.designation
              }
            >
              <MenuItem value="Software Intern">Software Intern</MenuItem>
              <MenuItem value="Software Engineer">Software Engineer</MenuItem>
              <MenuItem value="Sr. Software Engineer">
                Sr. Software Engineer
              </MenuItem>
              <MenuItem value="Technical Lead">Technical Lead</MenuItem>
              <MenuItem value="Project Manager">Project Manager</MenuItem>
              <MenuItem value="Delivery Head">Delivery Head</MenuItem>
            </TextField>

            <Button type="submit" variant="outlined">
              Close
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddEmployee;
