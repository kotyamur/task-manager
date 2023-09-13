import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "../pages/Categories";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import Task from "../pages/Task";
import ErrorPage from "../pages/ErrorPage";

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task" element={<Task />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  );
};

export default AppRouter;
