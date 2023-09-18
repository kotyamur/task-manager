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

export const addTaskSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  dateStart: Yup.date().default(() => new Date()),
  dateEnd: Yup.date().default(() => new Date()),
  description: Yup.string().min(
    2,
    "Description should be of minimum 2 characters length"
  ),
});
