import { useState } from "react";
import React from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const User = React.lazy(() => import("./pages/User"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
      <Route path="*" element={<NotFound code="404" />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/401" element={<ErrorPage code="401" />} />
          <Route path="/404" element={<ErrorPage code="404" />} />
          <Route path="/user" element={<User/>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
