import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
function Users() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      // Parse the stored user data if it exists
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f3f6f9" }}
    >
      <DrawerHeader />
      {user ? (
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              User Profile
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Full Name" secondary={user.name} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Email" secondary={user.email} />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Phone Number" secondary={user.phNo} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      ) : (
        <p>No user data found.</p>
      )}
    </Box>
  );
}

export default Users;
