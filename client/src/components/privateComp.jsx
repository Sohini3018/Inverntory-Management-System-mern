import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function privateComp() {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/" />;
  // if localStorage has user signup data then redirect to Outlet that is dashboard.
}

export default privateComp;
