import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../components/SharedLayout";

const Home = lazy(() => import("../pages/HomePage"));
const Register = lazy(() => import("../pages/RegisterPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Categories = lazy(() => import("../pages/CategoriesPage"));
const Tasks = lazy(() => import("../pages/TasksPage"));
const Task = lazy(() => import("../pages/TaskPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task" element={<Task />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
