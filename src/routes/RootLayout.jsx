import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};
