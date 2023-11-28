import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/dashboard";
import Orders from "../Orders/orders";
import Instock from "../Instock/instock";
import Sales from "../Sales/sales";
import Users from "../Users/users";
import Box from "@mui/material/Box";


import CssBaseline from "@mui/material/CssBaseline";

import DrawerContainer from "./DrawerContainer";

import AppbarContainer from "./AppbarContainer";


export default function Sidenav() {
  const navigate = useNavigate();
  
  const [open, setOpen] = useState(false);

  const [selectedSection, setSelectedSection] = useState(null);
  const [cardWidth, setCardWidth] = useState({ width: "315px" });
  const handleDrawerOpen = () => {
    setOpen(true);
    setCardWidth({ width: "300px" });
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setCardWidth({ width: "315px" });
  };

  function handleComponent(section) {
    setSelectedSection(section);
  }

  const renderComponent = () => {
    if (selectedSection === "Orders") {
      return <Orders />;
    } else if (selectedSection === "Instock") {
      return <Instock />;
    } else if (selectedSection === "Sales") {
      return <Sales />;
    } else if (selectedSection === "Users") {
      return <Users />;
    }
    // Add similar conditions for other menu items
    else {
      return <Dashboard cardWidth={cardWidth} />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      <AppbarContainer
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleLogout={handleLogout}
      />

      <DrawerContainer
        open={open}
        handleComponent={handleComponent}
        handleDrawerClose={handleDrawerClose}
      />
      {renderComponent()}
    </Box>
  );
}
