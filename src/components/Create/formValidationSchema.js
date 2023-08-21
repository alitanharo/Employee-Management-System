import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  birthDate: yup.date().typeError("Invalid date format").required("Required"),
  status: yup
    .string()
    .oneOf(["ACTIVE", "LEAVE_OF_ABSENCE", "TERMINATED"], "Invalid status")
    .required("Required"),
  jobTitle: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
});

export default formValidationSchema;
