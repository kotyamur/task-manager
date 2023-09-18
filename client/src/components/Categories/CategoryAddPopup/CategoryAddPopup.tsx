import * as React from "react";
import { useFormik, FormikHelpers } from "formik";

import { useAppDispatch } from "../../../redux/hooks";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { addCategorySchema } from "../../../helpers/validation";
import { IAddCategoryData } from "../../../types/types";
import { addCategory, fetchUserCategories } from "../../../redux/categories/categoriesOperations";

const initialCategoryValues: IAddCategoryData = {
  name: "",
};

const CategoryAddPopup: React.FC<{
  open: boolean;
  setOpenAddPopup: (open: boolean) => void;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ open,
    handleClose,
    setOpenAddPopup }) => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (
      values: IAddCategoryData,
      { setSubmitting }: FormikHelpers<IAddCategoryData>
    ) => {
      await dispatch(addCategory({ name: values.name }));
      setSubmitting(false);
      setOpenAddPopup(false);
      dispatch(fetchUserCategories());
    };

    const formik = useFormik({
      initialValues: initialCategoryValues,
      validationSchema: addCategorySchema,
      onSubmit: handleSubmit,
    });

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
        onClick={handleClose}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 4,
          textAlign: "center",
          width: 280,
          height: 200,
        }}
      >
        <Typography
          variant="body1"
          gutterBottom
          mb={5}
          sx={{ color: "primary.dark" }}
        >
          Create category
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label="Name"
            variant="outlined"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={formik.isSubmitting}
            >
              save
            </Button>
          </Box>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default CategoryAddPopup;
