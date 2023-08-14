import React from "react";
import { Box, Typography, styled } from "@mui/material";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
function Users() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f3f6f9" }}
    >
      <DrawerHeader />
      <Typography>Users</Typography>
    </Box>
  );
}

export default Users;
