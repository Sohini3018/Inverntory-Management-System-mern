import React from "react";
import backgroundImage from "../Assets/Login page image.png";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Component = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin: 0 5px;
`;

const FormComponent = styled(Box)`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
`;

const Heading = styled(Typography)`
  font-size: 24px;
`;

const Tagline = styled(Typography)`
  font-size: 20px;
`;

const ImageComponent = styled("img")({
  width: "830px",
  height: "700px",
});

function login() {
  return (
    <Component>
      <FormComponent>
        <Heading variant="h1">Login</Heading>
        <Tagline variant="h6">See Your Growth and Get Support!</Tagline>

        <Button type="submit" variant="outlined">
          Sign in with Google
        </Button>

        <TextField type="email" label="Email" variant="outlined" />
        <TextField type="password" label="Password" variant="outlined" />
        <Button type="submit" variant="contained">
          Login
        </Button>

        <Typography>Not registered yet? Create a new account</Typography>
      </FormComponent>

      <ImageComponent
        src={backgroundImage}
        alt="Login Background"
        className="login-image"
      />
    </Component>
  );
}

export default login;
