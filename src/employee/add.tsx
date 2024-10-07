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
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";

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

interface OtherProps {
  title?: string;
}

// interface defined for formValues
interface FormValues {
  name: String;
  email: String;
  projects: String;
  city: String;
  education: String;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const InnerForm = (props: FormikProps<FormValues>): JSX.Element => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const openAddEmployeeForm = () => {
    setOpen(true);
  };

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="city"
            name="city"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="education"
            name="education"
            label="Education"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
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

const AddEmployee = withFormik<MyFormProps, FormValues>({
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required!"),
    projects: Yup.string().required("Projects cannot be empty!"),
    city: Yup.string().required("City is required!"),
  }),

  handleSubmit(
    { name, email, projects, city, education }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(name, email);
  },
})(InnerForm);

export default AddEmployee;
