import * as Yup from "yup";

export const registerLoginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, 'Password should be of minimum 6 characters length')
    .max(10, "Password is too long. Maximal length is 10 symbols.")
    .required('Password is required'),
});

export const addCategorySchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
});

// validationSchema: Yup.object({
//   firstName: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Required"),
//   lastName: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .required("Required"),
//   email: Yup.string().email("Invalid email address").required("Required"),
// });
