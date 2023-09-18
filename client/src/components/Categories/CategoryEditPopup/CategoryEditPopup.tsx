import * as React from "react";
import { useFormik, FormikHelpers } from "formik";

import { useAppDispatch } from "../../../redux/hooks";
import { editCategory, fetchUserCategories } from "../../../redux/categories/categoriesOperations";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { addCategorySchema } from "../../../helpers/validation";

const CategoryEditPopup: React.FC<{
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: number;
  categoryName: string;
  setOpenEditPopup: (open: boolean) => void;
  handleActionsClose: () => void;
}> = ({
  open,
  handleClose,
  id,
  categoryName,
  setOpenEditPopup,
  handleActionsClose,
}) => {
  const dispatch = useAppDispatch();
  const initialName = { name: categoryName };

  const handleEditBtnClick = async (
    values: { name: string },
    { setSubmitting }: FormikHelpers<{ name: string }>
  ) => {
    await dispatch(editCategory({ id: id, name: values.name }));
    setSubmitting(false);
    setOpenEditPopup(false);
    dispatch(fetchUserCategories());
    handleActionsClose();
  };

  const formik = useFormik({
    initialValues: initialName,
    validationSchema: addCategorySchema,
    onSubmit: handleEditBtnClick,
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
          Edit "{categoryName}" category
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

export default CategoryEditPopup;
