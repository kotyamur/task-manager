import { FC, useEffect } from "react";

import { useSelector } from "react-redux";
import { selectCategories } from "../../../redux/categories/categoriesSelectors";
import { fetchUserCategories } from "../../../redux/categories/categoriesOperations";
import { useAppDispatch } from "../../../redux/hooks";

import List from "@mui/material/List";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchUserCategories());
  }, [dispatch]);

  return (
    <List>
      {categories.map(({ id, dateCreated, name, tasks }) => {
        return <CategoryItem key={id} id={id} dateCreated={dateCreated} name={name} tasks={tasks} />;
      })}
    </List>
  );
};

export default CategoryList;
